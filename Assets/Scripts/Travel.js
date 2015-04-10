#pragma strict
private var gameInfoWindow : Rect = Rect(0, Screen.height/2, Screen.width, Screen.height/2);
private var currentTime : gameTime;
private var manage : boolean = false;
private var healthBar : GameObject;
private var dog1HealthBar : GameObject;
private var dog2HealthBar : GameObject;
private var dog3HealthBar : GameObject;
private var dog4HealthBar : GameObject;
private var dog5HealthBar : GameObject;
private var dog6HealthBar : GameObject;
private var dog7HealthBar : GameObject;
private var dog8HealthBar : GameObject;

private var map:Map;


// health bars as Slider objects (so they can be controlled in the scripts
var playerHealthBar : UI.Slider;
var dog0Health : UI.Slider;
var dog1Health : UI.Slider;
var dog2Health : UI.Slider;
var dog3Health : UI.Slider;
var dog4Health : UI.Slider;
var dog5Health : UI.Slider;
var dog6Health : UI.Slider;
var dog7Health : UI.Slider;

private var count : int =0;


function Start () {
	currentTime = ScriptableObject.CreateInstance("gameTime") as gameTime;
	currentTime.init(PlayerPrefs.GetString("Game Time"));
	Time.timeScale=.01;
	// initialize player health
	healthBar = GameObject.Find("PlayerHealthBar");
	

	
	// initialize the health bars
	dog1HealthBar = GameObject.Find("Dog1Health");
	dog2HealthBar = GameObject.Find("Dog2Health");
	dog3HealthBar = GameObject.Find("Dog3Health");
	dog4HealthBar = GameObject.Find("Dog4Health");
	dog5HealthBar = GameObject.Find("Dog5Health");
	dog6HealthBar = GameObject.Find("Dog6Health");
	dog7HealthBar = GameObject.Find("Dog7Health");
	dog8HealthBar = GameObject.Find("Dog8Health");
	
	// initialize the map
	map = ScriptableObject.CreateInstance("Map") as Map;
	// no current city found
	if(!PlayerPrefs.HasKey("Current City")){
		// so set the current city to the starting city
		PlayerPrefs.SetInt("Current City",1);
	}
	// initialize the map with current city.
	map.init(PlayerPrefs.GetInt("Current City"));
	
}

function Update () {
	healthBar.SetActive(!manage); // deactivate the health bar while the manage overlay is active
	
	// activate health bars for alive dogs (as long as the manage screen is not displayed
	dog1HealthBar.SetActive(PlayerPrefs.HasKey("dogHealth0") && !manage);
	dog2HealthBar.SetActive(PlayerPrefs.HasKey("dogHealth1") && !manage);
	dog3HealthBar.SetActive(PlayerPrefs.HasKey("dogHealth2") && !manage);
	dog4HealthBar.SetActive(PlayerPrefs.HasKey("dogHealth3") && !manage);
	dog5HealthBar.SetActive(PlayerPrefs.HasKey("dogHealth4") && !manage);
	dog6HealthBar.SetActive(PlayerPrefs.HasKey("dogHealth5") && !manage);
	dog7HealthBar.SetActive(PlayerPrefs.HasKey("dogHealth6") && !manage);
	dog8HealthBar.SetActive(PlayerPrefs.HasKey("dogHealth7") && !manage);


}

function FixedUpdate(){
	currentTime.addHour(1);
	PlayerPrefs.SetString("Game Time",currentTime.ToString());
	PlayerPrefs.SetInt("Travel Distance", PlayerPrefs.GetInt("Travel Distance")-3);

}

function OnGUI(){
	renderGraphics();
}

function renderGraphics(){
	if(manage){
		if(!ManageScreen.close){
	 		ManageScreen.createManageWindow();
		}
		else{
			manage = false;
			ManageScreen.close = false;
		}
	}
	else{
		gameInfoWindow = GUILayout.Window(1, gameInfoWindow, travelInfo,"");		
	}
}

// variables for the travel window
private var pauseButtonString = "Stop";

// window that spawns all information on the current traveling situation
function travelInfo(){
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	if(GUILayout.Button(pauseButtonString)){
		// if your going, stop. otherwise continue
		if(pauseButtonString=="Stop"){
			pauseButtonString="Continue";
			Time.timeScale=0;
		}
		else{
			pauseButtonString="Stop";
			Time.timeScale=.01;
		}
	}
	// pause time while you manage
	if(GUILayout.Button("Assess the Situation")){
		pauseButtonString="Continue";
		Time.timeScale=0;
		manage = true;
	}
	GUILayout.EndHorizontal();
	
	
	GUILayout.BeginHorizontal();	
	GUILayout.BeginVertical();
	GUILayout.Label("Next Town: "+map.getCityByID(PlayerPrefs.GetInt("Next City")).ToString());
	GUILayout.Label("Distance to next town:"+PlayerPrefs.GetInt("Travel Distance")+" miles");
	GUILayout.Label(PlayerPrefs.GetString("Game Time"));
	GUILayout.Label("Pace: (the current pace here)");
	GUILayout.Label("Rations: (current ration level)");
	GUILayout.Label("Player Health: "); // replace with actual player's health
	GUILayout.EndVertical();
	
	
	// info on dogs
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	if(PlayerPrefs.HasKey("dogHealth0"))	GUILayout.Label(PlayerPrefs.GetString("dogName0"));
	if(PlayerPrefs.HasKey("dogHealth1"))	GUILayout.Label(PlayerPrefs.GetString("dogName1"), GUILayout.Width(250));;
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	if(PlayerPrefs.HasKey("dogHealth2"))	GUILayout.Label(PlayerPrefs.GetString("dogName2"));
	if(PlayerPrefs.HasKey("dogHealth3"))	GUILayout.Label(PlayerPrefs.GetString("dogName3"), GUILayout.Width(250));
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(PlayerPrefs.HasKey("dogHealth4"))	GUILayout.Label(PlayerPrefs.GetString("dogName4"));
	if(PlayerPrefs.HasKey("dogHealth5"))	GUILayout.Label(PlayerPrefs.GetString("dogName5"), GUILayout.Width(250));
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	if(PlayerPrefs.HasKey("dogHealth6"))	GUILayout.Label(PlayerPrefs.GetString("dogName6"));
	if(PlayerPrefs.HasKey("dogHealth7"))	GUILayout.Label(PlayerPrefs.GetString("dogName7"), GUILayout.Width(250));
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
	
	GUILayout.EndVertical();
	GUILayout.EndVertical();
}