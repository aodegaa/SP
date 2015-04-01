#pragma strict

// finished windows.
private var townInfoWindow : Rect = Rect(10, 10, 160, 70);
private var shopDialogWindow : Rect = Rect(240, 10, 480, 60);
private var shopChoicesWindow : Rect = Rect(10, 90, 160, 110);
private var inventoryWindow : Rect = Rect(80, 500, 800, 80);
private var dogPopUpWindow : Rect = Rect (0, 0, 960, 600);
//

//
var townName : String = "Beginnings Burg";
var townTime : String = "13:00";
var townDate : String = "June 6th, 1969";
//

//
var isBrowsing : boolean = false;
var dogPurchased : boolean = false;
// 

// additional variables
var shopMessage : String = "Welcome!";
//

// inventory.
var playerMoney : int;
var sledCount : int;
var dogCount : int;
var fishingPoleCount : int;
var gunCount : int;
var repairKitCount : int;
var foodCount : int;
var baitCount : int;
var bulletsCount : int;
var medicineCount : int;
//

// other sled variables.
var sledLoad : float;
var sledCapacity : float;

// base prices.
private var sledPrice : int = 120;
private var dogPrice : int = 50;
private var foodPrice : int = 5;
private var repairKitPrice : int = 12;
private var fishingPolePrice : int = 30;
private var baitPrice : int = 3;
private var gunPrice : int = 40;
private var bulletsPrice : int = 1;
//

// item weights
var fishingPoleWeight : float = 5.0;
var gunWeight : float = 2.5;
var repairKitWeight : float = 6.0;
var foodWeight : float = 1.0;
var baitWeight : float = 0.4;
var bulletsWeight : float = 0.2;
var medicineWeight : float = 4.0;
var packageWeight : float;
//

// array to store the newly bought dogs
static var dogs = new Array();
private var dogName : String = "New Dog";

function Start () 
{
	playerMoney = PlayerPrefs.GetInt("PlayerMoney");
	sledCount = PlayerPrefs.GetInt("SledCount");
	dogCount = PlayerPrefs.GetInt("DogCount");
    fishingPoleCount = PlayerPrefs.GetInt("FishingPoleCount");
    gunCount = PlayerPrefs.GetInt("GunCount");
    repairKitCount = PlayerPrefs.GetInt("RepairKitCount");
    foodCount = PlayerPrefs.GetInt("FoodCount");
    baitCount = PlayerPrefs.GetInt("BaitCount");
    bulletsCount = PlayerPrefs.GetInt("BulletsCount");
    medicineCount = PlayerPrefs.GetInt("MedicineCount");
    sledLoad = PlayerPrefs.GetFloat("SledLoad");
    sledCapacity = PlayerPrefs.GetFloat("SledCapacity");
}

function OnGUI()
{
	setUpShop();
	showPopups();
}

// used to handle the popup windows
// displays the particular popup window based on user's choices
function showPopups()
{
	if(dogPurchased)
	{
		dogPopUpWindow = GUI.Window(5, dogPopUpWindow, NameDogWindow, "");
	}
}

// major GUI function.
function setUpShop()
{
	// if user clicks browse wares, display this shop view.
	if(isBrowsing)
	{
		var browseWindow : Rect = Rect(0, 0, Screen.width, Screen.height);
		browseWindow = GUILayout.Window(0, browseWindow, BrowseWares, "Wares");
		inventoryWindow = GUILayout.Window(3, inventoryWindow, createInventoryWindow, "Player Inventory");
		
	}
	
	// default display for shop view.
	else
	{
		// town name and time.
		townInfoWindow = GUI.Window(0, townInfoWindow, TownInformation, townName + " Store");
		
		// shop choices.
		shopChoicesWindow = GUILayout.Window(1, shopChoicesWindow, ShopChoices, "");
		
		// dialog with shopkeeper, based on shop choices.
		shopDialogWindow = GUI.Window(2, shopDialogWindow, ShopDialog, "");
		
		// inventory window.
		inventoryWindow = GUILayout.Window(3, inventoryWindow, createInventoryWindow, "Player Inventory");
	}
	
}

// town name and time.
function TownInformation()
{
	var myClock = Resources.Load("clock");

	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(townDate);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(myClock);
	GUILayout.Label(townTime);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

// shop choices.
function ShopChoices()
{
	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Browse Wares"))
	{
		shopMessage = "Will that be all?";
		isBrowsing = true;	
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Trades"))
	{
		shopMessage="How do these trades sound?";
		// TODO = trade logic //
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Leave Store"))
	{
		shopMessage="Goodbye!";
		
		if((PlayerPrefs.GetInt("PreviousScene")) == 4)							//if the previous scene was 4, load the scene after this.
		{
			Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene") + 2);
		}
		
		else																	//else, load the scene we were at.
		{
			Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene"));
		}
	}
	GUILayout.EndHorizontal();
	
	GUILayout.EndVertical();
}

// dialog with shopkeeper, based on shop choices.
function ShopDialog()
{
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(shopMessage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

// inventory window.
function createInventoryWindow()
{
	var moneyIcon = Resources.Load("money");
	var sledIcon = Resources.Load("sled");
	var dogIcon = Resources.Load("dog");
	var foodIcon = Resources.Load("food");
	var repairKitIcon = Resources.Load("repairkit");
	var fishingPoleIcon = Resources.Load("fishingpole");
	var baitIcon = Resources.Load("bait");
	var gunIcon = Resources.Load("gun");
	var bulletsIcon = Resources.Load("bullets");
	var medicineIcon = Resources.Load("medicine");

	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(moneyIcon, GUILayout.Width(80));
	GUILayout.Label(sledIcon, GUILayout.Width(80));
	GUILayout.Label(dogIcon, GUILayout.Width(80));
	GUILayout.Label(fishingPoleIcon, GUILayout.Width(80));
	GUILayout.Label(gunIcon, GUILayout.Width(80));
	GUILayout.Label(repairKitIcon, GUILayout.Width(80));
	GUILayout.Label(foodIcon, GUILayout.Width(80));
	GUILayout.Label(baitIcon, GUILayout.Width(80));
	GUILayout.Label(bulletsIcon, GUILayout.Width(80));
	GUILayout.Label(medicineIcon);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("$" + playerMoney.ToString(), GUILayout.Width(80));
	GUILayout.Label(sledLoad.ToString("F1") + "/" + sledCapacity.ToString("F1"), GUILayout.Width(80));
	GUILayout.Label(dogCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(fishingPoleCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(gunCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(repairKitCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(foodCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(baitCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(bulletsCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(medicineCount.ToString());
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
   
    GUILayout.EndVertical();
}

function NameDogWindow()
{
	var sleddogIcon = Resources.Load("sleddog");
	var additionalDog : Dog = ScriptableObject.CreateInstance("Dog") as Dog;

	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(sleddogIcon);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Why don't you give your new dog a name?");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUI.SetNextControlName("DogNameText"); // input text field
    dogName = GUILayout.TextField(dogName, GUILayout.Width(100));
    
    // clear text in dog name input field on click
    if(UnityEngine.Event.current.type == EventType.Repaint)
    {
    	if(GUI.GetNameOfFocusedControl()=="DogNameText")
    	{
    		if(dogName=="New Dog") dogName = "";
    	}
    	
    	else
    	{
    		if(dogName=="") 
    		{
    			dogName = "New Dog";
    		}
    	}
    }
    
	GUILayout.Label("", GUILayout.Width(20));
   	
	if (GUILayout.Button("Submit", GUILayout.Width(100)))
	{
		additionalDog.init(dogName);
		dogs.push(additionalDog);
		dogPurchased = false;
		// reset the dog name to default values
		dogName = "New Dog";
	}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

// major shopping GUI and functionality.
function BrowseWares()
{
	sledLoad = PlayerPrefs.GetFloat("SledLoad");
    sledCapacity = PlayerPrefs.GetFloat("SledCapacity");

	var sledIcon = Resources.Load("sled");
	var dogIcon = Resources.Load("dog");
	var foodIcon = Resources.Load("food");
	var repairKitIcon = Resources.Load("repairkit");
	var fishingPoleIcon = Resources.Load("fishingpole");
	var baitIcon = Resources.Load("bait");
	var gunIcon = Resources.Load("gun");
	var bulletsIcon = Resources.Load("bullets");
	
	if(GUILayout.Button("X"))
	{
		var count : int = 0;
		for(var doge : Dog in dogs)
		{	
			PlayerPrefs.SetString("dogName" + count, doge.dogName);
			PlayerPrefs.SetInt("dogHealth" + count, doge.health);
			PlayerPrefs.SetInt("dogFatigue" + count, doge.fatigue);
			PlayerPrefs.SetInt("dogHunger" + count, doge.hunger);
			PlayerPrefs.SetInt("dogIsDead" + count, 0); // dog is not dead
			
			count += 1;
		}
		isBrowsing = false;
	}

	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.BeginVertical();
	GUILayout.Label("Sled", GUILayout.Width(80));
	GUILayout.Label(sledIcon, GUILayout.Width(80));
	GUILayout.Label("A sturdy vehicle pulled by dogs.", GUILayout.MaxWidth(120));
	GUILayout.EndVertical();
	
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	if(sledCount > 0)
	{
		GUILayout.Label("Dog", GUILayout.Width(80));
		GUILayout.Label(dogIcon, GUILayout.Width(80));
		GUILayout.Label("Dogs bred especially for travel. Each dog eats between 2 and 3 lbs of food per day.", GUILayout.MaxWidth(120));
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("",GUILayout.MaxWidth(120));
	}
	GUILayout.EndVertical();
	
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	if(dogCount > 0)
	{
		GUILayout.Label("Fishing Pole", GUILayout.Width(80));
		GUILayout.Label(fishingPoleIcon, GUILayout.Width(80));
		GUILayout.Label("A tool used to catch fish for food. Fishing attempts require bait.", GUILayout.MaxWidth(120));
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("",GUILayout.MaxWidth(120));
	}
	GUILayout.EndVertical();
	
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	if(dogCount > 0)
	{
		GUILayout.Label("Gun", GUILayout.Width(80));
		GUILayout.Label(gunIcon, GUILayout.Width(80));
		GUILayout.Label("Can be used to get out of dangerous situations. Requires bullets.", GUILayout.MaxWidth(120));
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("",GUILayout.MaxWidth(120));
	}
	GUILayout.EndVertical();
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	if((GUILayout.Button("Buy ($" + sledPrice + ")", GUILayout.Width(120))) && playerMoney >= sledPrice && sledCount < 1)
	{
		playerMoney -= sledPrice;
		sledCount = sledCount + 1;
		PlayerPrefs.SetInt("PlayerMoney", playerMoney);
    	PlayerPrefs.SetInt("SledCount", sledCount);
    	PlayerPrefs.SetFloat("SledLoad", 0);
    	PlayerPrefs.SetFloat("SledCapacity", 250);
    	PlayerPrefs.SetInt("RunnerHealth", 100);
    	PlayerPrefs.SetInt("BasketHealth", 100);
    	PlayerPrefs.SetFloat("SledModifier", 1.0);
	}
	
	GUILayout.FlexibleSpace();
	
	if(sledCount > 0)
	{
		if((GUILayout.Button("Buy ($" + dogPrice + ")", GUILayout.Width(120))) && playerMoney >= dogPrice && dogCount < 8)
		{
			playerMoney -= dogPrice;
			dogCount = dogCount + 1;
			dogPurchased = true;
		
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetInt("DogCount", dogCount);
			
			// TODO - PlayerPrefs Solution.
		}
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy ($" + fishingPolePrice + ")", GUILayout.Width(120))) && playerMoney >= fishingPolePrice && sledLoad + fishingPoleWeight <= sledCapacity)
		{
			playerMoney -= fishingPolePrice;
			fishingPoleCount = fishingPoleCount + 1;
			sledLoad += fishingPoleWeight;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("FishingPoleCount", fishingPoleCount);
		}
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy ($" + gunPrice + ")", GUILayout.Width(120))) && playerMoney >= gunPrice && sledLoad + gunWeight <= sledCapacity)
		{
			playerMoney -= gunPrice;
			gunCount = gunCount + 1;
			sledLoad += gunWeight;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("GunCount", gunCount);
		}
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(120));
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
	if(dogCount > 0)
	{
		GUILayout.Label("Repair Kit", GUILayout.Width(80));
		GUILayout.Label(repairKitIcon, GUILayout.Width(80));
		GUILayout.Label("Slightly improves the condition of your sled's components.", GUILayout.MaxWidth(120));
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("", GUILayout.MaxWidth(120));
	}
	GUILayout.EndVertical();
	
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	if(dogCount > 0)
	{
		GUILayout.Label("Food", GUILayout.Width(80));
		GUILayout.Label(foodIcon, GUILayout.Width(80));
		GUILayout.Label("Prevents hunger. Consumed by you and your dogs.", GUILayout.MaxWidth(120));
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("", GUILayout.MaxWidth(120));
	}
	GUILayout.EndVertical();
	
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	if(dogCount > 0)
	{	
		GUILayout.Label("Bait", GUILayout.Width(80));
		GUILayout.Label(baitIcon, GUILayout.Width(80));
		GUILayout.Label("Used for a fishing attempt. Requires a fishing pole.", GUILayout.MaxWidth(120));
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("", GUILayout.MaxWidth(120));
	}
	GUILayout.EndVertical();
	
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	if(dogCount > 0)
	{
		GUILayout.Label("Bullets", GUILayout.Width(80));
		GUILayout.Label(bulletsIcon, GUILayout.Width(80));
		GUILayout.Label("Ammunition for a gun. Carry a lot for protection.", GUILayout.MaxWidth(120));
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("", GUILayout.Width(80));
		GUILayout.Label("", GUILayout.MaxWidth(120));
	}
	GUILayout.EndVertical();
	
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy ($" + repairKitPrice + ")", GUILayout.Width(120)) && playerMoney >= repairKitPrice && sledLoad + repairKitWeight <= sledCapacity))
		{
			playerMoney -= repairKitPrice;
			repairKitCount = repairKitCount + 1;
			sledLoad += repairKitWeight;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("RepairKitCount", repairKitCount);
		}
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy ($" + foodPrice + ")", GUILayout.Width(120)) && playerMoney >= foodPrice && sledLoad + foodWeight <= sledCapacity))
		{
			playerMoney -= foodPrice;
			foodCount = foodCount + 1;
			sledLoad += foodWeight;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("FoodCount", foodCount);
		}
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy ($" + baitPrice + ")", GUILayout.Width(120)) && playerMoney >= baitPrice && sledLoad + baitWeight <= sledCapacity))
		{
			playerMoney -= baitPrice;
			baitCount = baitCount + 1;
			sledLoad += baitWeight;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("BaitCount", baitCount);
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy ($" + bulletsPrice + ")", GUILayout.Width(120)) && playerMoney >= bulletsPrice && sledLoad + bulletsWeight <= sledCapacity))
		{
			playerMoney -= bulletsPrice;
			bulletsCount = bulletsCount + 1;
			sledLoad += bulletsWeight;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("BulletsCount", bulletsCount);
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy 5 ($" + repairKitPrice * 5 + ")", GUILayout.Width(120)) && playerMoney >= repairKitPrice * 5 && sledLoad + repairKitWeight * 5 <= sledCapacity))
		{
			playerMoney -= repairKitPrice * 5;
			repairKitCount = repairKitCount + 5;
			sledLoad += repairKitWeight * 5;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("RepairKitCount", repairKitCount);
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy 5 ($" + foodPrice * 5 + ")", GUILayout.Width(120)) && playerMoney >= foodPrice * 5 && sledLoad + foodWeight * 5 <= sledCapacity))
		{
			playerMoney -= foodPrice * 5;
			foodCount = foodCount + 5;
			sledLoad += foodWeight * 5;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("FoodCount", foodCount);
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy 5 ($" + baitPrice * 5 + ")", GUILayout.Width(120)) && playerMoney >= baitPrice * 5 && sledLoad + baitWeight * 5 <= sledCapacity))
		{
			playerMoney -= baitPrice * 5;
			baitCount = baitCount + 5;
			sledLoad += baitWeight * 5;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("BaitCount", baitCount);
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy 5 ($" + bulletsPrice * 5 + ")", GUILayout.Width(120)) && playerMoney >= bulletsPrice * 5 && sledLoad + bulletsWeight * 5 <= sledCapacity))
		{
			playerMoney -= bulletsPrice * 5;
			bulletsCount = bulletsCount + 5;
			sledLoad += bulletsWeight * 5;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("BulletsCount", bulletsCount);
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	GUILayout.FlexibleSpace();
	
	GUILayout.EndHorizontal();

	GUILayout.BeginHorizontal();
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy 10 ($" + repairKitPrice * 10 + ")", GUILayout.Width(120)) && playerMoney >= repairKitPrice * 10 && sledLoad + repairKitWeight * 10 <= sledCapacity))
		{
			playerMoney -= repairKitPrice * 10;
			repairKitCount = repairKitCount + 10;
			sledLoad += repairKitWeight * 10;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("RepairKitCount", repairKitCount);
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy 10 ($" + foodPrice * 10 + ")", GUILayout.Width(120)) && playerMoney >= foodPrice * 10 && sledLoad + foodWeight * 10 <= sledCapacity))
		{
			playerMoney -= foodPrice * 10;
			foodCount = foodCount + 10;
			sledLoad += foodWeight * 10;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("FoodCount", foodCount);
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy 10 ($" + baitPrice * 10 + ")", GUILayout.Width(120)) && playerMoney >= baitPrice * 10 && sledLoad + baitWeight * 10 <= sledCapacity))
		{
			playerMoney -= baitPrice * 10;
			baitCount = baitCount + 10;
			sledLoad += baitWeight * 10;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("BaitCount", baitCount);
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy 10 ($" + bulletsPrice * 10 + ")", GUILayout.Width(120)) && playerMoney >= bulletsPrice * 10 && sledLoad + bulletsWeight * 10 <= sledCapacity))
		{
			playerMoney -= bulletsPrice * 10;
			bulletsCount = bulletsCount + 10;
			sledLoad += bulletsWeight * 10;
			
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			PlayerPrefs.SetInt("BulletsCount", bulletsCount);
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	GUILayout.EndHorizontal();
	
	GUILayout.Label("");
	GUILayout.EndVertical();
}