#pragma strict

private var x: float;
private var y: float;

private var cip : boolean = false;

private var startx : float;
private var starty : float;

// declaration of all food images
private var smallfood1: GameObject;
private var mediumfood1: GameObject;
private var largefood1: GameObject;

private var smallfood2: GameObject;
private var mediumfood2: GameObject;
private var largefood2: GameObject;

private var smallfood3: GameObject;
private var mediumfood3: GameObject;
private var largefood3: GameObject;

private var smallfood4: GameObject;
private var mediumfood4: GameObject;
private var largefood4: GameObject;

private var smallfood5: GameObject;
private var mediumfood5: GameObject;
private var largefood5: GameObject;

private var smallfood6: GameObject;
private var mediumfood6: GameObject;
private var largefood6: GameObject;

private var smallfood7: GameObject;
private var mediumfood7: GameObject;
private var largefood7: GameObject;

private var smallfood8: GameObject;
private var mediumfood8: GameObject;
private var largefood8: GameObject;

function Start () {
	Time.timeScale=1; // this bug is still around somewhere. need to reset the time scale for script to function.
	
	// record the starting position of the food image so we can snap it back on collisions
	startx=transform.position.x;
	starty=transform.position.y;
	
	// initialize all the food images
	smallfood1=GameObject.Find("bowl1 small");
	mediumfood1=GameObject.Find("bowl1 medium");
	largefood1=GameObject.Find("bowl1 large");
	mediumfood1.active=false;
	largefood1.active=false;
	
}


// get the cursor location each frame
function Update(){
 	 	x = Input.mousePosition.x;
     	y = Input.mousePosition.y;
     	
     	// check for mouse button being released to reset collision check
     	if(Input.GetMouseButtonUp(0)){
     		cip=false;
     	}
 }
 
 // lets you drag the object the script is attached to
function OnMouseDrag(){
	// check for collision in progress. 
	// if collision is in progress don't move the food.
	if(!cip){
     transform.position = Camera.main.ScreenToWorldPoint(new Vector3(x,y,10));
    }
}

function OnCollisionEnter2D(coll: Collision2D) {
	// make the previous object inactive, make the new one active.
	cip=true;
	
	Debug.Log("Collision with "+coll.gameObject.name);
	switch(coll.gameObject.name){
		case "bowl1 medium" :
			mediumfood1.active=false;
			largefood1.active=true;
		break;
		
		case "bowl1 small" :
			smallfood1.active=false;
			mediumfood1.active=true;
		break;
	
	}
	// reset the position of the dog food so we don't get multiple collisions and wait 2 seconds for same reason.
	transform.position.x=startx;
	transform.position.y=starty;
	
}