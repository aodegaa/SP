#pragma strict

var playerMoney : int = 1000;
var sledPrice : int = 100;
var dogPrice : int = 25;
var foodPrice : int = 2;
var repairkitPrice : int = 15;
var fishingpolePrice : int = 30;
var baitPrice : int = 1;
var gunPrice : int = 30;
var bulletsPrice : int = 1;

var sledCount : int = 0;
var dogCount : int = 0;
var fishingpoleCount : int = 0;
var gunCount : int = 0;
var repairkitCount : int = 0;
var foodCount : int = 0;
var baitCount : int = 0;
var bulletsCount : int = 0;

function OnGUI() 
{
	var browseWindow : Rect = Rect(0, 0, Screen.width, Screen.height);
	browseWindow = GUI.Window(0, browseWindow, ShopWares, "Wares");
}

function ShopWares()
{
	var moneyIcon = Resources.Load("money");
	var sledIcon = Resources.Load("sled");
	var dogIcon = Resources.Load("dog");
	var foodIcon = Resources.Load("food");
	var repairkitIcon = Resources.Load("repairkit");
	var fishingpoleIcon = Resources.Load("fishingpole");
	var baitIcon = Resources.Load("bait");
	var gunIcon = Resources.Load("gun");
	var bulletsIcon = Resources.Load("bullets");

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
	GUILayout.Label(fishingpoleIcon, GUILayout.Width(80));
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
	
	if((GUILayout.Button("Buy ($" + sledPrice + ")", GUILayout.Width(120))) && playerMoney >= sledPrice)
	{
		playerMoney -= sledPrice;
		sledCount = sledCount + 1;
	}
	
	GUILayout.FlexibleSpace();
	
	if(sledCount > 0)
	{
		if((GUILayout.Button("Buy ($" + dogPrice + ")", GUILayout.Width(120)))  && playerMoney >= dogPrice)
		{
			playerMoney -= dogPrice;
			dogCount = dogCount + 1;
		}
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	
	if(dogCount > 0)
	{
	if(GUILayout.Button("Buy ($" + fishingpolePrice + ")", GUILayout.Width(120)))
	{
		playerMoney -= fishingpolePrice;
	}
	}
	
	else
	{
		GUILayout.Label("", GUILayout.Width(120));
	}
	
	GUILayout.FlexibleSpace();
	
	if(dogCount > 0)
	{
	if(GUILayout.Button("Buy ($" + gunPrice + ")", GUILayout.Width(120)))
	{
		playerMoney -= gunPrice;
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
		GUILayout.Label("", GUILayout.MaxWidth(120));
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
	if((GUILayout.Button("Buy ($" + repairkitPrice + ")", GUILayout.Width(120))) && playerMoney >= repairkitPrice)
	{
		playerMoney -= repairkitPrice;
		repairkitCount = repairkitCount + 1;
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
	GUILayout.Label("");
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label("Player Inventory");
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(moneyIcon, GUILayout.Width(80));
	GUILayout.Label(sledIcon, GUILayout.Width(80));
	GUILayout.Label(dogIcon, GUILayout.Width(80));
	GUILayout.Label(fishingpoleIcon, GUILayout.Width(80));
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
	GUILayout.Label(fishingpoleCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(gunCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(repairkitCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(foodCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(baitCount.ToString(), GUILayout.Width(80));
	GUILayout.Label(bulletsCount.ToString());
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	
	
	GUILayout.EndVertical();
	
}