

class Path extends ScriptableObject{
	
	// var to label the path as impassible
	var isClosed : boolean;
	
	var startCity : City;
	var endCity : City;
	// distance is in miles
	var distance : int;
	
	function init(city1:City, city2:City, miles:int){
		startCity=city1;
		endCity=city2;
		distance=miles;
	}
	
	function getDestinationString():String{
		return endCity.ToString();
	}
	
	function getDistance() : int{
		return distance;
	}
	

}