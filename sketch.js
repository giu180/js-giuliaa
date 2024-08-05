let cor;
let PosicaoHorizontal; //x
let PosicaoVertical; //y

function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255),random(0, 255),random(0, 255));
  PosicaoHorizontal= 200;
  PosicaoVertical= 200; 
}

function draw() {
  fill(cor);
  circle(PosicaoHorizontal, PosicaoVertical, 50);
  
  if(mouseX < PosicaoHorizontal) {
    PosicaoHorizontal = PosicaoHorizontal - 1;
  }  
  if(mouseX > PosicaoHorizontal) {
    PosicaoHorizontal = PosicaoHorizontal + 1;
  }
  
  if(mouseY < PosicaoVertical) { 
  PosicaoVertical--;
  }
  
  if(mouseY > PosicaoVertical) { 
  PosicaoVertical++; 
  }
  
 if(mouseIsPressed) {
  cor = color(random(0, 255),random(0, 255),random(0, 255),random(0, 100));
  }
}
