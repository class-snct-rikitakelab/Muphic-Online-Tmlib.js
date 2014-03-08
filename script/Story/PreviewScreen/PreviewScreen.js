tm.define("PreviewScreen", {
	init : function(scene) {
		this.backgroundIllust = BackgroundIllustManager(scene, this);
		this.previewScreen = PreviewScreenManager(scene, this);
		this.illustFocus = IllustFocusManager(scene, this);
		this.removeFocus = RemoveFocusManager(scene, this);
		this.illust = new Array();
		this.setScene(scene);
	},
	changeBackground : function(backgroundIllust) {
		this.getBackgroundIllust().changeBackground(backgroundIllust);
	},
	changeSelectIllust : function(illust) {
		this.getIllustFocus().changeIllust(illust)
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
	createIllust : function(illust) {
		this.illust.push(IllustManager(this.getScene(), this, illust));
		this.getRemoveIllustButton().setEnableState();
	},
	destroyIllust : function(illust) {
		for(var index in this.illust) {
			if(this.illust[index] === illust) {
				this.illust.splice(index, 1);
				break;
			}
		}
		if(this.countIllust() === 0) {
			this.stopRemoveFocusUpdate();
			this.getRemoveIllustButton().setDisableState();
			this.getRemoveIllustButton().setIsAvailable(false);
		}
	},
	countIllust : function() {
		return this.illust.length;
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

	getBackgroundIllust : function() { return this.backgroundIllust; },
	setBackgroundIllust : function(backgroundIllust) { this.backgroundIllust = backgroundIllust; },
	getPreviewScreen : function() { return this.previewScreen; },
	setPreviewScreen : function(previewScreen) { this.previewScreen = previewScreen; },
	getIllustFocus : function() { return this.illustFocus; },
	setIllustFocus : function(illustFocus) { this.illustFocus = illustFocus; },
	getRemoveFocus : function() { return this.removeFocus; },
	setRemoveFocus : function(removeFocus) { this.removeFocus = removeFocus; },
	getIllust : function() { return this.illust; },
	setIllust : function(illust) { this.illust = illust; },
	getScene : function() { return this.scene; },
	setScene : function(scene) { this.scene = scene; },
	getRemoveIllustButton : function() { return this.removeIllustButton; },
	setRemoveIllustButton : function(removeIllustButton) { this.removeIllustButton = removeIllustButton; },
	getOtherObject : function() { return this.otherObject; },
	setOtherObject : function(otherObject) { this.otherObject = otherObject; },
})