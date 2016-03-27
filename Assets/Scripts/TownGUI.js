#pragma strict

// TO DO - 
//
// update town ID when leaving town
//
// place town name text
//
//
// day / night color overlay
//
// weather overlays

private var townName : String;
var townNameStyle : GUIStyle;
private var townID : int;

private var manageButtonText : String = "Check The Situation";
var manageButtonStyle : GUIStyle;

private var leaveTownButtonText : String = "Leave Town";
var leaveTownButtonStyle : GUIStyle;

function Start() 
{
	GetTownName();
}

function Update() 
{

}

function OnGUI()
{
	GUI.Label(Rect(350, 10, 100, 100), GUIContent(townName), townNameStyle);

	if (GUI.Button(Rect((Screen.width - 700), (Screen.height - 40), 60, 50), GUIContent(manageButtonText), manageButtonStyle))
	{

	}

	if (GUI.Button(Rect((Screen.width - 260), (Screen.height - 40), 60, 50), GUIContent(leaveTownButtonText), leaveTownButtonStyle))
	{

	}
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