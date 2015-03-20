#pragma strict

var townName : String = "Beginnings Burg";
var townTime : String = "13:00";
var townDate : String = "June 6th, 1969";

function OnGUI() 
{
	var townWindow : Rect = Rect(10, 10, 120, 70);
	townWindow = GUI.Window(0, townWindow, TownInformation, townName);
	
	var playerChoicesWindow : Rect = Rect(10, 90, 120, 140);
	playerChoicesWindow = GUI.Window(1, playerChoicesWindow, PlayerChoices, "");
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
	if(GUILayout.Button("Manage"))
	{
		//
		// Spawn Manage Overlay
		//
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Rest"))
	{
		//
		// Spawn Rest Overlay
		//
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("View Map"))
	{
		//
		// Spawn Map Overlay
		//
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	
	if(GUILayout.Button("Leave Town"))
	{
		//
		// Leave Town
		//
	}
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}