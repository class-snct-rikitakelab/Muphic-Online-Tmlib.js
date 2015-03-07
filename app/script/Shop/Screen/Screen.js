tm.define("Screen", {
	init : function(scene) {

		this.screen = ScreenManager(scene,this);

		this.setScene(scene);
	},
	getScene : function() { return this.scene; },
	setScene : function(scene) { this.scene = scene; },
})