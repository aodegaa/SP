#pragma strict

//
//
//
private var rumorWindow : Rect = Rect(350, 80, 260, 130);

var renderRumor : boolean = false;
var rumorMessage : String;
var messageNumber : int;
var previousMessageNumber : int;

function Start() 
{
}

function Update() 
{

}

function OnGUI()
{
	if(renderRumor)
	{
		rumorWindow = GUI.Window(1, rumorWindow, RumorDialog, "");
	}
}

function OnMouseDown() 
{
	SpawnRumor();
	renderRumor = true;
}

// rumor window.
function RumorDialog()
{
	GUILayout.BeginVertical();
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	GUILayout.Label(rumorMessage);
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

// spawns rumor.
function SpawnRumor()
{
	messageNumber = Random.Range(1, 21);
	
	// logic to prevent same rumor appearing twice in a row.
	if(messageNumber == previousMessageNumber)
	{
		messageNumber = Random.Range(1, 21);
	}
	
	switch(messageNumber)
	{
		case 1:
			rumorMessage = "You'll find the fairest prices around at the local shop.";
			break;
		
		case 2:
			rumorMessage = "You'll tire far faster than your dogs. Be sure to rest once in awhile.";
			break;
			
		case 3:
			rumorMessage = "Don’t forget to buy a sled.";
			break;

		case 4:
			rumorMessage = "The villagers are sick! We need medicine!";
			break;

		case 5:
			rumorMessage = "No matter how bad it gets, don't give up.";
			break;

		case 6:
			rumorMessage = "I really like gardening on the weekends.";
			break;

		case 7:
			rumorMessage = "Rhubarb is an overrated pie filling.";
			break;

		case 8:
			rumorMessage = "Sometimes it pays off to take the long route";
			break;

		case 9:
			rumorMessage = "When you are running low on food, you can always try fishing!";

		case 10:
			rumorMessage = "I'd stay away from the Mice Flats.";
			break;

		case 11:
			rumorMessage = "Sleeping at the Inn can be really relaxing.";
			break;

		case 12:
			rumorMessage = "Watch out for thieves on the trail";
			break;

		case 13:
			rumorMessage = "Buying parts for your sled can pay of later, especially if you break down in the middle of nowhere.";
			break;

		case 14:
			rumorMessage = "The medicine can be used to heal you or your dogs, but the villagers really need it too!";
			break;

		case 15:
			rumorMessage = "The quicker the fish the bigger it is.";
			break;

		case 16:
			rumorMessage = "It's avalanche season in the mountain pass. Take care.";
			break;

		case 17:
			rumorMessage = "Make sure to say hello to everyone, they too might have things to say.";
			break;

		case 18:
			rumorMessage = "I once heard there were big furry beasts out there in the dead of winter, sometimes they even bring their dogs.";
			break;

		case 19:
			rumorMessage = "Dogs can’t run very fast on ice, they will get injured if forced to anyway!";
			break;
					
		case 20:
			rumorMessage = "The health of your team is important for this journey, make sure to monitor them from time to time.";
			break;
	}
	
	previousMessageNumber = messageNumber;
}