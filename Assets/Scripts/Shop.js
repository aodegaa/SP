#pragma strict

// window declarations
var inventoryWindow = Rect(Screen.width/2 - 125, Screen.height - 90, 250, 80);
var thePopUpWindow : Rect = Rect (Screen.width/2 -150, Screen.height/2 -25, 300, 50);
var thePopUpWindow2 : Rect = Rect(Screen.width/2-150, Screen.height/2-50, 300,100); // popup for tutorial window
var thePopUpWindow3 : Rect = Rect (250, 100, 200, 200);
// end window declarations

// booleans to control tabs below 
var browseWares : boolean = false;
// end booleans

// additional variables
var shopMessage : String = "Welcome!";


function Start () {

}

function Update () {

}

function OnGUI() {
	renderTabs();
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
	}
	
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