var ILLUST = null;
var THUMBNAILBUTTON = null;
var THUMBNAIL = null;

function defineStoryData() {
	ILLUST = new Array(13);
	ILLUST["background"] = new Array(4);
	ILLUST["background"]["empty"] = new Array(2);
	ILLUST["background"]["empty"][null] = "story_backgroundIllust_empty";
	ILLUST["background"]["empty"]["dark"] = "story_backgroundIllust_emptyDark";
	ILLUST["background"]["sunny"] = new Array(8);
	ILLUST["background"]["sunny"]["forest1"] = "story_backgroundIllust_sunnyForest1";
	ILLUST["background"]["sunny"]["forest2"] = "story_backgroundIllust_sunnyForest2";
	ILLUST["background"]["sunny"]["river1"] = "story_backgroundIllust_sunnyRiver1";
	ILLUST["background"]["sunny"]["river2"] = "story_backgroundIllust_sunnyRiver2";
	ILLUST["background"]["sunny"]["town1"] = "story_backgroundIllust_sunnyTown1";
	ILLUST["background"]["sunny"]["town2"] = "story_backgroundIllust_sunnyTown2";
	ILLUST["background"]["sunny"]["house1"] = "story_backgroundIllust_sunnyHouse1";
	ILLUST["background"]["sunny"]["house2"] = "story_backgroundIllust_sunnyHouse2";
	ILLUST["background"]["cloud"] = new Array(8);
	ILLUST["background"]["cloud"]["forest1"] = "story_backgroundIllust_cloudForest1";
	ILLUST["background"]["cloud"]["forest2"] = "story_backgroundIllust_cloudForest2";
	ILLUST["background"]["cloud"]["river1"] = "story_backgroundIllust_cloudRiver1";
	ILLUST["background"]["cloud"]["river2"] = "story_backgroundIllust_cloudRiver2";
	ILLUST["background"]["cloud"]["town1"] = "story_backgroundIllust_cloudTown1";
	ILLUST["background"]["cloud"]["town2"] = "story_backgroundIllust_cloudTown2";
	ILLUST["background"]["cloud"]["house1"] = "story_backgroundIllust_cloudHouse1";
	ILLUST["background"]["cloud"]["house2"] = "story_backgroundIllust_cloudHouse2";
	ILLUST["background"]["night"] = new Array(8);
	ILLUST["background"]["night"]["forest1"] = "story_backgroundIllust_nightForest1";
	ILLUST["background"]["night"]["forest2"] = "story_backgroundIllust_nightForest2";
	ILLUST["background"]["night"]["river1"] = "story_backgroundIllust_nightRiver1";
	ILLUST["background"]["night"]["river2"] = "story_backgroundIllust_nightRiver2";
	ILLUST["background"]["night"]["town1"] = "story_backgroundIllust_nightTown1";
	ILLUST["background"]["night"]["town2"] = "story_backgroundIllust_nightTown2";
	ILLUST["background"]["night"]["house1"] = "story_backgroundIllust_nightHouse1";
	ILLUST["background"]["night"]["house2"] = "story_backgroundIllust_nightHouse2";
	ILLUST["man"] = new Array(4);
	ILLUST["man"]["glad"] = new Array(4);
	ILLUST["man"]["glad"]["front"] = {
		image : "story_humanIllust_manGladFront", width : 48, height : 137
	};
	ILLUST["man"]["glad"]["back"] = {
		image : "story_humanIllust_manGladBack", width : 46, height : 136
	};
	ILLUST["man"]["glad"]["right"] = {
		image : "story_humanIllust_manGladRight", width : 38, height : 135
	};
	ILLUST["man"]["glad"]["left"] = {
		image : "story_humanIllust_manGladLeft", width : 36, height : 135
	};
	ILLUST["man"]["angry"] = new Array(4);
	ILLUST["man"]["angry"]["front"] = {
		image : "story_humanIllust_manAngryFront", width : 48, height : 137
	};
	ILLUST["man"]["angry"]["back"] = {
		image : "story_humanIllust_manAngryBack", width : 46, height : 136
	};
	ILLUST["man"]["angry"]["right"] = {
		image : "story_humanIllust_manAngryRight", width : 38, height : 135
	};
	ILLUST["man"]["angry"]["left"] = {
		image : "story_humanIllust_manAngryLeft", width : 36, height : 135
	};
	ILLUST["man"]["sad"] = new Array(4);
	ILLUST["man"]["sad"]["front"] = {
		image : "story_humanIllust_manSadFront", width : 48, height : 137
	};
	ILLUST["man"]["sad"]["back"] = {
		image : "story_humanIllust_manSadBack", width : 46, height : 136
	};
	ILLUST["man"]["sad"]["right"] = {
		image : "story_humanIllust_manSadRight", width : 38, height : 135
	};
	ILLUST["man"]["sad"]["left"] = {
		image : "story_humanIllust_manSadLeft", width : 36, height : 135
	};
	ILLUST["man"]["enjoy"] = new Array(4);
	ILLUST["man"]["enjoy"]["front"] = {
		image : "story_humanIllust_manEnjoyFront", width : 48, height : 137
	};
	ILLUST["man"]["enjoy"]["back"] = {
		image : "story_humanIllust_manEnjoyBack", width : 46, height : 136
	};
	ILLUST["man"]["enjoy"]["right"] = {
		image : "story_humanIllust_manEnjoyRight", width : 38, height : 135
	};
	ILLUST["man"]["enjoy"]["left"] = {
		image : "story_humanIllust_manEnjoyLeft", width : 36, height : 135
	};
	ILLUST["lady"] = new Array(4);
	ILLUST["lady"]["glad"] = new Array(4);
	ILLUST["lady"]["glad"]["front"] = {
		image : "story_humanIllust_ladyGladFront", width : 48, height : 125
	};
	ILLUST["lady"]["glad"]["back"] = {
		image : "story_humanIllust_ladyGladBack", width : 45, height : 124
	};
	ILLUST["lady"]["glad"]["right"] = {
		image : "story_humanIllust_ladyGladRight", width : 34, height : 127
	};
	ILLUST["lady"]["glad"]["left"] = {
		image : "story_humanIllust_ladyGladLeft", width : 34, height : 127
	};
	ILLUST["lady"]["angry"] = new Array(4);
	ILLUST["lady"]["angry"]["front"] = {
		image : "story_humanIllust_ladyAngryFront", width : 48, height : 125
	};
	ILLUST["lady"]["angry"]["back"] = {
		image : "story_humanIllust_ladyAngryBack", width : 45, height : 124
	};
	ILLUST["lady"]["angry"]["right"] = {
		image : "story_humanIllust_ladyAngryRight", width : 34, height : 127
	};
	ILLUST["lady"]["angry"]["left"] = {
		image : "story_humanIllust_ladyAngryLeft", width : 34, height : 127
	};
	ILLUST["lady"]["sad"] = new Array(4);
	ILLUST["lady"]["sad"]["front"] = {
		image : "story_humanIllust_ladySadFront", width : 48, height : 125
	};
	ILLUST["lady"]["sad"]["back"] = {
		image : "story_humanIllust_ladySadBack", width : 45, height : 124
	};
	ILLUST["lady"]["sad"]["right"] = {
		image : "story_humanIllust_ladySadRight", width : 34, height : 127
	};
	ILLUST["lady"]["sad"]["left"] = {
		image : "story_humanIllust_ladySadLeft", width : 34, height : 127
	};
	ILLUST["lady"]["enjoy"] = new Array(4);
	ILLUST["lady"]["enjoy"]["front"] = {
		image : "story_humanIllust_ladyEnjoyFront", width : 48, height : 125
	};
	ILLUST["lady"]["enjoy"]["back"] = {
		image : "story_humanIllust_ladyEnjoyBack", width : 45, height : 124
	};
	ILLUST["lady"]["enjoy"]["right"] = {
		image : "story_humanIllust_ladyEnjoyRight", width : 34, height : 127
	};
	ILLUST["lady"]["enjoy"]["left"] = {
		image : "story_humanIllust_ladyEnjoyLeft", width : 34, height : 127
	};
	ILLUST["boy"] = new Array(4);
	ILLUST["boy"]["glad"] = new Array(4);
	ILLUST["boy"]["glad"]["front"] = {
		image : "story_humanIllust_boyGladFront", width : 47, height : 109
	};
	ILLUST["boy"]["glad"]["back"] = {
		image : "story_humanIllust_boyGladBack", width : 45, height : 109
	};
	ILLUST["boy"]["glad"]["right"] = {
		image : "story_humanIllust_boyGladRight", width : 32, height : 109
	};
	ILLUST["boy"]["glad"]["left"] = {
		image : "story_humanIllust_boyGladLeft", width : 32, height : 109
	};
	ILLUST["boy"]["angry"] = new Array(4);
	ILLUST["boy"]["angry"]["front"] = {
		image : "story_humanIllust_boyAngryFront", width : 47, height : 109
	};
	ILLUST["boy"]["angry"]["back"] = {
		image : "story_humanIllust_boyAngryBack", width : 45, height : 109
	};
	ILLUST["boy"]["angry"]["right"] = {
		image : "story_humanIllust_boyAngryRight", width : 32, height : 109
	};
	ILLUST["boy"]["angry"]["left"] = {
		image : "story_humanIllust_boyAngryLeft", width : 32, height : 109
	};
	ILLUST["boy"]["sad"] = new Array(4);
	ILLUST["boy"]["sad"]["front"] = {
		image : "story_humanIllust_boySadFront", width : 47, height : 109
	};
	ILLUST["boy"]["sad"]["back"] = {
		image : "story_humanIllust_boySadBack", width : 45, height : 109
	};
	ILLUST["boy"]["sad"]["right"] = {
		image : "story_humanIllust_boySadRight", width : 32, height : 109
	};
	ILLUST["boy"]["sad"]["left"] = {
		image : "story_humanIllust_boySadLeft", width : 32, height : 109
	};
	ILLUST["boy"]["enjoy"] = new Array(4);
	ILLUST["boy"]["enjoy"]["front"] = {
		image : "story_humanIllust_boyEnjoyFront", width : 47, height : 109
	};
	ILLUST["boy"]["enjoy"]["back"] = {
		image : "story_humanIllust_boyEnjoyBack", width : 45, height : 109
	};
	ILLUST["boy"]["enjoy"]["right"] = {
		image : "story_humanIllust_boyEnjoyRight", width : 32, height : 109
	};
	ILLUST["boy"]["enjoy"]["left"] = {
		image : "story_humanIllust_boyEnjoyLeft", width : 32, height : 109
	};
	ILLUST["girl"] = new Array(4);
	ILLUST["girl"]["glad"] = new Array(4);
	ILLUST["girl"]["glad"]["front"] = {
		image : "story_humanIllust_girlGladFront", width : 50, height : 107
	};
	ILLUST["girl"]["glad"]["back"] = {
		image : "story_humanIllust_girlGladBack", width : 51, height : 106
	};
	ILLUST["girl"]["glad"]["right"] = {
		image : "story_humanIllust_girlGladRight", width : 43, height : 107
	};
	ILLUST["girl"]["glad"]["left"] = {
		image : "story_humanIllust_girlGladLeft", width : 43, height : 107
	};
	ILLUST["girl"]["angry"] = new Array(4);
	ILLUST["girl"]["angry"]["front"] = {
		image : "story_humanIllust_girlAngryFront", width : 50, height : 107
	};
	ILLUST["girl"]["angry"]["back"] = {
		image : "story_humanIllust_girlAngryBack", width : 51, height : 106
	};
	ILLUST["girl"]["angry"]["right"] = {
		image : "story_humanIllust_girlAngryRight", width : 43, height : 107
	};
	ILLUST["girl"]["angry"]["left"] = {
		image : "story_humanIllust_girlAngryLeft", width : 43, height : 107
	};
	ILLUST["girl"]["sad"] = new Array(4);
	ILLUST["girl"]["sad"]["front"] = {
		image : "story_humanIllust_girlSadFront", width : 50, height : 107
	};
	ILLUST["girl"]["sad"]["back"] = {
		image : "story_humanIllust_girlSadBack", width : 51, height : 106
	};
	ILLUST["girl"]["sad"]["right"] = {
		image : "story_humanIllust_girlSadRight", width : 43, height : 107
	};
	ILLUST["girl"]["sad"]["left"] = {
		image : "story_humanIllust_girlSadLeft", width : 43, height : 107
	};
	ILLUST["girl"]["enjoy"] = new Array(4);
	ILLUST["girl"]["enjoy"]["front"] = {
		image : "story_humanIllust_girlEnjoyFront", width : 50, height : 107
	};
	ILLUST["girl"]["enjoy"]["back"] = {
		image : "story_humanIllust_girlEnjoyBack", width : 51, height : 106
	};
	ILLUST["girl"]["enjoy"]["right"] = {
		image : "story_humanIllust_girlEnjoyRight", width : 43, height : 107
	};
	ILLUST["girl"]["enjoy"]["left"] = {
		image : "story_humanIllust_girlEnjoyLeft", width : 43, height : 107
	};
	ILLUST["dog"] = new Array(4);
	ILLUST["dog"]["glad"] = new Array(4);
	ILLUST["dog"]["glad"]["front"] = {
		image : "story_animalIllust_dogGladFront", width : 46, height : 73
	};
	ILLUST["dog"]["glad"]["back"] = {
		image : "story_animalIllust_dogGladBack", width : 49, height : 76
	};
	ILLUST["dog"]["glad"]["right"] = {
		image : "story_animalIllust_dogGladRight", width : 78, height : 75
	};
	ILLUST["dog"]["glad"]["left"] = {
		image : "story_animalIllust_dogGladLeft", width : 81, height : 75
	};
	ILLUST["dog"]["angry"] = new Array(4);
	ILLUST["dog"]["angry"]["front"] = {
		image : "story_animalIllust_dogAngryFront", width : 46, height : 73
	};
	ILLUST["dog"]["angry"]["back"] = {
		image : "story_animalIllust_dogAngryBack", width : 49, height : 76
	};
	ILLUST["dog"]["angry"]["right"] = {
		image : "story_animalIllust_dogAngryRight", width : 78, height : 75
	};
	ILLUST["dog"]["angry"]["left"] = {
		image : "story_animalIllust_dogAngryLeft", width : 81, height : 75
	};
	ILLUST["dog"]["sad"] = new Array(4);
	ILLUST["dog"]["sad"]["front"] = {
		image : "story_animalIllust_dogSadFront", width : 47, height : 75
	};
	ILLUST["dog"]["sad"]["back"] = {
		image : "story_animalIllust_dogSadBack", width : 49, height : 76
	};
	ILLUST["dog"]["sad"]["right"] = {
		image : "story_animalIllust_dogSadRight", width : 78, height : 75
	};
	ILLUST["dog"]["sad"]["left"] = {
		image : "story_animalIllust_dogSadLeft", width : 81, height : 75
	};
	ILLUST["dog"]["enjoy"] = new Array(4);
	ILLUST["dog"]["enjoy"]["front"] = {
		image : "story_animalIllust_dogEnjoyFront", width : 47, height : 75
	};
	ILLUST["dog"]["enjoy"]["back"] = {
		image : "story_animalIllust_dogEnjoyBack", width : 49, height : 76
	};
	ILLUST["dog"]["enjoy"]["right"] = {
		image : "story_animalIllust_dogEnjoyRight", width : 78, height : 75
	};
	ILLUST["dog"]["enjoy"]["left"] = {
		image : "story_animalIllust_dogEnjoyLeft", width : 79, height : 75
	};
	ILLUST["bird"] = new Array(4);
	ILLUST["bird"]["glad"] = new Array(4);
	ILLUST["bird"]["glad"]["front"] = {
		image : "story_animalIllust_birdGladFront", width : 43, height : 48
	};
	ILLUST["bird"]["glad"]["back"] = {
		image : "story_animalIllust_birdGladBack", width : 44, height : 46
	};
	ILLUST["bird"]["glad"]["right"] = {
		image : "story_animalIllust_birdGladRight", width : 30, height : 44
	};
	ILLUST["bird"]["glad"]["left"] = {
		image : "story_animalIllust_birdGladLeft", width : 32, height : 44
	};
	ILLUST["bird"]["angry"] = new Array(4);
	ILLUST["bird"]["angry"]["front"] = {
		image : "story_animalIllust_birdAngryFront", width : 43, height : 48
	};
	ILLUST["bird"]["angry"]["back"] = {
		image : "story_animalIllust_birdAngryBack", width : 44, height : 46
	};
	ILLUST["bird"]["angry"]["right"] = {
		image : "story_animalIllust_birdAngryRight", width : 30, height : 44
	};
	ILLUST["bird"]["angry"]["left"] = {
		image : "story_animalIllust_birdAngryLeft", width : 32, height : 44
	};
	ILLUST["bird"]["sad"] = new Array(4);
	ILLUST["bird"]["sad"]["front"] = {
		image : "story_animalIllust_birdSadFront", width : 43, height : 48
	};
	ILLUST["bird"]["sad"]["back"] = {
		image : "story_animalIllust_birdSadBack", width : 44, height : 46
	};
	ILLUST["bird"]["sad"]["right"] = {
		image : "story_animalIllust_birdSadRight", width : 30, height : 44
	};
	ILLUST["bird"]["sad"]["left"] = {
		image : "story_animalIllust_birdSadLeft", width : 32, height : 44
	};
	ILLUST["bird"]["enjoy"] = new Array(4);
	ILLUST["bird"]["enjoy"]["front"] = {
		image : "story_animalIllust_birdEnjoyFront", width : 43, height : 48
	};
	ILLUST["bird"]["enjoy"]["back"] = {
		image : "story_animalIllust_birdEnjoyBack", width : 44, height : 46
	};
	ILLUST["bird"]["enjoy"]["right"] = {
		image : "story_animalIllust_birdEnjoyRight", width : 30, height : 44
	};
	ILLUST["bird"]["enjoy"]["left"] = {
		image : "story_animalIllust_birdEnjoyLeft", width : 32, height : 44
	};
	ILLUST["bear"] = new Array(4);
	ILLUST["bear"]["glad"] = new Array(4);
	ILLUST["bear"]["glad"]["front"] = {
		image : "story_animalIllust_bearGladFront", width : 52, height : 107
	};
	ILLUST["bear"]["glad"]["back"] = {
		image : "story_animalIllust_bearGladBack", width : 49, height : 106
	};
	ILLUST["bear"]["glad"]["right"] = {
		image : "story_animalIllust_bearGladRight", width : 39, height : 107
	};
	ILLUST["bear"]["glad"]["left"] = {
		image : "story_animalIllust_bearGladLeft", width : 39, height : 107
	};
	ILLUST["bear"]["angry"] = new Array(4);
	ILLUST["bear"]["angry"]["front"] = {
		image : "story_animalIllust_bearAngryFront", width : 52, height : 107
	};
	ILLUST["bear"]["angry"]["back"] = {
		image : "story_animalIllust_bearAngryBack", width : 49, height : 106
	};
	ILLUST["bear"]["angry"]["right"] = {
		image : "story_animalIllust_bearAngryRight", width : 39, height : 107
	};
	ILLUST["bear"]["angry"]["left"] = {
		image : "story_animalIllust_bearAngryLeft", width : 39, height : 107
	};
	ILLUST["bear"]["sad"] = new Array(4);
	ILLUST["bear"]["sad"]["front"] = {
		image : "story_animalIllust_bearSadFront", width : 52, height : 107
	};
	ILLUST["bear"]["sad"]["back"] = {
		image : "story_animalIllust_bearSadBack", width : 49, height : 106
	};
	ILLUST["bear"]["sad"]["right"] = {
		image : "story_animalIllust_bearSadRight", width : 39, height : 107
	};
	ILLUST["bear"]["sad"]["left"] = {
		image : "story_animalIllust_bearSadLeft", width : 39, height : 107
	};
	ILLUST["bear"]["enjoy"] = new Array(4);
	ILLUST["bear"]["enjoy"]["front"] = {
		image : "story_animalIllust_bearEnjoyFront", width : 52, height : 108
	};
	ILLUST["bear"]["enjoy"]["back"] = {
		image : "story_animalIllust_bearEnjoyBack", width : 49, height : 106
	};
	ILLUST["bear"]["enjoy"]["right"] = {
		image : "story_animalIllust_bearEnjoyRight", width : 39, height : 107
	};
	ILLUST["bear"]["enjoy"]["left"] = {
		image : "story_animalIllust_bearEnjoyLeft", width : 39, height : 107
	};
	ILLUST["turtle"] = new Array(4);
	ILLUST["turtle"]["glad"] = new Array(4);
	ILLUST["turtle"]["glad"]["front"] = {
		image : "story_animalIllust_turtleGladFront", width : 56, height : 49
	};
	ILLUST["turtle"]["glad"]["back"] = {
		image : "story_animalIllust_turtleGladBack", width : 53, height : 48
	};
	ILLUST["turtle"]["glad"]["right"] = {
		image : "story_animalIllust_turtleGladRight", width : 74, height : 41
	};
	ILLUST["turtle"]["glad"]["left"] = {
		image : "story_animalIllust_turtleGladLeft", width : 75, height : 41
	};
	ILLUST["turtle"]["angry"] = new Array(4);
	ILLUST["turtle"]["angry"]["front"] = {
		image : "story_animalIllust_turtleAngryFront", width : 56, height : 49
	};
	ILLUST["turtle"]["angry"]["back"] = {
		image : "story_animalIllust_turtleAngryBack", width : 53, height : 48
	};
	ILLUST["turtle"]["angry"]["right"] = {
		image : "story_animalIllust_turtleAngryRight", width : 74, height : 41
	};
	ILLUST["turtle"]["angry"]["left"] = {
		image : "story_animalIllust_turtleAngryLeft", width : 75, height : 41
	};
	ILLUST["turtle"]["sad"] = new Array(4);
	ILLUST["turtle"]["sad"]["front"] = {
		image : "story_animalIllust_turtleSadFront", width : 56, height : 49
	};
	ILLUST["turtle"]["sad"]["back"] = {
		image : "story_animalIllust_turtleSadBack", width : 53, height : 48
	};
	ILLUST["turtle"]["sad"]["right"] = {
		image : "story_animalIllust_turtleSadRight", width : 74, height : 41
	};
	ILLUST["turtle"]["sad"]["left"] = {
		image : "story_animalIllust_turtleSadLeft", width : 75, height : 41
	};
	ILLUST["turtle"]["enjoy"] = new Array(4);
	ILLUST["turtle"]["enjoy"]["front"] = {
		image : "story_animalIllust_turtleEnjoyFront", width : 56, height : 49
	};
	ILLUST["turtle"]["enjoy"]["back"] = {
		image : "story_animalIllust_turtleEnjoyBack", width : 53, height : 48
	};
	ILLUST["turtle"]["enjoy"]["right"] = {
		image : "story_animalIllust_turtleEnjoyRight", width : 74, height : 41
	};
	ILLUST["turtle"]["enjoy"]["left"] = {
		image : "story_animalIllust_turtleEnjoyLeft", width : 76, height : 41
	};
	ILLUST["item"] = new Array(4);
	ILLUST["item"]["food"] = new Array(8);
	ILLUST["item"]["food"]["apple"] = {
		image : "story_itemIllust_foodApple", width : 30, height : 35
	};
	ILLUST["item"]["food"]["coffee"] = {
		image : "story_itemIllust_foodCoffee", width : 37, height : 32
	};
	ILLUST["item"]["food"]["onigiri"] = {
		image : "story_itemIllust_foodOnigiri", width : 33, height : 27
	};
	ILLUST["item"]["food"]["patty"] = {
		image : "story_itemIllust_foodPatty", width : 48, height : 35
	};
	ILLUST["item"]["food"]["pudding"] = {
		image : "story_itemIllust_foodPudding", width : 45, height : 37
	};
	ILLUST["item"]["food"]["fish"] = {
		image : "story_itemIllust_foodFish", width : 42, height : 22
	};
	ILLUST["item"]["food"]["nut"] = {
		image : "story_itemIllust_foodNut", width : 27, height : 38
	};
	ILLUST["item"]["food"]["dogfood"] = {
		image : "story_itemIllust_foodDogfood", width : 43, height : 26
	};
	ILLUST["item"]["fashion"] = new Array(8);
	ILLUST["item"]["fashion"]["blackBag"] = {
		image : "story_itemIllust_fashionBlackBag", width : 31, height : 34
	};
	ILLUST["item"]["fashion"]["redBag"] = {
		image : "story_itemIllust_fashionRedBag", width : 28, height : 30
	};
	ILLUST["item"]["fashion"]["blueCap"] = {
		image : "story_itemIllust_fashionBlueCap", width : 39, height : 22
	};
	ILLUST["item"]["fashion"]["greenCap"] = {
		image : "story_itemIllust_fashionGreenCap", width : 38, height : 23
	};
	ILLUST["item"]["fashion"]["pinkCap"] = {
		image : "story_itemIllust_fashionPinkCap", width : 39, height : 24
	};
	ILLUST["item"]["fashion"]["summerCap"] = {
		image : "story_itemIllust_fashionSummerCap", width : 45, height : 23
	};
	ILLUST["item"]["fashion"]["yellowCap"] = {
		image : "story_itemIllust_fashionYellowCap", width : 42, height : 23
	};
	ILLUST["item"]["fashion"]["ribbon"] = {
		image : "story_itemIllust_fashionRibbon", width : 27, height : 23
	};
	ILLUST["item"]["interior"] = new Array(8);
	ILLUST["item"]["interior"]["leftChair"] = {
		image : "story_itemIllust_interiorLeftChair", width : 48, height : 77
	};
	ILLUST["item"]["interior"]["table"] = {
		image : "story_itemIllust_interiorTable", width : 146, height : 73
	};
	ILLUST["item"]["interior"]["rightChair"] = {
		image : "story_itemIllust_interiorRightChair", width : 47, height : 75
	};
	ILLUST["item"]["interior"]["clock"] = {
		image : "story_itemIllust_interiorClock", width : 45, height : 42
	};
	ILLUST["item"]["interior"]["chest"] = {
		image : "story_itemIllust_interiorChest", width : 60, height : 115
	};
	ILLUST["item"]["interior"]["bookShelf"] = {
		image : "story_itemIllust_interiorBookShelf", width : 56, height : 103
	};
	ILLUST["item"]["interior"]["dresser"] = {
		image : "story_itemIllust_interiorDresser", width : 42, height : 99
	};
	ILLUST["item"]["interior"]["television"] = {
		image : "story_itemIllust_interiorTelevision", width : 56, height : 71
	};
	ILLUST["item"]["goods"] = new Array(8);
	ILLUST["item"]["goods"]["butterflyNet"] = {
		image : "story_itemIllust_goodsButterflyNet", width : 58, height : 54
	};
	ILLUST["item"]["goods"]["insectCage"] = {
		image : "story_itemIllust_goodsInsectCage", width : 28, height : 28
	};
	ILLUST["item"]["goods"]["beetle"] = {
		image : "story_itemIllust_goodsBeetle", width : 15, height : 27
	};
	ILLUST["item"]["goods"]["rabbitDoll"] = {
		image : "story_itemIllust_goodsRabbitDoll", width : 38, height : 41
	};
	ILLUST["item"]["goods"]["trumpet"] = {
		image : "story_itemIllust_goodsTrumpet", width : 39, height : 27
	};
	ILLUST["item"]["goods"]["soccerBall"] = {
		image : "story_itemIllust_goodsSoccerBall", width : 30, height : 31
	};
	ILLUST["item"]["goods"]["cellPhone"] = {
		image : "story_itemIllust_goodsCellPhone", width : 22, height : 36
	};
	ILLUST["item"]["goods"]["car"] = {
		image : "story_itemIllust_goodsCar", width : 153, height : 113
	};
	THUMBNAILBUTTON = new Array(11);
	THUMBNAILBUTTON["sunny"] = {
		image : "story_thumbnailButton_sunny", width : 86, height : 76, x : 353, y : 114
	};
	THUMBNAILBUTTON["cloud"] = {
		image : "story_thumbnailButton_cloud", width : 86, height : 76, x : 469, y : 114
	};
	THUMBNAILBUTTON["night"] = {
		image : "story_thumbnailButton_night", width : 86, height : 76, x : 585, y : 114
	};
	THUMBNAILBUTTON["man"] = {
		image : "story_thumbnailButton_man", width : 86, height : 76, x : 295, y : 114
	};
	THUMBNAILBUTTON["lady"] = {
		image : "story_thumbnailButton_lady", width : 86, height : 76, x : 411, y : 114
	};
	THUMBNAILBUTTON["boy"] = {
		image : "story_thumbnailButton_boy", width : 86, height : 76, x : 527, y : 114
	};
	THUMBNAILBUTTON["girl"] = {
		image : "story_thumbnailButton_girl", width : 86, height : 76, x : 643, y : 114
	};
	THUMBNAILBUTTON["dog"] = {
		image : "story_thumbnailButton_dog", width : 86, height : 76, x : 295, y : 114
	};
	THUMBNAILBUTTON["bird"] = {
		image : "story_thumbnailButton_bird", width : 86, height : 76, x : 411, y : 114
	};
	THUMBNAILBUTTON["bear"] = {
		image : "story_thumbnailButton_bear", width : 86, height : 76, x : 527, y : 114
	};
	THUMBNAILBUTTON["turtle"] = {
		image : "story_thumbnailButton_turtle", width : 86, height : 76, x : 643, y : 114
	};
	THUMBNAIL = new Array(15);
	THUMBNAIL["sunny"] = new Array(8);
	THUMBNAIL["sunny"]["forest1"] = {
		image : "story_backgroundThumbnail_sunnyForest1", width : 200, height : 133, x : 52, y : 234
	};
	THUMBNAIL["sunny"]["forest2"] = {
		image : "story_backgroundThumbnail_sunnyForest2", width : 200, height : 133, x : 52, y : 434
	};
	THUMBNAIL["sunny"]["river1"] = {
		image : "story_backgroundThumbnail_sunnyRiver1", width : 200, height : 133, x : 292, y : 234
	};
	THUMBNAIL["sunny"]["river2"] = {
		image : "story_backgroundThumbnail_sunnyRiver2", width : 200, height : 133, x : 292, y : 434
	};
	THUMBNAIL["sunny"]["town1"] = {
		image : "story_backgroundThumbnail_sunnyTown1", width : 200, height : 133, x : 532, y : 234
	};
	THUMBNAIL["sunny"]["town2"] = {
		image : "story_backgroundThumbnail_sunnyTown2", width : 200, height : 133, x : 532, y : 434
	};
	THUMBNAIL["sunny"]["house1"] = {
		image : "story_backgroundThumbnail_sunnyHouse1", width : 200, height : 133, x : 772, y : 234
	};
	THUMBNAIL["sunny"]["house2"] = {
		image : "story_backgroundThumbnail_sunnyHouse2", width : 200, height : 133, x : 772, y : 434
	};
	THUMBNAIL["cloud"] = new Array(8);
	THUMBNAIL["cloud"]["forest1"] = {
		image : "story_backgroundThumbnail_cloudForest1", width : 200, height : 133, x : 52, y : 234
	};
	THUMBNAIL["cloud"]["forest2"] = {
		image : "story_backgroundThumbnail_cloudForest2", width : 200, height : 133, x : 52, y : 434
	};
	THUMBNAIL["cloud"]["river1"] = {
		image : "story_backgroundThumbnail_cloudRiver1", width : 200, height : 133, x : 292, y : 234
	};
	THUMBNAIL["cloud"]["river2"] = {
		image : "story_backgroundThumbnail_cloudRiver2", width : 200, height : 133, x : 292, y : 434
	};
	THUMBNAIL["cloud"]["town1"] = {
		image : "story_backgroundThumbnail_cloudTown1", width : 200, height : 133, x : 532, y : 234
	};
	THUMBNAIL["cloud"]["town2"] = {
		image : "story_backgroundThumbnail_cloudTown2", width : 200, height : 133, x : 532, y : 434
	};
	THUMBNAIL["cloud"]["house1"] = {
		image : "story_backgroundThumbnail_cloudHouse1", width : 200, height : 133, x : 772, y : 234
	};
	THUMBNAIL["cloud"]["house2"] = {
		image : "story_backgroundThumbnail_cloudHouse2", width : 200, height : 133, x : 772, y : 434
	};
	THUMBNAIL["night"] = new Array(8);
	THUMBNAIL["night"]["forest1"] = {
		image : "story_backgroundThumbnail_nightForest1", width : 200, height : 133, x : 52, y : 234
	};
	THUMBNAIL["night"]["forest2"] = {
		image : "story_backgroundThumbnail_nightForest2", width : 200, height : 133, x : 52, y : 434
	};
	THUMBNAIL["night"]["river1"] = {
		image : "story_backgroundThumbnail_nightRiver1", width : 200, height : 133, x : 292, y : 234
	};
	THUMBNAIL["night"]["river2"] = {
		image : "story_backgroundThumbnail_nightRiver2", width : 200, height : 133, x : 292, y : 434
	};
	THUMBNAIL["night"]["town1"] = {
		image : "story_backgroundThumbnail_nightTown1", width : 200, height : 133, x : 532, y : 234
	};
	THUMBNAIL["night"]["town2"] = {
		image : "story_backgroundThumbnail_nightTown2", width : 200, height : 133, x : 532, y : 434
	};
	THUMBNAIL["night"]["house1"] = {
		image : "story_backgroundThumbnail_nightHouse1", width : 200, height : 133, x : 772, y : 234
	};
	THUMBNAIL["night"]["house2"] = {
		image : "story_backgroundThumbnail_nightHouse2", width : 200, height : 133, x : 772, y : 434
	};
	THUMBNAIL["man"] = new Array(4);
	THUMBNAIL["man"]["glad"] = new Array(4);
	THUMBNAIL["man"]["glad"]["front"] = {
		image : "story_humanIllust_manGladFront", width : 48, height : 137, x : 82, y : 284
	};
	THUMBNAIL["man"]["glad"]["back"] = {
		image : "story_humanIllust_manGladBack", width : 46, height : 136, x : 172, y : 284
	};
	THUMBNAIL["man"]["glad"]["right"] = {
		image : "story_humanIllust_manGladRight", width : 38, height : 135, x : 82, y : 434
	};
	THUMBNAIL["man"]["glad"]["left"] = {
		image : "story_humanIllust_manGladLeft", width : 36, height : 135, x : 172, y : 434
	};
	THUMBNAIL["man"]["angry"] = new Array(4);
	THUMBNAIL["man"]["angry"]["front"] = {
		image : "story_humanIllust_manAngryFront", width : 48, height : 137, x : 322, y : 284
	};
	THUMBNAIL["man"]["angry"]["back"] = {
		image : "story_humanIllust_manAngryBack", width : 46, height : 136, x : 412, y : 284
	};
	THUMBNAIL["man"]["angry"]["right"] = {
		image : "story_humanIllust_manAngryRight", width : 38, height : 135, x : 322, y : 434
	};
	THUMBNAIL["man"]["angry"]["left"] = {
		image : "story_humanIllust_manAngryLeft", width : 36, height : 135, x : 412, y : 434
	};
	THUMBNAIL["man"]["sad"] = new Array(4);
	THUMBNAIL["man"]["sad"]["front"] = {
		image : "story_humanIllust_manSadFront", width : 48, height : 137, x : 562, y : 284
	};
	THUMBNAIL["man"]["sad"]["back"] = {
		image : "story_humanIllust_manSadBack", width : 46, height : 136, x : 652, y : 284
	};
	THUMBNAIL["man"]["sad"]["right"] = {
		image : "story_humanIllust_manSadRight", width : 38, height : 135, x : 562, y : 434
	};
	THUMBNAIL["man"]["sad"]["left"] = {
		image : "story_humanIllust_manSadLeft", width : 36, height : 135, x : 652, y : 434
	};
	THUMBNAIL["man"]["enjoy"] = new Array(4);
	THUMBNAIL["man"]["enjoy"]["front"] = {
		image : "story_humanIllust_manEnjoyFront", width : 48, height : 137, x : 802, y : 284
	};
	THUMBNAIL["man"]["enjoy"]["back"] = {
		image : "story_humanIllust_manEnjoyBack", width : 46, height : 136, x : 892, y : 284
	};
	THUMBNAIL["man"]["enjoy"]["right"] = {
		image : "story_humanIllust_manEnjoyRight", width : 38, height : 135, x : 802, y : 434
	};
	THUMBNAIL["man"]["enjoy"]["left"] = {
		image : "story_humanIllust_manEnjoyLeft", width : 36, height : 135, x : 892, y : 434
	};
	THUMBNAIL["lady"] = new Array(4);
	THUMBNAIL["lady"]["glad"] = new Array(4);
	THUMBNAIL["lady"]["glad"]["front"] = {
		image : "story_humanIllust_ladyGladFront", width : 48, height : 125, x : 82, y : 284
	};
	THUMBNAIL["lady"]["glad"]["back"] = {
		image : "story_humanIllust_ladyGladBack", width : 45, height : 124, x : 172, y : 284
	};
	THUMBNAIL["lady"]["glad"]["right"] = {
		image : "story_humanIllust_ladyGladRight", width : 34, height : 127, x : 82, y : 434
	};
	THUMBNAIL["lady"]["glad"]["left"] = {
		image : "story_humanIllust_ladyGladLeft", width : 34, height : 127, x : 172, y : 434
	};
	THUMBNAIL["lady"]["angry"] = new Array(4);
	THUMBNAIL["lady"]["angry"]["front"] = {
		image : "story_humanIllust_ladyAngryFront", width : 48, height : 125, x : 322, y : 284
	};
	THUMBNAIL["lady"]["angry"]["back"] = {
		image : "story_humanIllust_ladyAngryBack", width : 45, height : 124, x : 412, y : 284
	};
	THUMBNAIL["lady"]["angry"]["right"] = {
		image : "story_humanIllust_ladyAngryRight", width : 34, height : 127, x : 322, y : 434
	};
	THUMBNAIL["lady"]["angry"]["left"] = {
		image : "story_humanIllust_ladyAngryLeft", width : 34, height : 127, x : 412, y : 434
	};
	THUMBNAIL["lady"]["sad"] = new Array(4);
	THUMBNAIL["lady"]["sad"]["front"] = {
		image : "story_humanIllust_ladySadFront", width : 48, height : 125, x : 562, y : 284
	};
	THUMBNAIL["lady"]["sad"]["back"] = {
		image : "story_humanIllust_ladySadBack", width : 45, height : 124, x : 652, y : 284
	};
	THUMBNAIL["lady"]["sad"]["right"] = {
		image : "story_humanIllust_ladySadRight", width : 34, height : 127, x : 562, y : 434
	};
	THUMBNAIL["lady"]["sad"]["left"] = {
		image : "story_humanIllust_ladySadLeft", width : 34, height : 127, x : 652, y : 434
	};
	THUMBNAIL["lady"]["enjoy"] = new Array(4);
	THUMBNAIL["lady"]["enjoy"]["front"] = {
		image : "story_humanIllust_ladyEnjoyFront", width : 48, height : 125, x : 802, y : 284
	};
	THUMBNAIL["lady"]["enjoy"]["back"] = {
		image : "story_humanIllust_ladyEnjoyBack", width : 45, height : 124, x : 892, y : 284
	};
	THUMBNAIL["lady"]["enjoy"]["right"] = {
		image : "story_humanIllust_ladyEnjoyRight", width : 34, height : 127, x : 802, y : 434
	};
	THUMBNAIL["lady"]["enjoy"]["left"] = {
		image : "story_humanIllust_ladyEnjoyLeft", width : 34, height : 127, x : 892, y : 434
	};
	THUMBNAIL["boy"] = new Array(4);
	THUMBNAIL["boy"]["glad"] = new Array(4);
	THUMBNAIL["boy"]["glad"]["front"] = {
		image : "story_humanIllust_boyGladFront", width : 47, height : 109, x : 82, y : 284
	};
	THUMBNAIL["boy"]["glad"]["back"] = {
		image : "story_humanIllust_boyGladBack", width : 45, height : 109, x : 172, y : 284
	};
	THUMBNAIL["boy"]["glad"]["right"] = {
		image : "story_humanIllust_boyGladRight", width : 32, height : 109, x : 82, y : 434
	};
	THUMBNAIL["boy"]["glad"]["left"] = {
		image : "story_humanIllust_boyGladLeft", width : 32, height : 109, x : 172, y : 434
	};
	THUMBNAIL["boy"]["angry"] = new Array(4);
	THUMBNAIL["boy"]["angry"]["front"] = {
		image : "story_humanIllust_boyAngryFront", width : 47, height : 109, x : 322, y : 284
	};
	THUMBNAIL["boy"]["angry"]["back"] = {
		image : "story_humanIllust_boyAngryBack", width : 45, height : 109, x : 412, y : 284
	};
	THUMBNAIL["boy"]["angry"]["right"] = {
		image : "story_humanIllust_boyAngryRight", width : 32, height : 109, x : 322, y : 434
	};
	THUMBNAIL["boy"]["angry"]["left"] = {
		image : "story_humanIllust_boyAngryLeft", width : 32, height : 109, x : 412, y : 434
	};
	THUMBNAIL["boy"]["sad"] = new Array(4);
	THUMBNAIL["boy"]["sad"]["front"] = {
		image : "story_humanIllust_boySadFront", width : 47, height : 109, x : 562, y : 284
	};
	THUMBNAIL["boy"]["sad"]["back"] = {
		image : "story_humanIllust_boySadBack", width : 45, height : 109, x : 652, y : 284
	};
	THUMBNAIL["boy"]["sad"]["right"] = {
		image : "story_humanIllust_boySadRight", width : 32, height : 109, x : 562, y : 434
	};
	THUMBNAIL["boy"]["sad"]["left"] = {
		image : "story_humanIllust_boySadLeft", width : 32, height : 109, x : 652, y : 434
	};
	THUMBNAIL["boy"]["enjoy"] = new Array(4);
	THUMBNAIL["boy"]["enjoy"]["front"] = {
		image : "story_humanIllust_boyEnjoyFront", width : 47, height : 109, x : 802, y : 284
	};
	THUMBNAIL["boy"]["enjoy"]["back"] = {
		image : "story_humanIllust_boyEnjoyBack", width : 45, height : 109, x : 892, y : 284
	};
	THUMBNAIL["boy"]["enjoy"]["right"] = {
		image : "story_humanIllust_boyEnjoyRight", width : 32, height : 109, x : 802, y : 434
	};
	THUMBNAIL["boy"]["enjoy"]["left"] = {
		image : "story_humanIllust_boyEnjoyLeft", width : 32, height : 109, x : 892, y : 434
	};
	THUMBNAIL["girl"] = new Array(4);
	THUMBNAIL["girl"]["glad"] = new Array(4);
	THUMBNAIL["girl"]["glad"]["front"] = {
		image : "story_humanIllust_girlGladFront", width : 50, height : 107, x : 82, y : 284
	};
	THUMBNAIL["girl"]["glad"]["back"] = {
		image : "story_humanIllust_girlGladBack", width : 51, height : 106, x : 172, y : 284
	};
	THUMBNAIL["girl"]["glad"]["right"] = {
		image : "story_humanIllust_girlGladRight", width : 43, height : 107, x : 82, y : 434
	};
	THUMBNAIL["girl"]["glad"]["left"] = {
		image : "story_humanIllust_girlGladLeft", width : 43, height : 107, x : 172, y : 434
	};
	THUMBNAIL["girl"]["angry"] = new Array(4);
	THUMBNAIL["girl"]["angry"]["front"] = {
		image : "story_humanIllust_girlAngryFront", width : 50, height : 107, x : 322, y : 284
	};
	THUMBNAIL["girl"]["angry"]["back"] = {
		image : "story_humanIllust_girlAngryBack", width : 51, height : 106, x : 412, y : 284
	};
	THUMBNAIL["girl"]["angry"]["right"] = {
		image : "story_humanIllust_girlAngryRight", width : 43, height : 107, x : 322, y : 434
	};
	THUMBNAIL["girl"]["angry"]["left"] = {
		image : "story_humanIllust_girlAngryLeft", width : 43, height : 107, x : 412, y : 434
	};
	THUMBNAIL["girl"]["sad"] = new Array(4);
	THUMBNAIL["girl"]["sad"]["front"] = {
		image : "story_humanIllust_girlSadFront", width : 50, height : 107, x : 562, y : 284
	};
	THUMBNAIL["girl"]["sad"]["back"] = {
		image : "story_humanIllust_girlSadBack", width : 51, height : 106, x : 652, y : 284
	};
	THUMBNAIL["girl"]["sad"]["right"] = {
		image : "story_humanIllust_girlSadRight", width : 43, height : 107, x : 562, y : 434
	};
	THUMBNAIL["girl"]["sad"]["left"] = {
		image : "story_humanIllust_girlSadLeft", width : 43, height : 107, x : 652, y : 434
	};
	THUMBNAIL["girl"]["enjoy"] = new Array(4);
	THUMBNAIL["girl"]["enjoy"]["front"] = {
		image : "story_humanIllust_girlEnjoyFront", width : 50, height : 107, x : 802, y : 284
	};
	THUMBNAIL["girl"]["enjoy"]["back"] = {
		image : "story_humanIllust_girlEnjoyBack", width : 51, height : 106, x : 892, y : 284
	};
	THUMBNAIL["girl"]["enjoy"]["right"] = {
		image : "story_humanIllust_girlEnjoyRight", width : 43, height : 107, x : 802, y : 434
	};
	THUMBNAIL["girl"]["enjoy"]["left"] = {
		image : "story_humanIllust_girlEnjoyLeft", width : 43, height : 107, x : 892, y : 434
	};
	THUMBNAIL["dog"] = new Array(4);
	THUMBNAIL["dog"]["glad"] = new Array(4);
	THUMBNAIL["dog"]["glad"]["front"] = {
		image : "story_animalIllust_dogGladFront", width : 46, height : 73, x : 82, y : 284
	};
	THUMBNAIL["dog"]["glad"]["back"] = {
		image : "story_animalIllust_dogGladBack", width : 49, height : 76, x : 172, y : 284
	};
	THUMBNAIL["dog"]["glad"]["right"] = {
		image : "story_animalIllust_dogGladRight", width : 78, height : 75, x : 67, y : 434
	};
	THUMBNAIL["dog"]["glad"]["left"] = {
		image : "story_animalIllust_dogGladLeft", width : 81, height : 75, x : 157, y : 434
	};
	THUMBNAIL["dog"]["angry"] = new Array(4);
	THUMBNAIL["dog"]["angry"]["front"] = {
		image : "story_animalIllust_dogAngryFront", width : 46, height : 73, x : 322, y : 284
	};
	THUMBNAIL["dog"]["angry"]["back"] = {
		image : "story_animalIllust_dogAngryBack", width : 49, height : 76, x : 412, y : 284
	};
	THUMBNAIL["dog"]["angry"]["right"] = {
		image : "story_animalIllust_dogAngryRight", width : 78, height : 75, x : 307, y : 434
	};
	THUMBNAIL["dog"]["angry"]["left"] = {
		image : "story_animalIllust_dogAngryLeft", width : 81, height : 75, x : 397, y : 434
	};
	THUMBNAIL["dog"]["sad"] = new Array(4);
	THUMBNAIL["dog"]["sad"]["front"] = {
		image : "story_animalIllust_dogSadFront", width : 47, height : 75, x : 562, y : 284
	};
	THUMBNAIL["dog"]["sad"]["back"] = {
		image : "story_animalIllust_dogSadBack", width : 49, height : 76, x : 652, y : 284
	};
	THUMBNAIL["dog"]["sad"]["right"] = {
		image : "story_animalIllust_dogSadRight", width : 78, height : 75, x : 547, y : 434
	};
	THUMBNAIL["dog"]["sad"]["left"] = {
		image : "story_animalIllust_dogSadLeft", width : 81, height : 75, x : 637, y : 434
	};
	THUMBNAIL["dog"]["enjoy"] = new Array(4);
	THUMBNAIL["dog"]["enjoy"]["front"] = {
		image : "story_animalIllust_dogEnjoyFront", width : 47, height : 75, x : 802, y : 284
	};
	THUMBNAIL["dog"]["enjoy"]["back"] = {
		image : "story_animalIllust_dogEnjoyBack", width : 49, height : 76, x : 892, y : 284
	};
	THUMBNAIL["dog"]["enjoy"]["right"] = {
		image : "story_animalIllust_dogEnjoyRight", width : 78, height : 75, x : 787, y : 434
	};
	THUMBNAIL["dog"]["enjoy"]["left"] = {
		image : "story_animalIllust_dogEnjoyLeft", width : 79, height : 75, x : 877, y : 434
	};
	THUMBNAIL["bird"] = new Array(4);
	THUMBNAIL["bird"]["glad"] = new Array(4);
	THUMBNAIL["bird"]["glad"]["front"] = {
		image : "story_animalIllust_birdGladFront", width : 43, height : 48, x : 87, y : 284
	};
	THUMBNAIL["bird"]["glad"]["back"] = {
		image : "story_animalIllust_birdGladBack", width : 44, height : 46, x : 177, y : 284
	};
	THUMBNAIL["bird"]["glad"]["right"] = {
		image : "story_animalIllust_birdGladRight", width : 30, height : 44, x : 97, y : 434
	};
	THUMBNAIL["bird"]["glad"]["left"] = {
		image : "story_animalIllust_birdGladLeft", width : 32, height : 44, x : 182, y : 434
	};
	THUMBNAIL["bird"]["angry"] = new Array(4);
	THUMBNAIL["bird"]["angry"]["front"] = {
		image : "story_animalIllust_birdAngryFront", width : 43, height : 48, x : 327, y : 284
	};
	THUMBNAIL["bird"]["angry"]["back"] = {
		image : "story_animalIllust_birdAngryBack", width : 44, height : 46, x : 417, y : 284
	};
	THUMBNAIL["bird"]["angry"]["right"] = {
		image : "story_animalIllust_birdAngryRight", width : 30, height : 44, x : 337, y : 434
	};
	THUMBNAIL["bird"]["angry"]["left"] = {
		image : "story_animalIllust_birdAngryLeft", width : 32, height : 44, x : 422, y : 434
	};
	THUMBNAIL["bird"]["sad"] = new Array(4);
	THUMBNAIL["bird"]["sad"]["front"] = {
		image : "story_animalIllust_birdSadFront", width : 43, height : 48, x : 567, y : 284
	};
	THUMBNAIL["bird"]["sad"]["back"] = {
		image : "story_animalIllust_birdSadBack", width : 44, height : 46, x : 657, y : 284
	};
	THUMBNAIL["bird"]["sad"]["right"] = {
		image : "story_animalIllust_birdSadRight", width : 30, height : 44, x : 577, y : 434
	};
	THUMBNAIL["bird"]["sad"]["left"] = {
		image : "story_animalIllust_birdSadLeft", width : 32, height : 44, x : 662, y : 434
	};
	THUMBNAIL["bird"]["enjoy"] = new Array(4);
	THUMBNAIL["bird"]["enjoy"]["front"] = {
		image : "story_animalIllust_birdEnjoyFront", width : 43, height : 48, x : 807, y : 284
	};
	THUMBNAIL["bird"]["enjoy"]["back"] = {
		image : "story_animalIllust_birdEnjoyBack", width : 44, height : 46, x : 897, y : 284
	};
	THUMBNAIL["bird"]["enjoy"]["right"] = {
		image : "story_animalIllust_birdEnjoyRight", width : 30, height : 44, x : 817, y : 434
	};
	THUMBNAIL["bird"]["enjoy"]["left"] = {
		image : "story_animalIllust_birdEnjoyLeft", width : 32, height : 44, x : 902, y : 434
	};
	THUMBNAIL["bear"] = new Array(4);
	THUMBNAIL["bear"]["glad"] = new Array(4);
	THUMBNAIL["bear"]["glad"]["front"] = {
		image : "story_animalIllust_bearGladFront", width : 52, height : 107, x : 82, y : 284
	};
	THUMBNAIL["bear"]["glad"]["back"] = {
		image : "story_animalIllust_bearGladBack", width : 49, height : 106, x : 172, y : 284
	};
	THUMBNAIL["bear"]["glad"]["right"] = {
		image : "story_animalIllust_bearGladRight", width : 39, height : 107, x : 82, y : 434
	};
	THUMBNAIL["bear"]["glad"]["left"] = {
		image : "story_animalIllust_bearGladLeft", width : 39, height : 107, x : 172, y : 434
	};
	THUMBNAIL["bear"]["angry"] = new Array(4);
	THUMBNAIL["bear"]["angry"]["front"] = {
		image : "story_animalIllust_bearAngryFront", width : 52, height : 107, x : 322, y : 284
	};
	THUMBNAIL["bear"]["angry"]["back"] = {
		image : "story_animalIllust_bearAngryBack", width : 49, height : 106, x : 412, y : 284
	};
	THUMBNAIL["bear"]["angry"]["right"] = {
		image : "story_animalIllust_bearAngryRight", width : 39, height : 107, x : 322, y : 434
	};
	THUMBNAIL["bear"]["angry"]["left"] = {
		image : "story_animalIllust_bearAngryLeft", width : 39, height : 107, x : 412, y : 434
	};
	THUMBNAIL["bear"]["sad"] = new Array(4);
	THUMBNAIL["bear"]["sad"]["front"] = {
		image : "story_animalIllust_bearSadFront", width : 52, height : 107, x : 562, y : 284
	};
	THUMBNAIL["bear"]["sad"]["back"] = {
		image : "story_animalIllust_bearSadBack", width : 49, height : 106, x : 652, y : 284
	};
	THUMBNAIL["bear"]["sad"]["right"] = {
		image : "story_animalIllust_bearSadRight", width : 39, height : 107, x : 562, y : 434
	};
	THUMBNAIL["bear"]["sad"]["left"] = {
		image : "story_animalIllust_bearSadLeft", width : 39, height : 107, x : 652, y : 434
	};
	THUMBNAIL["bear"]["enjoy"] = new Array(4);
	THUMBNAIL["bear"]["enjoy"]["front"] = {
		image : "story_animalIllust_bearEnjoyFront", width : 52, height : 108, x : 802, y : 284
	};
	THUMBNAIL["bear"]["enjoy"]["back"] = {
		image : "story_animalIllust_bearEnjoyBack", width : 49, height : 106, x : 892, y : 284
	};
	THUMBNAIL["bear"]["enjoy"]["right"] = {
		image : "story_animalIllust_bearEnjoyRight", width : 39, height : 107, x : 802, y : 434
	};
	THUMBNAIL["bear"]["enjoy"]["left"] = {
		image : "story_animalIllust_bearEnjoyLeft", width : 39, height : 107, x : 892, y : 434
	};
	THUMBNAIL["turtle"] = new Array(4);
	THUMBNAIL["turtle"]["glad"] = new Array(4);
	THUMBNAIL["turtle"]["glad"]["front"] = {
		image : "story_animalIllust_turtleGladFront", width : 56, height : 49, x : 82, y : 284
	};
	THUMBNAIL["turtle"]["glad"]["back"] = {
		image : "story_animalIllust_turtleGladBack", width : 53, height : 48, x : 172, y : 284
	};
	THUMBNAIL["turtle"]["glad"]["right"] = {
		image : "story_animalIllust_turtleGladRight", width : 74, height : 41, x : 72, y : 434
	};
	THUMBNAIL["turtle"]["glad"]["left"] = {
		image : "story_animalIllust_turtleGladLeft", width : 75, height : 41, x : 167, y : 434
	};
	THUMBNAIL["turtle"]["angry"] = new Array(4);
	THUMBNAIL["turtle"]["angry"]["front"] = {
		image : "story_animalIllust_turtleAngryFront", width : 56, height : 49, x : 317, y : 284
	};
	THUMBNAIL["turtle"]["angry"]["back"] = {
		image : "story_animalIllust_turtleAngryBack", width : 53, height : 48, x : 407, y : 284
	};
	THUMBNAIL["turtle"]["angry"]["right"] = {
		image : "story_animalIllust_turtleAngryRight", width : 74, height : 41, x : 307, y : 434
	};
	THUMBNAIL["turtle"]["angry"]["left"] = {
		image : "story_animalIllust_turtleAngryLeft", width : 75, height : 41, x : 402, y : 434
	};
	THUMBNAIL["turtle"]["sad"] = new Array(4);
	THUMBNAIL["turtle"]["sad"]["front"] = {
		image : "story_animalIllust_turtleSadFront", width : 56, height : 49, x : 562, y : 284
	};
	THUMBNAIL["turtle"]["sad"]["back"] = {
		image : "story_animalIllust_turtleSadBack", width : 53, height : 48, x : 652, y : 284
	};
	THUMBNAIL["turtle"]["sad"]["right"] = {
		image : "story_animalIllust_turtleSadRight", width : 74, height : 41, x : 552, y : 434
	};
	THUMBNAIL["turtle"]["sad"]["left"] = {
		image : "story_animalIllust_turtleSadLeft", width : 75, height : 41, x : 647, y : 434
	};
	THUMBNAIL["turtle"]["enjoy"] = new Array(4);
	THUMBNAIL["turtle"]["enjoy"]["front"] = {
		image : "story_animalIllust_turtleEnjoyFront", width : 56, height : 49, x : 797, y : 284
	};
	THUMBNAIL["turtle"]["enjoy"]["back"] = {
		image : "story_animalIllust_turtleEnjoyBack", width : 53, height : 48, x : 887, y : 284
	};
	THUMBNAIL["turtle"]["enjoy"]["right"] = {
		image : "story_animalIllust_turtleEnjoyRight", width : 74, height : 41, x : 787, y : 434
	};
	THUMBNAIL["turtle"]["enjoy"]["left"] = {
		image : "story_animalIllust_turtleEnjoyLeft", width : 76, height : 41, x : 882, y : 434
	};
	THUMBNAIL["food"] = new Array(8);
	THUMBNAIL["food"]["apple"] = {
		image : "story_itemThumbnail_foodApple", width : 100, height : 100, x : 42, y : 120
	};
	THUMBNAIL["food"]["coffee"] = {
		image : "story_itemThumbnail_foodCoffee", width : 100, height : 100, x : 162, y : 120
	};
	THUMBNAIL["food"]["onigiri"] = {
		image : "story_itemThumbnail_foodOnigiri", width : 100, height : 100, x : 282, y : 120
	};
	THUMBNAIL["food"]["patty"] = {
		image : "story_itemThumbnail_foodPatty", width : 100, height : 100, x : 402, y : 120
	};
	THUMBNAIL["food"]["pudding"] = {
		image : "story_itemThumbnail_foodPudding", width : 100, height : 100, x : 522, y : 120
	};
	THUMBNAIL["food"]["fish"] = {
		image : "story_itemThumbnail_foodFish", width : 100, height : 100, x : 642, y : 120
	};
	THUMBNAIL["food"]["nut"] = {
		image : "story_itemThumbnail_foodNut", width : 100, height : 100, x : 762, y : 120
	};
	THUMBNAIL["food"]["dogfood"] = {
		image : "story_itemThumbnail_foodDogfood", width : 100, height : 100, x : 882, y : 120
	};
	THUMBNAIL["fashion"] = new Array(8);
	THUMBNAIL["fashion"]["blackBag"] = {
		image : "story_itemThumbnail_fashionBlackBag", width : 100, height : 100, x : 42, y : 250
	};
	THUMBNAIL["fashion"]["redBag"] = {
		image : "story_itemThumbnail_fashionRedBag", width : 100, height : 100, x : 162, y : 250
	};
	THUMBNAIL["fashion"]["blueCap"] = {
		image : "story_itemThumbnail_fashionBlueCap", width : 100, height : 100, x : 282, y : 250
	};
	THUMBNAIL["fashion"]["greenCap"] = {
		image : "story_itemThumbnail_fashionGreenCap", width : 100, height : 100, x : 402, y : 250
	};
	THUMBNAIL["fashion"]["pinkCap"] = {
		image : "story_itemThumbnail_fashionPinkCap", width : 100, height : 100, x : 522, y : 250
	};
	THUMBNAIL["fashion"]["summerCap"] = {
		image : "story_itemThumbnail_fashionSummerCap", width : 100, height : 100, x : 642, y : 250
	};
	THUMBNAIL["fashion"]["yellowCap"] = {
		image : "story_itemThumbnail_fashionYellowCap", width : 100, height : 100, x : 762, y : 250
	};
	THUMBNAIL["fashion"]["ribbon"] = {
		image : "story_itemThumbnail_fashionRibbon", width : 100, height : 100, x : 882, y : 250
	};
	THUMBNAIL["interior"] = new Array(8);
	THUMBNAIL["interior"]["leftChair"] = {
		image : "story_itemThumbnail_interiorLeftChair", width : 100, height : 100, x : 42, y : 380
	};
	THUMBNAIL["interior"]["table"] = {
		image : "story_itemThumbnail_interiorTable", width : 100, height : 100, x : 162, y : 380
	};
	THUMBNAIL["interior"]["rightChair"] = {
		image : "story_itemThumbnail_interiorRightChair", width : 100, height : 100, x : 282, y : 380
	};
	THUMBNAIL["interior"]["clock"] = {
		image : "story_itemThumbnail_interiorClock", width : 100, height : 100, x : 402, y : 380
	};
	THUMBNAIL["interior"]["chest"] = {
		image : "story_itemThumbnail_interiorChest", width : 100, height : 100, x : 522, y : 380
	};
	THUMBNAIL["interior"]["bookShelf"] = {
		image : "story_itemThumbnail_interiorBookShelf", width : 100, height : 100, x : 642, y : 380
	};
	THUMBNAIL["interior"]["dresser"] = {
		image : "story_itemThumbnail_interiorDresser", width : 100, height : 100, x : 762, y : 380
	};
	THUMBNAIL["interior"]["television"] = {
		image : "story_itemThumbnail_interiorTelevision", width : 100, height : 100, x : 882, y : 380
	};
	THUMBNAIL["goods"] = new Array(8);
	THUMBNAIL["goods"]["butterflyNet"] = {
		image : "story_itemThumbnail_goodsButterflyNet", width : 100, height : 100, x : 42, y : 510
	};
	THUMBNAIL["goods"]["insectCage"] = {
		image : "story_itemThumbnail_goodsInsectCage", width : 100, height : 100, x : 162, y : 510
	};
	THUMBNAIL["goods"]["beetle"] = {
		image : "story_itemThumbnail_goodsBeetle", width : 100, height : 100, x : 282, y : 510
	};
	THUMBNAIL["goods"]["rabbitDoll"] = {
		image : "story_itemThumbnail_goodsRabbitDoll", width : 100, height : 100, x : 402, y : 510
	};
	THUMBNAIL["goods"]["trumpet"] = {
		image : "story_itemThumbnail_goodsTrumpet", width : 100, height : 100, x : 522, y : 510
	};
	THUMBNAIL["goods"]["soccerBall"] = {
		image : "story_itemThumbnail_goodsSoccerBall", width : 100, height : 100, x : 642, y : 510
	};
	THUMBNAIL["goods"]["cellPhone"] = {
		image : "story_itemThumbnail_goodsCellPhone", width : 100, height : 100, x : 762, y : 510
	};
	THUMBNAIL["goods"]["car"] = {
		image : "story_itemThumbnail_goodsCar", width : 100, height : 100, x : 882, y : 510
	};
}