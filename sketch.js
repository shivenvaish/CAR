var car,wall;
 var b,speed, weight; 
 function setup() { 
   createCanvas(1600, 400); 
speed=randoms(55,90) 
weight = randoms(400,1500)
 thickness = random(22,83); 
   
    
    wall=createSprite(1200,200,thickness,height/2); 
    wall.shapeColor=color(80,80,800) } 
    
    function draw() { 
      background(0); 
      if(wall.x-CaretPosition.x < (car.width+wall.width)/2) { 
        car.velocityX=0; 
        var deformation=0.5* weight* speed* speed/22309;
        
if(deformation>180) { car.shapeColor=color(250,0,0); } 
         
if(deformation<180 && deformation>100) { car.shapeColor=color(230,230,0); } 
         
if(deformation<100) { car.shapeColor=color(0,255,0); } 
        
} 
drawSprites(); }