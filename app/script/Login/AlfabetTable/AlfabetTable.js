var SMALL_ALFABET_X = 85;
var SMALL_ALFABET_Y = 370;
var LARGE_ALFABET_X = 535;
var LARGE_ALFABET_Y = 370;
var ALFABET_SPACE_WIDTH = 60;
var ALFABET_SPACE_HEIGHT = 50;

tm.define("AlfabetTable", {
	init : function(scene) {
		this.button = new Array();
		this.textbox = null;
		this.createSmallAlfabetButton(scene);
		this.createLargeAlfabetButton(scene);
	},
	createSmallAlfabetButton : function(scene) {
		var smallAlfabets = [
			"a", "b", "c", "d", "e", "f", "g",
			"h", "i", "j", "k", "l", "m", "n",
			"o", "p", "q", "r", "s", "t", "u",
			"v", "w", "x", "y", "z", false
		];
		var index = 0;
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < 7; j++) {
				if(!smallAlfabets[index]) break;
				var character = smallAlfabets[index];
				var x = SMALL_ALFABET_X + ALFABET_SPACE_WIDTH * j;
				var y = SMALL_ALFABET_Y + ALFABET_SPACE_HEIGHT * i;
				this.button.push(CharButtonManager(scene, character, x, y, this));
				index++;
			}
		}
	},
	createLargeAlfabetButton : function(scene) {
		var largeAlfabets = [
			"A", "B", "C", "D", "E", "F", "G",
			"H", "I", "J", "K", "L", "M", "N",
			"O", "P", "Q", "R", "S", "T", "U",
			"V", "W", "X", "Y", "Z", false
		];
		var index = 0;
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < 7; j++) {
				if(!largeAlfabets[index]) break;
				var character = largeAlfabets[index];
				var x = LARGE_ALFABET_X + ALFABET_SPACE_WIDTH * j;
				var y = LARGE_ALFABET_Y + ALFABET_SPACE_HEIGHT * i;
				this.button.push(CharButtonManager(scene, character, x, y, this));
				index++;
			}
		}
	},
	addCharacter : function(character) {
		this.getTextbox().addCharacter(character);
	},

	getTextbox : function() { return this.textbox; },
	setTextbox : function(textbox) { this.textbox = textbox; },
})