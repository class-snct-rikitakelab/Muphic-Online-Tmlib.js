tm.define("CharButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene, character, x, y, table) {
		this.superInit();
		this.model = CharButtonModel(this, scene, character);
		this.view = CharButtonView(this, x, y);
		this.controller = CharButtonController(this);
		this.table = table;
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
		this.getModel().renewCharacter();
	},
	addCharacter : function(character) {
		this.getTable().addCharacter(character);
	},
	setEnableState : function() {
		this.getView().setState(CharButtonEnableState(this.getView()));
	},

	getTable : function() { return this.table; },
	setTable : function(table) { this.table = table; },
})