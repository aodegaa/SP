#pragma strict

var playerMoney : int = 100;
var dogCount : int = 0;
var foodCount : int = 0;
var repairKitCount : int = 0;
var workingSled : boolean = false;

function OnGUI () 
{
if (GUI.Button (Rect (10,10,200,30), "Buy Dog ($10)") && playerMoney >= 10) 
{
playerMoney -= 10;    // Take away some of the player's coins.
 dogCount += 1;            // Give item to the player scriptness goes here
}

if (GUI.Button (Rect (10,50,200,30), "Buy Food ($1)") && playerMoney >= 1) 
{
playerMoney -= 1;    // Take away some of the player's coins.
 foodCount += 1;            // Give item to the player scriptness goes here
}

if (GUI.Button (Rect (10,90,200,30), "Buy Repair Kit ($8)") && playerMoney >= 8) 
{
playerMoney -= 8;    // Take away some of the player's coins.
 foodCount += 1;            // Give item to the player scriptness goes here
}

if (GUI.Button (Rect (10,130,200,30), "Buy Sled ($50)") && playerMoney >= 50) 
{
playerMoney -= 50;    // Take away some of the player's coins.
workingSled = true;            // Give item to the player scriptness goes here
}
}