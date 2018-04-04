var img;
var eye;
var ball;

function setup() {
  createCanvas(600,600); 
  img = loadImage("eye-01.png"); 
  eye = loadImage("1.png"); 
  ball = loadImage("2.png"); 
}

function draw() {
  background(0);
  image(img,0,0,600,600)
  image(eye,(600/2)-50,(600/2)-50,  100,80)
  
  ballposX = map(mouseX, 0,windowWidth,(600/2)-50, (600/2)-30)
  ballposY = map(mouseY, 0, windowHeight, (600/2)-75, (600/2)-30); 
  

  image(ball,ballposX,ballposY,100,80)

  
  if (mouseX > (windowWidth/2) && mouseY < (windowWidth/2)+100 && mouseY < (windowHeight/2) ) { 
    noFill(); 
    stroke(255,0,100)
    strokeWeight(2);
    rect(mouseX+random(5),mouseY+random(5),100,100)
    textSize(14);
    fill(255);
    noStroke();
    text("can you", mouseX+random(5),mouseY+random(5)-(10))
    //rect(mouseX, mouseY,10,10)
  }
  
  
  if (mouseX > (windowWidth/2)+(100) &&  mouseY < (windowHeight/2) ) { 
    noFill(); 
    stroke(255,0,100)
    strokeWeight(2);
    rect(mouseX+random(5),mouseY+random(5),60,100)
    textSize(14);
    fill(255);
    noStroke();
    text("like", mouseX+random(5),mouseY+random(5)-(10))
    //rect(mouseX, mouseY,10,10)
  }
  
  if (mouseX < (windowWidth/2) &&  mouseY < (windowHeight/2) ) { 
    noFill(); 
    stroke(0,255,100)
    strokeWeight(2);
    rect(mouseX+random(5),mouseY+random(5),50,80)
    textSize(14);
    fill(255);
    noStroke();
    text("hey", mouseX+random(5),mouseY+random(5)-(10))
    //rect(mouseX, mouseY,10,10)
  }
  
  if (mouseX > (windowWidth/2) &&  mouseY > (windowHeight/2) ) { 
    noFill(); 
    stroke(0,255,100)
    strokeWeight(2);
    rect(mouseX+random(5),mouseY+random(5),200,100)
    textSize(14);
    fill(255);
    noStroke();
    text("keep an eye", mouseX+random(5),mouseY+random(5)-(10))
    //rect(mouseX, mouseY,10,10)
  }
  
  if (mouseX < (windowWidth/2) &&  mouseY > (windowHeight/2) ) { 
    noFill(); 
    stroke(200,200,100)
    strokeWeight(2);
    rect(mouseX+random(5),mouseY+random(5),250,200)
    textSize(14);
    fill(255);
    noStroke();
    text("on my house", mouseX+random(5),mouseY+random(5)-(10))
    //rect(mouseX, mouseY,10,10)
  }



  
}