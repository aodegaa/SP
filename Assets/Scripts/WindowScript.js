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
	if(button6clicked){
		ManageScreen.close=true;
	}
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
static var gameDate : String = "June 6th, 1969 13:00";
static var theTime : gameTime;


// restWindow function
static function restWindow(){


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
	GUILayout.Label("", GUILayout.Width(70));
	GUILayout.Label(theTime.ToString()); // eventually update this to a static time variable
	GUILayout.Label("", GUILayout.Width(70));
	GUILayout.EndHorizontal();
	
	// buttons
	if(beginRest) GUI.enabled=false;
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Rest")){
		beginRest = true;
		timeScale = .02;
		// rest
	}
	GUI.enabled=true;
	if(GUILayout.Button("Cancel")){
		beginRest = false;
		RestScreen.close = true;
		// cancel
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

// static variables associated with viewMapWindow()

// viewMapWindow
static function viewMapWindow(){
	var map = Resources.Load("Map");
	GUILayout.BeginVertical();
	GUILayout.Label(map);
	GUILayout.EndVertical();
}

static function createOptionsTab(){
	GUILayout.BeginVertical();
	// finish this one too
	GUILayout.EndVertical();
}

// vars associated with the shop
static var shopWindow : Rect = Rect(0, 0, Screen.width, Screen.height);
static var playerMoney : int = 1000;
static var sledPrice : int = 100;
static var dogPrice : int = 25;
static var foodPrice : int = 2;
static var repairkitPrice : int = 15;
static var fishingpolePrice : int = 30;
static var baitPrice : int = 1;
static var gunPrice : int = 30;
static var bulletsPrice : int = 1;
static var shopClose : boolean = false;
// function to spawn the shop window
static function createShopWindow(){
	var sledIcon = Resources.Load("sled");
	var dogIcon = Resources.Load("dog");
	var foodIcon = Resources.Load("food");
	var repairkitIcon = Resources.Load("repairkit");
	var fishingpoleIcon = Resources.Load("fishingpole");
	var baitIcon = Resources.Load("bait");
	var gunIcon = Resources.Load("gun");
	var bulletsIcon = Resources.Load("bullets");
	if(GUILayout.Button("exit shop")){
		shopClose = true;
	}

	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.BeginVertical();
	GUILayout.Label("Sled", GUILayout.Width(80));
	GUILayout.Label(sledIcon, GUILayout.Width(80));
	GUILayout.Label("A sturdy vehicles pulled by dogs", GUILayout.MaxWidth(120));
	GUILayout.EndVertical();
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	GUILayout.Label("Dog", GUILayout.Width(80));
	GUILayout.Label(dogIcon, GUILayout.Width(80));
	GUILayout.Label("Dogs bred especially for travel. You must feed them if you want them to perform well.", GUILayout.MaxWidth(120));
	GUILayout.EndVertical();
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	GUILayout.Label("Fishing Pole", GUILayout.Width(80));
	GUILayout.Label(fishingpoleIcon, GUILayout.Width(80));
	GUILayout.Label("A tool used to catch fish for food. Fishing attempts require bait.", GUILayout.MaxWidth(120));
	GUILayout.EndVertical();
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	GUILayout.Label("Gun", GUILayout.Width(80));
	GUILayout.Label(gunIcon, GUILayout.Width(80));
	GUILayout.Label("Can be used to get out of dangerous situations. Requires bullets.", GUILayout.MaxWidth(120));
	GUILayout.EndVertical();
	GUILayout.FlexibleSpace();
	
	GUILayout.EndHorizontal();
	
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy ($" + sledPrice + ")", GUILayout.Width(120)))
	{
		playerMoney -= sledPrice;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy ($" + dogPrice + ")", GUILayout.Width(120)))
	{
		playerMoney -= dogPrice;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy ($" + fishingpolePrice + ")", GUILayout.Width(120)))
	{
		playerMoney -= fishingpolePrice;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy ($" + gunPrice + ")", GUILayout.Width(120)))
	{
		playerMoney -= gunPrice;
	}
	GUILayout.FlexibleSpace();
	
	GUILayout.EndHorizontal();
	GUILayout.Label("");
	GUILayout.Label("");
	GUILayout.Label("");
	GUILayout.EndVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.BeginVertical();
	GUILayout.Label("Repair Kit", GUILayout.Width(80));
	GUILayout.Label(repairkitIcon, GUILayout.Width(80));
	GUILayout.Label("Slightly improves sled health.", GUILayout.MaxWidth(120));
	GUILayout.EndVertical();
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	GUILayout.Label("Food", GUILayout.Width(80));
	GUILayout.Label(foodIcon, GUILayout.Width(80));
	GUILayout.Label("Prevents hunger. Used by player and dogs.", GUILayout.MaxWidth(120));
	GUILayout.EndVertical();
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	GUILayout.Label("Bait", GUILayout.Width(80));
	GUILayout.Label(baitIcon, GUILayout.Width(80));
	GUILayout.Label("Used for a fishing attempt. Requires a fishing pole.", GUILayout.MaxWidth(120));
	GUILayout.EndVertical();
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	GUILayout.Label("Bullets", GUILayout.Width(80));
	GUILayout.Label(bulletsIcon, GUILayout.Width(80));
	GUILayout.Label("Ammunition for a gun. Carry a lot for protection.", GUILayout.MaxWidth(120));
	GUILayout.EndVertical();
	GUILayout.FlexibleSpace();
	
	GUILayout.EndHorizontal();
	
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy ($" + repairkitPrice + ")", GUILayout.Width(120)))
	{
		playerMoney -= repairkitPrice;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy ($" + foodPrice + ")", GUILayout.Width(120)))
	{
		playerMoney -= foodPrice;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy ($" + baitPrice + ")", GUILayout.Width(120)))
	{
		playerMoney -= baitPrice;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy ($" + bulletsPrice + ")", GUILayout.Width(120)))
	{
		playerMoney -= bulletsPrice;
	}
	GUILayout.FlexibleSpace();
	
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy 5 ($" + repairkitPrice * 5 + ")", GUILayout.Width(120)))
	{
		playerMoney -= repairkitPrice * 5;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy 5 ($" + foodPrice * 5 + ")", GUILayout.Width(120)))
	{
		playerMoney -= foodPrice * 5;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy 5 ($" + baitPrice * 5 + ")", GUILayout.Width(120)))
	{
		playerMoney -= baitPrice * 5;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy 5 ($" + bulletsPrice * 5 + ")", GUILayout.Width(120)))
	{
		playerMoney -= bulletsPrice * 5;
	}
	GUILayout.FlexibleSpace();
	
	GUILayout.EndHorizontal();

	GUILayout.BeginHorizontal();
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy 10 ($" + repairkitPrice * 10 + ")", GUILayout.Width(120)))
	{
		playerMoney -= repairkitPrice * 10;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy 10 ($" + foodPrice * 10 + ")", GUILayout.Width(120)))
	{
		playerMoney -= foodPrice * 10;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy 10 ($" + baitPrice * 10 + ")", GUILayout.Width(120)))
	{
		playerMoney -= baitPrice * 10;
	}
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Buy 10 ($" + bulletsPrice * 10 + ")", GUILayout.Width(120)))
	{
		playerMoney -= bulletsPrice * 10;
	}
	GUILayout.FlexibleSpace();
	
	GUILayout.EndHorizontal();
	
	GUILayout.Label("");
	GUILayout.EndVertical();
}



static function createEmptyWindow(){
	GUILayout.BeginVertical();
	GUILayout.EndVertical();
}