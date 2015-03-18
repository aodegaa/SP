#pragma strict

static var windowRect : Rect= Rect(0, 0,Screen.width,Screen.height);
static var button1clicked : boolean;
static var button2clicked : boolean;
static var button3clicked : boolean;
static var button4clicked : boolean;



static function createManageWindow(){
	
	GUILayout.BeginVertical();
	
	// begin tab area
	GUILayout.BeginHorizontal();
	button1clicked = GUILayout.Button("option1");
	button2clicked = GUILayout.Button("option2");
	button3clicked = GUILayout.Button("option3");
	button4clicked = GUILayout.Button("option4");
	GUILayout.EndHorizontal();
	// end tab area
	
	GUILayout.EndVertical();
}

static function createManageWindowStatsTab(){
	GUILayout.BeginVertical();
	GUILayout.Label("health: 100");
	GUILayout.Label("hunger: 12");
	GUILayout.Label("fatigue: 2");
	GUILayout.EndVertical();
}

static function createEmptyWindow(){
	GUILayout.BeginVertical();
	GUILayout.EndVertical();
}