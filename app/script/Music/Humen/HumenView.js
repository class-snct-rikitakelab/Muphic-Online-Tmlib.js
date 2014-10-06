tm.define("HumenView", {
	superClass : "MVCViewSprite",
	init : function(manager) {
		var image = "music_humen";
		var width = 900;
		var height = 514;
		var x = 10;
		var y = 186;
		this.superInit(image, width, height, x, y, manager);
		this.setIsUpdate(true);
	},
	showNoteFocus : function() {
		var overX = mouseoverX(app.mouse.x, 129, 849, 0, 0);
		var overY = mouseoverY(app.mouse.y, 251, 642, 0, 0);
		if(overX && overY) {
			this.getManager().showNoteFocus();
		} else {
			this.getManager().hideNoteFocus();
		}
	},
	showRemoveNoteFocus : function() {
		var overX = mouseoverX(app.mouse.x, 129, 849, 0, 0);
		var overY = mouseoverY(app.mouse.y, 251, 642, 0, 0);
		if(overX && overY) {
			this.getManager().showRemoveNoteFocus();
		} else {
			this.getManager().hideRemoveNoteFocus();
		}
	},
	update : function() {
		this.getState().updateAction();
	},
})