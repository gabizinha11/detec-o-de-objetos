img = "";
objects = [];
status = "";

function preload() {
    img = loadImage("dog_cat.jpg")
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status:detectandoobjetos";
}

function modelLoaded() {
    console.log("modelo carregado");
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(error);
    objects =results;
}

function draw() {
    image(video, 0, 0, 380, 380);
    if (status != "") {
         r = random(255);
         g = random(255);
         b = random(255);
         objectDetector.detect(img, gotResult);
        for (i = 0; i.objects.length; i++) {
            document.getElementById("status").innerHTML = "status:objeto detectado";
            document.getElementById("numberOfObjects").innerHTML = "quantidade de objetos detectados: "+objects.lenght;
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(
                objects[i].label + " " + percent + "%",
                objects[i].x + 15,
                objects[i].y + 15
            );
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].rect,)
        }
    }
}