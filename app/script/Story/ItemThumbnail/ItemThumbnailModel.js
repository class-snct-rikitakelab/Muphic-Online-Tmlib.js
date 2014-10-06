tm.define("ItemThumbnailModel", {
	superClass : "MVCModel",
	init : function(manager, scene, category, item) {
		this.superInit(manager, scene);
		this.setCategory(category);
		this.setItem(item);
	},

	getCategory : function() { return this.category; },
	setCategory : function(category) { this.category = category; },
	getItem : function() { return this.item; },
	setItem : function(item) { this.item = item; },
})