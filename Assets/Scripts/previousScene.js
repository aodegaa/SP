#pragma strict

private var previousScene : int;

function OnMouseDown () 
{
	previousScene = PlayerPrefs.GetInt("PreviousScene");
	Application.LoadLevel(previousScene);
	return;
}