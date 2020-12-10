filters = document.getElementById("filter_cicle").value;
circle_radius = Number(document.getElementById("radius").value);
circle_color = document.getElementById("color_cicle").value;
rect_color = document.getElementById("rect_color").value;
function preload(){

}
function setup(){
    canvas = createCanvas(500,500);
    canvas.position(400,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,500);
    tint(filters);

    fill(rect_color);
    rect(0,0,500,20);
    rect(480,0,20,500);
    rect(0,0,20,500);
    rect(0,480,500,20);
    
    fill(circle_color);
    circle(30,25,circle_radius);
    circle(250,25,circle_radius);
    circle(470,25,circle_radius);

    circle(30,475,circle_radius);
    circle(250,475,circle_radius);
    circle(470,475,circle_radius);

    circle(30,225,circle_radius);
    circle(470,225,circle_radius);
}
function apply(){
    filters = document.getElementById("filter_cicle").value;
    circle_radius = Number(document.getElementById("radius").value);
    circle_color = document.getElementById("color_cicle").value;
    rect_color = document.getElementById("rect_color").value;
}
function reset(){
    filters = "#ffffff";
    circle_radius = 70;
    circle_color = "#0000FF";
    rect_color = "#00FFFF";
}
function safe(){
    save('photo.png');
}