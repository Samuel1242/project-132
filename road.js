Status = "";
cat_image = "";

function preload(){
    cat_image = loadImage("https://media.autoexpress.co.uk/image/private/s--9bJSfk_---/f_auto,t_primary-image-mobile@1/v1563184286/autoexpress/2018/10/m11_motorway_pic.jpg");
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
