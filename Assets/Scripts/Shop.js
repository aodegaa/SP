#pragma strict

// window declarations
private var inventoryWindow = Rect(Screen.width/2 - 125, Screen.height - 90, 250, 80);
private var thePopUpWindow2 : Rect = Rect(Screen.width/2-150, Screen.height/2-50, 300,100); // popup for tutorial window
// end window declarations

// booleans to control tabs below 
var browseWares : boolean = false;
// end booleans to control tabs

// booleans for shop logic
var dogPurchased : boolean = false;
var dogNumberWarning : boolean = false;
var firstPurchaseWarning : boolean = false;
var sledWarning : boolean = false;

// additional variables
var shopMessage : String = "Welcome!";
var playerMoney : int = 100;
var dogCount : int = 0;
var foodCount : int = 0;
var repairKitCount : int = 0;
var workingSled : boolean = false;
private var dogName : String = "new name";

// array to store the newly bought dogs
static var dogs = new Array();

function Start () {

}

function Update () {

}

function OnGUI() {
	renderTabs();
	showPopups();
}

// used to handle the popup windows
// displays the particular popup window based on user's choices
function showPopups(){
	var thePopUpWindow : Rect = Rect (Screen.width/2 -150, Screen.height/2 -25, 300, 50);
	var dogPopUpWindow : Rect = Rect (250, 100, 200, 200);

	if(firstPurchaseWarning){
		thePopUpWindow = GUI.Window (5, thePopUpWindow, displayWarningWindows, "You must buy a sled and at least one dog first!");
	}
	if(sledWarning){
		thePopUpWindow = GUI.Window (5, thePopUpWindow, displayWarningWindows, "You may only buy one sled!");
	}
	if(dogNumberWarning){
		thePopUpWindow = GUI.Window(5, thePopUpWindow, displayWarningWindows, "You may have at most 8 dogs");
	}		
	if(dogPurchased){
		dogPopUpWindow = GUI.Window(5, dogPopUpWindow, NameDogWindow, "I See You Bought A Dog.");;
	}
}

// renderTabs is used to display the varoius tabs (browse wares, etc)
// it handles the logic of switching GUI calls.
// every major if statement handles a full screen. 
function renderTabs(){
	if(browseWares){
		if(!WindowScript.shopClose){
			var browseWindow : Rect = Rect(0, 0, Screen.width, Screen.height);
			browseWindow = GUILayout.Window(0, browseWindow, WindowScript.createShopWindow, "Wares");
		}
		else{
			WindowScript.shopClose = false;
			browseWares=false;
		}
	}
	// the default town layout. will display on startup, and when exiting the other full screen options
	else{
		// creates and displays the player's choices in the shop (browse wares, trade, leave)
		var shopChoicesWindow : Rect = Rect(10, 90, 160, 110);
		shopChoicesWindow = GUILayout.Window(0, shopChoicesWindow, ShopChoices, "");
		
		// creates and displays the shop owner's dialog window
		var shopDialogWindow : Rect = Rect(Screen.width/2 - 120, 10, 240, 60);
		shopDialogWindow = GUI.Window(1, shopDialogWindow, ShopDialog, "");
		
		// creates and display info on the town (town name, time and date)
		var townInfoWindow : Rect = Rect(10, 10, 160, 70);
		townInfoWindow = GUI.Window(2, townInfoWindow, TownInformation, "Undead Burg" + " Store");
		
		// creates and dislays the player's inventory
		var inventoryWindow = Rect(Screen.width/2 - 120, Screen.height - 90, 280, 80);
		inventoryWindow = GUILayout.Window(3, inventoryWindow, createInventoryWindow, "Inventory");
		
		// creates and displays the available sales
		var salesWindow : Rect = Rect (10,210,160,30);
		salesWindow = GUILayout.Window(4, salesWindow, createSalesWindow, "Sales");
	}
	
}

//Inventory window function
function createInventoryWindow()
{
	GUILayout.BeginVertical();
    
    GUILayout.BeginHorizontal();
    GUILayout.Label("Money", GUILayout.Width(70));
    GUILayout.Label("Food", GUILayout.Width(70));
    GUILayout.Label("Dogs", GUILayout.Width(70));
    GUILayout.Label("Repair Kits", GUILayout.Width(70));
    GUILayout.EndHorizontal();
   
    GUILayout.BeginHorizontal();
   	GUILayout.Label("$" + playerMoney.ToString(), GUILayout.Width(70));
   	GUILayout.Label(foodCount.ToString() +" LBS", GUILayout.Width(70));
   	GUILayout.Label(dogCount.ToString(), GUILayout.Width(70));
    GUILayout.Label(repairKitCount.ToString(), GUILayout.Width(70));
   	GUILayout.EndHorizontal();
   
    GUILayout.EndVertical();
}

// gives various choices that spawn overlays when clicked
function ShopChoices()
{
	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Browse Wares"))
	{
		// set flag to display the wares tab
		browseWares = true;	
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Trades"))
	{
		// spawns trade options
		shopMessage="How do these trades sound?";
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Leave Store"))
	{
		// leave the shop
		shopMessage="Goodbye!";
	}
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

// town information function used to spawn a small window displaying town name and time
function TownInformation()
{
	var myClock = Resources.Load("clock");

	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("June 6th, 1969"); // this needs to be updated to display the date stored in player prefs
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(myClock);
	GUILayout.Label("13:00"); // likewise, update to be based on player prefs
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

// function to create the window for shop dialog
// dialog is updated based on player interaction within the shop
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

// displays the items for sale in the shop
// main shop logic
function createSalesWindow(){
	// disable purchases while naming dogs
	if(dogPurchased) GUI.enabled=false;
	// reenable it though
	else GUI.enabled=true;
	GUILayout.BeginVertical();
	// button for buying dogs
	if (GUILayout.Button ("Buy Dog ($10)") && playerMoney >= 10) 
	{
		if(dogCount ==8){
			dogNumberWarning=true;
		}
		else{
			playerMoney -= 10;    // Take away some of the player's coins.
			dogCount += 1;            // Give item to the player scriptness goes here
			// dogs.push(additionalDog);
			dogPurchased = true; // tells the GUI to  create the dog naming popup window

		}
	}
	
	
	if (GUILayout.Button ("Buy Food ($1)") && playerMoney >= 1) 
	{
		if(!workingSled || dogCount==0) firstPurchaseWarning= true;
		else{
			playerMoney -= 1;    // Take away some of the player's coins.
			foodCount += 1;            // Give item to the player scriptness goes here
		}
	}

	if (GUILayout.Button ("Buy Repair Kit ($8)") && playerMoney >= 8) 
	{
		if(!workingSled || dogCount==0) firstPurchaseWarning= true;
		else{
			playerMoney -= 8;    // Take away some of the player's coins.
			repairKitCount += 1;            // Give item to the player scriptness goes here
		}
	}

	if (GUILayout.Button ("Buy Sled ($50)") && playerMoney >= 50) 
	{
		if (workingSled){
			sledWarning = true;
		}
		else{
			playerMoney -= 50;    // Take away some of the player's coins.
			workingSled = true;            // Give item to the player scriptness goes here
		}
	}
	if (GUILayout.Button ("Exit Shop"))
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
	GUILayout.EndVertical();
}

// function to handle warnings. displays a message to the user
function displayWarningWindows () 
{
	if (GUI.Button (Rect (100,20,100,25), "OK"))
	{
		GUI.enabled=true;
		firstPurchaseWarning = false;
		sledWarning = false;
		dogNumberWarning = false;
	}
}

// creates a popup window so that players may name their nearly purchased dog
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
		dogPurchased = false;
		// reset the dog name to default values
		dogName = "new name";
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}