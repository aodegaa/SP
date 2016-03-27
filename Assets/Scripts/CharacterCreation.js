#pragma strict

private var playerName : String = "Your Name";

var submitted : boolean = false;

private var easy : boolean = false;
private var medium : boolean = false;
private var hard : boolean = false;

function Start () 
{

}

function Update () 
{

}

function OnGUI()
{

CharacterCreation();

}

function CharacterCreation()
{

    GUILayout.BeginVertical();
    
       
    // Name
    GUILayout.BeginHorizontal();
    GUILayout.Label("Name: ", GUILayout.Width(80));
    GUI.SetNextControlName("FirstNameText");
    playerName = GUILayout.TextField( playerName );
    GUILayout.EndHorizontal();
    
           // clear dat default text on click
    if(UnityEngine.Event.current.type == EventType.Repaint)
    {
    	if( GUI.GetNameOfFocusedControl()=="FirstNameText")
    	{
    		if(playerName=="Your Name") playerName = "";
    	}
    	else
    	{
    		if( playerName=="") playerName = "Your Name";
    	}
    }
 
     

    
    // difficulty selection
    GUILayout.BeginHorizontal();
    GUILayout.Label("Difficulty: ", GUILayout.Width(80));
    
    // easy - $1000 starting
    if(easy)
    {
        GUI.enabled=false;
    }
    
    if(GUILayout.Button("Easy"))
    {
    	easy = true;
    	medium = false;
    	hard = false;
    	PlayerPrefs.SetString("Difficulty", "Easy");
    	PlayerPrefs.SetInt("PlayerMoney", 1000);
    }
    GUI.enabled=true;
    
    // medium - $500 starting
    if(medium)
    {
        GUI.enabled=false;
    }
    
    if(GUILayout.Button("Medium"))
    {
    	easy = false;
    	medium = true;
    	hard = false;
    	PlayerPrefs.SetString("Difficulty", "Medium");
    	PlayerPrefs.SetInt("PlayerMoney", 500);
    }
    GUI.enabled=true;
    
    // hard - $250 starting
    if(hard)
    {
   		GUI.enabled=false;
    }
   
    if(GUILayout.Button("Hard"))
    {
    	easy = false;
    	medium = false;
    	hard = true;
    	PlayerPrefs.SetString("Difficulty", "Hard");
    	PlayerPrefs.SetInt("PlayerMoney", 250);
    }
    GUI.enabled=true;
    
    GUILayout.EndHorizontal();
    

    ///
     
    if (GUILayout.Button("Submit"))
    {
        submitted = true;
    }
     
    if(submitted)
    {
        PlayerPrefs.SetString("PlayerName", playerName);
        PlayerPrefs.SetInt("PlayerHealth", 100);
        PlayerPrefs.SetInt("PlayerHunger", 0);
        
        PlayerPrefs.SetInt("HealthyPopulation", 999);
        PlayerPrefs.SetInt("SickPopulation", 1);
        PlayerPrefs.SetInt("DeceasedPopulation", 0);
    }
     
    GUILayout.EndVertical();
   }