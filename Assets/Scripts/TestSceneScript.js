#pragma strict


function OnGUI(){
	WindowScript.windowRect = GUILayout.Window(0, WindowScript.windowRect, WindowScript.createManageWindow, "Manage Window");
}