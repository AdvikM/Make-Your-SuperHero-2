var canvas=new fabric.Canvas("myCanvas");
var blockHeight =30;
var blockWidth =30;
var playerX = 10;
var playerY = 10;
var playerObject = "";
var blockObject = 0;
canvas.addEventListener("keydown", kd);

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(img){
        playerObject=img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY, left:playerX
        });
        canvas.add(playerObject);
    });
}
function kd(){
    if(keyPressed == "70"){
        new_image('hulk_face.png');
        console.log("f");
    }
    if(keyPressed == "66"){
        new_image('ironman_body.png');
        console.log('b');
    }
    if(keyPressed == '76'){
        new_image('spiderman_legs.png');
        console.log('l');
    }
    if(keyPressed == '82'){
        new_image('thor_right_hand.png');
        console.log('r');
    }
    if(keyPressed == '72'){
        new_image('captain_america_left_hand.png');
        console.log('h');
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log('down');
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(e.shiftKey == true && e.keyCode==80){
        blockWidth+=10;
        blockHeight+=10;
        document.getElementById("width").textContent = blockWidth;
        document.getElementById("height").textContent = blockHeight;
    }
    if(e.shiftKey == true && e.keyCode==77){
        blockWidth-=10;
        blockHeight-=10;
        document.getElementById("width").textContent = blockWidth;
        document.getElementById("height").textContent = blockHeight;
    }
}