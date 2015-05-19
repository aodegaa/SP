// City class definition
class City extends ScriptableObject{
	
	// city has a name, and a unique Cityeger identifier to show which city it is
	var cityName : String;
	var id : int;
	// arrays next an previous store information on the paths out of the city in either the forward
	// or backward direction. Arrays store variables of type Path
	var next : Array;
	var previous : Array;
	
	// constructor gives it its identifier and name
	function init(identifier : int, cityName: String){
		id=identifier;
		this.cityName=cityName;
		next=new Array();
		previous=new Array();
	}
	
	function setNext(nextCity : City, distance : int){
		var newPath : Path = ScriptableObject.CreateInstance("Path") as Path;
		newPath.init(this,nextCity,distance);
		next.push(newPath);
	} 
	
	function setNext(path : Path){
		next.push(path);
	}
	
	function setPrevious(previousCity : City, distance : int){
		var newPath : Path = ScriptableObject.CreateInstance("Path") as Path;
		newPath.init(this, previousCity, distance);
		previous.push(newPath);
	}
	
	function setPrevious(path : Path){
		previous.push(path);
	}
	
	// get destinations returns destinations in the forward direction for direction=0
	// and in the backwards direction for direction=1
	function getDestinations(){
		if(PlayerPrefs.HasKey("Direction")){
			if(PlayerPrefs.GetInt("Direction")==1){
				return previous;
			}
		}
		return next;
	}

	function ToString():String
	{
		return this.cityName;
	}
}