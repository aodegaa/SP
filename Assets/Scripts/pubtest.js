#pragma strict

var townName : String = "Beginnings Burg";
var townTime : String = "13:00";
var townDate : String = "June 6th, 1969";
var pubMessage : String = "Welcome!";

//

var firstName : String = "First Name";
var lastName : String = "Last Name";
var gameSeed : int;
var submitted : boolean = false;

function Start()
{
	gameSeed = Random.Range(1,1001);
}

function OnGUI()
{
	var townWindow : Rect = Rect(10, 10, 160, 70);
	townWindow = GUI.Window(0, townWindow, TownInformation, townName + " Store");

	var pubChoicesWindow : Rect = Rect(10, 90, 160, 140);
	pubChoicesWindow = GUI.Window(1, pubChoicesWindow, PubChoices, "");
	
	var pubDialogWindow : Rect = Rect(Screen.width/2 - 70, 10, 280, 60);
	pubDialogWindow = GUI.Window(2, pubDialogWindow, PubDialog, "");
	
	var createCharacterWindow : Rect = Rect(Screen.width/2 - 70, 80, 280, 150);
	createCharacterWindow = GUI.Window(3, createCharacterWindow, CreateCharacter, "Musher Registration Form #" + gameSeed);
	
}

function PubChoices()
{
	GUILayout.BeginVertical();
	
	if(!PlayerPrefs.HasKey("Registration"))
    {
    	GUILayout.BeginHorizontal();
    	if(GUILayout.Button("Registration"))
    	{
    		pubMessage = "You're going to make the trip? \nMany have left, never to return.";
    	}
    	GUILayout.EndHorizontal();
    } 
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Rumors"))
	{
		pubMessage = "Have you heard the latest?";
		//
		// Spawn rumors mini window dialog
		//
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Jobs"))
	{
		pubMessage = "These are the available jobs.";
		//
		// Spawn mini-window Trade dialog
		//
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Leave Pub"))
	{
		pubMessage = "Safe travels.";
		//
		// leave pub
		//
		PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
        Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene") + 1);
		
	}
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

function TownInformation()
{
	var myClock = Resources.Load("clock");

	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(townDate);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(myClock);
	GUILayout.Label(townTime);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

function PubDialog()
{
	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(pubMessage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

//

function CreateCharacter()
{
	if (GUI.GetNameOfFocusedControl() == "LastNameText") {
		if (Event.current.type == EventType.KeyDown && (Event.current.keyCode == KeyCode.KeypadEnter || Event.current.keyCode == KeyCode.Return))
		// make sure the defaults aren't there and make sure they actually entered a last name
			if(firstName!="First Name" && lastName!="Last Name" && lastName!=""){
				submitted = true;
			}
 }
    GUILayout.BeginVertical();
    
       
    // First Name
    GUILayout.BeginHorizontal();
    GUILayout.Label("First Name", GUILayout.Width(80));
    GUI.SetNextControlName("FirstNameText");
    firstName = GUILayout.TextField( firstName );
    GUILayout.EndHorizontal();
    
           // clear dat default text on click
    if(UnityEngine.Event.current.type == EventType.Repaint){
    	if( GUI.GetNameOfFocusedControl()=="FirstNameText"){
    		if(firstName=="First Name") firstName = "";
    	}
    	else{
    		if( firstName=="") firstName = "First Name";
    	}
    }
 
     
    // Last Name
    GUILayout.BeginHorizontal();
    GUILayout.Label("Last Name", GUILayout.Width(80));
    GUI.SetNextControlName("LastNameText");
    lastName = GUILayout.TextField( lastName );
    GUILayout.EndHorizontal();
    
    GUILayout.BeginHorizontal();
    GUILayout.Label("Difficulty", GUILayout.Width(80));
    if(GUILayout.Button("Easy"))
    {
    	PlayerPrefs.SetInt("Difficulty", 1);
    }
    
    if(GUILayout.Button("Medium"))
    {
    	PlayerPrefs.SetInt("Difficulty", 2);
    }
    
    if(GUILayout.Button("Hard"))
    {
    	PlayerPrefs.SetInt("Difficulty", 3);
    }
    GUILayout.EndHorizontal();
    
     // clear dat default text on click
    if(UnityEngine.Event.current.type == EventType.Repaint){
    	if( GUI.GetNameOfFocusedControl()=="LastNameText"){
    		if(lastName=="Last Name") lastName = "";
    	}
    	else{
    		if( lastName=="") lastName = "Last Name";
    	}
    }
    
    
    
     
    if ( GUILayout.Button( "Submit" ) )
    {
        submitted = true;
    }
     
    if ( submitted )
    {
        //GUILayout.Label(firstName);
        //GUILayout.Label(lastName);
       // GUILayout.Label(gameSeed.ToString());
        PlayerPrefs.SetString("FirstName", firstName);
        PlayerPrefs.SetString("LastName", lastName);
        PlayerPrefs.SetInt("GameSeed", gameSeed);
        PlayerPrefs.SetInt("Registration", 1);
    }
     
    GUILayout.EndVertical();
}