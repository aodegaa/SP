#pragma strict
private var gameInfoWindow : Rect = Rect(0, Screen.height/2, Screen.width, Screen.height/2);
private var currentTime : gameTime;
private var pauseText : String= "Press space to pause";
private var manage : boolean = false;

function Start () {
	currentTime = ScriptableObject.CreateInstance("gameTime") as gameTime;
	currentTime.init(PlayerPrefs.GetString("Game Time"));
	Time.timeScale=.02;

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Return)){
		// spawn manage window and pause the game
		pauseText = "Press space to unpause";
		Time.timeScale=0;
		manage = true; // set manage screen flag
	}
	if(Input.GetKeyDown(KeyCode.Space)){
		// time is already paused, so unpause
		if(Time.timeScale==0){
			pauseText = "Press space to pause";
			Time.timeScale=.02;
		}
		// time isn't paused, so pause it
		else{
			pauseText = "Press space to unpause";
			Time.timeScale=0;
		}
	}

}

function FixedUpdate(){
	currentTime.addHour(1);
	PlayerPrefs.SetString("Game Time",currentTime.ToString());
}

function OnGUI(){
	renderGraphics();
}

function renderGraphics(){
	if(manage){
		if(!ManageScreen.close){
	 		ManageScreen.createManageWindow();
		}
		else{
			manage = false;
			ManageScreen.close = false;
		}
	}
	else{
		gameInfoWindow = GUILayout.Window(1, gameInfoWindow, travelInfo,"Press enter to assess the situation");		
	}
}

// variables for the travel window
var pauseButtonString = "Stop";

// window that spawns all information on the current traveling situation
function travelInfo(){
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	if(GUILayout.Button(pauseButtonString)){
		// if your going, stop. otherwise continue
		if(pauseButtonString=="Stop"){
			pauseButtonString="Continue";
			Time.timeScale=0;
		}
		else{
			pauseButtonString="Stop";
			Time.timeScale=.02;
		}
	}
	// pause time while you manage
	if(GUILayout.Button("Assess the Situation")){
		pauseButtonString="Continue";
		Time.timeScale=0;
		manage = true;
	}
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.Label("",	GUILayout.Height(Screen.height/2-80),GUILayout.Width(1));
	
	GUILayout.BeginVertical();
	GUILayout.Label("Next Town: Undead Burg (distance away?)"); // will need to update with actual town information when added
	GUILayout.Label(PlayerPrefs.GetString("Game Time"));
	GUILayout.Label("Pace: (the current pace here)");
	GUILayout.Label("Rations: (current ration level)");
	
	GUILayout.EndVertical();
	
	GUILayout.EndHorizontal();
	GUILayout.Label(pauseText);
	GUILayout.EndVertical();
;
}