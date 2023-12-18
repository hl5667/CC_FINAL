let Name = window.prompt ("What's your name?")
let Year = window.prompt ("Which year did you born? From 1949-2049")
let Month = window.prompt ("Which month did you born in? Type in Number")
let Day = window.prompt ("and which day?")
// let Name = "Pikachu"
// let Year = 1998
// let Month = 10
// let Day = 15

let len
let angle
let color = ['#EAE5D9','#EAE5D9','#F27F20','#0C218E','#091311','#091311','#C9322F']
let showSignature = true

function preload(){
  myFont1 = loadFont('CourierPrime-Regular.ttf')
}
function setup() {
  // console.log(Name)
  // console.log(Year)
  // console.log(Month)
  // console.log(Day)
  // noLoop();


  let canvas = createCanvas(600, 800)
  canvas.parent('canvas-container')

  rectMode(CENTER);
  angleMode(DEGREES);
  frameRate(0.5);

  len = map(Year, 1949, 2049, 500, 900);
  angle = map(Day, 1, 31, 80, 120);

}

function draw(){
  background(random(color));
  
  let rnd = random(1,10)

  push();
  stroke(random(color))
  displayShape(width/2+len/2,height/2-len/2,5);
  pop();

  push();
  stroke(random(color))
  displayShape(width/2+len/2-rnd,height/2-len/2+rnd,5);
  pop();

  push();
  stroke(random(color))
  displayShape(width/2+len/2+rnd,height/2-len/2-rnd,5);
  pop();

  push();
  stroke(random(color))
  displayShape(width/2+len/2+rnd,height/2-len/2-rnd,5);
  pop();

  push();
  stroke(random(color))
  displayShape(width/2+len/2+rnd,height/2-len/2-rnd,5);
  pop();

  push();
  stroke(random(color))
  displayShape(width/2+len/2+rnd,height/2-len/2-rnd,5);
  pop();

  push();
  stroke(random(color))
  displayShape(width/2+len/2-rnd,height/2-len/2+rnd,5);
  pop();

  push();
  stroke(random(color))
  displayShape(width/2+len/2-rnd,height/2-len/2+rnd,5);
  pop();

  push();
  stroke(random(color))
  displayShape(width/2+len/2-rnd,height/2-len/2-rnd,5);
  pop();

  push();
  stroke(random(color))
  displayShape(width/2+len/2+rnd,height/2-len/2+rnd,5);
  pop();

  push();
  stroke(random(color))
  displayShape(width/2+len/2+rnd,height/2-len/2-rnd,5);
  pop();

  addGrain();
  signName();

}

function setLineDash(list,lineWidth) {
  drawingContext.lineWidth = lineWidth;
  drawingContext.lineCap = "square";
  drawingContext.setLineDash(list);
}

function displayShape(x,y,n) {
  translate(x,y)
  rotate(angle)
  noFill();
  let DateN = ~~random(1,6)
  if(DateN == 1) {
    for(let i=0; i<200; i++){
    setLineDash([15,20],15);
    line(0, 0+i, len, 0+i);
    }
  }
  else if(DateN == 2) {
    for(let i=0; i<100; i++){  
    setLineDash([9,13],9);
    arc(len/2, 0, len-i, len-i, 180, 0);
    }
  }
  else if(DateN == 3) {
    for(let i=0; i<50; i++){
    setLineDash([6,30],6);
    arc(len/2, 0, len-i, len-i, 0, 180);
    }
  }
  else if(DateN == 4) {
    setLineDash([3,5],3);
    rect(len/2, 0, len, random(len));
  }
  else {
    for(let i=0; i<50; i++){
    setLineDash([6,20],3);{
    line(0,0+i,len/2,len/2+i);
    line(len/2,len/2+i,len,0+i);
      }
    }
  }
  
  if( n > 0, n--) {
    displayShape(len,0,n)
  }
}

function addGrain() {
  let grainDensity = 1;
  for (let i = 0; i < width; i += grainDensity) {
    for (let j = 0; j < height; j += grainDensity) {
      fill(random(255), 20);
      noStroke();
      rect(i, j, grainDensity, grainDensity);
    }
  }
}

function keyTyped() {
	if (key === "s" || key === "S") {
		saveCanvas(Name +"  "+ Year + "/"+ Month +"/" + Day, "png");
	}
}

function signName() {
  if (showSignature) {
    fill('818284'); 
    textFont(myFont1, 20);
    textAlign(RIGHT, BOTTOM);
    text("Your Name  " + year() + "/" + month() + "/" + day(), width - 40, height - 40);
  }
}

function keyPressed() {
  if (key === "t" || key === "T") {
    toggleSignature();
  }
}

function toggleSignature() {
  showSignature = !showSignature;
}
