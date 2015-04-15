#pragma strict

class Map extends ScriptableObject{

// some class variables. need an integer to hold information on the current town:
var currentCity : int;
var nextCity : int;

// city initialization
private var town1: City = ScriptableObject.CreateInstance("City") as City;
private var town2: City = ScriptableObject.CreateInstance("City") as City;
private var town3: City = ScriptableObject.CreateInstance("City") as City;
private var town4: City = ScriptableObject.CreateInstance("City") as City;
private var town5: City = ScriptableObject.CreateInstance("City") as City;
private var town6: City = ScriptableObject.CreateInstance("City") as City;
private var town7: City = ScriptableObject.CreateInstance("City") as City;
private var town8: City = ScriptableObject.CreateInstance("City") as City;
private var town9: City = ScriptableObject.CreateInstance("City") as City;
private var town10: City = ScriptableObject.CreateInstance("City") as City;
private var town11: City = ScriptableObject.CreateInstance("City") as City;
private var town12: City = ScriptableObject.CreateInstance("City") as City;
private var town13: City = ScriptableObject.CreateInstance("City") as City;
private var town14: City = ScriptableObject.CreateInstance("City") as City;
private var town15: City = ScriptableObject.CreateInstance("City") as City;
private var town16: City = ScriptableObject.CreateInstance("City") as City;
private var town17: City = ScriptableObject.CreateInstance("City") as City;
private var town18: City = ScriptableObject.CreateInstance("City") as City;
private var town19: City = ScriptableObject.CreateInstance("City") as City;
private var town20: City = ScriptableObject.CreateInstance("City") as City;
private var town21: City = ScriptableObject.CreateInstance("City") as City;
private var town22: City = ScriptableObject.CreateInstance("City") as City;


// takes in the current town as an integer so we can set the player's
// location at any time
function init(currentLocation : int){
// set the current location. this will be used to track the player
currentCity=currentLocation;
// set the names for each town. this will have to change when we have real names
// see map for number references
	town1.init(1, "town 1");
	town2.init(2, "Undead Burg");
	town3.init(3, "town 3");
	town4.init(4, "town 4");
	town5.init(5, "town 5");
	town6.init(6, "town 6");
	town7.init(7, "town 7");
	town8.init(8, "town 8");
	town9.init(9, "town 9");
	town10.init(10, "town 10");
	town11.init(11, "town 11");
	town12.init(12, "town 12");
	town13.init(13, "town 13");
	town14.init(14, "town 14");
	town15.init(15, "town 15");
	town16.init(16, "town 16");
	town17.init(17, "town 17");
	town18.init(18, "town 18");
	town19.init(19, "town 19");
	town20.init(20, "town 20");
	town21.init(21, "town 21");
	town22.init(22, "town 22");
	
	// link all the towns together. the distances will need to be changes, but the links are correct
	// relative distances between towns are based on the map. actually distance = relative distance * scale
	var mapScale: float = 1.0;
	
	town1.setNext(town2, mapScale*100);
	town1.setNext(town11, mapScale*150);
	town1.setNext(town15, mapScale*120);
	
	town2.setNext(town3, mapScale*100);
	town2.setPrevious(town1, mapScale*100);
	
	town3.setNext(town4, mapScale*80);
	town3.setNext(town12, mapScale*150);
	town3.setPrevious(town2,mapScale*100);
	
	town4.setNext(town5,mapScale*110);
	town4.setPrevious(town3, mapScale*80);
	
	town5.setNext(town6, mapScale*100);
	town5.setPrevious(town12,mapScale*140);
	
	town6.setNext(town7, mapScale*50);
	town6.setNext(town8,mapScale*110);
	town6.setPrevious(town5,mapScale*100);
	
	// dont want to get stuck in town 7.
	town7.setNext(town6,mapScale*50);
	town7.setPrevious(town6,mapScale*50);
	
	town8.setNext(town9,mapScale*100);
	town8.setPrevious(town6,mapScale*110);
	
	town9.setNext(town10,mapScale*110);
	town9.setPrevious(town8,mapScale*100);
	
	town10.setNext(town22,mapScale*120);
	town10.setPrevious(town9,mapScale*110);
	
	town11.setNext(town12,mapScale*90);
	town11.setPrevious(town1,mapScale*150);
	
	town12.setNext(town5,mapScale*140);
	town12.setNext(town13,mapScale*110);
	town12.setPrevious(town3,mapScale*150);
	town12.setPrevious(town11,mapScale*90);
	town12.setPrevious(town16,mapScale*100);
	
	town13.setNext(town14,mapScale*110);
	town13.setNext(town18,mapScale*110);
	town13.setPrevious(town12,mapScale*110);
	
	town14.setNext(town22,mapScale*170);
	town14.setPrevious(town13,mapScale*110);
	
	town15.setNext(town16,mapScale*90);
	town15.setPrevious(town1, mapScale*120);
	
	town16.setNext(town12,mapScale*100);
	town16.setNext(town17,mapScale*100);
	town16.setPrevious(town15,mapScale*90);
	
	town17.setNext(town18,mapScale*80);
	town17.setPrevious(town16,mapScale*100);
	
	town18.setNext(town19,mapScale*100);
	town18.setPrevious(town13,mapScale*110);
	town18.setPrevious(town17,mapScale*80);
	
	town19.setNext(town20,mapScale*110);
	town19.setPrevious(town18, mapScale*100);
	
	town20.setNext(town21,mapScale*110);
	town20.setPrevious(town19,mapScale*110);
	
	town21.setNext(town22,mapScale*130);
	town21.setPrevious(town21,mapScale*110);
	
	town22.setPrevious(town10,mapScale*120);
	town22.setPrevious(town14,mapScale*170);
	town22.setPrevious(town21,mapScale*130);
}
// end init

function getCityByID(id:int):City{
var tempCity: City = ScriptableObject.CreateInstance("City") as City;
	switch(id){
		case 1:
			tempCity = town1;
			break;
		case 2:
			tempCity = town2;
			break;
		case 3:
			tempCity = town3;
			break;
		case 4:
			tempCity = town4;
			break;
		case 5:
			tempCity = town5;
			break;
		case 6:
			tempCity = town6;
			break;
		case 7:
			tempCity = town7;
			break;
		case 8:
			tempCity = town8;
			break;
		case 9:
			tempCity = town9;
			break;
		case 10:
			tempCity = town10;
			break;
		case 11:
			tempCity = town11;
			break;
		case 12:
			tempCity = town12;
			break;
		case 13:
			tempCity = town13;
			break;
		case 14:
			tempCity = town14;
			break;
		case 15:
			tempCity = town15;
			break;
		case 16:
			tempCity = town16;
			break;
		case 17:
			tempCity = town17;
			break;
		case 18:
			tempCity = town18;
			break;
		case 19:
			tempCity = town19;
			break;
		case 20:
			tempCity = town20;
			break;
		case 21:
			tempCity = town21;
			break;
		case 22:
			tempCity = town22;
			break;

		default:
			tempCity = town1;
			break;
	}
	return tempCity;
}

function setCurrentCity(location : int){
	currentCity=location;
}

function setNextCity(location :int){
	nextCity = location;
}

function getCurrentCity(){
	return getCityByID(currentCity).ToString();
}


function getNextCity(){
	return getCityByID(nextCity).ToString();
}


// this function should be called every time the player leaves the city
// it will return the potential destinations they can choose 
function leaveCity(direction : int){
	return getCityByID(currentCity).getDestinations(direction);
}

}
