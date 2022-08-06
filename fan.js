Status = "";
fan_image = "";

function preload(){
    fan_image = loadImage("https://media.4rgos.it/s/Argos/4569846_R_SET?$Main768$&w=620&h=620");
}

function setup(){
    canvas = createCanvas(640,450);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(fan_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(fan_image,0,0,640,450);

    if(Status != ""){
        for (i=0; i <objects.length; i++){
            document.getElementById("status").innerHTML="Status: Object Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }




}