﻿#pragma strict

function OnMouseDown () 
{
	PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
	Application.LoadLevel(4);
	return;
}