#pragma strict

private var dogName1 : String = "Dog's Name";
private var playerName : String = "Your Name";

var sealIcon : Texture2D;
var submitted : boolean = false;

//difficulties
var difficultyText : String = "Difficult";
var normalMode : boolean = true;
var challengeMode : boolean = false;


function Start()
{
	PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
}

function OnGUI()
{
	CharacterCreation();
}

function CharacterCreation()
{
    GUI.SetNextControlName("DogNameText");
    dogName1 = GUI.TextField(Rect (285, 330, 100, 20), dogName1, 12);

	if(UnityEngine.Event.current.type == EventType.Repaint)
    {
    	if(GUI.GetNameOfFocusedControl() == "DogNameText")
    	{
    		if(dogName1 == "Dog's Name") 
    		{
    			dogName1 = "";
    		}
    	}
    	
    	else
    	{
    		if( dogName1 == "") 
    		{
    			dogName1 = "Dog's Name";
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
    	if(normalMode)
        {
        	PlayerPrefs.SetInt("PlayerMoney", 1000);
        	
        	PlayerPrefs.SetInt("TownPopulation", 400);
        	
        	PlayerPrefs.SetInt("KarmaModifier", 10);
        }
        
        if(challengeMode)
        {
        	PlayerPrefs.SetInt("PlayerMoney", 500);
        	
        	PlayerPrefs.SetInt("TownPopulation", 800);
        	
        	PlayerPrefs.SetInt("KarmaModifier", -10);
        }
    
    	GUI.Box(Rect (450, 450, 100, 95), sealIcon);	//change later
    
        PlayerPrefs.SetString("PlayerName", playerName);
		PlayerPrefs.SetInt("PlayerHealth", 100);
        PlayerPrefs.SetInt("PlayerHunger", 100);
        
        PlayerPrefs.SetString("DogName1", dogName1); 	
        PlayerPrefs.SetInt("DogHealth1", 100);
        PlayerPrefs.SetInt("DogHunger1", 100);
		PlayerPrefs.SetInt("DogCount", 1);
        
        yield WaitForSeconds(4);
        Application.LoadLevel("03townconcept");
	}
}