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

function OnGUI() 
{
	var browseWindow : Rect = Rect(0, 0, Screen.width, Screen.height);
	browseWindow = GUI.Window(0, browseWindow, ShopWares, "Wares");
}

function ShopWares()
{
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