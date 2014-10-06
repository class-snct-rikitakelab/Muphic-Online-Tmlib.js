tm.define("LoginScene", {
	superClass : "tm.app.Scene",
	init : function() {
		defineLoginData();
		this.superInit();
		this.background = LoginBackgroundManager(this);
		this.textbox = TextboxManager(this);
		this.alfabetTable = AlfabetTable(this);
		this.removeTextButon = RemoveTextButtonManager(this);
		this.loginEndButton = LoginEndButtonManager(this);

		this.textbox.setRemoveTextButton(this.removeTextButon);
		this.textbox.setLoginEndButton(this.loginEndButton);
		this.alfabetTable.setTextbox(this.textbox);
		this.removeTextButon.setTextbox(this.textbox);
		this.loginEndButton.setTextbox(this.textbox);

		loginScene = this;
	}
})