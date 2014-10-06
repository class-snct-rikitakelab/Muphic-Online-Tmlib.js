tm.define("RemoveTextButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "login_removeTextButton";
		var width = 90;
		var height = 62;
		var x = 467;
		var y = 630;
		this.superInit(image, width, height, x, y, manager);
	},
	removeCharacter : function() {
		this.getController().removeCharacter();
	},
})