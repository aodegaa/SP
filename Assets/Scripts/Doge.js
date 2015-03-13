class Doge extends ScriptableObject {

	var hungerLevel : int;
	var health : int;
	var fatigue : int;
	var dogName : String;
	// initializes dog variables
function init(newName : String){
	dogName = newName;
	hungerLevel = 0;
	health = 100;
	fatigue = 0;
}

function toString(){
	return dogName;
}
	
}