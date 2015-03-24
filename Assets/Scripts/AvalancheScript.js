#pragma strict

var tree : GameObject;
var rock : GameObject;
var done : boolean = false;

function crashWindow(){
	GUILayout.BeginVertical();
	GUILayout.Label("You Crashed!");
	GUILayout.EndVertical();
}

function winWindow(){
	GUILayout.BeginVertical();
	GUILayout.Label("You Won!");
	GUILayout.EndVertical();
}

function OnGUI(){
	renderWindows();
}

function renderWindows(){
	var popupwindow : Rect = Rect(Screen.width/2-25,Screen.height/2-50,100,50);
	if(Musher.collision){
		popupwindow = GUILayout.Window(0,popupwindow, crashWindow, "");
	}
	if(done){
		popupwindow = GUILayout.Window(0,popupwindow, winWindow, "");
	}
}
	
function Start () {
	// create some trees and rocks at random locations to start
	// max y value is 4.6
	// min y value is -4.7
	rock = GameObject.Find("rock");
	tree = GameObject.Find("pine tree");
	for(var i:int=0;i<50;i++){
		Instantiate(tree, Vector3(Random.Range(5.0,100.0),Random.Range(-4.7,4.6),0), Quaternion.identity);
		Instantiate(rock, Vector3(Random.Range(5.0,100.0),Random.Range(-4.7,4.6),0), Quaternion.identity);
	}
	
}

function Update () {
	if(!Musher.collision){
		if(transform.localPosition.x < 115){
			transform.localPosition.x += 3 *Time.deltaTime;
		}
		else {
			done=true;
			// load the next level here
		}
	}
}