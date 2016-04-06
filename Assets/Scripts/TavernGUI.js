#pragma strict

// TO DO - 
// display time, date, weather
// 
//
// 
//
//
// 
//
//

private var townName : String;
var townNameStyle : GUIStyle;
private var townID : int;

private var manageButtonText : String = "Check The Situation";
var manageButtonStyle : GUIStyle;

private var leaveTavernButtonText : String = "Leave Tavern";
var leaveTavernButtonStyle : GUIStyle;

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
		//load manage window
	}

	if (GUI.Button(Rect((Screen.width - 260), (Screen.height - 40), 60, 50), GUIContent(leaveTavernButtonText), leaveTavernButtonStyle))
	{
		//load scene of current town
	}
}

function GetTownName()
{
	townID = PlayerPrefs.GetInt("TownID");
	
	switch (townID)
	{
		case 1:
			townName = "Town 1 - Tavern";
			break;
		
		case 2:
			townName = "Town 2 - Tavern";
			break;
			
		case 3:
			townName = "Town 3 - Tavern";
			break;
		
		case 4:
			townName = "Town 4 - Tavern";
			break;
		
		case 5:
			townName = "Town 5 - Tavern";
			break;
			
		case 6:
			townName = "Town 6 - Tavern";
			break;
		
		case 7:
			townName = "Town 7 - Tavern";
			break;
		
		case 8:
			townName = "Town 8 - Tavern";
			break;
			
		case 9:
			townName = "Town 9 - Tavern";
			break;
			
		case 10:
			townName = "Town 10 - Tavern";
			break;
		
		case 11:
			townName = "Town 11 - Tavern";
			break;
		
		case 12:
			townName = "Town 12 - Tavern";
			break;
			
		case 13:
			townName = "Town 13 - Tavern";
			break;
		
		case 14:
			townName = "Town 14 - Tavern";
			break;
		
		case 15:
			townName = "Town 15 - Tavern";
			break;
			
		case 16:
			townName = "Town 16 - Tavern";
			break;
		
		case 17:
			townName = "Town 17 - Tavern";
			break;
		
		case 18:
			townName = "Town 18 - Tavern";
			break;
			
		case 19:
			townName = "Town 19 - Tavern";
			break;
		
		case 20:
			townName = "Town 20 - Tavern";
			break;
		
		case 21:
			townName = "Town 21 - Tavern";
			break;
		
		case 22:
			townName = "Town 22 - Tavern";
			break;
		
		default:
			print("Town ID not found.");
			break;
	}
}