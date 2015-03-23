#pragma strict
 
function OnGUI () 
{
	var tutorialWindow = Rect(Screen.width/2 - 75, Screen.height/2 - 75, 150, 150);
    tutorialWindow= GUILayout.Window(0, tutorialWindow, TutorialDialog, "The Mayor");   
}
 
function TutorialDialog()
{
	if(Application.loadedLevel == 2)
	{
    	GUILayout.Label( "Welcome. \n\nHead to the Pub to register." );
    }
    
    if(Application.loadedLevel == 4)
	{
    	GUILayout.Label( "Here is some money. \n\nHead to the Store for supplies." );
    }
}