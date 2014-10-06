var CHARSCALE = 2;

tm.define("TextboxView", {
	superClass : "MVCViewSprite",
	init : function(manager) {
		var image = "login_textbox";
		var width = 450;
		var height = 66;
		var x = 287;
		var y = 230;
		this.superInit(image, width, height, x, y, manager);
		this.text = null;
		this.message = null;
	},
	initText : function() {
		this.text = new Array();
	},
	initMessage : function() {
		var scene = this.getModel().getScene();
		var x = this.x - this.width / 2 + 122;
		var y = this.y - this.height / 2 + 24;
		this.message = ExtendedSprite("login_textboxMessage", 198, 19, x, y);
		this.message.setScale(CHARSCALE, CHARSCALE);
		this.message.addToScene(scene);
	},
	renew : function() {
		var oldText = this.text;
		var newText = this.getModel().getText();
		if(oldText.length < newText.length) {
			if(newText.length === 1) {
				this.message.removeFromScene();
			}
			var scene = this.getModel().getScene();
			var character = newText[newText.length - 1];
			var x = this.x - this.width / 2 - 10 + 28 * newText.length;
			var y = this.y - this.height / 2 + 24;
			var label = ExtendedSprite("char_" + character, 18, 20, x, y);
			label.setScale(CHARSCALE, CHARSCALE);
			label.addToScene(scene);
			this.text.push(label);
		} else {
			if(newText.length === 0) {
				var scene = this.getModel().getScene();
				this.message.addToScene(scene);
			}
			this.text[this.text.length - 1].removeFromScene();
			this.text.pop();
		}
	},
})