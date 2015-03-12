#pragma strict
 
private var firstName : String = "First Name";
private var lastName : String = "Last Name";
private var gameSeed : int;
private var submitted : boolean = false;
 
private var windowRect0 : Rect;
 
function Start()
{
	gameSeed = Random.Range(1,1001);
}
 
function OnGUI()
{
    var screenWidth = Screen.width;
    var screenHeight = Screen.height;
     
    var windowWidth = 300;
    var windowHeight = 180;
    var windowX = ( screenWidth - windowWidth ) / 2;
    var windowY = ( screenHeight - windowHeight ) / 2;
     
    // Postion the window in the center of the screen.
    windowRect0 = Rect( windowX, windowY, windowWidth, windowHeight );
 
    GUILayout.Window( 0, windowRect0, UserForm, "Musher Registration Form #" + gameSeed );
}
 
function UserForm()
{
    GUILayout.BeginVertical();
     
    // First Name
    GUILayout.BeginHorizontal();
    GUILayout.Label("First Name", GUILayout.Width(80));
    firstName = GUILayout.TextField( firstName );
    GUILayout.EndHorizontal();
     
    // Last Name
    GUILayout.BeginHorizontal();
    GUILayout.Label("Last Name", GUILayout.Width(80));
    lastName = GUILayout.TextField( lastName );
    GUILayout.EndHorizontal();
     
    if ( GUILayout.Button( "Submit" ) )
    {
        submitted = true;
    }
     
    if ( submitted )
    {
        GUILayout.Label(firstName);
        GUILayout.Label(lastName);
        GUILayout.Label(gameSeed.ToString());
        PlayerPrefs.SetString("FirstName", firstName);
        PlayerPrefs.SetString("LastName", lastName);
        PlayerPrefs.SetInt("GameSeed", gameSeed);
        PlayerPrefs.SetInt("PreviousScene", Application.loadedLevel);
        Application.LoadLevel(5);
        return;
    }
     
    GUILayout.EndVertical();
}