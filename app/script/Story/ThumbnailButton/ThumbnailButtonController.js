tm.define("ThumbnailButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	changeThumbnail : function() {
		var icon = this.getModel().getIcon();
		this.getManager().changeThumbnail(icon);
	},
})