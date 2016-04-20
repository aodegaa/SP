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

/***** START EVENT 5 ****/
// event for hare encounter
function createEvent5(){
	GUILayout.BeginVertical();
	
	GUILayout.FlexibleSpace();
	GUILayout.Label("What will you do?");
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	
	if(GUILayout.Button("Fight")){
		Debug.Log("Fight!");
		//TODO: add outcome effect
		if(PlayerPrefs.GetInt("BulletsCount")>=1){ // player has enough bullets to potentially kill the animal
		
			if(eventRoll>=99){
				// good result
				outcomeText = "Fast as the rabbit is, you managed to shoot it!!";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "You shot at the hare but it was far too fast.\nIt quickly runs back into the dense shrubs.";
				showOutcome=true;
				showEvent = false;
			}
		}
		else{ // he/she doesn't
			if(eventRoll>=0){
				// good result
				outcomeText = "You try to kill the rabbit with some nearby stones,\nbut it quickly dodges away!";
				showOutcome=true;
				showEvent = false;
			}/*
			else{
				// bad result
				outcomeText = "You waste hours trying to chase down the dall sheep\nand are still unable to kill it";
				showOutcome=true;
				showEvent = false;
			}
			*/
		}
	}
	if(GUILayout.Button("Run Away!")){
		Debug.Log("...pussy.");
		// try to run away.
		if(eventRoll>=20){
			// good result
			outcomeText = "You managed to escape from the ferocious hare!\nYour heart is racing.";
			showOutcome=true;
			showEvent = false;
		}
		else{
			// bad result
			outcomeText = "You try to go the other way but your dogs attempt to follow the rabbit!";
			// TODO: sled damaged/loose supplies
			showOutcome=true;
			showEvent = false;
		}
	}
	
	
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}
/***** END EVENT 5 ******/

/***** START EVENT 6 ****/
// event for ptarmigan counter
function createEvent6(){
	GUILayout.BeginVertical();
	
	GUILayout.FlexibleSpace();
	GUILayout.Label("What will you do?");
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	
	if(GUILayout.Button("Fight")){
		Debug.Log("Fight!");
		//TODO: add outcome effect
		if(PlayerPrefs.GetInt("BulletsCount")>=1){ // player has enough bullets to potentially kill the animal
		
			if(eventRoll>=20){
				// good result
				outcomeText = "You shoot the ptarmigan out of the tree with a single shot!";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "You shoot at the ptarmigan but can not hit it.\nIt flies away startled.";
				showOutcome=true;
				showEvent = false;
			}
		}
		else{ // he/she doesn't
			if(eventRoll>=80){
				// good result
				outcomeText = "You manage to hit the ptarmigan with a rather large stone!\nIt drops out of the tree dead.";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "As you are about to throw a stone at the ptarmigan your dogs bark,\nsppoking the ptarmigan! It flies away.";
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
			outcomeText = "You turn tail and flee as the vicious ptarmigan stares you down menacingly!";
			showOutcome=true;
			showEvent = false;
		}
		else{
			// bad result
			outcomeText = "You try to run... but your dogs give chase!\nThey run you through the thick woods, damaging the sled.";
			// TODO: sled damaged/loose supplies
			showOutcome=true;
			showEvent = false;
		}
	}
	
	
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}
/***** END EVENT 6 ******/

/***** START EVENT 7 ****/
// event for stray cat encounter
function createEvent7(){
	GUILayout.BeginVertical();
	
	GUILayout.FlexibleSpace();
	GUILayout.Label("What will you do?");
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	
	if(GUILayout.Button("Fight")){
		Debug.Log("Fight!");
		//TODO: add outcome effect
		if(PlayerPrefs.GetInt("BulletsCount")>=1){ // player has enough bullets to potentially kill the animal
		
			if(eventRoll>=20){
				// good result
				outcomeText = "You manage to shoot the stray cat. You monster!";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "The nimble house cat evades your bullet fire and flees into the woods!";
				showOutcome=true;
				showEvent = false;
			}
		}
		else{ // he/she doesn't
			if(eventRoll>=90){
				// good result
				outcomeText = "You attempt to sneak up on the cat to take it down.\nBut it sees you coming and flees!";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "The crazed house cat attacks one of your dogs!\nYou chase the cat away but your dog is injured";
				showOutcome=true;
				showEvent = false;
			}
			
		}
	}
	if(GUILayout.Button("Run Away!")){
		Debug.Log("...pussy.");
		// try to run away.
		if(eventRoll>=5){
			// good result
			outcomeText = "You leave the cat to be and continue on your way.";
			showOutcome=true;
			showEvent = false;
		}
		else{
			// bad result
			outcomeText = "Your dogs refuse to leave. They pursue the cat to no avail\nbut run the sled through thick shrubs, damaging the runners!";
			// TODO: sled damaged/loose supplies
			showOutcome=true;
			showEvent = false;
		}
	}
	
	
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}
/***** END EVENT 7 ******/

/***** START EVENT 8 ****/
// event for reindeer encounter
function createEvent8(){
	GUILayout.BeginVertical();
	
	GUILayout.FlexibleSpace();
	GUILayout.Label("What will you do?");
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	
	if(GUILayout.Button("Fight")){
		Debug.Log("Fight!");
		//TODO: add outcome effect
		if(PlayerPrefs.GetInt("BulletsCount")>=5){ // player has enough bullets to potentially kill the animal
		
			if(eventRoll>=20){
				// good result
				outcomeText = "You bring the reindeer down without sustaining any injuries!";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "You hit the reindeer, but it's just a flesh wound.\nYou lose precious time tracking it but can not find it!";
				showOutcome=true;
				showEvent = false;
			}
		}
		else{ // he/she doesn't
			if(eventRoll>=50){
				// good result
				outcomeText = "With limited ammo, you fail to kill the reindeer.\nIt flees into the woods!";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "With limited ammo, you simply anger the reindeer.\nIt charges, damaging your sled and injuring your dogs before running away!";
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
			outcomeText = "You leave the reindeer alone and continue on the path.";
			showOutcome=true;
			showEvent = false;
		}
		else{
			// bad result
			outcomeText = "You turn to leave the reindeer alone, but he charges at you!";
			// TODO: sled damaged/loose supplies/ and/or dogs/player injured.
			showOutcome=true;
			showEvent = false;
		}
	}
	
	
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}
/***** END EVENT 8 ******/

/***** START EVENT 9 ****/
// event for squirrel encounter
function createEvent9(){
	GUILayout.BeginVertical();
	
	GUILayout.FlexibleSpace();
	GUILayout.Label("What will you do?");
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	
	if(GUILayout.Button("Fight")){
		Debug.Log("Fight!");
		//TODO: add outcome effect
		if(PlayerPrefs.GetInt("BulletsCount")>=1){ // player has enough bullets to potentially kill the animal
		
			if(eventRoll>=20){
				// good result
				outcomeText = "Although the squirrel is quite nimble you manage to shoot it!";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				var temp : int = PlayerPrefs.GetInt("BulletsCount");
				if(temp>5){
					outcomeText = "Your fire 5 bullets but are unable to shoot the squirrel!";
					PlayerPrefs.SetInt("BulletsCount", temp-5);
				}
				else{
					outcomeText = "You fire "+temp+" bullets but are unable to shoot the squirrel!";
					PlayerPrefs.SetInt("BulletsCount", 0);
				}
				showOutcome=true;
				showEvent = false;
			}
		}
		else{ // he/she doesn't
			if(eventRoll>=80){
				// good result
				outcomeText = "You manage to kill the squirrel without any ammo!";
				showOutcome=true;
				showEvent = false;
			}
			else{
				// bad result
				outcomeText = "You fail to kill the squirrel! Your dogs seem disappointed in you...";
				showOutcome=true;
				showEvent = false;
			}
			
		}
	}
	if(GUILayout.Button("Run Away!")){
		Debug.Log("...pussy.");
		// try to run away.
		if(eventRoll>=5){
			// good result
			outcomeText = "You fle in terror at the sight of the scary squirrel!";
			showOutcome=true;
			showEvent = false;
		}
		else{
			// bad result
			outcomeText = "Your dogs are so ashamed at running from a squirrel they slow their pace to match their mood.";
			// TODO: pace slows
			showOutcome=true;
			showEvent = false;
		}
	}
	
	
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}
/***** END EVENT 9 ******/

/***** START EVENT 10 ***/
// other dog team encounter
//TODO: code in or scrap event 10
/***** END EVENT 10 ****/

/**** START EVENT 11 ***/
// robbers attack/steal from you
function createEvent11(){
	GUILayout.BeginVertical();
	GUILayout.FlexibleSpace();
	if(eventRoll>=90){
		// really good
		GUILayout.Label("Your team intimidates the robbers and they decide to leave you be!");

	}
	else if(eventRoll>=30 && eventRoll <90){
		// not bad
		GUILayout.Label("The robbers attack and make off with some of your supplies!");
		//TODO: lose supplies

	}
	else{
		// bad
		GUILayout.Label("The robbers attack you and your team, injuring you and your dogs!\nThey leave you bleeding and take off with some of your supplies");
		//TODO: player/dog(s) injured and supplies lost.

	}
	GUILayout.FlexibleSpace();
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("OK")){
		showOutcome=false;
		showEvent=false;
	}
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}	

/**** START EVENT 12 ***/
// trader joe encounter
function createEvent12(){
	GUILayout.BeginVertical();
	GUILayout.Label("Not yet implemented");
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	// TODO: add in trading capabilities with trader joe.
	if(GUILayout.Button("OK")){
		showOutcome=false;
		showEvent=false;
	}
	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}	
/**** END EVENT 12 ****/

/**** START EVENT 13 ***/
// Heavy fog rolls in
function createEvent13(){
	GUILayout.BeginVertical();
	GUILayout.Label("What will you do?");
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	if(GUILayout.Button("Wait it out")){
		//TODO: time passes, weather effect leaves
		outcomeText = "You hunker down and wait out the weather.";
		showOutcome=true;
		showEvent=false;
	}
	if(GUILayout.Button("Try to mush on")){
		if(eventRoll>=30){
			// good outcome
			outcomeText = "You try to continue forward. Your pace is slower but the going seems to be ok";
			showOutcome=true;
			showEvent=false;
			//TODO: add in weather effect.
		}
		else{
			// bad outcome
			outcomeText = "You try to continue forward, but lose your direction in the fog!";
			showOutcome=true;
			showEvent=false;
			//TODO: player is further away from the next village than when they started.
		}
	}

	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}	
/**** END EVENT 13 ****/

/**** START EVENT 14 ***/
// Intense sunlight
function createEvent14(){
	GUILayout.BeginVertical();
	GUILayout.Label("What will you do?");
	GUILayout.BeginHorizontal();
	GUILayout.FlexibleSpace();
	if(GUILayout.Button("Wait it out")){
		//TODO: time passes, weather effect leaves
		outcomeText = "You set up a temporary camp in the shade and wait it out.";
		showOutcome=true;
		showEvent=false;
	}
	if(GUILayout.Button("Try to mush on")){
		if(eventRoll>=30){
			// good outcome
			outcomeText = "You try to continue forward. Your pace is slower but the going seems to be ok";
			showOutcome=true;
			showEvent=false;
			//TODO: add in weather effect.
		}
		else{
			// bad outcome
			outcomeText = "You try to continue forward, but are blinded by the light!\nYou accidentally veer off the trail, damaging your sled.";
			showOutcome=true;
			showEvent=false;
			//TODO: 
		}
	}

	GUILayout.FlexibleSpace();
	GUILayout.EndHorizontal();
	GUILayout.EndVertical();
}	
/**** END EVENT 13 ****/