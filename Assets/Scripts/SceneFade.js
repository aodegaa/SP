#pragma strict 

public var fadeOutTexture : Texture2D;
public var fadeSpeed = .25;
 
public var drawDepth = -1000;
 

 
private var alpha = 1.0; 
private var fadeDir = -1;
 
function Start()
{
	Time.timeScale = 1.0;
	alpha=1;
	fadeIn();
} 
 
function OnGUI(){
 
	alpha += fadeDir * fadeSpeed * Time.deltaTime;	
	alpha = Mathf.Clamp01(alpha);	
 
	GUI.color.a = alpha;
 
	GUI.depth = drawDepth;
 
	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeOutTexture);
}
 
function fadeIn()
{
	fadeDir = -1;	
}
 
function fadeOut()
{
	fadeDir = 1;	
}