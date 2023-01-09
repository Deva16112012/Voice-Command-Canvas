var x=0;
var y=0;
draw_circle="";
draw_rectangle="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is listening,Please speak";
    recognition.start();
}
recognition.onresult=function(re){
    console.log(re);
    a=re.results[0][0].transcript;
    document.getElementById("status").innerHTML="The Speech has been recognized as: "+a;
    if(a=="circle"||a=="Circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing circle.";
        draw_circle="set";
    }
    if(a=="rectangle"||a=="Rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing rectangle.";
        draw_rectangle="set";
    }
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*80);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn."
        draw_circle="";
    }
    if(draw_rectangle=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Rectangle is drawn."
        draw_rectangle="";
    }
}