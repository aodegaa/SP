#pragma strict

private var dog1Name : String = "Dog's Name";
private var playerName : String = "Your Name";

var sealIcon : Texture2D;
var submitted : boolean = false;

//difficulties
var difficultyText : String = "Difficult";
var normalMode : boolean = true;
var challengeMode : boolean = false;


function OnGUI()
{
	CharacterCreation();
}

function CharacterCreation()
{
    GUI.SetNextControlName("DogNameText");
    dog1Name = GUI.TextField(Rect (285, 330, 100, 20), dog1Name, 12);

	if(UnityEngine.Event.current.type == EventType.Repaint)
    {
    	if(GUI.GetNameOfFocusedControl() == "DogNameText")
    	{
    		if(dog1Name=="Dog's Name") 
    		{
    			dog1Name = "";
    		}
    	}
    	
    	else
    	{
    		if( dog1Name=="") 
    		{
    			dog1Name = "Dog's Name";
    		}
    	}
    }

    GUI.SetNextControlName("PlayerNameText");
	playerName = GUI.TextField(Rect (225, 520, 100, 20), playerName, 12);
    
    if(UnityEngine.Event.current.type == EventType.Repaint)
    {
    	if(GUI.GetNameOfFocusedControl() == "PlayerNameText")
    	{
    		if(playerName == "Your Name") 
    		{
    			playerName = "";
    		}
    	}
    	
    	else
    	{
    		if( playerName == "") 
    		{
    			playerName = "Your Name";
    		}
    	}
    }    
    
    if(GUI.Button(Rect (200, 290, 100, 20),(difficultyText)))
    {
    	if(difficultyText == "Difficult")
    	{	
    		normalMode = false;
    		challengeMode = true;
    		difficultyText = "Impossible";
    	}
    	
    	else if(difficultyText == "Impossible")
    	{
    		normalMode = true;
    		challengeMode = false;
    		difficultyText = "Difficult";
    	}
    }
     
    if(GUI.Button(Rect (450, 480, 100, 20),("Submit")))
    {
        submitted = true;
    }
     
    if(submitted)
    {
    	GUI.Box(Rect (450, 450, 100, 95), sealIcon);
    
        PlayerPrefs.SetString("PlayerName", playerName);
		//dog1 name
        
        if(normalMode)
        {
        	//normal mode money
        	//normal mode player health / hunger
        	//normal mode dog1 health / hunger
        	//normal mode town population - less population = less medicine needed
        }
        
        if(challengeMode)
        {
        	//challenge mode money
        	//challenge mode player health / hunger
        	//challenge mode dog1 health / hunger
        	//challenge mode town population - more population = more medicine needed
        }
	}
}