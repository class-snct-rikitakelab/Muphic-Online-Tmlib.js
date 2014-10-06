tm.define("HumenDisableState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().changeImage(this.getParent().getImageName());
	},
	updateAction : function() {
		return;
	},
})