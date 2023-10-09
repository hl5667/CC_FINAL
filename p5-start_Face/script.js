//Make Class for Eyes, Ears, face, nose, neck, and hair.

class EYES {
  constructor() {
    this.x = 300;
    this.y = 280;      
    this.w = 50;
    this.h = 50;     
    this.d = 45; // distance between eyes
  }
    //create a function that triger by mouseclick
  SizeChange() {
    this.x = 300;
    this.y = 280 + random(-20,20);            
    this.w = random(20, 80); 
    this.h = random(20,40);
    this.d = random(40,60);
    
  }

    //display the shape for the eye 
  display() {
    //Eye-white
    push();
    fill('rgb(245,245,245)');
    stroke('rgb(0,0,255)')
    ellipse(this.x-this.d, this.y, this.w, this.h); 
    ellipse(this.x+this.d, this.y, this.w, this.h);
    pop();
    
    //Pupil
    push();
    fill('rgb(0,0,255)');
    noStroke();
    
    //Make Pupil inside the eye white
    let PupilSize = this.w * 0.5 
    ellipse(this.x-this.d, this.y, PupilSize, PupilSize); 
    ellipse(this.x+this.d, this.y, PupilSize, PupilSize); 
    pop();
  }
}

class HEAD {
  constructor() {
    //head
    this.x = 200;
    this.y = 150;      
    this.w = 200;
    this.h = 300;      
    this.tc = 100;
    this.bc = 100;
    
    //Ears
    this.earw = 50;
    this.earh = 50;
    this.earx = 300;
    this.eary = 300;
    this.d = this.w / 1.75; //distance between 2 ears
    
  }
  SizeChange() {
    //head
    this.w = random(150,250);
    this.h = random(250,300);      
    this.x = 300 - this.w/2;
    this.y = 300 - this.h/2;          
    this.tc = random(35,100);
    this.bc = random(35,100);
    
    //Ears
    this.earw = random(40,70);
    this.earh = random(40,70);
    this.d = this.w / 1.75;
  }
  display() {
    //Ears
    push();
    fill('rgb(245,245,245)')
    stroke('rgb(0,0,255)')
    ellipse(this.earx-this.d, this.eary, this.earw, this.earh);
    ellipse(this.earx+this.d, this.eary, this.earw, this.earh);
    
    //Head
    rect(this.x, this.y, this.w, this.h, this.tc, this.tc, this.bc, this.bc)
    pop();
  }
}

class NOSE {
  constructor() {
    this.x = 310;
    this.y = 320;      
    this.w = 35;
    this.h = 35;      
    this.start = -120;
    this.stop = 120;   
  }

  SizeChange() {
    this.x = 310;
    this.y = random(310, 330)
    this.w = random(30, 45);
    this.h = random(30, 45);
    this.start = random(-130, -110);
    this.stop = random(130, 110);
    
  }

  display() {
    push();
    fill('rgb(245,245,245)')
    stroke('rgb(0,0,255)')
    arc(this.x, this.y, this.w, this.h, radians(this.start), radians(this.stop), OPEN);
    pop();
  }
}

class MOUTH {
  constructor() {
    this.x = 300;
    this.y = 330;      
    this.w = 130;
    this.h = 130;      
    this.start = 50;
    this.stop = 130;   
  }

  SizeChange() {
    this.x = 300;
    this.y = random(330, 350)
    this.w = random(120, 140);
    this.h = random(30, 140);
    this.start = random(50, 0);
    this.stop = random(180, 100);
    
  }

  display() {
    push();
    noFill();
    stroke('rgb(0,0,255)');
    arc(this.x, this.y, this.w, this.h, radians(this.start), radians(this.stop), OPEN);
    pop();
  }
}

class BODY {
  constructor() {
    //Shirt
    this.x = 70;
    this.y = 490;      
    this.w = 460;  
    this.h = 300;
    this.c = 120;
    
    //Neck
    this.nx = 250;
    this.ny = 250;
    this.nw = 100;
    this.nh = 300;
  }

  SizeChange() {
    //Shirt
    this.w = random(250,500);   
    this.h = random(300,400)
    this.x = 300 - this.w/2;
    this.y = 300 + this.h/2;  
    this.c = random(80,300)
    
    //Neck
    this.nw = random(80,120);   
    this.nh = 300;
    this.nx = 300 - this.nw/2;
    this.ny = random(230,270);
    
  }
  display() {
    //Shirt
    push();
    fill('rgb(0,0,255)');
    stroke('rgb(0,0,255)');
    rect(this.x, this.y, this.w, this.h, this.c);
    pop();
    
    //Neck
    push();
    fill('rgb(245,245,245)');
    stroke('rgb(0,0,255)');
    rect(this.nx, this.ny, this.nw, this.nh, 300);
    pop();
  }
}

class HAIR {
constructor() {
    this.x1 = 220;
    this.y1 = 195;      
    this.w1 = 105;
    this.h1 = 105;  
    this.x2 = 300;
    this.y2 = 195;      
    this.w2 = 105;
    this.h2 = 105; 
    this.x3 = 380;
    this.y3 = 195;      
    this.w3 = 105;
    this.h3 = 105; 
    this.x4 = 260;
    this.y4 = 140;      
    this.w4 = 120;
    this.h4 = 120; 
    this.x5 = 340;
    this.y5 = 145;      
    this.w5 = 105;
    this.h5 = 105;
  }

  SizeChange() {
    this.x1 = random(180,260);
    this.y1 = random(150,230);      
    this.w1 = random(75,150);
    this.h1 = random(75,150);  
    this.x2 = random(270,330);
    this.y2 = random(100,230);      
    this.w2 = random(75,150);
    this.h2 = random(75,150); 
    this.x3 = random(350,420);
    this.y3 = random(150,230);      
    this.w3 = random(75,150);
    this.h3 = random(75,150); 
    this.x4 = random(210,300)
    this.y4 = random(100,200)     
    this.w4 = random(100,250);
    this.h4 = random(100,250);
    this.x5 = random(310,390)
    this.y5 = random(100,230)     
    this.w5 = random(75,150); 
    this.h5 = random(100,250); 

    
  }

  display() {
    push();
    fill('rgb(0,0,255)');
    stroke('rgb(0,0,255)');
    ellipse(this.x1, this.y1, this.w1, this.h1);
    ellipse(this.x2, this.y2, this.w2, this.h2);
    ellipse(this.x3, this.y3, this.w3, this.h3);
    ellipse(this.x4, this.y4, this.w4, this.h4);
    ellipse(this.x5, this.y5, this.w5, this.h5);
    ellipse(300,150,200,100);
    pop();
  }

}

class PATTERN {
  constructor(cSize, cSpacing) {
    this.cSize = cSize;
    this.cSpacing = cSpacing;
  }
  
  display() {
    for (let x = 25; x < width-20; x += this.cSpacing) {
    for (let y = 25; y < height-20; y += this.cSpacing) {
      push();
      noStroke();
      fill('rgb(0,0,255)');
      circle(x, y, this.cSize);
      pop()
     }
    }
  }
}

function setup() {
  createCanvas(600, 600);
  Eyes = new EYES();
  Head = new HEAD();
  Nose = new NOSE();
  Mouth = new MOUTH();
  Body = new BODY();
  Hair = new HAIR();
  Pattern = new PATTERN(2.5,10);
}

let Eyes;
let Head;
let Nose;
let Mouth;
let Body;
let Hair;
let Pattern;

function draw() {
  background('rgb(245,245,245)');
  Pattern.display();   
  
  push();
  strokeWeight(3)
  Body.display();    
  Head.display();
  Eyes.display();
  Nose.display();
  Mouth.display();
  Hair.display();
  pop();
  
  //Frame
  push(); 
  noFill()
  stroke('rgb(0,0,255)')
  strokeWeight(20)
  rect(10,10,580,580);
  pop();
}

function mouseClicked() {
  Eyes.SizeChange();
  Head.SizeChange();
  Nose.SizeChange();
  Mouth.SizeChange();
  Body.SizeChange();
  Hair.SizeChange();
}