tm.define("PreviewScreenController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	startIllustFocusUpdate : function() {
		this.getManager().startIllustFocusUpdate();
	},
	stopIllustFocusUpdate : function() {
		this.getManager().stopIllustFocusUpdate();
	},
})