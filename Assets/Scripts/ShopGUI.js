#pragma strict

// TO DO - 
//
// update town ID when leaving town
//
// display time / date / weather
//
//
// day / night color overlay
//
// weather overlays


// default time/date if not set yet
var townTime : String = "13:00";
var townDate : String = "June 1st, 1969";

var townName : String;
var townNameStyle : GUIStyle;
private var townID : int;

var storeDateTimeStyle : GUIStyle;

private var manageButtonText : String = "Check The Situation";
var manageButtonStyle : GUIStyle;

private var leaveStoreButtonText : String = "Leave The Store";
var leaveStoreButtonStyle : GUIStyle;

function Start() 
{
	GetTownName();
	
	// check for preset time. set the time if it isn't set yet.
	if(!PlayerPrefs.HasKey("Game Time"))
	{
		var theTime : gameTime = ScriptableObject.CreateInstance("gameTime") as gameTime;
		theTime.init(townDate+" "+townTime);
		PlayerPrefs.SetString("Game Time",theTime.ToString());
	}
}

function Update() 
{

}

function OnGUI()
{
	GUI.Label(Rect(Screen.width/2 - 100, 20, 200, 20), GUIContent(townName), townNameStyle);
	
	// create time window, set to be in top right hand corner of the screen
	var townWindow : Rect = Rect(Screen.width-120, 0, 120, 65);
	townWindow = GUI.Window(5, townWindow, TownInformation,"");

	if (GUI.Button(Rect((Screen.width - 700), (Screen.height - 40), 60, 50), GUIContent(manageButtonText), manageButtonStyle))
	{
	}

	if (GUI.Button(Rect((Screen.width - 260), (Screen.height - 40), 60, 50), GUIContent(leaveStoreButtonText), leaveStoreButtonStyle))
	{
		Application.LoadLevel("03TownScene");
	}
}

// used to display the date and time, with an image of a clock
function TownInformation()
{
	var myClock = Resources.Load("clock");

	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	// the current date
	GUILayout.Label(PlayerPrefs.GetString("Game Time").Substring(0,PlayerPrefs.GetString("Game Time").Length-5));
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(myClock);
	// the current time
	GUILayout.Label(PlayerPrefs.GetString("Game Time").Substring(PlayerPrefs.GetString("Game Time").Length-5));
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

function GetTownName()
{
	townID = PlayerPrefs.GetInt("TownID");
	
	switch (townID)
	{
		case 1:
			townName = "Town 1 - Store";
			break;
		
		case 2:
			townName = "Town 2 - Store";
			break;
			
		case 3:
			townName = "Town 3 - Store";
			break;
		
		case 4:
			townName = "Town 4 - Store";
			break;
		
		case 5:
			townName = "Town 5 - Store";
			break;
			
		case 6:
			townName = "Town 6 - Store";
			break;
		
		case 7:
			townName = "Town 7 - Store";
			break;
		
		case 8:
			townName = "Town 8 - Store";
			break;
			
		case 9:
			townName = "Town 9 - Store";
			break;
			
		case 10:
			townName = "Town 10 - Store";
			break;
		
		case 11:
			townName = "Town 11 - Store";
			break;
		
		case 12:
			townName = "Town 12 - Store";
			break;
			
		case 13:
			townName = "Town 13 - Store";
			break;
		
		case 14:
			townName = "Town 14 - Store";
			break;
		
		case 15:
			townName = "Town 15 - Store";
			break;
			
		case 16:
			townName = "Town 16 - Store";
			break;
		
		case 17:
			townName = "Town 17 - Store";
			break;
		
		case 18:
			townName = "Town 18 - Store";
			break;
			
		case 19:
			townName = "Town 19 - Store";
			break;
		
		case 20:
			townName = "Town 20 - Store";
			break;
		
		case 21:
			townName = "Town 21 - Store";
			break;
		
		case 22:
			townName = "Town 22 - Store";
			break;
		
		default:
			print("Town ID not found.");
			break;
	}
}

function CreateManageWindow()
{
	
}