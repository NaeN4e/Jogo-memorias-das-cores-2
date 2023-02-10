var quadrado1,quadrado2,quadrado3,quadrado4,quadrado5,quadrado6,quadrado7,quadrado8,quadrado9;
var R
var G
var B


function setup() {
 createCanvas(600,600)
  quadrado1 = createSprite( 50,50,60,60 )
  

  quadrado2 = createSprite( 50,120,60,60 )


  quadrado3 = createSprite( 50,190,60,60 )
 //------
  quadrado4 = createSprite( 120,50,60,60 )
  quadrado5 = createSprite( 120,120,60,60)
  quadrado6 = createSprite( 120,190,60,60)
 //------
  quadrado7 = createSprite( 190,50,60,60 )
  quadrado8 = createSprite( 190,120,60,60 )
  quadrado9 = createSprite( 190,190,60,60 )
}
  



function draw() {
  background("black")
 
 randomColor();
 
 quadrado1.shapeColor = (rgb(R,G,B))



  drawSprites();


}

function randomColor(){
  
  R = Math.floor(random(0,256))
  console.log(R,G,B)

  G = Math.floor(random(0,256))
  
  B = Math.floor(random(0,256))
  
}

