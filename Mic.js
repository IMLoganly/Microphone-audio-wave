var mic;
var amp;
var volhistory = [];

  function setup(){
    createCanvas(800,600);
    mic = new p5.AudioIn();
    mic.start();
   
    
  }

function draw(){
  background(0);
  var vol=mic.getLevel()*30;
  volhistory.push(vol);
      stroke(255);
    noFill();
    beginShape();
  for(let x=0; x< volhistory.length; x++){
     let y = map(volhistory[x], 0, 1, (height/2)+150, 0);
     vertex(x, y);
  }
  endShape();
  
  if(volhistory.length > width){
    volhistory.splice(0,1);
  }
  stroke(255,0,0);
  line(volhistory.length, 0,volhistory.length,height);

}
