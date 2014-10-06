tm.define("CharacterThumbnailController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	selectIllust : function() {
		var illust = {
			"arg1" : this.getModel().getCharacter(),
			"arg2" : this.getModel().getFace(),
			"arg3" : this.getModel().getPose()
		};
		this.getManager().selectIllust(illust);
	},
})