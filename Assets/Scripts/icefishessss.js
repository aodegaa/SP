#pragma strict

var playerReel : boolean = false;
var earlyReel : boolean = false;
var successReel : boolean = false;
var targetTime : int;
var buttonContent : String = "Wait...";

function Start()
{
	Time.timeScale = 1.0;
	targetTime = Random.Range(1, 6);
}

function OnGUI() 
{
	var fishingWindow : Rect = Rect(Screen.width/2 - 135, Screen.height/2 -135, 270, 270);
	fishingWindow = GUI.Window(0, fishingWindow, IceFishing, "");
}

function IceFishing()
{
	var fishingContent = Resources.Load("start");

	if(Time.time < targetTime)
	{
		fishingContent = Resources.Load("start");
		if (playerReel)
		{
			earlyReel = true;
		}
	}
	
	if(Time.time >= targetTime && Time.time <= targetTime + 2)
	{
		fishingContent = Resources.Load("moment");
		buttonContent = "REEL IN!";
		if (playerReel)
		{
			successReel = true;
		}
	}
	
	if((Time.time > targetTime + 1 && !successReel) || earlyReel)
	{
		fishingContent = Resources.Load("rage");
		buttonContent = "You lose. Play again?";
	}
	
	if(Time.time > targetTime + 1 && successReel && !earlyReel)
	{
		fishingContent = Resources.Load("happy");
		buttonContent = "You win. Play again?";
	}

	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(fishingContent);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	if(GUILayout.Button(buttonContent))
	{
		playerReel = true;
	}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}