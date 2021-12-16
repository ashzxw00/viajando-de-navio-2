var navio, ;
var sea, sea1;

function preload(){
  navio1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  sea1 = loadAnimation("sea.png") 
}

function setup(){
  createCanvas(400,400);


// criando o oceano
mar = createSprite(400,200)
mar.addAnimation("mar", sea1)  
mar.scale = 0.5;
 

 // criando o navio
navio = createSprite(130,200,30,30)
navio.addAnimation("navio", navio1)
edges = createEdgeSprite();

// adicionando escala e posição para enviar
navio.scale = 0.25;
}


function draw() {
  background("blue"); 
  mar.velocityX = -1 ;
    drawSprites();


 
}
