#pragma strict

var renderNewGameWarning : boolean = false;
var drawButtons : boolean = true;

function OnGUI()
{
	if (drawButtons)
	{
	
		// For Testing Purposes - Delete Later
		if (GUI.Button(Rect((Screen.width/2 + 260), (Screen.height/2 + 120), 80, 50), GUIContent("Delete")))
		{
			PlayerPrefs.DeleteAll();
			return;
		}
		// For Testing Purposes - Delete Later
	
		// Continue
		if (GUI.Button(Rect((Screen.width/2 - 340), (Screen.height - 60), 80, 50), GUIContent("Continue")))
		{
			Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene"));
			return;
		}
	
		// Options
		if (GUI.Button(Rect((Screen.width/2 + 260), (Screen.height - 60), 80, 50), GUIContent("Options")))
		{
			//
			// Options Overlay Window
			//
		}
	
		// New Game
		if (GUI.Button(Rect((Screen.width/2 - 40), (Screen.height - 60), 80, 50), GUIContent("New Game")))
		{
			if (PlayerPrefs.HasKey("PreviousScene"))
			{
				renderNewGameWarning = true;
				drawButtons = false;
			}
		
			else
			{
				PlayerPrefs.DeleteAll();
				PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
				Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene") + 1);
				return;
			}
		}
	}
	
	// New Game Warning
	if (renderNewGameWarning)
	{
		var newGamePopUpWarning : Rect = Rect((Screen.width/2 - 140), (Screen.height/2 - 50), 280, 100);
		newGamePopUpWarning = GUI.Window(0, newGamePopUpWarning, NewGameWarningWindow, "Warning");
	}
}

// Window Function
function NewGameWarningWindow()
{
	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("All previously saved data will be deleted. \nThis cannot be undone.");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if (GUILayout.Button("Submit"))
	{
			PlayerPrefs.DeleteAll();
			PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
			renderNewGameWarning = false;
			Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene") + 1);
			return;
	}
	
	if (GUILayout.Button("Cancel"))
	{
		renderNewGameWarning = false;
		drawButtons = true;
	}
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}