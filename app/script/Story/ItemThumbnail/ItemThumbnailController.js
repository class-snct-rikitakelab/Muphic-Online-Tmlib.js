tm.define("ItemThumbnailController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	selectIllust : function() {
		var illust = {
			"arg1" : "item",
			"arg2" : this.getModel().getCategory(),
			"arg3" : this.getModel().getItem()
		};
		this.getManager().selectIllust(illust);
	},
})