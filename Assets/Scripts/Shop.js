#pragma strict

// finished windows.
private var townInfoWindow : Rect = Rect(10, 10, 160, 70);
private var shopDialogWindow : Rect = Rect(240, 10, 480, 60);
private var shopChoicesWindow : Rect = Rect(10, 90, 160, 110);
private var inventoryWindow : Rect = Rect(100, 500, 760, 80);
//

var dogPopUpWindow : Rect = Rect (Screen.width/2 -150, Screen.height/2 -150, 300, 300);

var townName : String = "Beginnings Burg";
var townTime : String = "13:00";
var townDate : String = "June 6th, 1969";


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
var repairkitCount : int;
var foodCount : int;
var baitCount : int;
var bulletsCount : int;
var medicineCount : int;
//

// prices.
var sledPrice : int = 100;
var dogPrice : int = 25;
var foodPrice : int = 2;
var repairkitPrice : int = 15;
var fishingPolePrice : int = 30;
var baitPrice : int = 1;
var gunPrice : int = 30;
var bulletsPrice : int = 1;
//

// array to store the newly bought dogs
static var dogs = new Array();
private var dogName : String = "new name";

function Start () 
{
	playerMoney = PlayerPrefs.GetInt("PlayerMoney");
	sledCount = PlayerPrefs.GetInt("SledCount");
	dogCount = PlayerPrefs.GetInt("DogCount");
    fishingPoleCount = PlayerPrefs.GetInt("FishingPoleCount");
    gunCount = PlayerPrefs.GetInt("GunCount");
    repairkitCount = PlayerPrefs.GetInt("RepairKitCount");
    foodCount = PlayerPrefs.GetInt("FoodCount");
    baitCount = PlayerPrefs.GetInt("BaitCount");
    bulletsCount = PlayerPrefs.GetInt("BulletsCount");
    medicineCount = PlayerPrefs.GetInt("MedicineCount");
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
		dogPopUpWindow = GUI.Window(5, dogPopUpWindow, NameDogWindow, "I See You Bought A Dog.");
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
	var repairkitIcon = Resources.Load("repairkit");
	var fishingPoleIcon = Resources.Load("fishingpole");
	var baitIcon = Resources.Load("bait");
	var gunIcon = Resources.Load("gun");
	var bulletsIcon = Resources.Load("bullets");
	// TODO = add Medicine //

	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(moneyIcon, GUILayout.Width(80));
	GUILayout.Label(sledIcon, GUILayout.Width(80));
	GUILayout.Label(dogIcon, GUILayout.Width(80));
	GUILayout.Label(fishingPoleIcon, GUILayout.Width(80));
	GUILayout.Label(gunIcon, GUILayout.Width(80));
	GUILayout.Label(repairkitIcon, GUILayout.Width(80));
	GUILayout.Label(foodIcon, GUILayout.Width(80));
	GUILayout.Label(baitIcon, GUILayout.Width(80));
	GUILayout.Label(bulletsIcon);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("$" + playerMoney.ToString(), GUILayout.Width(80));
	GUILayout.Label(sledCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(dogCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(fishingPoleCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(gunCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(repairkitCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(foodCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(baitCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(bulletsCount.ToString());
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
   
    GUILayout.EndVertical();
}


function NameDogWindow ()
{
	var cw = Resources.Load("cw");
	var additionalDog : Dog = ScriptableObject.CreateInstance("Dog") as Dog;

	GUILayout.BeginVertical();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(cw);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Why Don't You Name It?");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUI.SetNextControlName("DogNameText"); // input text field
    dogName = GUILayout.TextField( dogName , 15);
    
    // clear text in dog name input field on click
    if(UnityEngine.Event.current.type == EventType.Repaint)
    {
    	if( GUI.GetNameOfFocusedControl()=="DogNameText")
    	{
    		if(dogName=="new name") dogName = "";
    	}
    	
    	else
    	{
    		if(dogName=="") 
    		{
    			dogName = "new name";
    		}
    	}
    }
   
	if (GUILayout.Button("Submit"))
	{
		additionalDog.init(dogName);
		dogs.push(additionalDog);
		dogPurchased = false;
		// reset the dog name to default values
		dogName = "new name";
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

// major shopping GUI and functionality.
function BrowseWares()
{
	var sledIcon = Resources.Load("sled");
	var dogIcon = Resources.Load("dog");
	var foodIcon = Resources.Load("food");
	var repairkitIcon = Resources.Load("repairkit");
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
	GUILayout.Label("A sturdy vehicles pulled by dogs", GUILayout.MaxWidth(120));
	GUILayout.EndVertical();
	
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginVertical();
	if(sledCount > 0)
	{
		GUILayout.Label("Dog", GUILayout.Width(80));
		GUILayout.Label(dogIcon, GUILayout.Width(80));
		GUILayout.Label("Dogs bred especially for travel. You must feed them if you want them to perform well.", GUILayout.MaxWidth(120));
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
    	// TODO = add capacity, other sled variables. //
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
		}
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if((GUILayout.Button("Buy ($" + fishingPolePrice + ")", GUILayout.Width(120))) && playerMoney >= fishingPolePrice)
		{
			playerMoney -= fishingPolePrice;
			fishingPoleCount = fishingPoleCount + 1;
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
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
		if((GUILayout.Button("Buy ($" + gunPrice + ")", GUILayout.Width(120))) && playerMoney >= gunPrice)
		{
			playerMoney -= gunPrice;
			gunCount = gunCount + 1;
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			PlayerPrefs.SetInt("gunCount", gunCount);
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
		GUILayout.Label(repairkitIcon, GUILayout.Width(80));
		GUILayout.Label("Slightly improves sled health.", GUILayout.MaxWidth(120));
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
		GUILayout.Label("Food", GUILayout.Width(80));
		GUILayout.Label(foodIcon, GUILayout.Width(80));
		GUILayout.Label("Prevents hunger. Used by player and dogs.", GUILayout.MaxWidth(120));
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
		GUILayout.Label("Bait", GUILayout.Width(80));
		GUILayout.Label(baitIcon, GUILayout.Width(80));
		GUILayout.Label("Used for a fishing attempt. Requires a fishing pole.", GUILayout.MaxWidth(120));
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
		GUILayout.Label("Bullets", GUILayout.Width(80));
		GUILayout.Label(bulletsIcon, GUILayout.Width(80));
		GUILayout.Label("Ammunition for a gun. Carry a lot for protection.", GUILayout.MaxWidth(120));
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
	
	if(dogCount > 0)
	{
		if(GUILayout.Button("Buy ($" + repairkitPrice + ")", GUILayout.Width(120)))
		{
			playerMoney -= repairkitPrice;
		}
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if(GUILayout.Button("Buy ($" + foodPrice + ")", GUILayout.Width(120)))
		{
			playerMoney -= foodPrice;
		}
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if(GUILayout.Button("Buy ($" + baitPrice + ")", GUILayout.Width(120)))
		{
			playerMoney -= baitPrice;
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if(GUILayout.Button("Buy ($" + bulletsPrice + ")", GUILayout.Width(120)))
		{
			playerMoney -= bulletsPrice;
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
		if(GUILayout.Button("Buy 5 ($" + repairkitPrice * 5 + ")", GUILayout.Width(120)))
		{
			playerMoney -= repairkitPrice * 5;
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if(GUILayout.Button("Buy 5 ($" + foodPrice * 5 + ")", GUILayout.Width(120)))
		{
			playerMoney -= foodPrice * 5;
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if(GUILayout.Button("Buy 5 ($" + baitPrice * 5 + ")", GUILayout.Width(120)))
		{
			playerMoney -= baitPrice * 5;
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if(GUILayout.Button("Buy 5 ($" + bulletsPrice * 5 + ")", GUILayout.Width(120)))
		{
			playerMoney -= bulletsPrice * 5;
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
		if(GUILayout.Button("Buy 10 ($" + repairkitPrice * 10 + ")", GUILayout.Width(120)))
		{
			playerMoney -= repairkitPrice * 10;
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if(GUILayout.Button("Buy 10 ($" + foodPrice * 10 + ")", GUILayout.Width(120)))
		{
			playerMoney -= foodPrice * 10;
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if(GUILayout.Button("Buy 10 ($" + baitPrice * 10 + ")", GUILayout.Width(120)))
		{
			playerMoney -= baitPrice * 10;
		}
	}
	
	else 
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
		if(GUILayout.Button("Buy 10 ($" + bulletsPrice * 10 + ")", GUILayout.Width(120)))
		{
			playerMoney -= bulletsPrice * 10;
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