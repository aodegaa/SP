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

static var instructions : boolean = true;
function instructionWindow(){
	GUILayout.BeginVertical();
	GUILayout.Label("Look out!\nOutrun the avalanche while avoiding the rocks. Use the arrow keys or wasd to steer.");
	if(GUILayout.Button("OK")){
		instructions=false; // close the instructions window
	}
	GUILayout.EndVertical();
}

function OnGUI(){
	renderWindows();
}

function renderWindows(){
	var instructionwindow : Rect = Rect(Screen.width/2-75,Screen.height/2-25,150,50);
	var popupwindow : Rect = Rect(Screen.width/2-25,Screen.height/2-50,100,50);
	if(instructions){
	instructionwindow=GUILayout.Window(1,instructionwindow,instructionWindow,"Instructions");
	}
	if(Musher.collision){
		popupwindow = GUILayout.Window(0,popupwindow, crashWindow, "");
		// TODO: make the player lose something for losing the game
		// TODO: also load the town scene
		PlayerPrefs.SetInt("Current City",PlayerPrefs.GetInt("Next City")); // arrive at the next city
		Application.LoadLevel(6);
	}
	if(done){
		popupwindow = GUILayout.Window(0,popupwindow, winWindow, "");
		PlayerPrefs.SetInt("Current City",PlayerPrefs.GetInt("Next City")); // arrive at the next city
		// TODO: load the town scene
		Application.LoadLevel(6);
	}
}
	
function Start () {
	// make sure the time scale isn't broken
	Time.timeScale=0.01;

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
	if(!instructions){
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
}