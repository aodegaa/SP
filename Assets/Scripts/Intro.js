#pragma strict

var buttonText : String = "Skip";

function Update()
{
	// scrolls position of attached item upwards
	transform.localPosition.y += 25 * Time.deltaTime;

	// adjust based on time taken for all text to pass
	if (Time.time >= 34)
	{
		buttonText = "Continue";
	}
}

function OnGUI()
{
	if (GUI.Button(Rect((Screen.width - 110),(Screen.height - 70), 80, 50),GUIContent(buttonText)))
	{
		PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
		Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene") + 1);
		return;
	}
}