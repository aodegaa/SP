#pragma strict
 
// The initial position and size of the window.
private var windowRect0 = Rect(410, 400, 150, 0);
 
function OnGUI () 
{
    // Render the window with ID 0.
    windowRect0 = GUILayout.Window( 0, windowRect0, WindowFunction, "Variable Test" );   
}
 
// Window 0's callback function
function WindowFunction()
{
    GUILayout.Label(PlayerPrefs.GetString("FirstName"));
    GUILayout.Label(PlayerPrefs.GetString("LastName"));
    GUILayout.Label(PlayerPrefs.GetInt("GameSeed").ToString());
}