tm.define("RemoveFocusController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	showFocus : function() {
		var allIllust = this.getManager().getAllIllust();
		for(var index = allIllust.length - 1; index >= 0; index--) {
			var otherIllust = allIllust[index].getView();
			var leftX = otherIllust.x - otherIllust.width / 2;
			var rightX = otherIllust.x + otherIllust.width / 2;
			var topY = otherIllust.y - otherIllust.height / 2;
			var bottomY = otherIllust.y + otherIllust.height / 2;
			var mouseX = app.mouse.x;
			var mouseY = app.mouse.y;
			var isMouseOverX = mouseoverX(mouseX, leftX, rightX, 0, 0);
			var isMouseOverY = mouseoverY(mouseY, topY, bottomY, 0, 0);
			if(isMouseOverX && isMouseOverY) {
				var scaleX = otherIllust.width / this.getView().width;
				var scaleY = otherIllust.height / this.getView().height;
				this.getView().setScale(scaleX, scaleY);
				var x = otherIllust.x;
				var y = otherIllust.y;
				this.getView().setPosition(x, y);
				this.getView().setVisible(true);
				otherIllust.setState(IllustEnableState(otherIllust));
				break;
			} else {
				this.getView().setVisible(false);
				otherIllust.setState(SpriteDisableState(otherIllust));
			}
		}
	},
})