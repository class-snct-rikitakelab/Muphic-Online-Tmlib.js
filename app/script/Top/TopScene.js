tm.define("TopScene", {
	superClass : "tm.app.Scene",
	init : function() {
		this.superInit();
		this.background = TopBackgroundManager(this);
		this.startButton = StartButtonManager(this);
	}
})