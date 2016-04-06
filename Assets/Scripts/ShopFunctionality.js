#pragma strict

var shopOptionsWindow : Rect = Rect(200, 85, 300, 200);
var shopItemsWindow : Rect = Rect(200, 85, 300, 200);

var shopOptionsWindowDialogStyle : GUIStyle;
var shopOptionsWindowButtonStyle : GUIStyle;
var shopOptionsWindowStyle : GUIStyle;
var shopBuyingWindowStyle : GUIStyle;
var shopItemsWindowDialogStyle : GUIStyle;
var shopItemsWindowButtonStyle : GUIStyle;

var isIdling : boolean = true;
var isBuying : boolean = false;
var isSelling : boolean = false;



function Start() 
{

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
	GUILayout.Label(dogIcon);
	GUILayout.FlexibleSpace();
	GUILayout.Label(foodIcon);
	GUILayout.FlexibleSpace();
	GUILayout.Label(repairKitIcon);
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
	GUILayout.Label("Back.", shopItemsWindowButtonStyle);
	GUILayout.FlexibleSpace();

	GUILayout.EndVertical();
}