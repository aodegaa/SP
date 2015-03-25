#pragma strict

var townName : String = "Beginnings Burg";
var townTime : String = "13:00";
var townDate : String = "June 6th, 1969";
var manage : boolean;
var rest : boolean;
var viewMap : boolean;
var leaveTown : boolean;


function Update(){
	Time.timeScale = WindowScript.timeScale;
}

function Start(){
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