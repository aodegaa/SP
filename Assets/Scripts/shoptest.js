#pragma strict

//
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
playerMoney -= 10;    // Take away some of the player's coins.
dogCount += 1;            // Give item to the player scriptness goes here
// dogs.push(additionalDog);
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
Application.LoadLevel(6);
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