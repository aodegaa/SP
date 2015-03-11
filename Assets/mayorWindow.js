#pragma strict
 
// The initial position and size of the window.
private var windowRect0 = Rect(410, 400, 150, 0);
 
function OnGUI () 
{
    // Render the window with ID 0.
    windowRect0 = GUILayout.Window( 0, windowRect0, WindowFunction, "The Mayor" );   
}
 
// Window 0's callback function
function WindowFunction()
{
    GUILayout.Label( "Welcome. \n\nHead to the Pub to register." );
}