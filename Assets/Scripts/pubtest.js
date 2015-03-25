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
        pubMessage = "If you manage to make it back, stop by for a drink on me.";
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
	
	messageNumber = Random.Range(1, 21);
	
	// Logic To Prevent Same Rumor Appearing Twice In a Row
	if(messageNumber == previousMessageNumber)
	{
		messageNumber = Random.Range(1, 21);
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
			rumorMessage = "Don’t forget to buy a sled.";
			break;

		case 4:
			rumorMessage = "The villagers are sick! We need medicine!";
			break;

		case 5:
			rumorMessage = "No matter how bad it gets, don't give up.";
			break;

		case 6:
			rumorMessage = "I really like gardening on the weekends.";
			break;

		case 7:
			rumorMessage = "Rhubarb is an overrated pie filling.";
			break;

		case 8:
			rumorMessage = "Sometimes it pays off to take the long route";
			break;

		case 9:
			rumorMessage = "When you are running low on food, you can always try fishing!";

		case 10:
			rumorMessage = "I'd stay away from the Mice Flats.";
			break;

		case 11:
			rumorMessage = "Sleeping at the Inn can be really relaxing.";
			break;

		case 12:
			rumorMessage = "Watch out for thieves on the trail";
			break;

		case 13:
			rumorMessage = "Buying parts for your sled can pay of later, especially if you break down in the middle of nowhere.";
			break;

		case 14:
			rumorMessage = "The medicine can be used to heal you or your dogs, but the villagers really need it too!";
			break;

		case 15:
			rumorMessage = "The quicker the fish the bigger it is.";
			break;

		case 16:
			rumorMessage = "It's avalanche season in the mountain pass. Take care.";
			break;

		case 17:
			rumorMessage = "Make sure to say hello to everyone, they too might have things to say.";
			break;

		case 18:
			rumorMessage = "I once heard there were big furry beasts out there in the dead of winter, sometimes they even bring their dogs.";
			break;

		case 19:
			rumorMessage = "Dogs can’t run very fast on ice, they will get injured if forced to anyway!";
			break;
					
		case 20:
			rumorMessage = "The health of your team is important for this journey, make sure to monitor them from time to time.";
			break;
	}
	
	previousMessageNumber = messageNumber;
}