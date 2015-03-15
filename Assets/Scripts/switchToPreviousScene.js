#pragma strict

function OnMouseDown () 
{
	Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene"));
	return;
}