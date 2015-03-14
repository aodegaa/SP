#pragma strict

//
var playerMoney : int = 100;
var dogCount : int = 0;
var foodCount : int = 0;
var repairKitCount : int = 0;
var workingSled : boolean = false;


//
var dogName : String = "doggy";

//
PlayerPrefs.SetInt("DogCount", dogCount);

// popup window booleans
var render : boolean = false; // controls sled dog/sled warning
var renderthe : boolean = false;
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


function DoMyWindow (windowID : int) 
{
	if (GUI.Button (Rect (100,20,100,25), "OK"))
	{
		render = false;
		showSledWarning = false;
		dogNumberWarning = false;
	}
}

function NameDogWindow ()
{
	var cw = Resources.Load("cw");
	var additionalDog : Dog = ScriptableObject.CreateInstance("Dog") as Dog;

	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(cw);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Why Don't You Name It?");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
    dogName = GUILayout.TextField( dogName );
   
	if (GUILayout.Button("Submit"))
	{
		additionalDog.init(dogName);
		renderthe = false;
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}


function OnGUI () 
{
var inventoryWindow = Rect(250, 10, 250, 0);
var additionalDog : Dog = ScriptableObject.CreateInstance("Dog") as Dog;


// inventory window declaration
inventoryWindow = GUILayout.Window(0, inventoryWindow, WindowFunction, "Inventory");

var screenWidth = Screen.width;
var screenHeight = Screen.height;
var thePopUpWindow : Rect = Rect (screenWidth/2 -150, screenHeight/2 -25, 300, 50);
var thePopUpWindow3 : Rect = Rect (250, 100, 200, 200);

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

if(renderthe)
{
thePopUpWindow3 = GUI.Window(4, thePopUpWindow3, NameDogWindow, "I See You Bought A Dog.");
}



if (GUI.Button (Rect (10,10,200,30), "Buy Dog ($10)") && playerMoney >= 10) 
{
if(dogCount ==8){
dogNumberWarning=true;
}
else{
//var additionalDog : Dog = ScriptableObject.CreateInstance("Dog") as Dog;
 //begin testing code
/*if(dogCount ==0){
	additionalDog.init("Scott");
	print (additionalDog.dogName);
	PlayerPrefs.SetString("dog0name", additionalDog.dogName);
	PlayerPrefs.SetInt("dog0health", additionalDog.health);
}
if(dogCount ==1){
	additionalDog.init("Alex");
	print (additionalDog.dogName);
	PlayerPrefs.SetString("dog1name", additionalDog.dogName);
	PlayerPrefs.SetInt("dog1health", additionalDog.health);
}
if(dogCount ==2){
	additionalDog.init("Ryan");
	print (additionalDog.dogName);
}
if(dogCount ==3){
		for(var value : Dog in dogs){
			print(value.dogName + " "+ value.health);
		}
}*/

playerMoney -= 10;    // Take away some of the player's coins.
dogCount += 1;            // Give item to the player scriptness goes here
dogs.push(additionalDog);
PlayerPrefs.SetInt("DogCount", dogCount);
renderthe = true;

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



//Inventory
function WindowFunction()
{
	GUILayout.BeginVertical();
    
    GUILayout.BeginHorizontal();
    GUILayout.FlexibleSpace();
    GUILayout.Label("Money");
    GUILayout.FlexibleSpace();
    GUILayout.Label("Food");
    GUILayout.FlexibleSpace();
    GUILayout.Label("Dogs");
    GUILayout.FlexibleSpace();
    GUILayout.Label("Repair Kits");
    GUILayout.FlexibleSpace();
    GUILayout.EndHorizontal();
   
    GUILayout.BeginHorizontal();
   	GUILayout.Label("$" + playerMoney.ToString());
   	GUILayout.Label(foodCount.ToString() +" LBS");
   	GUILayout.Label(dogCount.ToString());
    GUILayout.Label(repairKitCount.ToString());
   	GUILayout.EndHorizontal();
   
    GUILayout.EndVertical();
}