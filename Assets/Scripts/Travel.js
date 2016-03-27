#pragma strict
private var gameInfoWindow : Rect = Rect(0, 450, Screen.width, 150);
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


// UI text boxes
var dog1TextBox : UI.Text;
var dog2TextBox : UI.Text;
var dog3TextBox : UI.Text;
var dog4TextBox : UI.Text;
var dog5TextBox : UI.Text;
var dog6TextBox : UI.Text;
var dog7TextBox : UI.Text;
var dog8TextBox : UI.Text;

var playerText : UI.Text;

var nextTownText : UI.Text;

var travelInfoText : UI.Text;

private var map:Map;

var travelStyle : GUIStyle;
var travelStatusStyle : GUIStyle;

// health bars as Slider objects (so they can be controlled in the scripts
var playerHealthBar : UI.Slider;

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
	
	// fill in the text boxes for living dogs (as long as the manage screen is not displayed
	if(PlayerPrefs.HasKey("dogHealth0") && !manage){
		dog1TextBox.text=PlayerPrefs.GetString("dogName0");
	}
	if(PlayerPrefs.HasKey("dogHealth1") && !manage){
		dog2TextBox.text=PlayerPrefs.GetString("dogName1");
	}
	if(PlayerPrefs.HasKey("dogHealth2") && !manage){
		dog3TextBox.text=PlayerPrefs.GetString("dogName2");
	}
	if(PlayerPrefs.HasKey("dogHealth3") && !manage){
		dog4TextBox.text=PlayerPrefs.GetString("dogName3");
	}
	if(PlayerPrefs.HasKey("dogHealth4") && !manage){
		dog5TextBox.text=PlayerPrefs.GetString("dogName4");
	}
	if(PlayerPrefs.HasKey("dogHealth5") && !manage){
		dog6TextBox.text=PlayerPrefs.GetString("dogName5");
	}
	if(PlayerPrefs.HasKey("dogHealth6") && !manage){
		dog7TextBox.text=PlayerPrefs.GetString("dogName6");
	}
	if(PlayerPrefs.HasKey("dogHealth7") && !manage){
		dog8TextBox.text=PlayerPrefs.GetString("dogName7");
	}
	
	// set player name
	playerText.text=PlayerPrefs.GetString("PlayerName");
	
	// set next town/distance to next town
	nextTownText.text="Next Town: "+map.getCityByID(PlayerPrefs.GetInt("Next City")).ToString()+"\n"+"Distance To Next Town: " + PlayerPrefs.GetInt("Travel Distance")+" miles";
	
	// set travel info
	travelInfoText.text=PlayerPrefs.GetString("Game Time")+"\n"+"Pace: (current pace here)\nRations: (current rations here)";
	
	// load the next city if the travel distance is less than 0
	if(PlayerPrefs.GetInt("Travel Distance")<=0){
		PlayerPrefs.SetInt("TravelDistance",0); // make sure it doesn't drop below 0. that looks weird
		PlayerPrefs.SetInt("Current City",PlayerPrefs.GetInt("Next City"));
		Application.LoadLevel(6);
	}


}

var popupwindow : Rect = Rect(Screen.width/2-100,Screen.height/2-50,200,50); // avalanche popup window
var popup : boolean = false;

function FixedUpdate(){
	currentTime.addHour(1);
	PlayerPrefs.SetString("Game Time",currentTime.ToString());
	PlayerPrefs.SetInt("Travel Distance", PlayerPrefs.GetInt("Travel Distance")-5);// TODO: needs to be update to dynamic formula
	

	// avalanche check
	if(PlayerPrefs.GetInt("Current City")==14 && PlayerPrefs.GetInt("Direction")==0 && PlayerPrefs.GetInt("Travel Distance")<100){
		// the player just triggered the avalanche
		popup=true;
	}
	if(PlayerPrefs.GetInt("Current City")==22 && PlayerPrefs.GetInt("Direction")==1 && PlayerPrefs.GetInt("Travel Distance")<70 && PlayerPrefs.GetInt("Next City")==14){
		// the player just triggered the avalanche
		popup=true;
	}	
}

function OnGUI(){
	renderGraphics();
}
// variable to control pausing time
private var pauseButtonString = "Stop";
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
	else if(popup){
		Time.timeScale=0;
		popupwindow = GUILayout.Window(0,popupwindow, avalancheWindow, "");	
	}
	else{
		// gameInfoWindow = GUILayout.Window(1, gameInfoWindow, travelInfo,"");
		if(GUI.Button(Rect(Screen.width-75, Screen.height-100, 75,20),GUIContent(pauseButtonString),travelStyle)){
			if(pauseButtonString=="Stop"){
				pauseButtonString="Continue";
				Time.timeScale=0;
			}
			else{
				pauseButtonString="Stop";
				Time.timeScale=0.01;
			}
		}
		if(GUI.Button(Rect(Screen.width-75, Screen.height-75, 75,20),GUIContent("Manage"),travelStyle)){
			pauseButtonString="Continue";
			Time.timeScale=0;
			manage = true;
		}

	}

}

function avalancheWindow(){
	GUILayout.BeginVertical();
	GUILayout.Label("You hear a deep rumbling...\noh no! an avalanche! Prepare yourself, you'll have to outrun it if you want to survive!");
	if(GUILayout.Button("ready")){
		Application.LoadLevel(11);
	}
	GUILayout.EndVertical();
}


// window that spawns all information on the current traveling situation
function travelInfo()
{
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.Label("", GUILayout.Width(115));
	// GUILayout.Label(PlayerPrefs.GetString("PlayerName"), travelStyle);
	GUILayout.Label("", GUILayout.Width(120));
	// GUILayout.Label("Next Town: "+map.getCityByID(PlayerPrefs.GetInt("Next City")).ToString(), travelStatusStyle);
	GUILayout.Label("", GUILayout.Width(200));
	if(GUILayout.Button(pauseButtonString))
	{
		// if your going, stop. otherwise continue
		if(pauseButtonString=="Stop")
		{
			pauseButtonString="Continue";
			Time.timeScale=0;
		}
		else
		{
			pauseButtonString="Stop";
			Time.timeScale=.01;
		}
	}
	GUILayout.Label("", GUILayout.Width(20));
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("", GUILayout.Width(235));
	// GUILayout.Label("Distance To Next Town: " + PlayerPrefs.GetInt("Travel Distance")+" Miles", travelStyle);
	GUILayout.Label("");
	
	// pause time while you manage
	if(GUILayout.Button("Manage"))
	{
		pauseButtonString="Continue";
		Time.timeScale=0;
		manage = true;
	}
	GUILayout.Label("", GUILayout.Width(20));
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("", GUILayout.Width(10));

	GUILayout.Label("", GUILayout.Width(460));
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
	
	
	GUILayout.BeginHorizontal();	
	GUILayout.BeginVertical();
	// 	GUILayout.Label(PlayerPrefs.GetString("Game Time"));
	// GUILayout.Label("Pace: (the current pace here)");
	// GUILayout.Label("Rations: (current ration level)");
	GUILayout.EndVertical();
	
	
	//GUILayout.EndVertical();
	GUILayout.EndVertical();
}