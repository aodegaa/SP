#pragma strict
var testTime:gameTime; 


function Start () {
	testTime = ScriptableObject.CreateInstance("gameTime") as gameTime;
	testTime.init("June 6th, 1969 13:00");
}

function Update () {

}

function OnGUI(){
	var myWindow : Rect = Rect(Screen.width/2-100, Screen.height/100, 200,200);
	myWindow = GUILayout.Window(0,myWindow,displayWindow,"Date");
}

function displayWindow(){
	GUILayout.BeginVertical();
	GUILayout.Label(testTime.ToString());
	GUILayout.EndVertical();
}