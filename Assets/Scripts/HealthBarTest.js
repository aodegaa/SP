#pragma strict

var healthBarSlider : UI.Slider;

function Start () {
	Time.timeScale=0.02;
}

function Update () {
	
}

function FixedUpdate(){
	healthBarSlider.value--;
}
