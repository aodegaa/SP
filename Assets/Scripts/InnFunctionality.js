#pragma strict

// rect that will contain options within the inn
private var innOptionsWindow: Rect = Rect(300, 85, 300, 200);
// rect that will contain rest info:
private var restWindow : Rect = Rect(Screen.width/2-150,Screen.height/2-100, 300,200);

// necessary vars for the script
private var isStaying: boolean = false;
private var isResting: boolean = false;
private var restTime : int;
private var backgroundImage : GameObject;
private var innkeeper : GameObject;
private var hasRested : boolean = false;
private var innkeeperText : String="Need a place to rest your head?\nWe've got beds for cheap!";

// cost of staying
private var totalCost :int;

// set game objects and just in case the time scale is fucked, fix that up
function Start () {
	Time.timeScale=1;
	backgroundImage = GameObject.Find("inn");
	innkeeper = GameObject.Find("innkeeper");
}

// set up inn from here
function OnGUI(){
	setUpInn();
}

// manage the actual resting event, 1 tick (hour) per second
function FixedUpdate(){
	if(isResting){
		if(restTime>0){
			restTime--;
			var tempTime : gameTime = ScriptableObject.CreateInstance("gameTime") as gameTime;
			tempTime.init(PlayerPrefs.GetString("Game Time"));
			tempTime.addHour(1);
			PlayerPrefs.SetString("Game Time", tempTime.ToString());
		}
		else{
			Time.timeScale=1;
			isResting=false;
			isStaying=false;
			backgroundImage.SetActive(true);
			innkeeper.SetActive(true);
		}
	}
}

function Update () {

}

// sets up the initial shop conditions.
// changes based on varoius options chosen: updates on each GUI frame.
function setUpInn(){
	if(!isStaying){
		innOptionsWindow = GUI.Window(0, innOptionsWindow, createInnOptionsWindow, "");
	}
	
	if(isStaying){
		restWindow = GUI.Window(1, restWindow, createRestWindow, "How long will you be staying?");
	}
	
	if(isResting){
		backgroundImage.SetActive(false);
		innkeeper.SetActive(false);
	}
}

function createInnOptionsWindow(){
GUILayout.BeginVertical();
	GUILayout.FlexibleSpace();
	GUILayout.Label(innkeeperText);
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	if(hasRested){
		GUI.enabled=false;
	}
	if(GUILayout.Button("Stay the night (cost?)"))
	{
		// spawn rest window
		isStaying = true;
		
	}
	GUI.enabled=true;
	GUILayout.FlexibleSpace();
	if(GUILayout.Button("Leave Inn"))
	{
		//spawn sell window
	}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.EndVertical();
}


function createRestWindow(){

	GUILayout.BeginVertical();
	GUILayout.Label("");
	
	// rest time slider
	GUILayout.BeginHorizontal(GUILayout.Height(30));
	GUILayout.Label("");
	restTime = GUILayout.HorizontalSlider(restTime, 0.0, 12.0, GUILayout.Width(100));
	GUILayout.Label(restTime.ToString() + " hours", GUILayout.Width(100));
	GUILayout.EndHorizontal();
	
	// town time
	GUILayout.BeginHorizontal();
	GUILayout.Label("", GUILayout.Width(70));
	GUILayout.Label(PlayerPrefs.GetString("Game Time")); 
	GUILayout.Label("", GUILayout.Width(70));
	GUILayout.EndHorizontal();
	
	// buttons
	if(isResting) GUI.enabled=false;
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Rest")){
		isResting = true;
		Time.timeScale=.02;
		innkeeperText = "I hope you feel rested!";
		hasRested=true;
		totalCost=restTime;
		// rest
	}
	GUI.enabled=true;
	/*TODO: cancel button is optional right now. might be easier to phase this out. */
	if(GUILayout.Button("Cancel")){
		isResting = false;
		isStaying = false;
		Time.timeScale=1;
		// cancel
	}
	
	GUILayout.EndHorizontal();
	// display the cost if the player isn't currenly resting
	if(!isResting){
		GUILayout.Label("Price ($5/hr): $"+restTime*5);
	}
	GUILayout.EndVertical();
}
