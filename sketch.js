// initialisation des variables
let chonky;
let meteorite;
let background;
let coeur;


function preload() {
  // chargements des images
  background = loadImage('img/background.png');
  chonky = loadImage('img/chonky.png');
  coeur = loadImage('img/coeur.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // resize
  background.resize(700, 700);
  chonky.resize(120, 100);
  coeur.resize(50, 45);

  //position images 
  image(background, 400, 10);
  image(chonky, 700, 550);
  image(coeur, 900, 20);

}


