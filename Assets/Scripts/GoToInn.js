#pragma strict

function Start()
{
	PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
}

function OnMouseDown() 
{
	Application.LoadLevel("07Inn");
}