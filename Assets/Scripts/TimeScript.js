#pragma strict
var playerHealth : int = 100;
private var windowRect0 : Rect;
var count :int =0;
Time.timeScale=0;

function Start () {
playerHealth++;
}

function FixedUpdate(){
	playerHealth--;
}

function OnGUI(){
	var screenWidth = Screen.width;
    var screenHeight = Screen.height;
     
    var windowWidth = 300;
    var windowHeight = 60;
    var windowX = ( screenWidth - windowWidth ) / 2;
    var windowY = ( screenHeight - windowHeight ) / 2;
     
    // Postion the window in the center of the screen.
    windowRect0 = Rect( windowX, windowY, windowWidth, windowHeight );
 
    GUILayout.Window( 0, windowRect0, windowCreation, "Player health status");
}

function windowCreation(){
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.Label("Player health: ");
	GUILayout.Label(playerHealth.ToString());
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Start")){
		// start
		Time.timeScale = .02;

	}
	if(GUILayout.Button("Stop")){
		// stop
		Time.timeScale = 0;
	}
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}