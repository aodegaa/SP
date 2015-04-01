#pragma strict
private var gameInfoWindow : Rect = Rect(0, Screen.height/2, Screen.width, Screen.height/2);
private var currentTime : gameTime;
private var pauseText : String= "Press space to pause";

function Start () {
	currentTime = ScriptableObject.CreateInstance("gameTime") as gameTime;
	currentTime.init(PlayerPrefs.GetString("Game Time"));
	Time.timeScale=.02;

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Return)){
		Debug.Log("enter key pressed");
	}
	if(Input.GetKeyDown(KeyCode.Space)){
		Debug.Log("space key pressed");
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
}

function OnGUI(){
	renderGraphics();
}

function renderGraphics(){
	gameInfoWindow = GUILayout.Window(0, gameInfoWindow, backgroundScene,"Press enter to assess the situation");
}

function backgroundScene(){
	var image = Resources.Load("titleimage");
	GUILayout.BeginVertical();
	GUILayout.Label("",GUILayout.Height(Screen.height/2-50));
	GUILayout.Label(pauseText);
	GUILayout.EndVertical();
}