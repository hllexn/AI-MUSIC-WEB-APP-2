harry_potter="";
music_2="";

function preload(){
    harry_potter=loadSong(music.mp3);
    music_2=loadSong(music2.mp3);

    
};
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
};
function draw(){
    image(video,0,0,600,500);
};
