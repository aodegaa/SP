#pragma strict

/* NOTE: BASIC SYNTAX/RULES FOR SCRIPT: 
* function createEventX() is the window Function for event X
* outcomeText is always the given text for the outcome of an Event
* showEvent is set to true on event creation, set to false when a choice
* leading to a result is choosen.
* showOutcome set to true when a choice leading to a result is chosen,
* set to false when outcome window's OK button is clicked.
*/

private var eventRoll : int;
private var eventID : int;
private var eventWindow : Rect = Rect(Screen.width/2-150, Screen.height/2-50, 300,150);
var showEvent : boolean = false; // controls whether the event is currently being shown or not.
var showOutcome : boolean = false; // controls whether the outcome is shown or not.

private var outcomeText : String; // used to display the outcome of events.

function Start(){
	createEvent(1);
}

function OnGUI(){
	showEventWindow();
}

function showEventWindow(){
	if(showEvent){
		switch(eventID){
		//  BEGIN WILD ANIMAL/FIGHT BASED EVENTS
			case 1: // bear encounter
				GUI.Window(0, eventWindow, createEvent1, "Oh mai! A large Grizzly bear approaches.\nHe looks angry!");
				break;
	
			case 2: // moose encounter
				GUI.Window(0,eventWindow, createEvent2, "You spot a moose lumbering out of the wood.\n He's a fine specimen with a huge rack.");
				break;
				
			case 3: // fox encounter
				// normal
				if(eventRoll>=50) GUI.Window(0,eventWindow, createEvent3, "A fox dashes across your path!\nDoesn't he look majestic!");
				// rabid
				else GUI.Window(0,eventWindow, createEvent3, "A fox dashes across your path!\nhis mouth appears to be foaming");
				break;
			
			case 4: // Dall Sheep encounter
			
				break;
				
			case 5: // Hare encounter
			
				break;
				
			case 6: // Ptarmigan encounter 
			
				break;
				
			case 7: // Stray cat encounter
			
				break;
				
			case 8: // Reindeer encounter
			
				break;
				
			case 9: // Squirrel encouter
				
				break;
				
			case 10 : // Other dog team encounter
			
				break;
			// END WILD ANIMAL/FIGHT BASED EVENTS
			
			// START WEATHER BASED EVENTS
			case 11: // robbers attack/steal from you
			
				break;
				
			case 12: // "Trader Joe" encounter
			
				break;
				
			case 13: // Clouds/heavy fog rolls in
			
				break;
				
			case 14: // Sun intensifies (praise the sun)
			
				break;
				
			case 15: // rain starts to pour
			
				break;
				
			case 16: // ice storm
			
				break;
				
			case 17: // blizzard 
			
				break;
				
			case 18: // perfect weather/nice day
			
				break;
				
			case 19: // sever windstorm
			
				break;
			// END WEATHER BASED EVENTS
			
			case 20: // stranded traveler encounter	
				
				break;
				
			case 21: // dog booty slips off
			
				break;
				
			case 22: // harness comes loose
			
				break;
				
			case 23: // run into tree root
			
				break;
			
			case 24: // encounter bald patch (no snow)
				
				break;
				
			case 25: // fallen tree in middle of trail
			
				break;
				
			case 26: // dog fight. dogs fight amongst themselves
			
				break;
				
			case 27: // hear strange noise
			
				break;
				
			case 28: // rabies
			
				break;
				
			case 29: // dog goes missing int he night
			
				break;
				
			case 30: // seasonal flooding causes you to take a detour
			
				break;
				
			case 31: // cross frozen lake
			
				break;
				
			case 32: // rival medicine man has come to steal your medicine
			
				break;
				
			case 33: // mosquito swarm
			
				break;
				
			case 34: // earthquake
			
				break;
				
			case 35: // disease for dog/ player
			
				break;
				
			case 36: // arcic mice get into your food stock
			
				break;
			
			case 37: // nearby fire
			
				break;
				
			case 38: // boots freeze to runner
					// event occurs, but doesn't trigger until you stop?
				break;
			
			case 39: // see a cabin
			
				break;
				
			case 40: // find random supplies
			
				break;
				
			case 41: // loose branch falls on you and/or your sled/dogs
			
				break;
				
			case 42: // small avalanche
			
				break;
				
			case 43: // random dog injury
			
				break;
				
			case 44: // random musher injury
			
				break;
				
			case 45: // some medicine falls out/breaks
			
				break;
				
			case 46: // catch a cold (chance for it to turn into other illness)
			
				break;
				
			case 47: // sharp rocks litter the ground
			
				break;
				
			case 48: // sun reflects off snow intensely
			
				break;
				
			case 49: // some dog food spoils
			
				break;
				
			case 50: // dog freezes to death in the night
			
				break;
				
			case 51: // notice a strange howling has been following you
			
				break;
			
			default:
				break;
		}
	}
	if(showOutcome){
		GUI.Window(0,eventWindow, showOutcomeWindow, "");
	}
	else{
		// TODO: remove this. for testing purposes only
		createEvent(1);
	}
}


// sets the conditions for events: sets the event id, sets the bool to spawn the window, sets outcome variable.
function createEvent(eventNumber : int){
	if(eventNumber == 0){
		eventNumber = Random.Range(1,65);
	}
	eventID = eventNumber;
	eventRoll = Random.Range(1,100); // used to determine outcome of luck based choices.
	showEvent=true;
}

function showOutcomeWindow(){
	GUILayout.BeginVertical();
	GUILayout.FlexibleSpace();
	GUILayout.Label(outcomeText);
	if(GUILayout.Button("OK")) showOutcome = false;
	GUILayout.FlexibleSpace();
	GUILayout.EndVertical();
}

/**** START EVENT 1 ******/
// event for bear encounter
function createEvent1(){
	GUILayout.BeginVertical();
	
	GUILayout.FlexibleSpace();
	GUILayout.Label("What will you do?");
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	
	if(GUILayout.Button("Fight")){
		Debug.Log("Fight!");
		//TODO: add outcome effect
		if(PlayerPrefs.GetInt("BulletsCount")>10){ // player has enough bullets to potentially kill the bear
		
			if(eventRoll>=50){
				// good result
				outcomeText = "You killed the bear without sustaining any injuries!";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "You shot the bear 5 times but failed to kill it!\nIt fled back into the woods.";
				showOutcome=true;
				showEvent = false;
			}
		}
		else{ // he doesn't
			if(eventRoll>=50){
				// good result
				outcomeText = "The bear is intimidated by you and your dogs.\nIt flees back into the woods.";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "Taking on a bear without enough ammo wasn't a great idea...\nThe bear mauls you savagely.";
				showOutcome=true;
				showEvent = false;
			}
		}
	}
	if(GUILayout.Button("Run Away!")){
		Debug.Log("...pussy.");
		// try to run away.
		if(eventRoll>=20){
			// good result
			outcomeText = "You back up slowly... and run away!\nThe bear laughs at your cowardice but doesn't pursue you.";
			showOutcome=true;
			showEvent = false;
		}
		else{
			// bad result
			outcomeText = "You try to run away... but you aren't fast enough!\nThe bear mauls you, damaging your equipment and hurting you.";
			showOutcome=true;
			showEvent = false;
		}
	}
	
	
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}
/***** END EVENT 1 ******/

/***** START EVENT 2 ****/
// event for moose encounter
function createEvent2(){
	GUILayout.BeginVertical();
	
	GUILayout.FlexibleSpace();
	GUILayout.Label("What will you do?");
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	
	if(GUILayout.Button("Fight")){
		Debug.Log("Fight!");
		//TODO: add outcome effect
		if(PlayerPrefs.GetInt("BulletsCount")>10){ // player has enough bullets to potentially kill the moose
		
			if(eventRoll>=50){
				// good result
				outcomeText = "You killed the moose without sustaining any injuries!";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "You shot the moose just enough to piss it off.\nIt charged you and shattered your world with its massive rack.";
				showOutcome=true;
				showEvent = false;
			}
		}
		else{ // he/she doesn't
			if(eventRoll>=50){
				// good result
				outcomeText = "The moose is intimidated by you and your dogs.\nIt retreats into the woods.";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "You punch the moose repeatedly to no avail.\nIt angrily stomps you, severly injuring you.";
				showOutcome=true;
				showEvent = false;
			}
		}
	}
	if(GUILayout.Button("Run Away!")){
		Debug.Log("...pussy.");
		// try to run away.
		if(eventRoll>=20){
			// good result
			outcomeText = "You back up slowly... and run away!\n";
			showOutcome=true;
			showEvent = false;
		}
		else{
			// bad result
			outcomeText = "You try to run away... but you aren't fast enough!\nThe moose chases you down and stomps your sled.";
			showOutcome=true;
			showEvent = false;
		}
	}
	
	
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}
/***** END EVENT 2 ******/

/***** START EVENT 3 ****/
// fox encounter
function createEvent3(){
	// need new event roll. first one was to see if it was rabid or not.
	// record if it was rabid or not
	var rabid : boolean=false;
	if(eventRoll<=50) rabid=true;
	
	eventRoll = Random.Range(1,100);
	
	GUILayout.BeginVertical();
	
	GUILayout.FlexibleSpace();
	GUILayout.Label("What will you do?");
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	
	if(GUILayout.Button("Fight")){
		Debug.Log("Fight!");
		//TODO: add outcome effect
		if(PlayerPrefs.GetInt("BulletsCount")>=1){ // player has enough bullets to potentially kill the bear
		
			if(eventRoll>=50){
				// good result
				outcomeText = "You killed the fox without sustaining any injuries!";
				if(rabid){
					// don't get any food. probably shouldn't eat a rabid fox
				}
				else{
					// get food
				}
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "You shot at the fox but missed!";
				if(rabid){
					outcomeText+="\nThe angered fox attacks and bites one of your dogs!";
					// contract rabies
				}
				else{
					outcomeText+="\nThe fox is startled and flees!";
				}
				showOutcome=true;
				showEvent = false;
			}
		}
		else{ // he doesn't
			if(eventRoll>=50){
				// good result
				outcomeText = "You try to bring down the fox with some nearby rocks but fail.\nThe fox runs off into the woods";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "You try to bring down the fox with some nearby rocks but fail.\nThe angered fox attacks!";
				if(rabid) // contract rabies?
				showOutcome=true;
				showEvent = false;
			}
		}
	}
	if(GUILayout.Button("Run Away!")){
		Debug.Log("...pussy.");
		// try to run away.
		if(eventRoll>=10){
			// good result
			outcomeText = "You turn tail and run away.";
			showOutcome=true;
			showEvent = false;
		}
		else{
			// bad result
			outcomeText = "You try to run away, but aren't fast enough!";
			if(rabid) outcomeText+="\nThe fox pursues you and manages to bite your leg!";
			else outcomeText+="\nThe majestic fox strikes a victory pose";
			showOutcome=true;
			showEvent = false;
		}
	}
	
	
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}

/**** END EVENT 3 *******/

/***** START EVENT 4 ****/
// event for Dall Sheep encounter
function createEvent4(){
	GUILayout.BeginVertical();
	
	GUILayout.FlexibleSpace();
	GUILayout.Label("What will you do?");
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	
	if(GUILayout.Button("Fight")){
		Debug.Log("Fight!");
		//TODO: add outcome effect
		if(PlayerPrefs.GetInt("BulletsCount")>5){ // player has enough bullets to potentially kill the animal
		
			if(eventRoll>=50){
				// good result
				outcomeText = "You managed to gun down the innocent dall sheep!";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "You shot at the doll sheep but could not hit it.\nIt prances up the cliff and out of sight.";
				showOutcome=true;
				showEvent = false;
			}
		}
		else{ // he/she doesn't
			if(eventRoll>=50){
				// good result
				if(PlayerPrefs.GetInt("BulletsCount")==0){
					outcomeText = "You try to bring down the dall sheep with rocks\nand your dashing good looks!\nBut to no avail.";
				}
				outcomeText = "You attempt to bring down the dall sheep with limited ammo,\nbut it gets away";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "You waste hours trying to chase down the dall sheep\nand are still unable to kill it";
				showOutcome=true;
				showEvent = false;
			}
		}
	}
	if(GUILayout.Button("Run Away!")){
		Debug.Log("...pussy.");
		// try to run away.
		if(eventRoll>=20){
			// good result
			outcomeText = "You pause for a moment to admire the beautiful animal,\n then continue on your way.";
			showOutcome=true;
			showEvent = false;
		}
		else{
			// bad result
			outcomeText = "You try to flee while keeping sight of the beautiful sheep,\nand veer off the path by accident!";
			// TODO: sled damaged/loose supplies
			showOutcome=true;
			showEvent = false;
		}
	}
	
	
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}
/***** END EVENT 4 ******/

