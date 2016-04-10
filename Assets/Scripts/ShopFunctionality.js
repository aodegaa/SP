#pragma strict

//temp 
var foodWeight : float = 1.0;
var foodPrice : int = 6;

var dogPrice : int = 50;
private var dogName : String = "New Dog";
//

var shopOptionsWindow : Rect = Rect(200, 85, 300, 200);
var shopItemsWindow : Rect = Rect(200, 85, 300, 200);
var shopFoodWindow : Rect = Rect(250, 50, 300, 400);
var shopDogWindow : Rect = Rect(250, 50, 300, 400);

var shopOptionsWindowDialogStyle : GUIStyle;
var shopOptionsWindowButtonStyle : GUIStyle;
var shopOptionsWindowStyle : GUIStyle;
var shopBuyingWindowStyle : GUIStyle;
var shopItemsWindowDialogStyle : GUIStyle;
var shopItemsWindowButtonStyle : GUIStyle;

var isIdling : boolean = true;
var isBuying : boolean = false;
var isSelling : boolean = false;

// other sled variables.
var sledLoad : float;
var sledCapacity : float;

//items
var buyingDog : boolean = false;
var buyingFood : boolean = false;
var buyingFirewood : boolean = false;

var quantity : int = 1;



function Start() 
{
    sledLoad = PlayerPrefs.GetFloat("SledLoad");
    sledCapacity = PlayerPrefs.GetFloat("SledCapacity");
}

function Update() 
{
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
	
	if(buyingDog)
	{
		shopDogWindow = GUI.Window(2, shopDogWindow, CreateDogWindow, "");
	}
	
	if(buyingFood)
	{
		shopFoodWindow = GUI.Window(3, shopFoodWindow, CreateFoodWindow, "");
	}

}

function CreateShopOptionsWindow()
{
	GUILayout.BeginVertical();
	GUILayout.FlexibleSpace();
	GUILayout.Label("If you've got the coin, \nI've got what you need.", shopOptionsWindowDialogStyle);
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
	var sledIcon = Resources.Load("sled");
	var dogIcon = Resources.Load("dog");
	var foodIcon = Resources.Load("food");
	var repairKitIcon = Resources.Load("repairkit");
	var fishingPoleIcon = Resources.Load("fishingpole");
	var baitIcon = Resources.Load("bait");
	var gunIcon = Resources.Load("gun");
	var bulletsIcon = Resources.Load("bullets");

	GUILayout.BeginVertical();
	GUILayout.Label("What would you like?\nSelect an item below for more information.", shopItemsWindowDialogStyle);
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	if(GUILayout.Button(dogIcon))
	{
		Debug.Log("doge");
		buyingDog = true;
	}
	GUILayout.FlexibleSpace();
	if(GUILayout.Button(foodIcon))
	{
		Debug.Log("food");
		buyingFood = true;
		
	}
	GUILayout.FlexibleSpace();
	if(GUILayout.Button(repairKitIcon))
	{
		Debug.Log("repairkit");
	}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(sledIcon);
	GUILayout.FlexibleSpace();
	GUILayout.Label(fishingPoleIcon);
	GUILayout.FlexibleSpace();
	GUILayout.Label(baitIcon);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(gunIcon);
	GUILayout.FlexibleSpace();
	GUILayout.Label(bulletsIcon);
	GUILayout.FlexibleSpace();
	GUILayout.Label(dogIcon);
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

function CreateFoodWindow()
{
	var storeFood = Resources.Load("storefood"); // change

	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Food");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(storeFood);
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

function CreateDogWindow()
{
	var storeDog = Resources.Load("storedog"); // change

	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Sled Dog");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(storeDog);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.BeginHorizontal();
	GUILayout.Label("A proud breed, raised in a harsh environment.\nRequires regular food and rest.");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();

	GUILayout.Label("Name:");
	GUI.SetNextControlName("DogNameText");
    dogName = GUILayout.TextField(dogName, 15, GUILayout.Width(100));
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
		// add dog to team, 
		// remove player money
	}
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("Total Weight: N/A."); // change to remaining positions on team
	if(GUILayout.Button("Back."))
	{
		buyingDog = false;
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}