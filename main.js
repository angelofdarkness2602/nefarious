difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftWristX = " + leftwristX + "rightWristX =" + rightwristX + "difference" + difference)
    }
}

function draw() {
    background("grey");
    document.getElementById("square_side").innerHTML = "font size will be" + difference + "px";
    fill("pink");
    stroke("pink");
    text("I'ma kill ya", 50, 400);
    textSize(difference);
}