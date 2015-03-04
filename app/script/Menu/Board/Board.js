tm.define("Board", {
	init : function(scene) {
		this.board = BoardManager(scene, this);

		this.setScene(scene);
	},

	getScene : function() { return this.scene; },
	setScene : function(scene) { this.scene = scene; },
})