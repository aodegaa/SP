#pragma strict

var playerMoney : int = 100;
var dogCount : int = 0;
var foodCount : int = 0;
var repairKitCount : int = 0;
var workingSled : boolean = false;
var render : boolean = false;
var showSledWarning : boolean = false;
var dogs = new Array();

class Doge{
	var hungerLevel : int;
	var health : int;
	var fatigue : int;
	var dogName : String;
}


private var inventoryWindow = Rect(400, 400, 250, 0);

function DoMyWindow (windowID : int) {
	if (GUI.Button (Rect (100,20,100,25), "OK")){
		render = false;
		showSledWarning = false;
		}
}


function OnGUI () 
{
// inventory window declaration
inventoryWindow = GUILayout.Window( 0, inventoryWindow, WindowFunction, "Inventory");

var screenWidth = Screen.width;
var screenHeight = Screen.height;
var sledDogWindow : Rect = Rect (screenWidth/2 -150, screenHeight/2 -25, 300, 50);
var sledWindow : Rect = Rect (screenWidth/2 -150, screenHeight/2 -25, 300, 50);


// show the warning window
if(render){
	sledDogWindow = GUI.Window (1, sledDogWindow, DoMyWindow, "You must buy a sled and at least one dog first!");
}
// show the other warning window
if(showSledWarning){
	sledWindow = GUI.Window (2, sledWindow, DoMyWindow, "You may only purchase one sled.");
}


if (GUI.Button (Rect (10,10,200,30), "Buy Dog ($10)") && playerMoney >= 10) 
{
dogs.push(new Doge());
playerMoney -= 10;    // Take away some of the player's coins.
 dogCount += 1;            // Give item to the player scriptness goes here
}

if (GUI.Button (Rect (10,50,200,30), "Buy Food ($1)") && playerMoney >= 1) 
{
if(!workingSled || dogCount==0) render = true;
else{
playerMoney -= 1;    // Take away some of the player's coins.
 foodCount += 1;            // Give item to the player scriptness goes here
}
}

if (GUI.Button (Rect (10,90,200,30), "Buy Repair Kit ($8)") && playerMoney >= 8) 
{
if(!workingSled || dogCount==0) render = true;
else{
playerMoney -= 8;    // Take away some of the player's coins.
repairKitCount += 1;            // Give item to the player scriptness goes here
}
}

if (GUI.Button (Rect (10,130,200,30), "Buy Sled ($50)") && playerMoney >= 50) 
{
if (workingSled){
	showSledWarning = true;
}
else{
playerMoney -= 50;    // Take away some of the player's coins.
workingSled = true;            // Give item to the player scriptness goes here
}
}
}


function WindowFunction()
{
	GUILayout.BeginVertical();
    
    GUILayout.BeginHorizontal();
    GUILayout.Label("Money");
    GUILayout.Label("Food");
    GUILayout.Label("Dogs");
    GUILayout.Label("Repair Kits");
    GUILayout.EndHorizontal();
   
    GUILayout.BeginHorizontal();
   	GUILayout.Label("$" + playerMoney.ToString());
   	GUILayout.Label(foodCount.ToString() +" LBS");
   	GUILayout.Label(dogCount.ToString());
    GUILayout.Label(repairKitCount.ToString());
   	GUILayout.EndHorizontal();
   
    GUILayout.EndVertical();
}

