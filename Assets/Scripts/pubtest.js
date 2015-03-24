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
var renderCreateCharacter : boolean = false;

//

var rumorMessage : String;
var messageNumber : int;
var previousMessageNumber : int;
var renderRumor : boolean = false;

//

var renderJob : boolean = false;

//

private var easy : boolean = false;
private var medium : boolean = false;
private var hard : boolean = false;

//
function Start()
{
	gameSeed = Random.Range(1,1001);
}

function OnGUI()
{
	if(renderCreateCharacter)
	{
		var createCharacterWindow : Rect = Rect(Screen.width/2 - 70, 80, 280, 150);
		createCharacterWindow = GUI.Window(4, createCharacterWindow, CreateCharacter, "Musher Registration Form #" + gameSeed);
	}
	var townWindow : Rect = Rect(10, 10, 160, 70);
	townWindow = GUI.Window(0, townWindow, TownInformation, townName + " Pub");

	var pubChoicesWindow : Rect = Rect(10, 90, 160, 140);
	pubChoicesWindow = GUI.Window(1, pubChoicesWindow, PubChoices, "");
	
	var pubDialogWindow : Rect = Rect(Screen.width/2 - 70, 10, 280, 60);
	pubDialogWindow = GUI.Window(2, pubDialogWindow, PubDialog, "");
	
	if(renderRumor)
	{
		var rumorWindow : Rect = Rect(Screen.width/2 - 70, 80, 280, 150);
		rumorWindow = GUI.Window(3, rumorWindow, RumorDialog, "");
	}

}

function PubChoices()
{	
	// disable the GUI while character selection is made
	if(renderCreateCharacter){
		GUI.enabled=false;
	}
	GUILayout.BeginVertical();
	
	if(!PlayerPrefs.HasKey("Registration"))
    {
    	GUILayout.BeginHorizontal();
    	if(GUILayout.Button("Registration"))
    	{
    		pubMessage = "You're going to make the trip? \nMany have left, never to return.";
    		renderCreateCharacter = true;
    	}
    	GUILayout.EndHorizontal();
    } 
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Rumors"))
	{
		pubMessage = "Have you heard the latest?";
		SpawnRumor();
		renderRumor = true;
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
	GUI.enabled=true; // renenable the GUI now that registration is complete
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
	// allow for enter to submit form
	// don't actually like this option right now. make them click submit.
	/*
	if (GUI.GetNameOfFocusedControl() == "LastNameText") {
		if (Event.current.type == EventType.KeyDown && (Event.current.keyCode == KeyCode.KeypadEnter || Event.current.keyCode == KeyCode.Return)){
		// make sure the defaults aren't there and make sure they actually entered a last name
			if(firstName!="First Name" && lastName!="Last Name" && lastName!=""){
				// make sure they've selected a difficulty as well. 
				if(PlayerPrefs.HasKey("Difficulty")){
					submitted = true;			
				}
			}
		}
	}
	*/
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
    
    
    // difficulty selection
    GUILayout.BeginHorizontal();
    GUILayout.Label("Difficulty", GUILayout.Width(80));
    
    // easy 
    if(easy){
        GUI.enabled=false;
    }
    if(GUILayout.Button("Easy"))
    {
    	easy = true;
    	medium = false;
    	hard = false;
    	PlayerPrefs.SetInt("Difficulty", 1);
    }
    GUI.enabled=true;
    
    //medium 
    if(medium){
        GUI.enabled=false;
    }
    if(GUILayout.Button("Medium"))
    {
    	easy = false;
    	medium = true;
    	hard = false;
    	PlayerPrefs.SetInt("Difficulty", 2);
    }
    GUI.enabled=true;
    
    // hard
    if(hard){
   		GUI.enabled=false;
    }
    if(GUILayout.Button("Hard"))
    {
    	easy = false;
    	medium = false;
    	hard = true;
    	PlayerPrefs.SetInt("Difficulty", 3);
    }
    GUI.enabled=true;
    GUILayout.EndHorizontal();
    
     // clear dat default text on click
    if(UnityEngine.Event.current.type == EventType.Repaint)
    {
    	if(GUI.GetNameOfFocusedControl()=="LastNameText")
    	{
    		if(lastName=="Last Name") 
    		{
    			lastName = "";
    		}
    	}
    	
    	else
    	{
    		if(lastName=="") 
    		{
    			lastName = "Last Name";
    		}
    	}
    }
    
    ///
     
    if (GUILayout.Button("Submit"))
    {
        submitted = true;
    }
     
    if(submitted)
    {
        PlayerPrefs.SetString("FirstName", firstName);
        PlayerPrefs.SetString("LastName", lastName);
        PlayerPrefs.SetInt("GameSeed", gameSeed);
        PlayerPrefs.SetInt("Registration", 1);
        renderCreateCharacter = false;
    }
     
    GUILayout.EndVertical();
}

function RumorDialog()
{
	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(rumorMessage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

function SpawnRumor()
{
	
	messageNumber = Random.Range(1, 6);
	
	// Logic To Prevent Same Rumor Appearing Twice In a Row
	if(messageNumber == previousMessageNumber)
	{
		messageNumber = Random.Range(1, 6);
	}
	
	switch(messageNumber)
	{
		case 1:
			rumorMessage = "You'll find the fairest prices around at the local shop.";
			break;
		case 2:
			rumorMessage = "You'll tire far faster than your dogs. Be sure to rest once in awhile.";
			break;
		case 3:
			rumorMessage = "rumor 3";
			break;
		case 4:
			rumorMessage = "rumor 4";
			break;
		case 5:
			rumorMessage = "rumor 5";
			break;
	}
	
	previousMessageNumber = messageNumber;
}