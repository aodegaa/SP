#pragma strict
var myWindow : Rect = Rect(0,0,960, 50);
var overlayWindow : Rect = Rect(0,50,960,550);
var renderTab1 : boolean = false;
var renderTab2 : boolean = false;
var renderTab3 : boolean = false;
var renderTab4 : boolean = false;


function OnGUI(){
	myWindow =  GUILayout.Window(0, myWindow, WindowScript.createManageWindow, "Manage Window");
	overlayWindow = GUILayout.Window(1, overlayWindow, WindowScript.createEmptyWindow, "");
	if(renderTab1){
		overlayWindow = GUILayout.Window(1,overlayWindow, WindowScript.createManageWindowStatsTab, "Tab 1");
	}
	if(renderTab2){
		overlayWindow = GUILayout.Window(1,overlayWindow, WindowScript.createManageWindowStatsTab, "Tab 2");
	}
	if(renderTab3){
		overlayWindow = GUILayout.Window(1,overlayWindow, WindowScript.createManageWindowStatsTab, "Tab 3");
	}
	if(renderTab4){
		overlayWindow = GUILayout.Window(1,overlayWindow, WindowScript.createManageWindowStatsTab, "Tab 4");
	}

	if(WindowScript.button1clicked){
		renderTab1=true;
		renderTab2=false;
		renderTab3=false;
		renderTab4=false;
	}
	if(WindowScript.button2clicked){
		renderTab1=false;
		renderTab2=true;
		renderTab3=false;
		renderTab4=false;
	}
	if(WindowScript.button3clicked){
		renderTab1=false;
		renderTab2=false;
		renderTab3=true;
		renderTab4=false;
	}
	if(WindowScript.button4clicked){
		renderTab1=false;
		renderTab2=false;
		renderTab3=false;
		renderTab4=true;
	}

}