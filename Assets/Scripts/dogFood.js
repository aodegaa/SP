#pragma strict

private var x: float;
private var y: float;
var foodRigidBody2D : Rigidbody2D;
var food : Transform;
var dogBowl1 : BoxCollider2D;

function Start () {
	foodRigidBody2D = food.GetComponent(Rigidbody2D);
}


 
 // Update is called once per frame
function Update(){
 	 	x = Input.mousePosition.x;
     	y = Input.mousePosition.y;

 }
function OnMouseDrag(){
     transform.position = Camera.main.ScreenToWorldPoint(new Vector3(x,y,10));
}

function OnCollisionEnter2D(coll: Collision2D) {
	Debug.Log("Collision!");
}