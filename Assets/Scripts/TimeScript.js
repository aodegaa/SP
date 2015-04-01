#pragma strict

private var distanceToNextTown : int = 1000;
private var windowRect0 : Rect;
var eventWindow : Rect = Rect (0, 0, 960, 600);

var eventUp : boolean = false;
var eventChance : int;
var rollEvent : int;

var count : int = 0;
Time.timeScale = 0;

function Start() 
{
	distanceToNextTown++;
}

function FixedUpdate()
{
	distanceToNextTown--;
	BadShit();
}

function OnGUI()
{
	var screenWidth = Screen.width;
    var screenHeight = Screen.height;
     
    var windowWidth = 300;
    var windowHeight = 60;
    var windowX = ( screenWidth - windowWidth ) / 2;
    var windowY = ( screenHeight - windowHeight ) / 2;
     
    // Postion the window in the center of the screen.
    windowRect0 = Rect( windowX, windowY, windowWidth, windowHeight );
 
    GUILayout.Window( 0, windowRect0, windowCreation, "AUSTRALIAN ADVERTISING!!!");
    showEvent();
}

function showEvent()
{
	if(eventUp)
	{
		eventWindow = GUI.Window(99, eventWindow, myEvent, "");
	}
}

function myEvent()
{
	GUILayout.BeginVertical();
			GUILayout.Label("");
				GUILayout.Label("");
					GUILayout.Label("");
					GUILayout.Label("");
			GUILayout.Label("");
				GUILayout.Label("");
					GUILayout.Label("");
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("DRINK FOSTERS MATE");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	if(GUILayout.Button("YEAH MATE", GUILayout.Width(160)))
	{
		eventUp = false;
		Time.timeScale = .02;
	}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.EndVertical();
}

function BadShit()
{
	eventChance = 8;
	rollEvent = Random.Range(0, 101);
	
	if(rollEvent <= eventChance)
	{
		Time.timeScale = 0;
		eventUp = true;
	}
	
}

function windowCreation()
{
	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(distanceToNextTown.ToString());
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	
	if(GUILayout.Button("Start"))
	{
		// start
		Time.timeScale = .02;

	}
	if(GUILayout.Button("Stop"))
	{
		// stop
		Time.timeScale = 0;
	}
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}