tm.define("CharacterThumbnailView", {
	superClass : "MVCViewSprite",
	init : function(manager, character, face, pose) {
		var image = THUMBNAIL[character][face][pose].image;
		var width = THUMBNAIL[character][face][pose].width;
		var height = THUMBNAIL[character][face][pose].height;
		var x = THUMBNAIL[character][face][pose].x;
		var y = THUMBNAIL[character][face][pose].y;
		this.superInit(image, width, height, x, y, manager);
	},
	selectIllust : function() {
		this.getController().selectIllust();
	},
	renew : function() {
		var character = this.getModel().getCharacter();
		var face = this.getModel().getFace();
		var pose = this.getModel().getPose();
		var image = THUMBNAIL[character][face][pose].image;
		var width = THUMBNAIL[character][face][pose].width;
		var height = THUMBNAIL[character][face][pose].height;
		var x = THUMBNAIL[character][face][pose].x + width / 2;
		var y = THUMBNAIL[character][face][pose].y + height / 2;
		this.changeImage(image);
		this.setSize(width, height);
		this.setPosition(x, y);
	},
})