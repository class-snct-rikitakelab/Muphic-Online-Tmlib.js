var model;
var TEXT_MAX = 15; // テキストボックスに入力可能な文字数の最大値

module("TextboxのModelのテスト", {
	setup: function() {
		model = TextboxModel(null, null);
	}
});

test("1文字追加処理テスト", function() {
	model.setText("Test");
	model.addCharacter("A");
	deepEqual(model.getText(), "TestA", "任意の文字を文字列の末尾へ1文字追加する");
});

test("1文字追加処理キャンセルテスト", function() {
	model.setText("hogehogehogehog");
	deepEqual(model.addCharacter("e"), false, "入力文字数が最大の時に1文字追加処理をキャンセルする");
});

test("1文字削除処理テスト", function() {
	model.setText("Test");
	model.removeCharacter();
	deepEqual(model.getText(), "Tes", "文字列の末尾から1文字削除する");
});

test("1文字削除処理キャンセルテスト", function() {
	model.setText("");
	deepEqual(model.removeCharacter(), false, "入力文字数が0の時に1文字削除処理をキャンセルする");
});

test("文字列の長さのカウント処理テスト", function() {
	model.setText("TestTest");
	deepEqual(model.countText(), 8,  "1文字以上の文字列の長さのカウント");
	model.setText("");
	deepEqual(model.countText(), 0,  "0文字の文字列（空白文字列）の長さのカウント");
});