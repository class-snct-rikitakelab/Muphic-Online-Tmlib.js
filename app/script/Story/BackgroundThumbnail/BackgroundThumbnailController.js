tm.define("BackgroundThumbnailController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	changeBackground : function() {
		var backgroundIllust = {
			"arg1" : "background",
			"arg2" : this.getModel().getWeather(),
			"arg3" : this.getModel().getBackground()
		};
		this.getManager().changeBackground(backgroundIllust);
	},
})