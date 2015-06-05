#pragma strict

private var speed: float = 2.0;
private var scenePosition : float = 0.0;
var success : boolean;
static var collision : boolean;

function Start () {

}

function Update () 
{
	if(!AvalancheScript.instructions){
		Time.timeScale = 1.0;
		if(!collision){
			if(scenePosition<115){
				scenePosition+=3*Time.deltaTime;
			}
			else{
				success = true;
			}
			if(Input.GetButton("Up")){
				transform.Translate(Vector3(0,speed,0) * Time.deltaTime);
			} 
			// move down on down arrow key
			if(Input.GetButton("Down")){
				transform.Translate(Vector3(0,speed*-1,0) * Time.deltaTime);
			} 
			if(Input.GetButton("Right")){
				transform.Translate(Vector3(speed*1,0,0) * Time.deltaTime);
			} 
			if(Input.GetButton("Left")){
				transform.Translate(Vector3(speed*-1,0,0) * Time.deltaTime);
			} 
			// not moving left or right, so make sure the sled moves the correct amount left or right on its own
			if(!(Input.GetButton("Left")) || (Input.GetButton("Right"))){
				transform.position.x += 3*Time.deltaTime;
			}
			if(transform.position.y > 4.6){
				transform.position.y = 4.6;
			}
			if (transform.position.y<-4.7){
				transform.position.y = -4.7;
			}
			if(transform.position.x>scenePosition+5){
				transform.position.x = scenePosition+5;
			}
			if(transform.position.x<scenePosition-2){
				transform.position.x = scenePosition-2;
			}
		}
	}
}

// check for collision
function OnCollisionEnter2D(coll: Collision2D) {
	collision = true;
}