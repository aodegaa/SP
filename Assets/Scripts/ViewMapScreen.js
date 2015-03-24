#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){
	createViewMapWindow();
}

static function createViewMapWindow(){
	var screenWindow : Rect = Rect(0,0,Screen.width,Screen.height);
	screenWindow = GUILayout.Window(0,screenWindow, WindowScript.createEmptyWindow, "Map");
	
	var mapWindow : Rect = Rect(Screen.width/2-200, Screen.height/2-250, 400, 500);
	mapWindow = GUILayout.Window(1,mapWindow, WindowScript.viewMapWindow, "");
}
