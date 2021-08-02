video = "";
status = "";
objects = [];

function preload()
{
    video = createCapture(380, 380);
    video.hide();
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function draw()
{
    image(video, 0, 0, 480, 380);
}

function modelLoaded() 
{
    console.log("Model Loaded!")
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}