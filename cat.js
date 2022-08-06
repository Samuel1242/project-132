Status = "";
cat_image = "";

function preload(){
    cat_image = loadImage("https://d.newsweek.com/en/full/1809693/cat-dog.jpg?w=1600&h=900&q=88&f=772f894f001bafc6c5094cc33d71bc19");
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
    object_Detector.detect(cat_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(cat_image,0,0,640,400);

}
