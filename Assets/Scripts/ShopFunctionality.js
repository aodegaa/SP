#pragma strict

//player money
var playerMoney : int;
//

//sled variables.
var sledLoad : float;
var sledCapacity : float;
var sledModifier : float;
//

//inventory
var dogCount : int;
var foodCount : int;
var firewoodCount : int;
var repairkitCount : int;
var dogbootyCount : int;
var baitCount : int;
var bulletsCount : int;
//

//item weights
var foodWeight : float = 1.00;
var firewoodWeight : float = 3.00;
var repairkitWeight : float = 10.00;
var dogbootiesWeight : float = 0.40; // packs of 4
var baitWeight : float = 0.02;
var bulletsWeight : float = 0.50;	// packs of 10
//


//temp price ---> CHANGE LATER !!!
var basket2Price : int = 50;
var basket3Price : int = 100;

var runner2Price : int = 60;
var runner3Price : int = 120;

var foodPrice : int = 5;
var dogPrice : int = 50;
var firewoodPrice : int = 8;
var repairkitPrice : int = 20;
var dogbootiesPrice : int = 4;
var baitPrice : int = 3;
var bulletsPrice : int = 2;
//


//etc.
private var dogName : String = "New Dog";
//


//windows
var shopOptionsWindow : Rect = Rect(200, 85, 300, 250);
var shopItemsWindow : Rect = Rect(200, 85, 300, 250);
var shopDogWindow : Rect = Rect(250, 50, 300, 260);
var shopFoodWindow : Rect = Rect(250, 50, 300, 260);
var shopFirewoodWindow : Rect = Rect(250, 50, 300, 260);
var shopRepairKitWindow : Rect = Rect(250, 50, 300, 260);
var shopDogBootiesWindow : Rect = Rect(250, 50, 300, 260);
var shopBaitWindow : Rect = Rect(250, 50, 300, 260);
var shopBulletsWindow : Rect = Rect(250, 50, 300, 260);
//


//styles
var shopOptionsWindowDialogStyle : GUIStyle;
var shopOptionsWindowButtonStyle : GUIStyle;
var shopOptionsWindowStyle : GUIStyle;
var shopBuyingWindowStyle : GUIStyle;
var shopItemsWindowDialogStyle : GUIStyle;
var shopItemsWindowButtonStyle : GUIStyle;
//


//store actions
var isIdling : boolean = true;
var isBuying : boolean = false;
var isSelling : boolean = false;
//


//items
var buyingSledUpgrade : boolean = false;
var buyingDog : boolean = false;
var buyingFood : boolean = false;
var buyingFirewood : boolean = false;
var buyingRepairKit : boolean = false;
var buyingDogBooties : boolean = false;
var buyingBait : boolean = false;
var buyingBullets : boolean = false;
//


//quantity
var quantity : int = 1;
//


//load inventory
//load local prices
function Start() 
{
	playerMoney = PlayerPrefs.GetInt("PlayerMoney");

    sledLoad = PlayerPrefs.GetFloat("SledLoad");
    sledCapacity = PlayerPrefs.GetFloat("SledCapacity");
    sledModifier = PlayerPrefs.GetFloat("SledModifier");
    
    dogCount = PlayerPrefs.GetInt("DogCount");
    
    foodCount =	PlayerPrefs.GetInt("FoodCount");
    firewoodCount =	PlayerPrefs.GetInt("FirewoodCount");
    repairkitCount = PlayerPrefs.GetInt("RepairKitCount");
    dogbootyCount = PlayerPrefs.GetInt("DogBootyCount");
    baitCount =	PlayerPrefs.GetInt("BaitCount");
    bulletsCount = PlayerPrefs.GetInt("BulletsCount");
    
}

function OnGUI()
{
	SetUpShop();
}

function SetUpShop()
{
	if(isIdling)
	{
		shopOptionsWindow = GUILayout.Window(0, shopOptionsWindow, CreateShopOptionsWindow, "", shopOptionsWindowStyle);
	}
	
	if(isBuying)
	{
		shopItemsWindow = GUI.Window(1, shopItemsWindow, CreateShopItemsWindow, "", shopBuyingWindowStyle);
	}
	
	if(buyingSledUpgrade)
	{
	}
	
	if(buyingDog)
	{
		shopDogWindow = GUI.Window(3, shopDogWindow, CreateDogWindow, "");
	}
	
	if(buyingFood)
	{
		shopFoodWindow = GUI.Window(4, shopFoodWindow, CreateFoodWindow, "");
	}
	
	if(buyingFirewood)
	{
		shopFirewoodWindow = GUI.Window(5, shopFirewoodWindow, CreateFirewoodWindow, "");
	}
	
	if(buyingRepairKit)
	{
		shopRepairKitWindow = GUI.Window(6, shopRepairKitWindow, CreateRepairKitWindow, "");
	}
	
	if(buyingDogBooties)
	{
		shopDogBootiesWindow = GUI.Window(7, shopDogBootiesWindow, CreateDogBootiesWindow, "");
	}
	
	if(buyingBait)
	{
		shopBaitWindow = GUI.Window(8, shopBaitWindow, CreateBaitWindow, "");
	}
	
	if(buyingBullets)
	{
		shopBulletsWindow = GUI.Window(9, shopBulletsWindow, CreateBulletsWindow, "");
	}

}

function CreateShopOptionsWindow()
{
	GUILayout.BeginVertical();
	GUILayout.FlexibleSpace();
	GUILayout.Label("If you've got the coin, \nI've got what you need.", shopOptionsWindowDialogStyle);
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	if(GUILayout.Button("Buy"))
	{
		isIdling = false;
		isBuying = true;
	}
	GUILayout.FlexibleSpace();
	if(GUILayout.Button("Sell"))
	{
		//spawn sell window
	}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.EndVertical();
}

function CreateShopItemsWindow()
{
	var sledupgradeIcon = Resources.Load("sled");
	var dogIcon = Resources.Load("dog");
	var foodIcon = Resources.Load("food");
	var firewoodIcon = Resources.Load("firewood");
	var repairkitIcon = Resources.Load("repairkit");
	var dogbootyIcon = Resources.Load("dogbooty");
	var baitIcon = Resources.Load("bait");
	var bulletsIcon = Resources.Load("bullets");

	GUILayout.BeginVertical();
	GUILayout.Label("What would you like?\nSelect an item below for more information.", shopItemsWindowDialogStyle);
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	if(GUILayout.Button(sledupgradeIcon))
	{
		buyingSledUpgrade = true;
	}
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button(dogIcon))
	{
		buyingDog = true;
	}
	GUILayout.FlexibleSpace();
	if(GUILayout.Button(foodIcon))
	{
		buyingFood = true;		
	}
	GUILayout.FlexibleSpace();
	if(GUILayout.Button(firewoodIcon))
	{
		buyingFirewood = true;
	}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.FlexibleSpace();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	if(GUILayout.Button(repairkitIcon))
	{
		buyingRepairKit = true;
	}
	GUILayout.FlexibleSpace();
	if(GUILayout.Button(dogbootyIcon))
	{
		buyingDogBooties = true;
	}
	GUILayout.FlexibleSpace();
	if(GUILayout.Button(baitIcon))
	{
		buyingBait = true;
	}
	GUILayout.FlexibleSpace();
	if(GUILayout.Button(bulletsIcon))
	{
		buyingBullets = true;
	}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.FlexibleSpace();
	
	if(GUILayout.Button("Back.", shopItemsWindowButtonStyle))
	{
		isBuying = false;
		isIdling = true;
	}
	GUILayout.FlexibleSpace();

	GUILayout.EndVertical();
}


function CreateDogWindow()
{
	var itemImage = Resources.Load("storedog"); // change

	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Sled Dog");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(itemImage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.Label("A proud breed, raised in a harsh environment.\nRequires regular food and rest.");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();

	GUILayout.Label("Name:");
	GUI.SetNextControlName("DogNameText");
    dogName = GUILayout.TextField(dogName, 12, GUILayout.Width(100));
    if(UnityEngine.Event.current.type == EventType.Repaint)
    {
    	if(GUI.GetNameOfFocusedControl() == "DogNameText")
    	{
    		if(dogName == "New Dog") 
    		{
    			dogName = "";
    		}
    	}
    	
    	else
    	{
    		if(dogName == "") 
    		{
    			dogName = "New Dog";
    		}
    	}
    }
    GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Price: $"  + dogPrice + ".");
	
	if(GUILayout.Button("Buy."))
	{
		if(dogCount < 8 && playerMoney >= dogPrice)
		{
			dogCount = dogCount + 1;
			PlayerPrefs.SetInt("DogCount", dogCount);
			
			if(!PlayerPrefs.HasKey("DogName1"))
			{
				PlayerPrefs.SetString("DogName1", dogName);
				PlayerPrefs.SetInt("DogHealth1", 100);
				PlayerPrefs.SetInt("DogHunger1", 100);
			}
			
			if(!PlayerPrefs.HasKey("DogName2"))
			{
				PlayerPrefs.SetString("DogName2", dogName);
				PlayerPrefs.SetInt("DogHealth2", 100);
				PlayerPrefs.SetInt("DogHunger2", 100);
			}
			
			if(!PlayerPrefs.HasKey("DogName3"))
			{
				PlayerPrefs.SetString("DogName3", dogName);
				PlayerPrefs.SetInt("DogHealth3", 100);
				PlayerPrefs.SetInt("DogHunger3", 100);
			}
			
			if(!PlayerPrefs.HasKey("DogName4"))
			{
				PlayerPrefs.SetString("DogName4", dogName);
				PlayerPrefs.SetInt("DogHealth4", 100);
				PlayerPrefs.SetInt("DogHunger4", 100);
			}
			
			if(!PlayerPrefs.HasKey("DogName5"))
			{
				PlayerPrefs.SetString("DogName5", dogName);
				PlayerPrefs.SetInt("DogHealth5", 100);
				PlayerPrefs.SetInt("DogHunger5", 100);
			}
			
			if(!PlayerPrefs.HasKey("DogName6"))
			{
				PlayerPrefs.SetString("DogName6", dogName);
				PlayerPrefs.SetInt("DogHealth6", 100);
				PlayerPrefs.SetInt("DogHunger6", 100);
			}

			if(!PlayerPrefs.HasKey("DogName7"))
			{
				PlayerPrefs.SetString("DogName7", dogName);
				PlayerPrefs.SetInt("DogHealth7", 100);
				PlayerPrefs.SetInt("DogHunger7", 100);
			}
			
			if(!PlayerPrefs.HasKey("DogName8"))
			{
				PlayerPrefs.SetString("DogName8", dogName);
				PlayerPrefs.SetInt("DogHealth8", 100);
				PlayerPrefs.SetInt("DogHunger8", 100);
			}
			
			playerMoney = playerMoney - dogPrice;
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			
			dogName = "New Dog";
		}
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Remaining Spots: " + (8 - dogCount) + ".");
	if(GUILayout.Button("Back."))
	{
		dogName = "New Dog";
		buyingDog = false;
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

function CreateFoodWindow()
{
	var itemImage = Resources.Load("storefood"); // change

	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Food");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(itemImage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.Label("Nourishment for both humans and animals.\nStaves off hunger so you can keep going.");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("<|"))
	{
		if(quantity <= 10)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity = quantity - 10;
		}
	}
	
	if(GUILayout.Button("<-"))
	{
		if(quantity == 0)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity--;
		}
	}
	
	GUILayout.Box(quantity.ToString());
	
	if(GUILayout.Button("->"))
	{
		quantity++;
	}
	
	if(GUILayout.Button("|>"))
	{
		quantity = quantity + 10;
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Price: $"  + quantity * foodPrice + ".");
	
	if(GUILayout.Button("Buy."))
	{
		//make sure they can afford it and store it
		if(playerMoney >= (quantity * foodPrice) && sledCapacity >= sledLoad + (quantity * foodWeight))
		{
			playerMoney = playerMoney - (quantity * foodPrice);		//update money
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			
			sledLoad = sledLoad + (quantity * foodWeight);	//update weight
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			
			foodCount = foodCount + quantity;	//update player stock
			PlayerPrefs.SetInt("FoodCount", foodCount);
			
			if(quantity > 0)
			{
				Debug.Log("Ka-Ching!");
				//play sound ka-ching!
			}
		}
		
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Weight: "  + quantity * foodWeight + " lbs.");
	if(GUILayout.Button("Back."))
	{
		quantity = 1;
		buyingFood = false;
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

function CreateFirewoodWindow()
{
	var itemImage = Resources.Load("storefirewood"); // change

	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Firewood");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(itemImage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.Label("Fine cuts of wood\nUsed to fuel a fire for warmth.");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("<|"))
	{
		if(quantity <= 10)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity = quantity - 10;
		}
	}
	
	if(GUILayout.Button("<-"))
	{
		if(quantity == 0)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity--;
		}
	}
	
	GUILayout.Box(quantity.ToString());
	
	if(GUILayout.Button("->"))
	{
		quantity++;
	}
	
	if(GUILayout.Button("|>"))
	{
		quantity = quantity + 10;
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Price: $"  + quantity * firewoodPrice + ".");
	
	if(GUILayout.Button("Buy."))
	{
		//make sure they can afford it and store it
		if(playerMoney >= (quantity * firewoodPrice) && sledCapacity >= sledLoad + (quantity * firewoodWeight))
		{
			playerMoney = playerMoney - (quantity * firewoodPrice);		//update money
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			
			sledLoad = sledLoad + (quantity * firewoodWeight);	//update weight
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			
			firewoodCount = firewoodCount + quantity;	//update player stock
			PlayerPrefs.SetInt("FirewoodCount", firewoodCount);
			
			if(quantity > 0)
			{
				Debug.Log("Ka-Ching!");
				//play sound ka-ching!
			}
		}
		
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Weight: "  + quantity * firewoodWeight + " lbs.");
	if(GUILayout.Button("Back."))
	{
		quantity = 1;
		buyingFirewood = false;
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

function CreateRepairKitWindow()
{
	var itemImage = Resources.Load("storerepairkit"); // change

	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Repair Kit");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(itemImage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.Label("A set of tools and materials used to fix your sled.\nRestores 25% of basket or runner health.");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("<|"))
	{
		if(quantity <= 10)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity = quantity - 10;
		}
	}
	
	if(GUILayout.Button("<-"))
	{
		if(quantity == 0)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity--;
		}
	}
	
	GUILayout.Box(quantity.ToString());
	
	if(GUILayout.Button("->"))
	{
		quantity++;
	}
	
	if(GUILayout.Button("|>"))
	{
		quantity = quantity + 10;
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Price: $"  + quantity * repairkitPrice + ".");
	
	if(GUILayout.Button("Buy."))
	{
		//make sure they can afford it and store it
		if(playerMoney >= (quantity * repairkitPrice) && sledCapacity >= sledLoad + (quantity * repairkitWeight))
		{
			playerMoney = playerMoney - (quantity * repairkitPrice);		//update money
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			
			sledLoad = sledLoad + (quantity * repairkitWeight);	//update weight
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			
			repairkitCount = repairkitCount + quantity;	//update player stock
			PlayerPrefs.SetInt("RepairKitCount", repairkitCount);
			
			if(quantity > 0)
			{
				Debug.Log("Ka-Ching!");
				//play sound ka-ching!
			}
		}
		
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Weight: "  + quantity * repairkitWeight + " lbs.");
	if(GUILayout.Button("Back."))
	{
		quantity = 1;
		buyingRepairKit = false;
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

function CreateDogBootiesWindow()
{
	var itemImage = Resources.Load("storedogbooties"); // change

	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Dog Booties");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(itemImage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.Label("Protective boots for a dog to wear.\nComes in a pack of 4.");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("<|"))
	{
		if(quantity <= 10)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity = quantity - 10;
		}
	}
	
	if(GUILayout.Button("<-"))
	{
		if(quantity == 0)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity--;
		}
	}
	
	GUILayout.Box(quantity.ToString());
	
	if(GUILayout.Button("->"))
	{
		quantity++;
	}
	
	if(GUILayout.Button("|>"))
	{
		quantity = quantity + 10;
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Price: $"  + quantity * dogbootiesPrice + ".");
	
	if(GUILayout.Button("Buy."))
	{
		//make sure they can afford it and store it
		if(playerMoney >= (quantity * dogbootiesPrice) && sledCapacity >= sledLoad + (quantity * dogbootiesWeight))
		{
			playerMoney = playerMoney - (quantity * dogbootiesPrice);		//update money
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			
			sledLoad = sledLoad + (quantity * dogbootiesWeight);	//update weight
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			
			dogbootyCount = dogbootyCount + quantity;	//update player stock
			PlayerPrefs.SetInt("DogBootyCount", dogbootyCount);
			
			if(quantity > 0)
			{
				Debug.Log("Ka-Ching!");
				//play sound ka-ching!
			}
		}
		
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Weight: "  + quantity * dogbootiesWeight + " lbs.");
	if(GUILayout.Button("Back."))
	{
		quantity = 1;
		buyingDogBooties = false;
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

function CreateBaitWindow()
{
	var itemImage = Resources.Load("storebait"); // change

	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Bait");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(itemImage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.Label("A thick juicy worm.\nA must-have if you plan to catch fish.");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("<|"))
	{
		if(quantity <= 10)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity = quantity - 10;
		}
	}
	
	if(GUILayout.Button("<-"))
	{
		if(quantity == 0)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity--;
		}
	}
	
	GUILayout.Box(quantity.ToString());
	
	if(GUILayout.Button("->"))
	{
		quantity++;
	}
	
	if(GUILayout.Button("|>"))
	{
		quantity = quantity + 10;
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Price: $"  + quantity * baitPrice + ".");
	
	if(GUILayout.Button("Buy."))
	{
		//make sure they can afford it and store it
		if(playerMoney >= (quantity * baitPrice) && sledCapacity >= sledLoad + (quantity * baitWeight))
		{
			playerMoney = playerMoney - (quantity * baitPrice);		//update money
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			
			sledLoad = sledLoad + (quantity * baitWeight);	//update weight
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			
			baitCount = baitCount + quantity;	//update player stock
			PlayerPrefs.SetInt("BaitCount", baitCount);
			
			if(quantity > 0)
			{
				Debug.Log("Ka-Ching!");
				//play sound ka-ching!
			}
		}
		
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Weight: "  + quantity * baitWeight + " lbs.");
	if(GUILayout.Button("Back."))
	{
		quantity = 1;
		buyingBait = false;
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

function CreateBulletsWindow()
{
	var itemImage = Resources.Load("storebullets"); // change

	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Bullets");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(itemImage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.Label("A 10-pack of bullets.\nMight help in a dangerous situation.");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("<|"))
	{
		if(quantity <= 10)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity = quantity - 10;
		}
	}
	
	if(GUILayout.Button("<-"))
	{
		if(quantity == 0)
		{
			quantity = 0;
		}
		
		else 
		{
			quantity--;
		}
	}
	
	GUILayout.Box(quantity.ToString());
	
	if(GUILayout.Button("->"))
	{
		quantity++;
	}
	
	if(GUILayout.Button("|>"))
	{
		quantity = quantity + 10;
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Price: $"  + quantity * bulletsPrice + ".");
	
	if(GUILayout.Button("Buy."))
	{
		//make sure they can afford it and store it
		if(playerMoney >= (quantity * bulletsPrice) && sledCapacity >= sledLoad + (quantity * bulletsWeight))
		{
			playerMoney = playerMoney - (quantity * bulletsPrice);		//update money
			PlayerPrefs.SetInt("PlayerMoney", playerMoney);
			
			sledLoad = sledLoad + (quantity * bulletsWeight);	//update weight
			PlayerPrefs.SetFloat("SledLoad", sledLoad);
			
			bulletsCount = bulletsCount + quantity;	//update player stock
			PlayerPrefs.SetInt("BulletsCount", bulletsCount);
			
			if(quantity > 0)
			{
				Debug.Log("Ka-Ching!");
				//play sound ka-ching!
			}
		}
		
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Weight: "  + quantity * bulletsWeight + " lbs.");
	if(GUILayout.Button("Back."))
	{
		quantity = 1;
		buyingBullets = false;
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}