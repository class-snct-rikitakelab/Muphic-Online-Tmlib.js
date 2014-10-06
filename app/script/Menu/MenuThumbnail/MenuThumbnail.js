tm.define("MenuThumbnail", {
	init : function(scene) {
		this.backgroundIllust = BackgroundIllustManager(scene, this);
		this.thumbnail = MenuThumbnailManager(scene, this);
	},
	})