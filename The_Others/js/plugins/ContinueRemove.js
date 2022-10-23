WindowTitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame,   'newGame');
//    this.addCommand(TextManager.continue, 'continue', this.isContinueEnabled());
    this.addCommand(TextManager.options,   'options');
};