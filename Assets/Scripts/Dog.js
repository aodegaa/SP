#pragma strict

var hungerLevel : int;
var health : int;
var fatigue : int;
var dogName : String;

private var windowRect0 : Rect;
private var submitted : boolean = false;

function Dog(newName : String){
	dogName = newName;
	fatigue = 0;
	health = 100;
	hungerLevel = 0;
}

function Start () {
	Dog("Doge");

}

function Update () {

}

function OnGUI (){
var screenWidth = Screen.width;
    var screenHeight = Screen.height;
     
    var windowWidth = 300;
    var windowHeight = 180;
    var windowX = ( screenWidth - windowWidth ) / 2;
    var windowY = ( screenHeight - windowHeight ) / 2;
     
    // Postion the window in the center of the screen.
    windowRect0 = Rect( windowX, windowY, windowWidth, windowHeight );
 
    GUILayout.Window( 0, windowRect0, UserForm, "Enter your dog's name");

}

function UserForm(){
	 GUILayout.BeginVertical();
     
    // First Name
    GUILayout.BeginHorizontal();
    GUILayout.Label("Dog's Name", GUILayout.Width(80));
    GUI.SetNextControlName("FirstNameText");
  	dogName = GUILayout.TextField( dogName );
    GUILayout.EndHorizontal();
    
    GUILayout.EndVertical ();
    
    if ( GUILayout.Button( "Submit" ) )
    {
        submitted = true;
    }
    
    if(submitted){
    	// do something maybe?
    	// like store the dog's info somewhere
    }
    
    
}