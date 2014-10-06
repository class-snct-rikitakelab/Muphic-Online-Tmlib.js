var NUMBER = null;
var ANIMAL = null;
var MEASURE_FROM_X = null;
var X_FROM_MEASURE = null;
var BEAT_FROM_X = null;
var X_FROM_BEAT = null;
var SCALE_FROM_Y = null;
var Y_FROM_SCALE = null;

function defineMusicData() {
	tm.sound.SoundManager.add("pianoC4", "sound/pianoC4.mp3");
	tm.sound.SoundManager.add("pianoD4", "sound/pianoD4.mp3");
	tm.sound.SoundManager.add("pianoE4", "sound/pianoE4.mp3");
	tm.sound.SoundManager.add("pianoF4", "sound/pianoF4.mp3");
	tm.sound.SoundManager.add("pianoG4", "sound/pianoG4.mp3");
	tm.sound.SoundManager.add("pianoA4", "sound/pianoA4.mp3");
	tm.sound.SoundManager.add("pianoB4", "sound/pianoB4.mp3");
	tm.sound.SoundManager.add("pianoC5", "sound/pianoC5.mp3");

	NUMBER = new Array(10);
	NUMBER[0] = "char_0";
	NUMBER[1] = "char_1";
	NUMBER[2] = "char_2";
	NUMBER[3] = "char_3";
	NUMBER[4] = "char_4";
	NUMBER[5] = "char_5";
	NUMBER[6] = "char_6";
	NUMBER[7] = "char_7";
	NUMBER[8] = "char_8";
	NUMBER[9] = "char_9";

	ANIMAL = new Array(1);
	ANIMAL["cat"] = "music_cat";

	MEASURE_FROM_X = new Array();
	for(var x = 129; x < 369; x += 0.5) { MEASURE_FROM_X[x] = 1; }
	for(var x = 369; x < 609; x += 0.5) { MEASURE_FROM_X[x] = 2; }
	for(var x = 609; x < 849; x += 0.5) { MEASURE_FROM_X[x] = 3; }

	X_FROM_MEASURE = new Array();
	X_FROM_MEASURE[1] = 0;
	X_FROM_MEASURE[2] = 240;
	X_FROM_MEASURE[3] = 480;
	X_FROM_MEASURE[4] = 720;
	X_FROM_MEASURE[5] = 960;
	X_FROM_MEASURE[6] = 1200;
	X_FROM_MEASURE[7] = 1440;
	X_FROM_MEASURE[8] = 1680;

	BEAT_FROM_X = new Array();
	for(var x = 129; x < 189; x += 0.5) { BEAT_FROM_X[x] = 1; }
	for(var x = 189; x < 249; x += 0.5) { BEAT_FROM_X[x] = 2; }
	for(var x = 249; x < 309; x += 0.5) { BEAT_FROM_X[x] = 3; }
	for(var x = 309; x < 369; x += 0.5) { BEAT_FROM_X[x] = 4; }
	for(var x = 369; x < 429; x += 0.5) { BEAT_FROM_X[x] = 1; }
	for(var x = 429; x < 489; x += 0.5) { BEAT_FROM_X[x] = 2; }
	for(var x = 489; x < 549; x += 0.5) { BEAT_FROM_X[x] = 3; }
	for(var x = 549; x < 609; x += 0.5) { BEAT_FROM_X[x] = 4; }
	for(var x = 609; x < 669; x += 0.5) { BEAT_FROM_X[x] = 1; }
	for(var x = 669; x < 729; x += 0.5) { BEAT_FROM_X[x] = 2; }
	for(var x = 729; x < 789; x += 0.5) { BEAT_FROM_X[x] = 3; }
	for(var x = 789; x < 849; x += 0.5) { BEAT_FROM_X[x] = 4; }

	X_FROM_BEAT = new Array();
	X_FROM_BEAT[1] = 0;
	X_FROM_BEAT[2] = 60;
	X_FROM_BEAT[3] = 120;
	X_FROM_BEAT[4] = 180;

	SCALE_FROM_Y = new Array();
	for(var y = 251; y < 300; y += 0.5) { SCALE_FROM_Y[y] = "C5"; }
	for(var y = 300; y < 350; y += 0.5) { SCALE_FROM_Y[y] = "B4"; }
	for(var y = 350; y < 399; y += 0.5) { SCALE_FROM_Y[y] = "A4"; }
	for(var y = 399; y < 449; y += 0.5) { SCALE_FROM_Y[y] = "G4"; }
	for(var y = 449; y < 500; y += 0.5) { SCALE_FROM_Y[y] = "F4"; }
	for(var y = 500; y < 548; y += 0.5) { SCALE_FROM_Y[y] = "E4"; }
	for(var y = 548; y < 597; y += 0.5) { SCALE_FROM_Y[y] = "D4"; }
	for(var y = 597; y < 642; y += 0.5) { SCALE_FROM_Y[y] = "C4"; }

	Y_FROM_SCALE = new Array();
	Y_FROM_SCALE["C5"] = 0;
	Y_FROM_SCALE["B4"] = 49;
	Y_FROM_SCALE["A4"] = 99;
	Y_FROM_SCALE["G4"] = 148;
	Y_FROM_SCALE["F4"] = 198;
	Y_FROM_SCALE["E4"] = 249;
	Y_FROM_SCALE["D4"] = 297;
	Y_FROM_SCALE["C4"] = 346;
}