function setup() {
  createCanvas(400,400)
  frameRate(4)
}

function draw() {
 
 for(var x=-100; x<400; x+=40){
  for(var y=-100; y<400; y+=40){
 
 var r = random() *255
 var g = random() *255
 var b = random() *255
 
 fill(r,g,b)
 
 beginShape()
 
 vertex(x+40,y)
 vertex(x,y+30)
 vertex(x+40,y+60)
 vertex(x+80,y+60)
 vertex(x+50,y+30)
 vertex(x+80,y)
 vertex(x+40,y)
 
 endShape()}}
  
}