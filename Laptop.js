Status = "";
laptop_image = "";

function preload(){
    laptop_image = loadImage("https://media.istockphoto.com/vectors/set-of-blank-screens-with-laptop-tablet-phone-vector-id1245120028?k=20&m=1245120028&s=612x612&w=0&h=_yMMv_VmUElHxtLCQuiO_7hMwlh8K_UcEQlIVyaqClc=");
}

function setup(){
    canvas = createCanvas(640,400);
    canvas.position(500,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(laptop_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(laptop_image,0,0,640,400);
    if(Status != ""){

        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotresults)
        for (i=0; i <objects.length; i++){

            document.getElementById("status").innerHTML="Status: Object Detected";
            document.getElementById("number_of_objects").innerHTML="The number of objects are : "+ objects.length;
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}