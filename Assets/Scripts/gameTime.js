class gameTime extends ScriptableObject{
	
	var month: String;
	var day : int;
	var year : int;
	var hours : int;
	var minutes : int;
	
	function init(newMonth:String, newDay:int, newYear:int, newHours:int, newMinutes:int){
		month = newMonth;
		day = newDay;
		year = newYear;
		hours = newHours;
		minutes = newMinutes;
	}
	
	function isLeapYear(theYear:int):boolean{
		return false;
	}
	
	// add one month
	function addMonth(){
		switch(month){
			case "January":
				month = "February";
				break;
			case "February":
				month = "March";
				break;
			case "March":
				month = "April";
				break;
			case "April":
				month = "May";
				break;
			case "May":
				month = "June";
				break;
			case "June":
				month = "July";
				break;
			case "July":
				month = "August";
				break;
			case "August":
				month = "September";
				break;
			case "September":
				month = "October";
				break;
			case "October":
				month = "November";
				break;
			case "November":
				month = "December";
				break;
			case "December":
				month = "January";
				year++;
				break;	
		}
	}
	
	function addHour(hrs:int){
		for(var i:int;i<hrs;i++){
			// make sure hours can't go over 23
			if(hours<23){
				hours++;
			}
			else{
				// rollover the hours
				// increase the days
				// but first make sure the days are good for the month
				switch(month){
					case "February":
						if(isLeapYear(year)){
							if(day<29){
								day++;
							}
							else{
								addMonth();
								day = 1;
							}
						}
						break;
					case "April":
						
					case "June":
						
					case "September":
						
					case "November":
						if(day<30){
							day++;
						}
						else{
							addMonth();
							day=1;
						}
						break;
					default:
						if(day<31){
							day++;
						}
						else{
							addMonth();
							day=1;
						}
						break;
				
				}
				
				// reset the hours
				hours = 0;
			}
		}
	}
	
	function init(date:String){
		var strarr: String[] = date.Split(" "[0]);
		var strDay : String = strarr[1].Substring(0,strarr[1].Length-3);
		var strhrmn : String[] = strarr[3].Split(":"[0]);
		init(strarr[0],int.Parse(strDay),int.Parse(strarr[2]),int.Parse(strhrmn[0
		]),int.Parse(strhrmn[1]));
	}
	
	function ToString() : String{
	// put the correct ending on the day
		var temp : String;
		switch (day)
		{
			case 1:
				temp = "st";
				break;
			case 2:
				temp = "nd";
				break;
			case 3:
				temp = "rd";
				break;
			case 21:
				temp = "st";
				break;
			case 22:
				temp = "nd";
				break;
			case 23:
				temp = "rd";
				break;
			case 31:
				temp = "st";
				break;
			default:
				temp ="th";
				break;
		}
		var strMinutes:String;
		if(minutes<10){
			strMinutes="0"+minutes.ToString();
		}
		return month+" "+day+temp+", "+year+" "+hours+":"+strMinutes;
	}

}