#pragma strict

static var windowRect : Rect= Rect(0, 0,Screen.width,Screen.height);


static function createManageWindow(){
	
	
	GUILayout.BeginVertical();
	// begin tab area
	GUILayout.BeginHorizontal();
	var button1clicked : boolean = GUILayout.Button("option1");
	if(button1clicked){
		// show option 1
	}
	if(GUILayout.Button("option2")){
		// show option 2
	}
	if(GUILayout.Button("option3")){
		// show option 3
	}
	if(GUILayout.Button("option4")){
		// show option 4
	}
	GUILayout.EndHorizontal();
	// end tab area
	
	GUILayout.EndVertical();
}