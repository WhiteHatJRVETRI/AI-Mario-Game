noseX=0
noseY=0
function preload() {
	world_start = loadSound("world_start.wav");
	kick = loadSound("kick.wav");
	coin = loadSound("coin.wav");
	jump = loadSound("jump.wav");
	mariodie = loadSound("mariodie.wav");
	gameover = loadSound("gameover.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
canvas.parent('canvas')
video=createCapture(VIDEO)
video.size(800,400)
posenet=ml5.poseNet(video,modelloaded)
	posenet.on('pose',gotposes)
}

function draw() {
	game()
}

function modelloaded(){
	console.log("modelloaded")
}
function gotposes(results){
	if (results.length>0) {

		console.log(results)
		noseX=results[0].pose.nose.x
		noseY=results[0].pose.nose.y
	}
}



