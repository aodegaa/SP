#pragma strict

static var windowRect : Rect= Rect(0, 0,Screen.width,Screen.height);
static var button1clicked : boolean;
static var button2clicked : boolean;
static var button3clicked : boolean;
static var button4clicked : boolean;
static var button5clicked : boolean;
static var button6clicked : boolean;



static function createManageWindow(){
	
	GUILayout.BeginVertical();
	
	// begin tab area
	GUILayout.BeginHorizontal();
	if(ManageScreen.renderTab1){
		GUI.enabled=false;
	}
	button1clicked = GUILayout.Button("Player");
	GUI.enabled=true;
	
	if(ManageScreen.renderTab2){
		GUI.enabled=false;
	}
	button2clicked = GUILayout.Button("Dogs");
	GUI.enabled=true;
	if(ManageScreen.renderTab3){
		GUI.enabled=false;
	}
	button3clicked = GUILayout.Button("Sled");
	GUI.enabled=true;
	if(ManageScreen.renderTab4){
		GUI.enabled=false;
	}
	button4clicked = GUILayout.Button("Inventory");
	GUI.enabled=true;
	if(ManageScreen.renderTab5){
		GUI.enabled=false;
	}
	button5clicked = GUILayout.Button("Options");
	GUI.enabled=true;
	button6clicked = GUILayout.Button("X", GUILayout.Width(25));
	GUILayout.EndHorizontal();
	// end tab area
	
	GUILayout.EndVertical();
}

static function createPlayerTab(){
	GUILayout.BeginVertical();
	GUILayout.Label("health: 100");
	GUILayout.Label("hunger: 12");
	GUILayout.Label("fatigue: 2");
	GUILayout.EndVertical();
}

static function createDogsTab(){
	GUILayout.BeginVertical();
	for(var i : int =0;i<PlayerPrefs.GetInt("DogCount");i++){
		if(PlayerPrefs.GetInt("dogIsDead"+i)==0)// the dog isn't dead
		{
			// name
			GUILayout.Label(PlayerPrefs.GetString("dogName"+i));
			// health
			GUILayout.BeginHorizontal();
			GUILayout.Label("Health: ", GUILayout.Width(50));
			GUILayout.Label(PlayerPrefs.GetInt("dogHealth"+i).ToString(), GUILayout.Width(50));
			GUILayout.EndHorizontal();
			
			// fatigue
			GUILayout.BeginHorizontal();
			GUILayout.Label("Fatigue: ", GUILayout.Width(50));
			GUILayout.Label(PlayerPrefs.GetInt("dogFatigue"+i).ToString(), GUILayout.Width(50));
			GUILayout.EndHorizontal();
			
			// hunger
			GUILayout.BeginHorizontal();
			GUILayout.Label("Hunger: ", GUILayout.Width(50));
			GUILayout.Label(PlayerPrefs.GetInt("dogHunger"+i).ToString(), GUILayout.Width(50));
			GUILayout.EndHorizontal();
			
			GUILayout.Label(""); // space in between each dog
		}
	}
	GUILayout.EndVertical();
}	

static function createSledTab(){
	GUILayout.BeginVertical();
	// still need to write this
	GUILayout.EndVertical();
}

static function createInventoryTab(){
	GUILayout.BeginVertical();
	
	// sled
	GUILayout.BeginHorizontal();
	GUILayout.Label("Sled: ", GUILayout.Width(120));
	if(PlayerPrefs.GetInt("WorkingSled")==0) GUILayout.Label("working", GUILayout.Width(120));
	else GUILayout.Label("broken", GUILayout.Width(120));
	GUILayout.EndHorizontal();
	
	// health packs
	GUILayout.BeginHorizontal();
	GUILayout.Label("Health Packs: ", GUILayout.Width(120));
	GUILayout.Label(PlayerPrefs.GetInt("HealthPackCount").ToString(), GUILayout.Width(120));
	GUILayout.EndHorizontal();
	
	// food 
	GUILayout.BeginHorizontal();
	GUILayout.Label("Food: ", GUILayout.Width(120));
	GUILayout.Label(PlayerPrefs.GetInt("FoodCount").ToString() +" lbs", GUILayout.Width(120));
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}



// static variables associated with restWindow

static var restTime : int;
static var timeScale : float = 0;
static var closeRestWindow : boolean;
static var beginRest : boolean;
static function restWindow(){
if(beginRest) GUI.enabled=false;
else GUI.enabled=true;
	GUILayout.BeginVertical();
	GUILayout.Label("");
	
	// rest time slider
	GUILayout.BeginHorizontal(GUILayout.Height(30));
	GUILayout.Label("");
	restTime = GUILayout.HorizontalSlider(restTime, 0.0, 12.0, GUILayout.Width(100));
	GUILayout.Label(restTime.ToString() + " hours", GUILayout.Width(100));
	GUILayout.EndHorizontal();
	
	// town time
	GUILayout.BeginHorizontal();
	GUILayout.Label("");
	GUILayout.Label("June 6th, 1969 13:00"); // eventually update this to a static time variable
	GUILayout.Label("");
	GUILayout.EndHorizontal();
	
	// buttons
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Rest")){
		beginRest = true;
		timeScale = .02;
		// rest
	}
	if(GUILayout.Button("Cancel")){
		RestScreen.close = true;
		// cancel
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

static function createOptionsTab(){
	GUILayout.BeginVertical();
	// finish this one too
	GUILayout.EndVertical();
}

static function createEmptyWindow(){
	GUILayout.BeginVertical();
	GUILayout.EndVertical();
}