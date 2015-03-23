﻿#pragma strict

var townName : String = "Beginnings Burg";
var townTime : String = "13:00";
var townDate : String = "June 6th, 1969";
var shopMessage : String = "Welcome!";

var playerIsShopping : boolean = false;

var firstTime : boolean = false;
// if the player hasn't been here before, give them some moeny
if(!PlayerPrefs.HasKey("PlayerMoney")){
	firstTime = true;
}
var playerMoney : int = 100;
var dogCount : int = 0;
var foodCount : int = 0;
var repairKitCount : int = 0;
var workingSled : boolean = false;


//
private var dogName : String = "new name";

//
PlayerPrefs.SetInt("DogCount", dogCount);

// popup window booleans
var render : boolean = false; // controls sled dog/sled warning
var renderthe : boolean = false;
var showSledWarning : boolean = false; // controls multiple sled warning
var dogNumberWarning : boolean = false;

static var dogs = new Array();

// function for creating notification windows
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
	GUI.SetNextControlName("DogNameText"); // input text field
    dogName = GUILayout.TextField( dogName , 15);
    
    // clear text in dog name input field on click
    if(UnityEngine.Event.current.type == EventType.Repaint){
    	if( GUI.GetNameOfFocusedControl()=="DogNameText"){
    		if(dogName=="new name") dogName = "";
    	}
    	else{
    		if( dogName=="") dogName = "new name";
    	}
    }
   
	if (GUILayout.Button("Submit"))
	{
		additionalDog.init(dogName);
		dogs.push(additionalDog);
		renderthe = false;
		// reset the dog name to default values
		dogName = "new name";
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

function TutorialWindow(){
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.Label("I see this is your first time in the shop! Why don't you start by buying a dog and a sled?");
	GUILayout.EndHorizontal();
	if(GUILayout.Button("Ok")){
		firstTime = false;
	}
	GUILayout.EndVertical();
}


function OnGUI () 
{
var inventoryWindow = Rect(Screen.width/2 - 125, Screen.height - 90, 250, 80);
var additionalDog : Dog = ScriptableObject.CreateInstance("Dog") as Dog;


// inventory window declaration
inventoryWindow = GUILayout.Window(9, inventoryWindow, WindowFunction, "Inventory");

var townWindow : Rect = Rect(10, 10, 160, 70);
	townWindow = GUI.Window(0, townWindow, TownInformation, townName + " Store");

	var shopChoicesWindow : Rect = Rect(10, 90, 160, 110);
	shopChoicesWindow = GUI.Window(1, shopChoicesWindow, ShopChoices, "");
	
	var shopDialogWindow : Rect = Rect(Screen.width/2 - 120, 10, 240, 60);
	shopDialogWindow = GUI.Window(2, shopDialogWindow, ShopDialog, "");

var screenWidth = Screen.width;
var screenHeight = Screen.height;
var thePopUpWindow : Rect = Rect (screenWidth/2 -150, screenHeight/2 -25, 300, 50);
var thePopUpWindow2 : Rect = Rect(screenWidth/2-150, screenHeight/2-50, 300,100); // popup for tutorial window
var thePopUpWindow3 : Rect = Rect (250, 100, 200, 200);
if(firstTime){
	thePopUpWindow2 = GUI.Window(4, thePopUpWindow2, TutorialWindow, "Tutorial Window");
}

// show the warning window
if(render){
	thePopUpWindow = GUI.Window (5, thePopUpWindow, DoMyWindow, "You must buy a sled and at least one dog first!");
}
// show the other warning window
if(showSledWarning){
	thePopUpWindow = GUI.Window (6, thePopUpWindow, DoMyWindow, "You may only purchase one sled.");
}
// show the dog number warning
if(dogNumberWarning){
	thePopUpWindow = GUI.Window (7, thePopUpWindow, DoMyWindow, "You may have, at most, 8 dogs.");
}

if(renderthe)
{
thePopUpWindow3 = GUI.Window(8, thePopUpWindow3, NameDogWindow, "I See You Bought A Dog.");
GUI.enabled = false;
}



if (GUI.Button (Rect (10,210,160,30), "Buy Dog ($10)") && playerMoney >= 10) 
{
if(dogCount ==8){
dogNumberWarning=true;
}
else{
playerMoney -= 10;    // Take away some of the player's coins.
dogCount += 1;            // Give item to the player scriptness goes here
// dogs.push(additionalDog);
renderthe = true;

}
}

if (GUI.Button (Rect (10,250,160,30), "Buy Food ($1)") && playerMoney >= 1) 
{
if(!workingSled || dogCount==0) render = true;
else{
playerMoney -= 1;    // Take away some of the player's coins.
 foodCount += 1;            // Give item to the player scriptness goes here
}
}

if (GUI.Button (Rect (10,290,160,30), "Buy Repair Kit ($8)") && playerMoney >= 8) 
{
if(!workingSled || dogCount==0) render = true;
else{
playerMoney -= 8;    // Take away some of the player's coins.
repairKitCount += 1;            // Give item to the player scriptness goes here
}
}

if (GUI.Button (Rect (10,330,160,30), "Buy Sled ($50)") && playerMoney >= 50) 
{
if (workingSled){
	showSledWarning = true;
}
else{
playerMoney -= 50;    // Take away some of the player's coins.
workingSled = true;            // Give item to the player scriptness goes here
}
}
if (GUI.Button (Rect (10,370,160,30), "Exit Shop"))
{
var count : int =0;
PlayerPrefs.SetInt("PlayerMoney", playerMoney);
for(var doge : Dog in dogs){	
	PlayerPrefs.SetString("dogName" + count, doge.dogName);
	PlayerPrefs.SetInt("dogHealth" + count, doge.health);
	PlayerPrefs.SetInt("dogFatigue"+ count, doge.fatigue);
	PlayerPrefs.SetInt("dogHunger" + count, doge.hunger);
	PlayerPrefs.SetInt("dogIsDead" + count, 0); // dog is not dead
	
	count+=1;
}
PlayerPrefs.SetInt("RepairKitCount",repairKitCount);
PlayerPrefs.SetInt("FoodCount",foodCount);
PlayerPrefs.SetInt("DogCount",dogCount);
if(workingSled) PlayerPrefs.SetInt("WorkingSled", 1);
else PlayerPrefs.SetInt("WorkingSled", 0);

Application.LoadLevel(6);
}
if(!renderthe){
	GUI.enabled = true;
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

function ShopChoices()
{
	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Browse Wares"))
	{
		playerIsShopping = true;
		shopMessage = "What would you like?";
		//
		// Spawn Browse Wares Overlay
		//
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Trades"))
	{
		shopMessage = "How does this sound?";
		//
		// Spawn mini-window Trade dialog
		//
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Leave Store"))
	{
		shopMessage = "Thanks for shopping.";
		//
		// leave store
		//
	}
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

function TownInformation()
{
	var myClock = Resources.Load("clock");

	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(townDate);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(myClock);
	GUILayout.Label(townTime);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

function ShopDialog()
{
	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(shopMessage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}
