tm.define("PreviewScreen", {
	init : function(scene) {

		this.pictureCard = { background: BackgroundIllustManager(scene, this),
			stamps: new Array() };
		this.previewScreen = PreviewScreenManager(scene, this);			
		this.pictureCard.stampsFocus = IllustFocusManager(scene, this);
		this.removeFocus = RemoveFocusManager(scene, this);

		this.setScene(scene);
	},

	/*pictureCard*/
	changeBackground : function(background) {	
		this.pictureCard.background.changeBackground(background);
	},

	/*pictureCard*/
	addStamp : function(stamp) {
		this.pictureCard.stamps.push(IllustManager(this.getScene(), this, stamp));
		this.getRemoveIllustButton().setEnableState();
	},
	/*pictureCard*/
	removeStamp : function(stamp) {
		for(var index in this.pictureCard.stamps) {
			if(this.pictureCard.stamps[index] === stamp) {
				this.pictureCard.stamps.splice(index, 1);
				break;
			}
		}
		if(this.pictureCard.stamps.length === 0) {
			this.stopRemoveFocusUpdate();
			this.getRemoveIllustButton().setDisableState();
			this.getRemoveIllustButton().setIsAvailable(false);
		}
	},

	getStamps : function() { return this.pictureCard.stamps; },


	getRemoveIllustButton : function() { return this.removeIllustButton; },
	setRemoveIllustButton : function(removeIllustButton) { this.removeIllustButton = removeIllustButton; },


	changeSelectIllust : function(stamp) {
		this.getIllustFocus().changeIllust(stamp)
		this.getRemoveIllustButton().setDisableState();
		this.getRemoveFocus().stopUpdate();
	},
	startIllustFocusUpdate : function() {
		this.getIllustFocus().addToScene();
		this.getIllustFocus().startUpdate();
	},
	stopIllustFocusUpdate : function() {
		this.getIllustFocus().stopUpdate();
	},
	startRemoveFocusUpdate : function() {
		this.getRemoveFocus().addToScene();
		this.getRemoveFocus().startUpdate();
	},
	stopRemoveFocusUpdate : function() {
		this.getRemoveFocus().resetPosition();
		this.getRemoveFocus().removeFromScene();
		this.getRemoveFocus().stopUpdate();
	},

	enableOtherObject : function() {
		for(var index in this.otherObject) {
			this.otherObject[index].setEnableState();
		}
	},
	setEnableState : function() {
		this.getPreviewScreen().setEnableState();
	},
	setDisableState : function() {
		this.getPreviewScreen().setDisableState();
	},

	getPreviewScreen : function() { return this.previewScreen; },
	setPreviewScreen : function(previewScreen) { this.previewScreen = previewScreen; },
	getIllustFocus : function() { return this.pictureCard.stampsFocus; },
	setIllustFocus : function(illustFocus) { this.pictureCard.stampsFocus = illustFocus; },
	getRemoveFocus : function() { return this.removeFocus; },
	setRemoveFocus : function(removeFocus) { this.removeFocus = removeFocus; },
	getScene : function() { return this.scene; },
	setScene : function(scene) { this.scene = scene; },
	getOtherObject : function() { return this.otherObject; },
	setOtherObject : function(otherObject) { this.otherObject = otherObject; },
})