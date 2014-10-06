tm.define("BackgroundThumbnailModel", {
	superClass : "MVCModel",
	init : function(manager, scene, weather, background) {
		this.superInit(manager, scene);
		this.setWeather(weather);
		this.setBackground(background);
	},
	changeWeather : function(weather) {
		this.setWeather(weather);
		this.notify();
	},

	getWeather : function() { return this.weather; },
	setWeather : function(weather) { this.weather = weather; },
	getBackground : function() { return this.background; },
	setBackground : function(background) { this.background = background; },
})