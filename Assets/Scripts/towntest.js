#pragma strict

var townName : String = "Beginnings Burg";
var townTime : String = "13:00";
var townDate : String = "June 1st, 1969";
var manage : boolean;
var rest : boolean;
var viewMap : boolean;
var leaveTown : boolean;


function Update(){
	Time.timeScale = WindowScript.timeScale;
}

function Start(){
	PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
	WindowScript.theTime = ScriptableObject.CreateInstance("gameTime") as gameTime;
	WindowScript.theTime.init(townDate+" "+townTime);
}

function FixedUpdate(){
	if(WindowScript.beginRest){
		if(WindowScript.restTime>0){
			WindowScript.restTime--;
			WindowScript.theTime.addHour(1);
			Debug.Log(WindowScript.theTime.ToString());
		}
		else{
			WindowScript.timeScale = 0;
			WindowScript.beginRest = false;
		}
	}
}

function OnGUI() 
{
	if(Application.loadedLevel == 2 || Application.loadedLevel == 4 || Application.loadedLevel == 6)
	{
	var tutorialWindow = Rect(Screen.width/2 - 75, Screen.height/2 - 75, 150, 150);
    tutorialWindow= GUILayout.Window(99, tutorialWindow, TutorialDialog, "The Mayor");
    } 

	renderTabs();	
}

function renderTabs(){
	if(manage){
		if(!ManageScreen.close){
	 		ManageScreen.createManageWindow();
		}
		else{
			manage = false;
			ManageScreen.close = false;
		}
	}
	else if(rest){
		if(!RestScreen.close){
			RestScreen.createRestWindow();
		}
		else{
			rest = false;
			RestScreen.close = false;
		}
	}
	else
	{
		var townWindow : Rect = Rect(10, 10, 120, 70);
		townWindow = GUI.Window(0, townWindow, TownInformation, townName);
	
		var playerChoicesWindow : Rect = Rect(10, 90, 120, 140);
		playerChoicesWindow = GUI.Window(1, playerChoicesWindow, PlayerChoices, "");
	}
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

function PlayerChoices()
{
	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	
	if(manage) GUI.enabled= false;
	if(GUILayout.Button("Manage"))
	{
		GUI.enabled = true;
		manage = true;
		rest = false;
		viewMap = false;
		leaveTown = false;
		//
		// Spawn Manage Overlay
		//
		
	}
	GUI.enabled = true; // this one is needed
	
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(rest) GUI.enabled=false;
	if(GUILayout.Button("Rest"))
	{
		GUI.enabled = true;
		manage = false;
		rest = true;
		viewMap = false;
		leaveTown = false;
	
		//
		// Spawn Rest Overlay
		//
	}
	GUI.enabled = true;
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(viewMap) GUI.enabled=false;
	if(GUILayout.Button("View Map"))
	{
		GUI.enabled = true;
		manage = false;
		rest = false;
		viewMap = true;
		leaveTown = false;
		//
		// Spawn Map Overlay
		//
	}
	GUI.enabled = true;
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(leaveTown) GUI.enabled=false;
	if(GUILayout.Button("Leave Town"))
	{
		GUI.enabled = true;
		manage = false;
		rest = false;
		viewMap = false;
		leaveTown = true;
		//
		// Leave Town
		//
	}
	GUI.enabled=true;
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

function TutorialDialog()
{
	if(Application.loadedLevel == 2)
	{
    	GUILayout.Label("You plan to make the journey to Haven for the cure and want my help? \n\nRegister at the pub and I'll take you seriously.");
    }
    
    if(Application.loadedLevel == 4)
	{
    	GUILayout.Label("Well, it turns out you were serious after all... \n\nHere is $500 to get you started. \n\nUse it to purchase supplies for your journey. I've told the shopkeeper to give you a discount.");
    	//Initialize Player Inventory.
    	var playerMoney : int = 500;
    	var sledCount : int = 0;
    	var dogCount : int = 0;
    	var fishingpoleCount : int = 0;
    	var gunCount : int = 0;
    	var repairkitCount : int = 0;
    	var foodCount : int = 0;
    	var baitCount : int = 0;
    	var bulletsCount : int = 0;
    	var medicineCount : int = 0;
    	
    	//Create PlayerPrefs.
    	PlayerPrefs.SetInt("PlayerMoney", playerMoney);
    	PlayerPrefs.SetInt("SledCount", sledCount);
    	PlayerPrefs.SetInt("DogCount", dogCount);
    	PlayerPrefs.SetInt("FishingPoleCount", fishingpoleCount);
    	PlayerPrefs.SetInt("GunCount", gunCount);
    	PlayerPrefs.SetInt("RepairKitCount", repairkitCount);
    	PlayerPrefs.SetInt("FoodCount", foodCount);
    	PlayerPrefs.SetInt("BaitCount", baitCount);
    	PlayerPrefs.SetInt("BulletsCount", bulletsCount);
    	PlayerPrefs.SetInt("MedicineCount", medicineCount);
    }
    
    if(Application.loadedLevel == 6)
    {
    	GUILayout.Label("Great work. \n\nHopefully these supplies will help you in your journey to Haven. \n\nFor now you should get some rest at the inn, and plan on leaving at dawn." );
    }
}
