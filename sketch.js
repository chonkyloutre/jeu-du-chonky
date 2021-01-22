// initialisation des variables
let chonky;
let meteorite;
let background;
let coeur;
let posX = 650;
let posY = 600;
let vX = 0;
let vY = 0;
let limDroite = 1410;
let limGauche = 10;



function preload() {
  // chargements des images
  background = loadImage('img/background.jpg');
  chonky = loadImage('img/chonky.png');
  coeur = loadImage('img/coeur.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // resize
  background.resize(1580, 780);
  chonky.resize(120, 100);
  coeur.resize(50, 45);

}

function draw() {

  posX += vX;
  posY += vY;

  if (posX >= limDroite) {
    vX = 0;
  }
  else if (posX <= limGauche) {
    vX = 0;
  }

  if (posY < 600) {
    vY += 0.1;
  }

  //position images 
  image(background, -2, 0);
  image(chonky, posX, posY);

}



function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    vX = -10;
  }
  if (keyCode === RIGHT_ARROW) {
    vX = 10;
  }
  if (keyCode === 32) { //32 = espace
    vY = -5;
  }
}

function keyReleased() {
  if (vX === -10) {
    vX = 0;
  } else {
    vX = 0;
  }
  return false;
}
