tm.define("ThumbnailButtonModel", {
	superClass : "MVCModel",
	init : function(manager, scene, icon) {
		this.superInit(manager, scene);
		this.setIcon(icon);
	},

	getIcon : function() { return this.icon; },
	setIcon : function(icon) { this.icon = icon; },
})