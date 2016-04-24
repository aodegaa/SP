#pragma strict
static var close: boolean=false;
static var showPlayerTab : boolean;
static var showDogsTab : boolean;
static var showInventoryTab : boolean;
static var showOptionsTab : boolean;


static function ManageWindow(){
	var manageWindowOverlayRect : Rect = Rect(0,0,Screen.width,50); // for the different options buttons that spawn the tabs
	var manageWindowTabsRect : Rect = Rect(0,50,Screen.width,Screen.height-50); // to display the required tab
	
	manageWindowOverlayRect=GUILayout.Window(0,manageWindowOverlayRect,ManageWindowOverlay,"");
	
	
	if(showPlayerTab){
		manageWindowTabsRect = GUILayout.Window(1,manageWindowTabsRect,PlayerTab,"");
	}
	else if(showDogsTab){
		manageWindowTabsRect = GUILayout.Window(1,manageWindowTabsRect,DogsTab,"");
	}
	else if(showInventoryTab){
		manageWindowTabsRect = GUILayout.Window(1,manageWindowTabsRect,InventoryTab,"");
	}
	else if(showOptionsTab){
		manageWindowTabsRect = GUILayout.Window(1,manageWindowTabsRect,OptionsTab,"");
	}
	else {
		manageWindowTabsRect = GUILayout.Window(1,manageWindowTabsRect,emptyWindow,"");
	}
}

static function ManageWindowOverlay(){
	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	if(showPlayerTab)
	{
		GUI.enabled=false;
	}
	if(GUILayout.Button("Player")){
		showPlayerTab=true;
		showDogsTab=false;
		showInventoryTab=false;
		showOptionsTab=false;
	}
	GUI.enabled=true;
	
	if(showDogsTab)
	{
		GUI.enabled=false;
	}
	if(GUILayout.Button("Dogs")){
		showDogsTab=true;
		showPlayerTab=false;
		showInventoryTab=false;
		showOptionsTab=false;
		
		
	}
	GUI.enabled=true;
	
	if(showInventoryTab)
	{
		GUI.enabled=false;
	}
	if(GUILayout.Button("Inventory")){
		showInventoryTab=true;
		showDogsTab=false;
		showPlayerTab=false;
		showOptionsTab=false;
		
		
	}
	GUI.enabled=true;
	
	if(showOptionsTab)
	{
		GUI.enabled=false;
	}
	if(GUILayout.Button("Options")){
		showOptionsTab=true;
		showDogsTab=false;
		showInventoryTab=false;
		showPlayerTab=false;
	}
	GUI.enabled=true;
	
	if(GUILayout.Button("X", GUILayout.Width(25)))
	{
		close=true;
	}
	// need to have the endHorizontal label here in case it isn't called on a previous button press.
	// also don't want to double end it if a button is pressed
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

static function PlayerTab()
{
	var playerName : String = PlayerPrefs.GetString("PlayerName");
	var playerHealth : int = PlayerPrefs.GetInt("PlayerHealth");
	var playerHunger : int = PlayerPrefs.GetInt("PlayerHunger");
	var playerFatigue : int = PlayerPrefs.GetInt("PlayerFatigue");
	var difficultyChoice : String = PlayerPrefs.GetString("Difficulty");
	var healthyPopulation : int = PlayerPrefs.GetInt("HealthyPopulation");
	var sickPopulation : int = PlayerPrefs.GetInt("SickPopulation");
	var deceasedPopulation : int = PlayerPrefs.GetInt("DeceasedPopulation");
	
	
	
	var playerProfilePicture = Resources.Load("playerprofile");
	
	GUILayout.BeginHorizontal();
	GUILayout.BeginVertical();
	GUILayout.Label("");
	GUILayout.Label(playerName);
	GUILayout.Label(playerProfilePicture);
	GUILayout.Label("Health");
	GUILayout.Label(playerHealth.ToString());
	GUILayout.Label("");
	GUILayout.Label("Hunger");
	GUILayout.Label(playerHunger.ToString());
	GUILayout.Label("");
	GUILayout.Label("Fatigue");
	GUILayout.Label(playerFatigue.ToString());
	GUILayout.EndVertical();
	GUILayout.FlexibleSpace();
	GUILayout.BeginVertical();
	GUILayout.Label("");
	GUILayout.Label("Difficulty");
	GUILayout.Label(difficultyChoice);
	GUILayout.Label("");
	GUILayout.Label("");
	GUILayout.Label("Townspeople");
	GUILayout.Label("");
	GUILayout.Label("Healthy");
	GUILayout.Label(healthyPopulation.ToString());
	GUILayout.Label("");
	GUILayout.Label("Sick");
	GUILayout.Label(sickPopulation.ToString());
	GUILayout.Label("");
	GUILayout.Label("Deceased");
	GUILayout.Label(deceasedPopulation.ToString());
	
	GUILayout.EndVertical();
	GUILayout.EndHorizontal();
}

static function OptionsTab(){
	GUILayout.BeginVertical();
	//TODO: write this
	GUILayout.EndVertical();
}

static function InventoryTab()
{
	var fishingPoleWeight : float = 5.0;
	var gunWeight : float = 2.5;
	var repairKitWeight : float = 10.0;
	var foodWeight : float = 1.0;
	var baitWeight : float = 0.4;
	var bulletsWeight : float = 0.2;
	var medicineWeight : float = 4.0;

	var fishingPoleIcon = Resources.Load("fishingpole");
	var gunIcon = Resources.Load("gun");
	var repairKitIcon = Resources.Load("repairkit");
	var foodIcon = Resources.Load("food");
	var baitIcon = Resources.Load("bait");
	var bulletsIcon = Resources.Load("bullets");
	var medicineIcon = Resources.Load("medicine");
	var sledgraphicIcon = Resources.Load("sledgraphic");
	
	var sledLoad : float = PlayerPrefs.GetFloat("SledLoad");
	var sledCapacity : float = PlayerPrefs.GetFloat("SledCapacity");
	var basketHealth : int = PlayerPrefs.GetInt("BasketHealth");
	var runnerHealth : int = PlayerPrefs.GetInt("RunnerHealth");
	var sledModifier : float = PlayerPrefs.GetFloat("SledModifier");
	var repairKitCount : int = PlayerPrefs.GetInt("RepairKitCount");

	GUILayout.BeginVertical();
	
	// labels.
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Name", GUILayout.Width(120));
	GUILayout.Label("", GUILayout.Width(120));
	GUILayout.Label("Quantity", GUILayout.Width(120));
	GUILayout.Label("Total Weight", GUILayout.Width(120));
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	// fishing pole.
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Fishing Pole", GUILayout.Width(120));
	GUILayout.Label(fishingPoleIcon, GUILayout.Width(120));
	GUILayout.Label(PlayerPrefs.GetInt("FishingPoleCount").ToString(), GUILayout.Width(120));
	GUILayout.Label((PlayerPrefs.GetInt("FishingPoleCount") * fishingPoleWeight).ToString(), GUILayout.Width(120));
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	// gun.
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Gun", GUILayout.Width(120));
	GUILayout.Label(gunIcon, GUILayout.Width(120));
	GUILayout.Label(PlayerPrefs.GetInt("GunCount").ToString(), GUILayout.Width(120));
	GUILayout.Label((PlayerPrefs.GetInt("GunCount") * gunWeight).ToString(), GUILayout.Width(120));
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	// repair kits.
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Repair Kit", GUILayout.Width(120));
	GUILayout.Label(repairKitIcon, GUILayout.Width(120));
	GUILayout.Label(PlayerPrefs.GetInt("RepairKitCount").ToString(), GUILayout.Width(120));
	GUILayout.Label((PlayerPrefs.GetInt("RepairKitCount") * repairKitWeight).ToString(), GUILayout.Width(120));
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	// food.
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Food", GUILayout.Width(120));
	GUILayout.Label(foodIcon, GUILayout.Width(120));
	GUILayout.Label(PlayerPrefs.GetInt("FoodCount").ToString(), GUILayout.Width(120));
	GUILayout.Label((PlayerPrefs.GetInt("FoodCount") * foodWeight).ToString(), GUILayout.Width(120));
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	// bait.
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Bait", GUILayout.Width(120));
	GUILayout.Label(baitIcon, GUILayout.Width(120));
	GUILayout.Label(PlayerPrefs.GetInt("BaitCount").ToString(), GUILayout.Width(120));
	GUILayout.Label((PlayerPrefs.GetInt("BaitCount") * baitWeight).ToString(), GUILayout.Width(120));
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	// bullets.
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Bullets", GUILayout.Width(120));
	GUILayout.Label(bulletsIcon, GUILayout.Width(120));
	GUILayout.Label(PlayerPrefs.GetInt("BulletsCount").ToString(), GUILayout.Width(120));
	GUILayout.Label((PlayerPrefs.GetInt("BulletsCount") * bulletsWeight).ToString(), GUILayout.Width(120));
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	// medicine.
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Medicine", GUILayout.Width(120));
	GUILayout.Label(medicineIcon, GUILayout.Width(120));
	GUILayout.Label(PlayerPrefs.GetInt("MedicineCount").ToString(), GUILayout.Width(120));
	GUILayout.Label((PlayerPrefs.GetInt("MedicineCount") * medicineWeight).ToString(), GUILayout.Width(120));
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(sledgraphicIcon);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Sled Load: " + sledLoad.ToString("F1") + "/" + sledCapacity.ToString("F1"));
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Basket Health: " + basketHealth.ToString());
	GUILayout.Label("", GUILayout.Width(10));
	if(GUILayout.Button("Use Repair Kit", GUILayout.MaxWidth(120)))
	{
		if(basketHealth < 100 && repairKitCount > 0)
		{
			if(basketHealth == 0)
			{
				basketHealth += 10;
				sledCapacity = 250.0;
				PlayerPrefs.SetFloat("SledCapacity", sledCapacity);
			}
			
			if(basketHealth <= 90)
			{
				basketHealth += 10;
			}
			
			else
			{
				basketHealth = 100;
			}
			
			repairKitCount--;
			PlayerPrefs.SetInt("BasketHealth", basketHealth);
			PlayerPrefs.SetInt("RepairKitCount", repairKitCount);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
		}
	}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Runner Health: " + runnerHealth.ToString());
	GUILayout.Label("", GUILayout.Width(10));
	if(GUILayout.Button("Use Repair Kit", GUILayout.MaxWidth(120)))
	{
		if(runnerHealth < 100 && repairKitCount > 0)
		{
			if(runnerHealth == 0)
			{
				runnerHealth += 10;
				sledModifier = 1.0;
				PlayerPrefs.SetFloat("SledModifier", sledModifier);
			}
		
			if(runnerHealth <= 90)
			{
				runnerHealth += 10;
			}
			
			else
			{
				runnerHealth = 100;
			}
			
			repairKitCount--;
			sledLoad -= repairKitWeight;
			PlayerPrefs.SetInt("RepairKitCount", repairKitCount);
			PlayerPrefs.SetInt("RunnerHealth", runnerHealth);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
		}
	}
	
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

static function DogsTab()
{
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

static function emptyWindow(){
	GUILayout.BeginVertical();
	GUILayout.EndVertical();
}