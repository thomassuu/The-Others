/*=============================================================================*\
 * CTB EventTriggerEventMV
 * By CT_Bolt
 * CTB_EventTriggerEventMV.js
 * Version: 1.00
 * Terms of Use:
 *  Free for commercial or non-commercial use
 *
/*=============================================================================*/
var CTB = CTB || {}; CTB.EventTriggerEventMV  = CTB.EventTriggerEventMV || {};
var Imported = Imported || {}; Imported["CT_Bolt EventTriggerEventMV"] = 1.00;
//=============================================================================//

/*:
 * @plugindesc v1.00 CT_Bolt's EventTriggerEventMV Plugin
 * @author CT_Bolt
 * @desc Allows Events to Run Code When Touches Other Events
 *
 * @help
 * CT_Bolt's EventTriggerEventMV
 * Version 1.00
 * CT_Bolt
 *
 * More specifically this runs code when one event "touches" another event
 * 
 * Place this plugin below if using this with MOG_PickupThrow
 * I did have to overwrite Game_CharacterBase.prototype.canPassThrow to allow for targetEvents
 *
 * Setup:
 *   Place the following notetag into an events notebox:
 *     <eTrigger:true>
 *   This can also be javascript such as: <eTrigger:$gameSwitches.value(1)>
 *   That will only have the Event Trigger the "Event_Trigger" code if switch 1 is on
 *
 * After placing the notetag then use the following comment setup: Event_Trigger: < ***javascript code goes here*** />
 * Some very basic examples would be like the following:
 *
 * Example #1:
 *
 *   Event_Trigger: <
 *     $gameMap.eventsXyNt(x, y).forEach(function(event) {
 *       event._triggeredBy = this;
 *       $gameSelfSwitches.setValue([$gameMap._mapId, event._eventId, 'B'],true);
 *     },this);
 *   />
 *
 *  The above code cycles though each events that is touched that are not using the "through" setting
 *  It then assigns the event that is calling the code to the property "_triggeredBy" to the event
 *  Then it turns on Self Switch "B" of that event
 *
 * Example #2:
 * 
 *   Event_Trigger: <
 *     $gameMap.eventsXyNt(x, y).forEach(function(event) {
 *     if ($dataMap.events[event._eventId].meta.targetEvent){
 *       $gameSelfSwitches.setValue([$gameMap._mapId, event._eventId, 'B'],true);
 *     };
 *   });/>
 *
 *  The above code cycles though each events that is touched that are not using the "through" setting
 *  If the "touched" event has a meta tag "targetEvent" then it turns on Self Switch "B" of that event
 *  again this is only if it has the meta tag "targetEvent", like this <targetEvent:true> in the notebox
 * 
 *
 */
//=============================================================================
//=============================================================================

"use strict";
(function ($_$) {
    function getPluginParameters() {var a = document.currentScript || (function() { var b = document.getElementsByTagName('script'); return b[b.length - 1]; })(); return PluginManager.parameters(a.src.substring((a.src.lastIndexOf('/') + 1), a.src.indexOf('.js')));} $_$.params = getPluginParameters();
	
	// New
	Game_Event.prototype.checkEventTriggerEventTouch = function(x, y) {
		this.updateCheckEventTriggered();
		if (this['Event_Trigger']){
			console.log($gameMap.eventsXyNt(x, y));
			if ($gameMap.eventsXyNt(x, y)[0]){
				eval(this['Event_Trigger']);
			};
		};
	};

	// Alias
	$_$['Game_CharacterBase.prototype.updateJump'] = Game_CharacterBase.prototype.updateJump;	
	Game_CharacterBase.prototype.updateJump = function() {
		$_$['Game_CharacterBase.prototype.updateJump'].apply(this, arguments);
		if (this.constructor.name === 'Game_Event') {
			if (this._jumpCount === 0) {
				this.checkEventTriggerEventTouch(this._x,this._y);
			};
		};
	};
	
	// Alias
	$_$['Game_Event.prototype.moveStraight'] = Game_Event.prototype.moveStraight;
	Game_Event.prototype.moveStraight = function(d) {
		$_$['Game_Event.prototype.moveStraight'].apply(this, arguments);
		//this.setMovementSuccess(this.canPass(this._x, this._y, d));
		if (this.isMovementSucceeded()) {

		} else {
			this.checkEventTriggerEventTouchFront(d);
		}
	};
	
	// New
	Game_Event.prototype.checkEventTriggerEventTouchFront = function(d) {
		var x2 = $gameMap.roundXWithDirection(this._x, d);
		var y2 = $gameMap.roundYWithDirection(this._y, d);
		this.checkEventTriggerEventTouch(x2, y2);
	};
	
	// New
	Game_CharacterBase.prototype.updateCheckEventTriggered = function() {
		if (this.constructor.name === 'Game_Event') {
			if ($dataMap.events[this._eventId].meta.eTrigger){
				if (eval($dataMap.events[this._eventId].meta.eTrigger)){
					var comment = 'Event_Trigger';
					this.readCommentMV(comment);
				};
			};
		};
	};	
	
	// New
	Game_CharacterBase.prototype.readCommentMV = function(tag, ev) {
		if (tag){
			var RX = new RegExp('('+tag+': \\<([\\s\\S]*)\\/>)');			
			ev = ev || this;
			var fullComment = '';
			var data = ev.list().filter(function(c) {return c.code === 108 || c.code === 408;}).map(function(c) {			  
				fullComment = fullComment + c.parameters[0];
			});
			var match = RX.exec(fullComment);
			data = match ? match[1] : '';
			if (data){
				data = data.replace(tag + ': <','');
				data = data.substring(0,data.length-2);
			};
			ev[tag] = data;
		};
	};
	
	//--- Stuff for MOG_PickupThrow
	
	// New
	Game_CharacterBase.prototype.isCollidedWithNonTargetEvents = function(x, y) {
		var events = $gameMap.eventsXyNt(x, y);
		return events.some(function(event) {
			return event.isNormalPriority() && !$dataMap.events[event._eventId].meta.targetEvent;
		});
	};
	
	// Alias
	$_$['Game_Event.prototype.pickUp'] = Game_Event.prototype.pickUp;
	Game_Event.prototype.pickUp = function() {
		$_$['Game_Event.prototype.pickUp'].apply(this, arguments);
		$gamePlayer._pickup.event = this;
	};
	
	// Overwrite
	Game_CharacterBase.prototype.canPassThrow = function(x, y, d, noPassTerrainTag) {
		var x2 = $gameMap.roundXWithDirection(x, d);
		var y2 = $gameMap.roundYWithDirection(y, d);
		if (d === 2) {x3 = x; y3 = y + 1;	
		} else if (d === 4) {x3 = x - 1;y3 = y;		
		} else if (d === 6) {x3 = x + 1;y3 = y;	
		} else {x3 = x;y3 = y - 1;
		};
		if (!$gameMap.isValid(x2, y2)) {
			return false;
		};
		if (this.isThrough() || this.isDebugThrough()) {
			return true;
		};
		if (!$gameMap.isPassable(x3, y3)) {
			return false;
		};
		
		if (this.isCollidedWithNonTargetEvents(x2, y2)) {	
			return false;
		};
		
		if (noPassTerrainTag){
			if($gameMap.terrainTag(x,y)===noPassTerrainTag){
				return false;
			};
			if($gameMap.terrainTag(x2,y2)===noPassTerrainTag){
				return false;
			};
			if($gameMap.terrainTag(x3,y3)===noPassTerrainTag){
				return false;
			};
		};
		
		return true;
	};

})(CTB.EventTriggerEventMV);