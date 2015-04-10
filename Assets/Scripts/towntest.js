#pragma strict

var townName : String = "Beginnings Burg";
var townTime : String = "13:00";
var townDate : String = "June 1st, 1969";
var manage : boolean;
var rest : boolean;
var viewMap : boolean;
var leaveTown : boolean;
var map : Map;


function Update(){
	Time.timeScale = WindowScript.timeScale;
}

function Start(){
	PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
	if(!PlayerPrefs.HasKey("Game Time")){
		var theTime : gameTime = ScriptableObject.CreateInstance("gameTime") as gameTime;
		theTime.init(townDate+" "+townTime);
		PlayerPrefs.SetString("Game Time",theTime.ToString());
	}
	
	// initialize the map
	map = ScriptableObject.CreateInstance("Map") as Map;
	// no current city found
	if(!PlayerPrefs.HasKey("Current City")){
		// so set the current city to the starting city
		PlayerPrefs.SetInt("Current City",1);
	}
	// initialize the map with current city.
	map.init(PlayerPrefs.GetInt("Current City"));
}

function FixedUpdate(){
	if(WindowScript.beginRest){
		if(WindowScript.restTime>0){
			WindowScript.restTime--;
			var tempTime : gameTime = ScriptableObject.CreateInstance("gameTime") as gameTime;
			tempTime.init(PlayerPrefs.GetString("Game Time"));
			tempTime.addHour(1);
			PlayerPrefs.SetString("Game Time", tempTime.ToString());
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
	else if(leaveTown){
	// check to see if the player has a choice on where to go next
		if(map.getCityByID(map.currentCity).getDestinations(0).length>1){
			var nextCityWindow : Rect = Rect(Screen.width/2-120,Screen.height/2-100,240,200);
			nextCityWindow = GUI.Window(2,nextCityWindow,chooseCity,"Where would you like to travel next?");
		}
		// if they don't, set the destination for them, send them on their way
		// since this call is confusing: get the current city from the map
		// get the paths leading out of that city
		// since there's only 1, 
		// set its destination city as the next city and it's distance as the travel distance
		else{
			var path : Path = map.getCityByID(map.currentCity).getDestinations(0)[0];
			PlayerPrefs.SetInt("Next City", path.endCity.id);
			PlayerPrefs.SetInt("Travel Distance", path.distance);
		}
	}	
	else
	{
		var townWindow : Rect = Rect(10, 10, 120, 70);
		townWindow = GUI.Window(0, townWindow, TownInformation, townName);
	
		var playerChoicesWindow : Rect = Rect(10, 90, 120, 140);
		playerChoicesWindow = GUI.Window(1, playerChoicesWindow, PlayerChoices, "");
		
		if(Application.loadedLevel == 2 || Application.loadedLevel == 4 || Application.loadedLevel == 6)
		{
			var tutorialWindow = Rect(Screen.width/2 - 75, Screen.height/2 - 75, 150, 150);
		    tutorialWindow= GUILayout.Window(99, tutorialWindow, TutorialDialog, "The Mayor");
	    } 
	}
}

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
    	
    	// set money.
    	var playerMoney : int = 500;
    	PlayerPrefs.SetInt("PlayerMoney", playerMoney);
    }
    
    if(Application.loadedLevel == 6)
    {
    	GUILayout.Label("Great work. \n\nHopefully these supplies will help you in your journey to Haven. \n\nFor now you should get some rest at the inn, and plan on leaving at dawn." );
    }
}

private var location : int=-1;
function chooseCity(){
	var buttonSelected : boolean = false;

	GUILayout.BeginVertical();
	var count:int = 0;
	for(var path : Path in map.getCityByID(map.currentCity).getDestinations(0)){
		
		if(location==count){
			GUI.enabled=false;
		}
		if(GUILayout.Button(path.endCity.ToString())){
			buttonSelected=true;
			location = count;
			PlayerPrefs.SetInt("Next City", path.endCity.id);
			PlayerPrefs.SetInt("Travel Distance", path.distance);
		}
		GUI.enabled=true;
		count++;
		
	}
	if(GUILayout.Button("OK")){
		if(!(PlayerPrefs.GetInt("Next City")==PlayerPrefs.GetInt("Current City"))){
			Application.LoadLevel(9);
		}
	}
	GUILayout.EndVertical();
}
