#pragma strict

var renderNewGameWarning : boolean = false;
var drawButtons : boolean = true;
var titleButtonStyle : GUIStyle;

function OnGUI()
{
	if (drawButtons)
	{
		// New Game
		if (GUI.Button(Rect((50), (Screen.height/2 + 20), 80, 50), GUIContent("New Game"), titleButtonStyle))
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
	
		// if they don't have a save file yet, don't let them continue
		if (!PlayerPrefs.HasKey("PreviousScene"))
		{
			GUI.enabled = false;
		}
		
		// Continue
		if (GUI.Button(Rect((50), (Screen.height/2 - 30), 80, 50), GUIContent("Continue"), titleButtonStyle))
		{
			Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene"));
			return;
		}
		GUI.enabled = true;
	
	
		// Options
		if (GUI.Button(Rect((50), (Screen.height/2 + 70), 80, 50), GUIContent("Options"), titleButtonStyle))
		{
			//
			// Options Overlay Window
			//
		}
		
		// For Testing Purposes - Delete Later
		if (GUI.Button(Rect((Screen.width/2), (Screen.height - 50), 80, 50), GUIContent("Delete")))
		{
			PlayerPrefs.DeleteAll();
			return;
		}
		// For Testing Purposes - Delete Later
		
	}
	
	// New Game Warning
	if (renderNewGameWarning)
	{
		var newGamePopUpWarning : Rect = Rect((Screen.width/2 - 115), (Screen.height/2 - 50), 280, 100);
		newGamePopUpWarning = GUI.Window(0, newGamePopUpWarning, NewGameWarningWindow, "Warning");
	}
}

// Window Function
function NewGameWarningWindow()
{
	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("All previously saved data will be deleted.");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("This cannot be undone.");
	GUILayout.FlexibleSpace();
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