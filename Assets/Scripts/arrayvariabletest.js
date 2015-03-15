#pragma strict

private var windowRect0 = Rect(200, 200, 150, 0);
 
function OnGUI () 
{
    // Render the window with ID 0.
    windowRect0 = GUILayout.Window( 0, windowRect0, WindowFunction, "aRRAY Test" );   
}
 
// Window 0's callback function
function WindowFunction()
{
	GUILayout.Label(PlayerPrefs.GetInt("PlayerMoney").ToString());
    GUILayout.Label(PlayerPrefs.GetString("dogName0"));
    GUILayout.Label(PlayerPrefs.GetInt("dogHealth0").ToString());
    GUILayout.Label(PlayerPrefs.GetString("dogName1"));
    GUILayout.Label(PlayerPrefs.GetInt("dogHealth1").ToString());
}