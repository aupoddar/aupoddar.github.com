function setup() {
    createCanvas(800, 250);
    var myCanvas = createCanvas();
    myCanvas.parent(mySketch);
    frameRate(8);
    noStroke();
    background(random(255), random(255), random(255));
  }
  
  function draw() {
    if(mouseIsPressed) {
      fill(0);
    } else {
      fill(random(255), random(255), random(255), random(255));
    }
      var circSize = random(200);
    ellipse(mouseX, mouseY, circSize, circSize);
  }