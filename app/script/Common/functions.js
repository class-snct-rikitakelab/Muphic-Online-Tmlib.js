var mouseoverX = function(x, leftX, rightX, leftOffset, rightOffset) {
	if(leftX + leftOffset <= x && x <= rightX + rightOffset) {
		return true;
	} else {
		return false;
	}
}

var mouseoverY = function(y, topY, bottomY, topOffset, bottomOffset) {
	if(topY + topOffset <= y && y <= bottomY + bottomOffset) {
		return true;
	} else {
		return false;
	}
}