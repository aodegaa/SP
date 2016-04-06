#pragma strict

var musher : GameObject;
var map : Map;

function Start () 
{
	musher = GameObject.Find("Musher");
	map = ScriptableObject.CreateInstance("Map") as Map;
	map.init(PlayerPrefs.GetInt("Current City"));
	
	switch(PlayerPrefs.GetInt("Current City"))
	{
		case 1:
			musher.transform.Translate(Vector3(-7.5,0,0));
			break;
		case 2:
			musher.transform.Translate(Vector3(-6.5,-1.5,0));
			break;
		case 3:
			musher.transform.Translate(Vector3(-4.2,-1.8,0));
			break;
		case 4:
			musher.transform.Translate(Vector3(-2.5,-2.6,0));
			break;
		case 5:
			musher.transform.Translate(Vector3(0,-1.8,0));
			break;
		case 6:
			musher.transform.Translate(Vector3(2.1,-2.2,0));
			break;
		case 7:
			musher.transform.Translate(Vector3(3.3,-1.8,0));
			break;
		case 8:
			musher.transform.Translate(Vector3(4.3,-3.9,0));
			break;
		case 9:
			musher.transform.Translate(Vector3(6.5,-4.7,0));
			break;
		case 10:
			musher.transform.Translate(Vector3(6.5,-2.2,0));
			break;
		case 11:
			musher.transform.Translate(Vector3(-4.2,0,0));
			break;
		case 12:
			musher.transform.Translate(Vector3(-2.2,0.1,0));
			break;
		case 13:
			musher.transform.Translate(Vector3(.4,.2,0));
			break;
		case 14:
			musher.transform.Translate(Vector3(3.1,0,0));
			break;
		case 15:
			musher.transform.Translate(Vector3(-4.7,1.1,0));
			break;
		case 16:
			musher.transform.Translate(Vector3(-2.7,1.6,0));
			break;
		case 17:
			musher.transform.Translate(Vector3(-.7,2.4,0));
			break;
		case 18:
			musher.transform.Translate(Vector3(1,2.1,0));
			break;
		case 19:
			musher.transform.Translate(Vector3(3.1,2,0));
			break;
		case 20:
			musher.transform.Translate(Vector3(4.6,3.4,0));
			break;
		case 21:
			musher.transform.Translate(Vector3(6.2,2.1,0));
			break;
		case 22:
			musher.transform.Translate(Vector3(7.4,-.2,0));
			break;	
		default:
			musher.transform.Translate(Vector3(-7.5,0,0));
			break;
	}
	
}


function OnGUI()
{
	var menuWindow : Rect = Rect(0,-12,Screen.width,30);
	menuWindow = GUILayout.Window(0,menuWindow,showMenu,"");
}

function showMenu()
{
	var musherIcon = Resources.Load("TinyMusher");
	GUILayout.BeginHorizontal();
	GUILayout.Label("Current location indicated by",GUILayout.Width(170));
	GUILayout.Label(musherIcon,GUILayout.Height(35),GUILayout.Width(35));
	GUILayout.Label("symbol");
	GUILayout.Label("",GUILayout.Width(500));
	
	if(GUILayout.Button("X"))
	{
		Debug.Log("close");
		Application.LoadLevel(PlayerPrefs.GetInt("PreviousScene"));
	}
	GUILayout.EndHorizontal();
}