#pragma strict

var distanceTravelled : int;

function Update()
{
	Warp();
}

function Warp()
{
	if(Input.GetButton("Up"))
	{
		transform.position = Vector3(1, 1, -1);
	}
	
	if(Input.GetButton("Down"))
	{
		transform.position = Vector3(-1, 1, -1);
	}
}