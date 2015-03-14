#pragma strict

var playerMoney : int = 100;
var dogCount : int = 0;
var foodCount : int = 0;
var repairKitCount : int = 0;
var workingSled : boolean = false;

// popup window booleans
var render : boolean = false; // controls sled dog/sled warning
var showSledWarning : boolean = false; // controls multiple sled warning
var dogNumberWarning : boolean = false;

var dogs = new Array();

// begin Dog class definition
/*
class Dog extends ScriptableObject {

	var hungerLevel : int;
	var health : int;
	var fatigue : int;
	var dogName : String;
	// initializes dog variables
function init(newName : String){
	dogName = newName;
	hungerLevel = 0;
	health = 100;
	fatigue = 0;
}
	
}
*/
// end Dog class definition

private var inventoryWindow = Rect(400, 400, 250, 0);

function DoMyWindow (windowID : int) {
	if (GUI.Button (Rect (100,20,100,25), "OK")){
		render = false;
		showSledWarning = false;
		dogNumberWarning = false;
		}
}


function OnGUI () 
{
// inventory window declaration
inventoryWindow = GUILayout.Window( 0, inventoryWindow, WindowFunction, "Inventory");

var screenWidth = Screen.width;
var screenHeight = Screen.height;
var thePopUpWindow : Rect = Rect (screenWidth/2 -150, screenHeight/2 -25, 300, 50);


// show the warning window
if(render){
	thePopUpWindow = GUI.Window (1, thePopUpWindow, DoMyWindow, "You must buy a sled and at least one dog first!");
}
// show the other warning window
if(showSledWarning){
	thePopUpWindow = GUI.Window (2, thePopUpWindow, DoMyWindow, "You may only purchase one sled.");
}
// show the dog number warning
if(dogNumberWarning){
	thePopUpWindow = GUI.Window (3, thePopUpWindow, DoMyWindow, "You may have, at most, 8 dogs.");
}



if (GUI.Button (Rect (10,10,200,30), "Buy Dog ($10)") && playerMoney >= 10) 
{
if(dogCount==8){
	dogNumberWarning=true;
}
else{
var tempDog : Dog = ScriptableObject.CreateInstance("Dog") as Dog;
 //begin testing code
if(dogCount ==0){
	tempDog.init("Scott");
	print (tempDog.dogName);
	PlayerPrefs.SetString("dog0name", tempDog.dogName);
	PlayerPrefs.SetInt("dog0health", tempDog.health);
}
if(dogCount ==1){
	tempDog.init("Alex");
	print (tempDog.dogName);
	PlayerPrefs.SetString("dog1name", tempDog.dogName);
	PlayerPrefs.SetInt("dog1health", tempDog.health);
}
if(dogCount ==2){
	tempDog.init("Ryan");
	print (tempDog.dogName);
}
if(dogCount ==3){
		for(var value : Dog in dogs){
			print(value.dogName + " "+ value.health);
		}
}

playerMoney -= 10;    // Take away some of the player's coins.
dogCount += 1;            // Give item to the player scriptness goes here
dogs.push(tempDog);
}
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
if (GUI.Button (Rect (10,170,200,30), "Exit Shop"))
{
PlayerPrefs.SetInt("PlayerMoney", playerMoney);
Application.LoadLevel(7);
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