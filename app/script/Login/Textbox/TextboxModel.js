tm.define("TextboxModel", {
	superClass : "MVCModel",
	init : function(manager, scene) {
		this.superInit(manager, scene);
		this.text = "";
	},
	// 1文字を追加するメソッド
	addCharacter : function(character) {
		if(this.countText() === TEXT_MAX) return false;
		this.text += character;
		this.notify();
	},
	// 1文字削除するメソッド
	removeCharacter : function() {
		if(this.countText() === 0) return false;
		this.text = this.text.slice(0, this.countText() - 1);
		this.notify();
	},
	// 文字数を返すメソッド
	countText : function() {
		return this.text.length;
	},

	getText : function() { return this.text; },
	setText : function(text) { this.text = text; },
})