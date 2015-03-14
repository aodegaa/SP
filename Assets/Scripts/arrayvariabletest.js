#pragma strict

private var windowRect0 = Rect(410, 400, 150, 0);
 
function OnGUI () 
{
    // Render the window with ID 0.
    windowRect0 = GUILayout.Window( 0, windowRect0, WindowFunction, "aRRAY Test" );   
}
 
// Window 0's callback function
function WindowFunction()
{
	GUILayout.Label(PlayerPrefs.GetInt("PlayerMoney").ToString());
    GUILayout.Label(PlayerPrefs.GetString("dog0name"));
    GUILayout.Label(PlayerPrefs.GetInt("dog0health").ToString());
    GUILayout.Label(PlayerPrefs.GetString("dog1name"));
    GUILayout.Label(PlayerPrefs.GetInt("dog1health").ToString());
}