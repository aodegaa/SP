#pragma strict
static var close : boolean;


function Start () {

}

function Update () {
	Time.timeScale = WindowScript.timeScale;
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

function OnGUI(){
	createRestWindow();
}

static function createRestWindow(){
	var screenWindow : Rect = Rect(0,0,Screen.width,Screen.height);
	screenWindow = GUILayout.Window(0,screenWindow, WindowScript.createEmptyWindow, "Rest");
	GUI.BringWindowToBack(0);
	
	var infoWindow : Rect = Rect(Screen.width/2-150,Screen.height/2-50, 300,100);
	infoWindow = GUILayout.Window(1,infoWindow,WindowScript.restWindow, "How long would you like to rest for?");
}

function windowInitialization(){
	
}