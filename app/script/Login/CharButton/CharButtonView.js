tm.define("CharButtonView", {
	superClass : "MVCViewButton",
	init : function(manager, x, y) {
		var image = "login_charButton";
		var width = 44;
		var height = 36;
		this.superInit(image, width, height, x, y, manager);
	},
	addCharacter : function() {
		this.getController().addCharacter();
	},
	renew : function() {
		var scene = this.getModel().getScene();
		var character = this.getModel().getCharacter();
		var x = this.x - this.width / 2 + (this.width - 18) / 2;
		var y = this.y - this.height / 2 + (this.height - 20) / 2;
		var label = ExtendedSprite("char_" + character, 18, 20, x, y);
		label.addToScene(scene);
	},
})