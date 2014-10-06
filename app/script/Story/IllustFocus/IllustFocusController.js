tm.define("IllustFocusController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	createIllust : function(x, y) {
		var illust = {
			"arg1" : this.getModel().getIllust().arg1,
			"arg2" : this.getModel().getIllust().arg2,
			"arg3" : this.getModel().getIllust().arg3,
			"x" : x,
			"y" : y
		};
		this.getManager().createIllust(illust);					//IllustFocusManager.createIllust ?
	},
	resetIllustFocus : function() {
		this.getManager().stopUpdate();
		this.getModel().setIllust(null);
	},
})