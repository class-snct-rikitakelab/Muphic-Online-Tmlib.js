var SCREEN_WIDTH = 1024;
var SCREEN_HEIGHT = 768;

//this is a comment for demonstrarion in 13/06/2014

//var userName = null;
//var loginScene = null;
var	storySceneArray = [null,null,null,null];
var musicSceneArray = [null,null,null,null];
var menuScene = null;

tm.main(function() {
	app = tm.app.CanvasApp("#app");
	app.resize(SCREEN_WIDTH, SCREEN_HEIGHT);
	app.fitWindow();
	app.fps = 60;
	app.background = "rgb(0, 0, 0)";

	var loadingScene = tm.app.LoadingScene({
		assets : ASSETS,
		nextScene : MenuScene,							
		width : SCREEN_WIDTH,							
		height : SCREEN_HEIGHT,							
	});		

	app.replaceScene(loadingScene);		


	
	app.run();

})