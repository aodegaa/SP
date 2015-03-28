#pragma strict

private var buttonText : String = "Skip";

function Start()
{
	PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
}

function Update()
{
	Time.timeScale = 1.0;
	
	// scrolls position of attached item upwards
	transform.localPosition.y += 25 * Time.deltaTime;

	// adjust based on time taken for all text to pass
	if (Time.timeSinceLevelLoad >= 41)
	{
		buttonText = "Continue";
	}
}

function OnGUI()
{
	if (GUI.Button(Rect((Screen.width - 110),(Screen.height - 70), 80, 50),GUIContent(buttonText)))
	{
		Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene") + 1);
	}
}