#pragma strict

class Dog extends ScriptableObject 
{
	var dogName : String;
	var health : int;
	var hunger : int;
	var fatigue : int;

	function init(newName : String)
	{
		dogName = newName;
		health = 100;
		hunger = 0;
		fatigue = 0;
	}
	
	function toString()
	{
		return dogName;
	}
	
}