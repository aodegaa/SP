#pragma strict

var map : GameObject;

function Start () {
	// find the map in the scene
	map = GameObject.Find("Map");
	map.SetActive(false); // temporarily disable the map
}

function Update () {

}