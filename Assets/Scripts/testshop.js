#pragma strict

var townName : String = "Beginnings Burg";
var townTime : String = "13:00";
var townDate : String = "June 6th, 1969";
var shopMessage : String = "Welcome!";

var playerIsShopping : boolean = false;

function OnGUI()
{
	var townWindow : Rect = Rect(10, 10, 160, 70);
	townWindow = GUI.Window(0, townWindow, TownInformation, townName + " Store");

	var shopChoicesWindow : Rect = Rect(10, 90, 160, 110);
	shopChoicesWindow = GUI.Window(1, shopChoicesWindow, ShopChoices, "");
	
	var shopDialogWindow : Rect = Rect(Screen.width/2, 10, 240, 60);
	shopDialogWindow = GUI.Window(2, shopDialogWindow, ShopDialog, "");
	
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

function ProposeTrade()
{
	//
	//	asking food in return for repair kits
	//
	
	//
	//	asking repair kits in return for food
	//
	
	//
	//	asking fishing pole in return for food
	//
	
	//
	//	asking food in return for fishing pole
	//
	
	//
	//	asking 
	//
	
	//
	//
	//
	
	//
	//
	//
}