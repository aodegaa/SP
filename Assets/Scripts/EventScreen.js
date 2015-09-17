#pragma strict

static var close: boolean = false;

// option bools used for various choices in option driven events
// feel free to create more as needed
static var option1: boolean;
static var option2: boolean;
static var option3: boolean;

// used to create an event with a single outcome. players can only interact by clicking "ok" to close
static function createEventWindow(){
	var myWindow : Rect = Rect(Screen.width/2-150,Screen.height/2-75,300,150);
	myWindow = GUILayout.Window(0, myWindow, WindowScript.createEventWindow, "Event Window");
}

// used to create an event with multiple possible outcomes
// players can choose from different options, tracked with the static optionX variables 
// declared at the beginning of the function
static function createOptionEventWindow(){
	var myWindow : Rect = Rect(Screen.width/2-150,Screen.height/2-75,300,150);
	myWindow = GUILayout.Window(0, myWindow, WindowScript.createOptionEventWindow, "Option Event Window");
}

