#pragma strict

private var buttonText : String = "Skip";
var introButtonStyle : GUIStyle;

function Start()
{
	PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
}

function Update()
{
	// scrolls position of attached item upwards
	transform.localPosition.y += 25 * Time.deltaTime;

	// adjust based on time taken for all text to pass
	if (Time.timeSinceLevelLoad >= 41)
	{
		buttonText = "Next";
	}
}

function OnGUI()
{
	if (GUI.Button(Rect((Screen.width - 100),(Screen.height - 70), 60, 50),GUIContent(buttonText), introButtonStyle))
	{
		Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene") + 1);
	}
}