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
var map: Map;


private var manage : boolean;
private var showTime : boolean = true;
private var leaveTown : boolean;

private var townName : String;
var townNameStyle : GUIStyle;
private var townID : int;

private var manageButtonText : String = "Check The Situation";
var manageButtonStyle : GUIStyle;

private var leaveTownButtonText : String = "Leave Town";
var leaveTownButtonStyle : GUIStyle;

function Start() 
{
	checkSituation.close=false;
	GetTownName(); // deprecated. use map.getCurrentCity() 
	
	// check for preset time. set the time if it isn't set yet.
	if(!PlayerPrefs.HasKey("Game Time"))
	{
		var theTime : gameTime = ScriptableObject.CreateInstance("gameTime") as gameTime;
		theTime.init(townDate+" "+townTime);
		PlayerPrefs.SetString("Game Time",theTime.ToString());
	}
	
	// initialize the map
	map = ScriptableObject.CreateInstance("Map") as Map;
	// check for a current city
	if(!PlayerPrefs.HasKey("Current City")){
		// set the current city to the starting city if none set already
		PlayerPrefs.SetInt("Current City",1);
	}
	// initialize the map with current city.
	map.init(PlayerPrefs.GetInt("Current City"));
	// see if we're in the last town.
	// if we are, the direction needs to be set to 1, indicating the player is now traveling back towards town 1.
	if(PlayerPrefs.GetInt("Current City")==22){
		PlayerPrefs.SetInt("Direction", 1);
	}
}

function Update() 
{

}

function OnGUI()
{
	GUI.Label(Rect(350, 10, 100, 100), GUIContent(townName), townNameStyle);
	
	

	if (GUI.Button(Rect((Screen.width - 700), (Screen.height - 40), 60, 50), GUIContent(manageButtonText), manageButtonStyle))
	{
		Debug.Log("Check the Situation");
		manage=true;
	}

	if (GUI.Button(Rect((Screen.width - 260), (Screen.height - 40), 60, 50), GUIContent(leaveTownButtonText), leaveTownButtonStyle))
	{
		Debug.Log("Leave town");
		leaveTown=true;
	}
	renderGUI();
}

function renderGUI(){
	if(manage){
		showTime=false;
		// every time you spawn the check situation window, you must include the following checks
		if(!checkSituation.close){
			checkSituation.ManageWindow();
		}
		else{
			// checkSituation.close=false must be called every time the window is closed.
			checkSituation.close=false;
			manage=false;
			showTime=true;
		}
	}
	if(leaveTown){
	
	}
	if(showTime){
		// create time window, set to be in top right hand corner of the screen
		var townWindow : Rect = Rect(Screen.width-120, 0, 120, 65);
		townWindow = GUI.Window(5, townWindow, TownInformation,"Current Time");
	}
}

// used to display options to players when leaving the town.
function leaveTownFunction(){
	// check to see if the player has a choice on where to go next
		if(map.getCityByID(map.currentCity).getDestinations().length>1){
			// this means there are more than 1 posible destination cities.
			// loop gets them one by one.
			for(var path : Path in map.getCityByID(map.currentCity).getDestinations()) {
				// path now references an object of type path that contains the destination name and the distance to that city
				// these can be accessed via:
				// path.getDestinationStsring() which will give you the destination city as a string and
				// path.getDistance() which will give you the distance to the destination city as an int
			}
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
			townName = "Town 1";
			break;
		
		case 2:
			townName = "Town 2";
			break;
			
		case 3:
			townName = "Town 3";
			break;
		
		case 4:
			townName = "Town 4";
			break;
		
		case 5:
			townName = "Town 5";
			break;
			
		case 6:
			townName = "Town 6";
			break;
		
		case 7:
			townName = "Town 7";
			break;
		
		case 8:
			townName = "Town 8";
			break;
			
		case 9:
			townName = "Town 9";
			break;
			
		case 10:
			townName = "Town 10";
			break;
		
		case 11:
			townName = "Town 11";
			break;
		
		case 12:
			townName = "Town 12";
			break;
			
		case 13:
			townName = "Town 13";
			break;
		
		case 14:
			townName = "Town 14";
			break;
		
		case 15:
			townName = "Town 15";
			break;
			
		case 16:
			townName = "Town 16";
			break;
		
		case 17:
			townName = "Town 17";
			break;
		
		case 18:
			townName = "Town 18";
			break;
			
		case 19:
			townName = "Town 19";
			break;
		
		case 20:
			townName = "Town 20";
			break;
		
		case 21:
			townName = "Town 21";
			break;
		
		case 22:
			townName = "Town 22";
			break;
		
		default:
			print("Town ID not found.");
			break;
	}
}