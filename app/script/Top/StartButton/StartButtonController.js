tm.define("StartButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToLogin : function() {
		app.replaceScene(LoginScene());
	},
})