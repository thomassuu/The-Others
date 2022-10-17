Input.isEnabled = true;

var alias1 = Input.update;
var alias2 = Input.isPressed;
var alias3 = Input.isTriggered;
var alias4 = Input.isRepeated;
var alias5 = Input.isLongPressed;

Input.update = function() {
    if (this.isEnabled) alias1.call(this);
}

Input.isPressed = function(arg) {
    return this.isEnabled && alias2.call(this, arg);
}

Input.isTriggered = function(arg) {
    return this.isEnabled && alias3.call(this, arg);
}

Input.isRepeated = function(arg) {
    return this.isEnabled && alias4.call(this, arg);
}

Input.isLongPressed = function(arg) {
    return this.isEnabled && alias5.call(this, arg);
}