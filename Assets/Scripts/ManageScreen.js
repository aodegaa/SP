#pragma strict
var myWindow : Rect = Rect(0,0,960, 50);
var overlayWindow : Rect = Rect(0,50,960,550);
static var renderTab1 : boolean = false;
static var renderTab2 : boolean = false;
static var renderTab3 : boolean = false;
static var renderTab4 : boolean = false;
static var renderTab5 : boolean = false;
static var close : boolean = false;

static function createManageWindow(){
	var myWindow : Rect = Rect(0,0,Screen.width, 50);
	var overlayWindow : Rect = Rect(0,50,Screen.width,Screen.height-50);
	if(WindowScript.button1clicked){
		renderTab1=true;
		renderTab2=false;
		renderTab3=false;
		renderTab4=false;
		renderTab5=false;
	}
	if(WindowScript.button2clicked){
		renderTab1=false;
		renderTab2=true;
		renderTab3=false;
		renderTab4=false;
		renderTab5=false;
	}
	if(WindowScript.button3clicked){
		renderTab1=false;
		renderTab2=false;
		renderTab3=true;
		renderTab4=false;
		renderTab5=false;
	}
	if(WindowScript.button4clicked){
		renderTab1=false;
		renderTab2=false;
		renderTab3=false;
		renderTab4=true;
		renderTab5=false;
	}
	if(WindowScript.button5clicked){
		renderTab1=false;
		renderTab2=false;
		renderTab3=false;
		renderTab4=false;
		renderTab5=true;
	}
	if(WindowScript.button6clicked){
		renderTab1=false;
		renderTab2=false;
		renderTab3=false;
		renderTab4=false;
		renderTab5=false;

		close = true;
	}


	myWindow =  GUILayout.Window(0, myWindow, WindowScript.createManageWindow, "Manage Window");
	overlayWindow = GUILayout.Window(1, overlayWindow, WindowScript.createEmptyWindow, "");
	if(renderTab1){
		overlayWindow = GUILayout.Window(1,overlayWindow, WindowScript.createPlayerTab, "Player");
	}
	if(renderTab2){
		overlayWindow = GUILayout.Window(1,overlayWindow, WindowScript.createDogsTab, "Dogs");
	}
	if(renderTab3){
		overlayWindow = GUILayout.Window(1,overlayWindow, WindowScript.createSledTab, "Sled");
	}
	if(renderTab4){
		overlayWindow = GUILayout.Window(1,overlayWindow, WindowScript.createInventoryTab, "Inventory");
	}
	if(renderTab5){
		overlayWindow = GUILayout.Window(1,overlayWindow, WindowScript.createOptionsTab, "Options");
	}
}