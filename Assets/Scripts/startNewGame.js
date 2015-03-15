#pragma strict

#pragma strict

function OnMouseDown () 
{
	PlayerPrefs.DeleteAll();
	PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
	Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene") + 1);
	return;
}