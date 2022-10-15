//==============================================================================================================
//--------------------------------------------------------------------------------------------------------------
// *** MUSHROOMCAKE28'S  LAUCH SCENE OPENING
//  * Author: MushroomCake28
//  * Contact: last.truong@hotmail.com
//  * Version: 1.02 (2017-04-22) 
//  * File Name: $MUSH_LauchSceneOpening_P1.js
//--------------------------------------------------------------------------------------------------------------
// * INFO :  This script adds up to 2 additional scene when you lanch the game where you can put text or images
//           with or with no background. After those 2 scenes, it will jump to an opening scene (video) that you
//           will be able to skip by pressing any keys from RPG Maker.
// * TERMS : This script is part of the MushroomCake Public first generation scripts. It can be used by anyone
//           for free and commercials games without requesting my permission. You just need to credit me
//           (MushroomCake28), and please be generous if I request a copy of your game ;) 
// * USAGE : Save as a javascript file (.js at the end) if it's not already a js file and insert it anywhere
//           in the plugin manager. Use the file name at the top of the script. 
//--------------------------------------------------------------------------------------------------------------
// INFORMATION ON FUNCTIONALITY
// * This script will be referred as 'LSO' in the code for 'Launch Scene Opening'.
// * For images, place them in the 'img/system folder'.
// * For the opening, place the video in the 'movies' folder. It must be a supported video format.
// * Note: to debug the skip movie, place a video in your 'movie folder' named exactly 'MovieDebug.webmhd'.
//--------------------------------------------------------------------------------------------------------------
// UPDATES HISTORY
// * v.1.01: finished 2017-04-22
// * v.1.02: finished 2017-04-25 
//   - Fixed Sprite display bug
//   - Added item position in the parameters. 
//--------------------------------------------------------------------------------------------------------------
// SECTIONS
// * Section 1: Scenes 
//   - 1.0 : Scene Boot (go to LSO scene instead of Title)
//   - 1.1 : Scene LSO
//==============================================================================================================
// *** PLUGIN PARAMETERS
/*:
* 
* @plugindesc [v.1.02] Adds 2 scenes on launch and a opening.
* @author MushroomCake28
* @help Insert anywhere and activate it for it to work.
*
* For images, place them in the 'img/system folder'.
* For the opening, place the video in the 'movies' folder. It must be a supported 
* video format.
*
* Note: to debug the skip movie, place a video in your 'movie folder' named 
* exactly 'MovieDebug.webmhd' (without the apostrophe).
*
* @param ---------------------
* @desc 
* @default 
*
* @param Scene 1
* @desc Set to 'true' if you want the Scene 1 to appear on launch
* @default true
*
* @param Scene 1 Top Type
* @desc Set to 'none' for nothing, 'text' for some text and 'image' for an image.
* @default none
*
* @param Scene 1 Top Info
* @desc Type the text that will appear or the filename of the image, depending on your previous parameter.
* @default none
*
* @param Scene 1 Top Position
* @desc Set the position where it will appear on screen.
* Syntax: [x, y]. Nothing = default centered
* @default 
*
* @param Scene 1 Mid Type
* @desc Set to 'none' for nothing, 'text' for some text and 'image' for an image.
* @default text
*
* @param Scene 1 Mid Info
* @desc Type the text that will appear or the filename of the image, depending on your previous parameter.
* @default MushroomCake28 presents
*
* @param Scene 1 Mid Position
* @desc Set the position where it will appear on screen.
* Syntax: [x, y]. Nothing = default centered
* @default 
*
* @param Scene 1 Low Type
* @desc Set to 'none' for nothing, 'text' for some text and 'image' for an image.
* @default none
*
* @param Scene 1 Low Info
* @desc Type the text that will appear or the filename of the image, depending on your previous parameter.
* @default none
*
* @param Scene 1 Low Position
* @desc Set the position where it will appear on screen.
* Syntax: [x, y]. Nothing = default centered
* @default
*
* @param Scene 1 Background
* @desc Set to background image filename. Place the image in the 'img/system' folder.
* @default none
*
* @param Scene 1 Back Stretch
* @desc Set to 'true' to stretch the background to the game window's size.
* @default false
*
* @param Scene 1 Fade Time
* @desc Set number of frames for the scene's fade in and fade out.
* @default 120
*
* @param Scene 1 Text Fade
* @desc Set the number of frames it takes for the text to appear. Text will appear from top to down.
* @default 90
*
* @param Scene 1 Wait Message
* @desc After each item, set the number of frames to wait before going to the next item
* @default 5
*
* @param Scene 1 Wait
* @desc After everything shows up, set the number of frames before going to the next scene
* @default 180
*
* @param Scene 1 Input Skip
* @desc Set to 'true' if the player can skip it by pressing any RPG Maker inputs.
* @default true
*
* @param ---------------------
* @desc 
* @default 
*
* @param Scene 2
* @desc Set to 'true' if you want the Scene 2 to appear on launch
* @default true
*
* @param Scene 2 Top Type
* @desc Set to 'none' for nothing, 'text' for some text and 'image' for an image.
* @default none
*
* @param Scene 2 Top Info
* @desc Type the text that will appear or the filename of the image, depending on your previous parameter.
* @default none
*
* @param Scene 2 Top Position
* @desc Set the position where it will appear on screen.
* Syntax: [x, y]. Nothing = default centered
* @default
*
* @param Scene 2 Mid Type
* @desc Set to 'none' for nothing, 'text' for some text and 'image' for an image.
* @default text
*
* @param Scene 2 Mid Info
* @desc Type the text that will appear or the filename of the image, depending on your previous parameter.
* @default The Launch Scene Opening Plugin
*
* @param Scene 2 Mid Position
* @desc Set the position where it will appear on screen.
* Syntax: [x, y]. Nothing = default centered
* @default
*
* @param Scene 2 Low Type
* @desc Set to 'none' for nothing, 'text' for some text and 'image' for an image.
* @default text
*
* @param Scene 2 Low Info
* @desc Type the text that will appear or the filename of the image, depending on your previous parameter.
* @default (version 1.02)
*
* @param Scene 2 Low Position
* @desc Set the position where it will appear on screen.
* Syntax: [x, y]. Nothing = default centered
* @default
*
* @param Scene 2 Background
* @desc Set to background image filename. Place the image in the 'img/system' folder.
* @default none
*
* @param Scene 2 Back Stretch
* @desc Set to 'true' to stretch the background to the game window's size.
* @default false
*
* @param Scene 2 Fade Time
* @desc Set number of frames for the scene's fade in and fade out.
* @default 60
*
* @param Scene 2 Text Fade
* @desc Set the number of frames it takes for the text to appear. Text will appear from top to down.
* @default 60
*
* @param Scene 2 Wait Message
* @desc After each item, set the number of frames to wait before going to the next item
* @default 60
*
* @param Scene 2 Wait
* @desc After everything shows up, set the number of frames before going to the next scene
* @default 300
*
* @param Scene 2 Input Skip
* @desc Set to 'true' if the player can skip it by pressing any RPG Maker inputs.
* @default true
*
* @param ---------------------
* @desc 
* @default 
*
* @param Scene Op
* @desc Set to 'true' if you want to have a opening scene
* @default false
*
* @param Scene Op Movie
* @desc Set the video's filename. Place the video in the 'movies' folder. Must be a supported format.
* @default none
*
* @param Scene Op Input Skip
* @desc Set to 'true' if the player can skip it by pressing any RPG Maker inputs.
* @default true
*/
//==============================================================================================================

var Imported = Imported || {};
Imported.mushFeatures = Imported.mushFeatures || {}; 
Imported.mushFeatures['LaunchSceneOpening_P1'] = 1.02;

var $mushFeatures = $mushFeatures || { 'imported': {}, 'params': {} };
$mushFeatures.imported['LaunchSceneOpening_P1'] = 1.02;

var nowParameters = PluginManager.parameters('$MUSH_LaunchSceneOpening_P1');
$mushFeatures.params['LSO_Scene1']            = eval(nowParameters['Scene 1']);
$mushFeatures.params['LSO_Scene1TopType']     = String(nowParameters['Scene 1 Top Type']);
$mushFeatures.params['LSO_Scene1TopInfo']     = String(nowParameters['Scene 1 Top Info']);
$mushFeatures.params['LSO_Scene1TopPosition'] = eval(nowParameters['Scene 1 Top Position']);
$mushFeatures.params['LSO_Scene1MidType']     = String(nowParameters['Scene 1 Mid Type']);
$mushFeatures.params['LSO_Scene1MidInfo']     = String(nowParameters['Scene 1 Mid Info']);
$mushFeatures.params['LSO_Scene1MidPosition'] = eval(nowParameters['Scene 1 Mid Position']);
$mushFeatures.params['LSO_Scene1LowType']     = String(nowParameters['Scene 1 Low Type']);
$mushFeatures.params['LSO_Scene1LowInfo']     = String(nowParameters['Scene 1 Low Info']);
$mushFeatures.params['LSO_Scene1LowPosition'] = eval(nowParameters['Scene 1 Low Position']);
$mushFeatures.params['LSO_Scene1Background']  = String(nowParameters['Scene 1 Background']);
$mushFeatures.params['LSO_Scene1BackStretch'] = eval(nowParameters['Scene 1 Back Stretch']);
$mushFeatures.params['LSO_Scene1FadeTime']    = Number(nowParameters['Scene 1 Fade Time']);
$mushFeatures.params['LSO_Scene1WaitMessage'] = Number(nowParameters['Scene 1 Wait Message']);
$mushFeatures.params['LSO_Scene1TextFade']    = Number(nowParameters['Scene 1 Text Fade']);
$mushFeatures.params['LSO_Scene1Wait']        = Number(nowParameters['Scene 1 Wait']);
$mushFeatures.params['LSO_Scene1InputSkip']   = eval(nowParameters['Scene 1 Input Skip']);
$mushFeatures.params['LSO_Scene2']            = eval(nowParameters['Scene 2']);
$mushFeatures.params['LSO_Scene2TopType']     = String(nowParameters['Scene 2 Top Type']);
$mushFeatures.params['LSO_Scene2TopInfo']     = String(nowParameters['Scene 2 Top Info']);
$mushFeatures.params['LSO_Scene2TopPosition'] = eval(nowParameters['Scene 2 Top Position']);
$mushFeatures.params['LSO_Scene2MidType']     = String(nowParameters['Scene 2 Mid Type']);
$mushFeatures.params['LSO_Scene2MidInfo']     = String(nowParameters['Scene 2 Mid Info']);
$mushFeatures.params['LSO_Scene2MidPosition'] = eval(nowParameters['Scene 2 Mid Position']);
$mushFeatures.params['LSO_Scene2LowType']     = String(nowParameters['Scene 2 Low Type']);
$mushFeatures.params['LSO_Scene2LowInfo']     = String(nowParameters['Scene 2 Low Info']);
$mushFeatures.params['LSO_Scene2LowPosition'] = eval(nowParameters['Scene 2 Low Position']);
$mushFeatures.params['LSO_Scene2Background']  = String(nowParameters['Scene 2 Background']);
$mushFeatures.params['LSO_Scene2BackStretch'] = eval(nowParameters['Scene 2 Back Stretch']);
$mushFeatures.params['LSO_Scene2FadeTime']    = Number(nowParameters['Scene 2 Fade Time']);
$mushFeatures.params['LSO_Scene2TextFade']    = Number(nowParameters['Scene 2 Text Fade']);
$mushFeatures.params['LSO_Scene2WaitMessage'] = Number(nowParameters['Scene 2 Wait Message']);
$mushFeatures.params['LSO_Scene2Wait']        = Number(nowParameters['Scene 2 Wait']);
$mushFeatures.params['LSO_Scene2InputSkip']   = eval(nowParameters['Scene 2 Input Skip']);
$mushFeatures.params['LSO_SceneOp']           = eval(nowParameters['Scene Op']);
$mushFeatures.params['LSO_SceneOpMovie']      = String(nowParameters['Scene Op Movie']);
$mushFeatures.params['LSO_SceneOpInputSkip']  = eval(nowParameters['Scene Op Input Skip']);

//==============================================================================================================
// * SECTION 1.0 : Scene Boot
//   - Go to LSO Scene
//==============================================================================================================

var aliasMush_SceneBootStart = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    if (DataManager.isBattleTest()) {
        aliasMush_SceneBootStart.call(this);
    } else if (DataManager.isEventTest()) {
        aliasMush_SceneBootStart.call(this);
    } else {
    	if ($mushFeatures.params['LSO_Scene1'] || $mushFeatures.params['LSO_Scene2'] || $mushFeatures.params['LSO_SceneOp']) {
    		Scene_Base.prototype.start.call(this);
	    	SoundManager.preloadImportantSounds();
	    	DataManager.setupNewGame();
	    	//SceneManager.goto(Scene_Title);
	        SceneManager.goto(Scene_LSO);
    	} else {
    		aliasMush_SceneBootStart.call(this);
    	}
    }
};

//==============================================================================================================
// * SECTION 1.1 : Scene LSO
//   - Go to LSO Scene
//==============================================================================================================

function Scene_LSO() {
    this.initialize.apply(this, arguments);
}

Scene_LSO.prototype = Object.create(Scene_Base.prototype);
Scene_LSO.prototype.constructor = Scene_LSO;

Scene_LSO.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this.setStartingProperties();
};

Scene_LSO.prototype.setStartingProperties = function() {
	this._stop       = false;
	this._videoStart = false;
	this._timer      = 0;
	this._maxTimer   = [0, 0, 61];
	this._scene      = [false, false, false];
	this._nowScene   = -1;
	this._realScene  = -1;
	this._sceneFade  = [0, 0, 0];
	this._itemFade   = [0, 0, 0];
	this._itemWait   = [0, 0, 0];
	this._skip       = [false, false, false];
    this._spriteCentered = [true, true, true];
	this._screenSettings = {
		'brightness': {'desired': 0, 'nowValue': 0, 'nowTime': 0, 'add': 0}
	}
	if ($mushFeatures.params['LSO_Scene1']) {
		this._scene[0]     = true;
		this._skip[0]      = $mushFeatures.params['LSO_Scene1InputSkip'];
		this._sceneFade[0] = $mushFeatures.params['LSO_Scene1FadeTime'];
		this._itemFade[0]  = $mushFeatures.params['LSO_Scene1TextFade'];
		this._itemWait[0]  = $mushFeatures.params['LSO_Scene1WaitMessage'];
		this._maxTimer[0] = this._sceneFade[0] * 2 + $mushFeatures.params['LSO_Scene1WaitMessage'] * 3 + $mushFeatures.params['LSO_Scene1Wait'];
	}
	if ($mushFeatures.params['LSO_Scene2']) {
		this._scene[1]     = true;
		this._skip[1]      = $mushFeatures.params['LSO_Scene2InputSkip'];
		this._sceneFade[1] = $mushFeatures.params['LSO_Scene2FadeTime'];
		this._itemFade[1]  = $mushFeatures.params['LSO_Scene2TextFade'];
		this._itemWait[1]  = $mushFeatures.params['LSO_Scene2WaitMessage'];
		this._maxTimer[1] = this._sceneFade[1] * 2 + $mushFeatures.params['LSO_Scene1WaitMessage'] * 3 + $mushFeatures.params['LSO_Scene2Wait'];
	}
	if ($mushFeatures.params['LSO_SceneOp']) {
		this._scene[2] = true;
		this._skip[2]  = $mushFeatures.params['LSO_SceneOpInputSkip'];
	}
};

//---------------------------------------------------------------------------
// * Creating Objects
//---------------------------------------------------------------------------

Scene_LSO.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createBackground();
    this.createAllWindows();
    this.createAllSprites();
    this.createScreenSprites();
    this.setScreenBrightness(255, 1);
};

Scene_LSO.prototype.createBackground = function() {
	this._spriteBackground = new Sprite();
	this.addChild(this._spriteBackground);
};

Scene_LSO.prototype.createAllWindows = function() {
    this._windowTop = new Window_Base(0, 0, Graphics.width, Graphics.height);
    this._windowTop.opacity = 0;
    this._windowTop.contentsOpacity = 0;
    this._windowMid = new Window_Base(0, 0, Graphics.width, Graphics.height);
    this._windowMid.opacity = 0;
    this._windowMid.contentsOpacity = 0;
    this._windowLow = new Window_Base(0, 0, Graphics.width, Graphics.height);
    this._windowLow.opacity = 0;
    this._windowLow.contentsOpacity = 0;
    if ($mushFeatures.imported['MenuOptionExpansion_P1']) {
    	if ($mushFeatures.params['MOE_WindowColorFeature']) {
    		aliasMush_WindowBaseLoadWindowskin.call(this._windowTop);
    		aliasMush_WindowBaseLoadWindowskin.call(this._windowMid);
    		aliasMush_WindowBaseLoadWindowskin.call(this._windowLow);
    	}
    	if ($mushFeatures.params['MOE_TextFontFeature']) {
    		aliasMush_WindowBaseResetFontSettings.call(this._windowTop);
    		aliasMush_WindowBaseResetFontSettings.call(this._windowMid);
    		aliasMush_WindowBaseResetFontSettings.call(this._windowLow);
    	}
    }
    this.addChild(this._windowTop);
    this.addChild(this._windowMid);
    this.addChild(this._windowLow);
};

Scene_LSO.prototype.createAllSprites = function() {
    this._spriteTop = new Sprite();
    this._spriteTop.opacity = 0;
    this._spriteMid = new Sprite();
    this._spriteMid.opacity = 0;
    this._spriteLow = new Sprite();
    this._spriteLow.opacity = 0;
    this.addChild(this._spriteTop);
    this.addChild(this._spriteMid);
    this.addChild(this._spriteLow);
};

Scene_LSO.prototype.createScreenSprites = function() {
    this._fadeSprite = new ScreenSprite();
    this.addChild(this._fadeSprite);
};

//---------------------------------------------------------------------------
// * Creating Properties
//---------------------------------------------------------------------------

Scene_LSO.prototype.setBackground = function() {
	this._backgroundStrecthed = false;
	if (this._realScene == 0) {
		if ($mushFeatures.params['LSO_Scene1Background'] != 'none' && $mushFeatures.params['LSO_Scene1Background'].trim().length > 0) {
			var filename = $mushFeatures.params['LSO_Scene1Background'];
			this._spriteBackground.bitmap = ImageManager.loadSystem(filename);
		}
	} else if (this._realScene == 1) {
		if ($mushFeatures.params['LSO_Scene2Background'] != 'none' && $mushFeatures.params['LSO_Scene2Background'].trim().length > 0) {
			var filename = $mushFeatures.params['LSO_Scene2Background'];
			this._spriteBackground.bitmap = ImageManager.loadSystem(filename);
		} else {
			this._spriteBackground.visible = false;
		}
	} else if (this._realScene == 2) {
		this._spriteBackground.visible = false;
	}
};

Scene_LSO.prototype.setBackgroundStretch = function() {
	if ($mushFeatures.params['LSO_Scene1BackStretch'] && this._realScene == 0) {
		if (this._spriteBackground.visible && this._spriteBackground.width > 0 && this._spriteBackground.height > 0) {
			var xCorrection = Graphics.width / this._spriteBackground.width;
			var yCorrection = Graphics.height / this._spriteBackground.height;
			this._spriteBackground.scale.x = xCorrection;
			this._spriteBackground.scale.y = yCorrection; 
			this._backgroundStrecthed = true;
		} 
	} 
	if ($mushFeatures.params['LSO_Scene2BackStretch'] && this._realScene == 1) {
		if (this._spriteBackground.visible && this._spriteBackground.width > 0 && this._spriteBackground.height > 0) {
			var xCorrection = Graphics.width / this._spriteBackground.width;
			var yCorrection = Graphics.height / this._spriteBackground.height;
			this._spriteBackground.scale.x = xCorrection;
			this._spriteBackground.scale.y = yCorrection; 
			this._backgroundStrecthed = true;
		}  
	} else if (this._realScene == 1) {
		this._spriteBackground.scale.x = 1.00;
		this._spriteBackground.scale.y = 1.00; 
	}
	if (this._spriteBackground.visible == false) {
		this._backgroundStrecthed = true;
	}
};

Scene_LSO.prototype.goNextScene = function() {
	var scenes = [];
	for (var i = 0 ; i < this._scene.length ; i++) {
		if (this._scene[i]) {scenes.push(i)};
	}
	if (this._nowScene < scenes.length - 1) {
		this._nowScene += 1;
		this._realScene = scenes[this._nowScene];
		this._timer = 0;
		this.clearAllWindows();
        this.clearAllSprites();
		this.setBackground();
	} else {
		this.checkPlayerLocation();
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Title);
        Window_TitleCommand.initCommandPosition();
    }
    this.updateDocumentTitle();
};

Scene_LSO.prototype.updateDocumentTitle = function() {
    document.title = $dataSystem.gameTitle;
};

Scene_LSO.prototype.checkPlayerLocation = function() {
    if ($dataSystem.startMapId === 0) {
        throw new Error('Player\'s starting position is not set');
    }
};

Scene_LSO.prototype.setScreenBrightness = function(screenOpacity, duration) {
	var bgh = this._screenSettings.brightness;
	this._screenSettings.brightness.desired = screenOpacity;
	this._screenSettings.brightness.nowTime = duration;
	this._screenSettings.brightness.add = (screenOpacity - bgh.nowValue) / duration;
};

Scene_LSO.prototype.getItemPosition = function(item) {
    switch (item){
        case 'Top': var yIndex = 0; break;
        case 'Mid': var yIndex = 1; break;
        case 'Low': var yIndex = 2; break;
    }
    var data = $mushFeatures.params['LSO_Scene' + (this._realScene + 1) + item + 'Position'];
    if (data == undefined) {
        var yBase = Graphics.height / 6 - 18;
        var yJump = Graphics.height / 3;
        var yRet = yBase + yJump * yIndex;
        var vall = [0, yRet];
        return vall;
    } else {
        var xRet = data[0];
        var yRet = data[1];
        var vall = [xRet, yRet];
        return vall;
    }
};

Scene_LSO.prototype.clearAllWindows = function() {
	this._windowTop.contents.clear();
	this._windowMid.contents.clear();
	this._windowLow.contents.clear();
	this._windowTop.contentsOpacity = 0;
	this._windowMid.contentsOpacity = 0;
	this._windowLow.contentsOpacity = 0;
};

Scene_LSO.prototype.setAllWindows = function() {
	this.clearAllWindows();
	var yBase = Graphics.height / 6 - 18;
	var yJump = Graphics.height / 3;
	if (this._realScene == 0) {
		if ($mushFeatures.params['LSO_Scene1TopType'] == 'text') {
            if ($mushFeatures.params['LSO_Scene1TopPosition'] == undefined) {
                this._windowTop.drawText($mushFeatures.params['LSO_Scene1TopInfo'] ,0, yBase, Graphics.width - 36, 'center');
            } else {
                var pos = this.getItemPosition('Top');
                this._windowTop.drawText($mushFeatures.params['LSO_Scene1TopInfo'] ,pos[0], pos[1], Graphics.width - 36, 'left');
            }
		}
		if ($mushFeatures.params['LSO_Scene1MidType'] == 'text') {
            if ($mushFeatures.params['LSO_Scene1MidPosition'] == undefined) {
                this._windowMid.drawText($mushFeatures.params['LSO_Scene1MidInfo'] ,0, yBase + yJump, Graphics.width - 36, 'center');
            } else {
                var pos = this.getItemPosition('Mid');
                this._windowMid.drawText($mushFeatures.params['LSO_Scene1MidInfo'] ,pos[0], pos[1], Graphics.width - 36, 'left');
            }
		}
		if ($mushFeatures.params['LSO_Scene1LowType'] == 'text') {
            if ($mushFeatures.params['LSO_Scene1LowPosition'] == undefined) {
                this._windowLow.drawText($mushFeatures.params['LSO_Scene1LowInfo'] ,0, yBase + yJump * 2, Graphics.width - 36, 'center');
            } else {
                var pos = this.getItemPosition('Low');
                this._windowLow.drawText($mushFeatures.params['LSO_Scene1LowInfo'] ,pos[0], pos[1], Graphics.width - 36, 'left');
            }
		}
	} else if (this._realScene == 1) {
		if ($mushFeatures.params['LSO_Scene2TopType'] == 'text') {
            if ($mushFeatures.params['LSO_Scene2TopPosition'] == undefined) {
                this._windowTop.drawText($mushFeatures.params['LSO_Scene2TopInfo'] ,0, yBase, Graphics.width - 36, 'center');
            } else {
                var pos = this.getItemPosition('Top');
                this._windowTop.drawText($mushFeatures.params['LSO_Scene2TopInfo'] ,pos[0], pos[1], Graphics.width - 36, 'left');
            }
		}
		if ($mushFeatures.params['LSO_Scene2MidType'] == 'text') {
            if ($mushFeatures.params['LSO_Scene2MidPosition'] == undefined) {
                this._windowMid.drawText($mushFeatures.params['LSO_Scene2MidInfo'] ,0, yBase + yJump, Graphics.width - 36, 'center');
            } else {
                var pos = this.getItemPosition('Mid');
                this._windowMid.drawText($mushFeatures.params['LSO_Scene2MidInfo'] ,pos[0], pos[1], Graphics.width - 36, 'left');
            }
		}
		if ($mushFeatures.params['LSO_Scene2LowType'] == 'text') {
            if ($mushFeatures.params['LSO_Scene2LowPosition'] == undefined) {
                this._windowLow.drawText($mushFeatures.params['LSO_Scene2LowInfo'] ,0, yBase + yJump * 2, Graphics.width - 36, 'center');
            } else {
                var pos = this.getItemPosition('Low');
                this._windowLow.drawText($mushFeatures.params['LSO_Scene2LowInfo'] ,pos[0], pos[1], Graphics.width - 36, 'left');
            }
		}
	}
};

Scene_LSO.prototype.clearAllSprites = function() {
    this._spriteTop.opacity = 0;
    this._spriteMid.opacity = 0;
    this._spriteLow.opacity = 0;
    this._spriteTop.visible = false;
    this._spriteMid.visible = false;
    this._spriteLow.visible = false;
    this._spriteCentered = [false, false, false];
};

Scene_LSO.prototype.setAllSprites = function() {
    this.clearAllSprites();
    var yBase = Graphics.height / 6 - 36;
    var yJump = Graphics.height / 3;
    if (this._realScene == 0) {
        if ($mushFeatures.params['LSO_Scene1TopType'] == 'image') {
            this._spriteTop.bitmap = ImageManager.loadSystem($mushFeatures.params['LSO_Scene1TopInfo'], 0);
            this._spriteTop.visible = true;
            if ($mushFeatures.params['LSO_Scene1TopPosition'] != undefined) {
                var pos = this.getItemPosition('Top');
                this._spriteTop.x = pos[0];
                this._spriteTop.y = pos[1];
                this._spriteCentered[0] = true;
            }
        } 
        if ($mushFeatures.params['LSO_Scene1MidType'] == 'image') {
            this._spriteMid.bitmap = ImageManager.loadSystem($mushFeatures.params['LSO_Scene1MidInfo'], 0);
            this._spriteMid.visible = true;
            if ($mushFeatures.params['LSO_Scene1MidPosition'] != undefined) {
                var pos = this.getItemPosition('Mid');
                this._spriteMid.x = pos[0];
                this._spriteMid.y = pos[1];
                this._spriteCentered[1] = true;
            }
        }
        if ($mushFeatures.params['LSO_Scene1LowType'] == 'image') {
            this._spriteLow.bitmap = ImageManager.loadSystem($mushFeatures.params['LSO_Scene1LowInfo'], 0);
            this._spriteLow.visible = true;
            if ($mushFeatures.params['LSO_Scene1LowPosition'] != undefined) {
                var pos = this.getItemPosition('Low');
                this._spriteLow.x = pos[0];
                this._spriteLow.y = pos[1];
                this._spriteCentered[2] = true;
            }
        }
    } else if (this._realScene == 1) {
        if ($mushFeatures.params['LSO_Scene2TopType'] == 'image') {
            this._spriteTop.bitmap = ImageManager.loadSystem($mushFeatures.params['LSO_Scene2TopInfo'], 0);
            this._spriteTop.visible = true;
            if ($mushFeatures.params['LSO_Scene2TopPosition'] != undefined) {
                var pos = this.getItemPosition('Top');
                this._spriteTop.x = pos[0];
                this._spriteTop.y = pos[1];
                this._spriteCentered[0] = true;
            }
        } 
        if ($mushFeatures.params['LSO_Scene2MidType'] == 'image') {
            this._spriteMid.bitmap = ImageManager.loadSystem($mushFeatures.params['LSO_Scene2MidInfo'], 0);
            this._spriteMid.visible = true;
            if ($mushFeatures.params['LSO_Scene2MidPosition'] != undefined) {
                var pos = this.getItemPosition('Mid');
                this._spriteMid.x = pos[0];
                this._spriteMid.y = pos[1];
                this._spriteCentered[1] = true;
            }
        }
        if ($mushFeatures.params['LSO_Scene2LowType'] == 'image') {
            this._spriteLow.bitmap = ImageManager.loadSystem($mushFeatures.params['LSO_Scene2LowInfo'], 0);
            this._spriteLow.visible = true;
            if ($mushFeatures.params['LSO_Scene2LowPosition'] != undefined) {
                var pos = this.getItemPosition('Low');
                this._spriteLow.x = pos[0];
                this._spriteLow.y = pos[1];
                this._spriteCentered[2] = true;
            }
        }
    }
};

Scene_LSO.prototype.playOpening = function() {
    var name = $mushFeatures.params['LSO_SceneOpMovie'];
    var ext = this.videoFileExt();
    Graphics.playVideo('movies/' + name + ext);
};

Scene_LSO.prototype.videoFileExt = function() {
    if (Graphics.canPlayVideoType('video/webm') && !Utils.isMobileDevice()) {
        return '.webm';
    } else {
        return '.mp4';
    }
};

//---------------------------------------------------------------------------
// * Updating Objects
//---------------------------------------------------------------------------

Scene_LSO.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
	if (this._nowScene == -1) {
		this.goNextScene();
	}
	this.updateScreenSprites();
	if (this._stop == false) {
		this.updateNowTimer();
		if (!this._backgroundStrecthed) {
			this.setBackgroundStretch();
		}
        this.updateSpriteCentered();
		if (this._timer < this._maxTimer[this._realScene]) {
			this._timer += 1;
		} else {
			this.goNextScene();
		}
	} else if (this._timer >= 61 && this._stop == true) {
		if (Graphics.isVideoPlaying()) {
			this._videoStart = true;
		} else {
			if (this._videoStart) { this.goNextScene() };
		}
	}
	this.updateInputs();
};

Scene_LSO.prototype.updateSpriteCentered = function() {
    if (this._spriteTop.visible && this._spriteCentered[0] == false) {
        if (this._spriteTop.width > 0 && this._spriteTop.height > 0) {
            var xPos = Graphics.width / 2 - this._spriteTop.width / 2;
            var yPos = this.getItemPosition('Top')[1] - this._spriteTop.height / 2;
            this._spriteTop.x = xPos;
            this._spriteTop.y = yPos;
            this._spriteCentered[0] = true; 
        }
    } else if (this._spriteMid.visible && this._spriteCentered[1] == false) {
        if (this._spriteMid.width > 0 && this._spriteMid.height > 0) {
            var xPos = Graphics.width / 2 - this._spriteMid.width / 2;
            var yPos = this.getItemPosition('Mid')[1] - this._spriteMid.height / 2;
            this._spriteMid.x = xPos;
            this._spriteMid.y = yPos;
            this._spriteCentered[1] = true; 
        }
    } else if (this._spriteLow.visible && this._spriteCentered[2] == false) {
        if (this._spriteLow.width > 0 && this._spriteLow.height > 0) {
            var xPos = Graphics.width / 2 - this._spriteLow.width / 2;
            var yPos = this.getItemPosition('Low')[1] - this._spriteLow.height / 2;
            this._spriteLow.x = xPos;
            this._spriteLow.y = yPos;
            this._spriteCentered[2] = true; 
        }
    }
};

Scene_LSO.prototype.updateScreenSprites = function() {
    if (this._screenSettings.brightness.nowTime >= 0) {
    	var bgh = this._screenSettings.brightness;
    	if ( Math.abs(bgh.nowValue - bgh.desired) <= Math.abs(bgh.add) ) {
    		this._screenSettings.brightness.nowValue = bgh.desired + 0;
    	} else {
    		this._screenSettings.brightness.nowValue = bgh.nowValue + bgh.add;
    	}
    	this._screenSettings.brightness.nowTime -= 1;
    	this._fadeSprite.opacity = bgh.nowValue;
    }
};

Scene_LSO.prototype.updateNowTimer = function() {
	if (this._realScene == 0 || this._realScene == 1) {
		var t = this._timer;
		var m = this._maxTimer[this._realScene];
		if (t == 1) {
			this.setScreenBrightness(0, this._sceneFade[this._realScene]);
			this.setAllWindows();
            this.setAllSprites();
		} else if (t == m - this._sceneFade[this._realScene]) {
			this.setScreenBrightness(255, this._sceneFade[this._realScene]);
		}
		if (t >= this._sceneFade[this._realScene] + this._itemWait[this._realScene] * 1) {
			if ($mushFeatures.params['LSO_Scene' + (this._realScene + 1) + 'TopType'] == 'text') {
				var diff = t - (this._sceneFade[this._realScene] + this._itemWait[this._realScene] * 1);
				var opa = diff / this._itemFade[this._realScene] * 255;
				this._windowTop.contentsOpacity = opa.clamp(0, 255);
			} else if ($mushFeatures.params['LSO_Scene' + (this._realScene + 1) + 'TopType'] == 'image') {
                var diff = t - (this._sceneFade[this._realScene] + this._itemWait[this._realScene] * 1);
                var opa = diff / this._itemFade[this._realScene] * 255;
                if (this._spriteTop.visible) this._spriteTop.opacity = opa.clamp(0,255);
            }
		}
		if (t >= this._sceneFade[this._realScene] + this._itemWait[this._realScene] * 2) {
			if ($mushFeatures.params['LSO_Scene' + (this._realScene + 1) + 'MidType'] == 'text') {
				var diff = t - (this._sceneFade[this._realScene] + this._itemWait[this._realScene] * 2);
				var opa = diff / this._itemFade[this._realScene] * 255;
				this._windowMid.contentsOpacity = opa.clamp(0, 255);
                if (this._spriteMid.visible) this._spriteMid.opacity = opa.clamp(0,255);
			} else if ($mushFeatures.params['LSO_Scene' + (this._realScene + 1) + 'MidType'] == 'image') {
                var diff = t - (this._sceneFade[this._realScene] + this._itemWait[this._realScene] * 2);
                var opa = diff / this._itemFade[this._realScene] * 255;
                if (this._spriteMid.visible) this._spriteMid.opacity = opa.clamp(0,255);
            }
		}
		if (t >= this._sceneFade[this._realScene] + this._itemWait[this._realScene] * 3) {
			if ($mushFeatures.params['LSO_Scene' + (this._realScene + 1) + 'LowType'] == 'text') {
				var diff = t - (this._sceneFade[this._realScene] + this._itemWait[this._realScene] * 3);
				var opa = diff / this._itemFade[this._realScene] * 255;
				this._windowLow.contentsOpacity = opa.clamp(0, 255);
                if (this._spriteLow.visible) this._spriteLow.opacity = opa.clamp(0,255);
			} else if ($mushFeatures.params['LSO_Scene' + (this._realScene + 1) + 'LowType'] == 'image') {
                var diff = t - (this._sceneFade[this._realScene] + this._itemWait[this._realScene] * 3);
                var opa = diff / this._itemFade[this._realScene] * 255;
                if (this._spriteLow.visible) this._spriteLow.opacity = opa.clamp(0,255);
            }
		}
	} else if (this._realScene == 2) {
		if (this._timer == 59) {
			this.setScreenBrightness(0, 1);
		} else if (this._timer >= 60) {
			this._stop = true;
			this.playOpening();
		}
	}
};

Scene_LSO.prototype.updateInputs = function() {
	if (this._realScene == 0 || this._realScene == 1) {
		if (Input.isTriggered('ok') || Input.isTriggered('escape') || Input.isTriggered('pageup') || Input.isTriggered('pagedown') || Input.isTriggered('control')) {
			if (this._skip[this._realScene] == true) {
				this.goNextScene();
				if (this._realScene != 2) {
					this.setScreenBrightness(255, 1);
				}
			}
		}
	} else if (this._realScene == 2 && this._timer >= 60) {
		if (Input.isTriggered('ok') || Input.isTriggered('escape') || Input.isTriggered('pageup') || Input.isTriggered('pagedown') || Input.isTriggered('control')) {
			if (this._skip[2]) {
				var name = "MovieDebug.webmhd";
	    		var ext = this.videoFileExt();
	    		Graphics.playVideo('movies/' + name + ext);
	    		this.goNextScene();
			}
		}
	}
};
