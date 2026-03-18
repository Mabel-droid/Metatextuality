let cslide = "a";
let hasButton = false;
let buttons = [],
  slides = [];
let bount = 4;
let speaker;
let tc;
let bg;
let quote;
let sprite1;
let sprite2;
let bt1, bt2, bt3, bt4;
let canGo = true;
let showSlide = 0;
let press = true;

function preload() {
  // loading
  if (windowHeight > map(9, 0, 16, 0, windowWidth)) {
    createCanvas(windowWidth, map(9, 0, 16, 0, windowWidth));
  } else {
    createCanvas(map(16, 0, 9, 0, windowHeight), windowHeight);
  }

  titlecard = loadImage("./sprites/other/titlecard.png");

  // Amber sprites
  Amberangry1 = loadImage("./sprites/char/Amber/Amber_angry.png");
  Amberangry2 = loadImage("./sprites/char/Amber/Amber_angry2.png");
  Amberhappy1 = loadImage("./sprites/char/Amber/Amber_happy.png");
  Amberhappy2 = loadImage("./sprites/char/Amber/Amber_happy2.png");
  Amberneutral1 = loadImage("./sprites/char/Amber/Amber_neutral.png");
  Amberneutral2 = loadImage("./sprites/char/Amber/Amber_worry.png");
  Ambersad1 = loadImage("./sprites/char/Amber/Amber_sad.png");
  Ambersad2 = loadImage("./sprites/char/Amber/Amber_sad2.png");

  // George sprites
  Georgeangry1 = loadImage("./sprites/char/George/George_angry.png");
  Georgeangry2 = loadImage("./sprites/char/George/George_angry2.png");
  Georgeevil1 = loadImage("./sprites/char/George/George_evil.png");
  Georgeevil2 = loadImage("./sprites/char/George/George_evil2.png");
  Georgehappy1 = loadImage("./sprites/char/George/George_happy.png");
  Georgehappy2 = loadImage("./sprites/char/George/George_happy2.png");
  Georgenervous1 = loadImage("./sprites/char/George/George_nervous.png");
  Georgesad1 = loadImage("./sprites/char/George/George_sad.png");
  Georgesad2 = loadImage("./sprites/char/George/George_sad2.png");
  Georgenervous2 = loadImage("./sprites/char/George/George_nervous2.png");
  Georgeshock1 = loadImage("./sprites/char/George/George_shock.png");
  Georgeshock2 = loadImage("./sprites/char/George/George_shock2.png");

  // Harriet sprites
  Harrietangry1 = loadImage("./sprites/char/Harriet/Harriet_angry.png");
  Harrietangry2 = loadImage("./sprites/char/Harriet/Harriet_angry2.png");
  Harriethappy1 = loadImage("./sprites/char/Harriet/Harriet_happy.png");
  Harriethappy2 = loadImage("./sprites/char/Harriet/Harriet_happy2.png");
  Harrietsad1 = loadImage("./sprites/char/Harriet/Harriet_sad.png");
  Harrietsad2 = loadImage("./sprites/char/Harriet/Harriet_sad2.png");
  Harrietworried1 = loadImage("./sprites/char/Harriet/Harriet_worried.png");
  Harrietworried2 = loadImage("./sprites/char/Harriet/Harriet_worried2.png");

  // Watson sprites
  Watsonangry1 = loadImage("./sprites/char/Watson/Watson_angry.png");
  Watsonangry2 = loadImage("./sprites/char/Watson/Watson_angry2.png");
  Watsonhappy1 = loadImage("./sprites/char/Watson/Watson_happy.png");
  Watsonhappy2 = loadImage("./sprites/char/Watson/Watson_happy2.png");
  Watsonneutral1 = loadImage("./sprites/char/Watson/Watson_neutral.png");
  Watsonneutral2 = loadImage("./sprites/char/Watson/Watson_neutral2.png");
  Watsonsad2 = loadImage("./sprites/char/Watson/Watson_sad2.png");
  Watsonworried1 = loadImage("./sprites/char/Watson/Watson_worried.png");
  Watsonworried2 = loadImage("./sprites/char/Watson/Watson_worried2.png");
}

function setup() {
  let cnv
  if (windowHeight > map(9, 0, 16, 0, windowWidth)) {
    cnv = createCanvas(windowWidth, map(9, 0, 16, 0, windowWidth));
  } else {
    cnv = createCanvas(map(16, 0, 9, 0, windowHeight), windowHeight);
  }
  cnv.position( windowWidth / 2 - width / 2, windowHeight / 2 - height / 2 )

  makePath();

  console.log(`slide: ${cslide}`);
}

function draw() {
  if (mouseIsPressed == true && slides[showSlide].hasButton == false) {
    press = false;
  }
  if (mouseIsPressed == false) {
    press = true;
  }

  for (i = 0; i < slides.length; i++) {
    if (cslide == slides[i].pos) {
      showSlide = i;
      break;
    }
  }

  slides[showSlide].show();
  if (slides[showSlide].hasButton == true) {
    makeButton(
      slides[showSlide].sbount,
      slides[showSlide].sbt1,
      slides[showSlide].sbt2,
      slides[showSlide].sbt3,
      slides[showSlide].sbt4
    );
  }

  //botão de voltar
  if (mouseX < width / 10 && mouseX > 5 && mouseY < width / 30 && mouseY > 5) {
    fill(0, 200, 0);
  } else {
    fill(0, 0, 0);
  }
  stroke(255);
  strokeWeight(3);
  textSize(width / 30);
  textAlign(LEFT, TOP);
  text("Voltar", 5, 5);

  if (cslide == "a") {
    image(titlecard, 0, 0, width, height);
  }
}

function makeButton(bount, bt1, bt2, bt3, bt4) {
  buttons.length = 0;
  for (i = 0; i < bount; i++) {
    let bx = width / 2;
    let by = (height / bount) * i + height / 2 / bount;
    let bw = width / 3;
    let bh = height / 2 / bount;
    let bt;
    let bb;
    if (i == 0) {
      bt = bt1;
      bb = "b";
    } else if (i == 1) {
      bt = bt2;
      bb = "c";
    } else if (i == 2) {
      bt = bt3;
      bb = "d";
    } else {
      bt = bt4;
      bb = "e";
    }
    textAlign(CENTER, CENTER);
    let button = new Button(bx, by, bw, bh, bt, bb);
    buttons.push(button);
  }
}

function mousePressed() {
  if (mouseX < width / 10 && mouseX > 5 && mouseY < width / 30 && mouseY > 5) {
    if (cslide != "aa") {
      cslide = cslide.slice(0, -1);
      console.log(`slide: ${cslide}`);
    }
  } else if (slides[showSlide].hasButton == false && canGo == true) {
    cslide += "a";
    console.log(`slide: ${cslide}`);
  }
}

class Button {
  constructor(bx, by, bw, bh, bt, bb) {
    this.bx = bx;
    this.by = by;
    this.bw = bw;
    this.bh = bh;
    this.bt = bt;
    this.bb = bb;
  }

  show() {
    rectMode(CENTER);
    fill(0);
    if (
      mouseX > this.bx - this.bw / 2 &&
      mouseX < this.bx + this.bw / 2 &&
      mouseY > this.by - this.bh / 2 &&
      mouseY < this.by + this.bh / 2
    ) {
      if (
        mouseIsPressed == true &&
        press == true &&
        slides[showSlide].hasButton == true
      ) {
        press = false;
        cslide += this.bb;
        console.log(`slide: ${cslide}`);
      }
      stroke(0, 255, 0);
    } else {
      stroke(255);
    }
    rect(this.bx, this.by, this.bw, this.bh);
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(width / 30);
    text(this.bt, this.bx, this.by, this.bw);
  }
}

class Slide {
  constructor(
    speaker,
    quote,
    sprite1,
    sprite2,
    ord,
    pos,
    hasButton,
    sbount,
    sbt1,
    sbt2,
    sbt3,
    sbt4
  ) {
    this.speaker = speaker;
    this.quote = quote;
    this.sprite1 = sprite1;
    this.sprite2 = sprite2;
    this.ord = ord;
    this.pos = pos;
    this.hasButton = hasButton;
    this.sbount = sbount;
    this.sbt1 = sbt1;
    this.sbt2 = sbt2;
    this.sbt3 = sbt3;
    this.sbt4 = sbt4;
  }

  show() {
    rectMode(CENTER);
    fill(0);

    if (this.speaker == "Amber") {
      background(150, 70, 0);
      tc = color(255, 100, 0);
    } else if (this.speaker == "George") {
      background(30, 50, 80);
      tc = color(85, 155, 230);
    } else if (this.speaker == "Harriet") {
      background(140, 10, 125);
      tc = color(255, 0, 220);
    } else if (this.speaker == "Watson") {
      background(100, 100, 0);
      tc = color(255, 255, 0);
    } else if (this.speaker == "Nate") {
      background(200);
      tc = color(255);
    } else {
      background(255);
      tc = color(255);
    }

    if (this.sprite1 != false) {
      image(
        this.sprite1,
        width - map(2, 0, 3, 0, height),
        height / 8,
        map(2, 0, 3, 0, height),
        height
      );
    }
    if (this.sprite2 != 0) {
      image(this.sprite2, 0, height / 8, map(2, 0, 3, 0, height), height);
    }

    rectMode(CORNER);
    fill(0);
    stroke(255);
    strokeWeight(width / 200);
    rect(0, height / 1.5, width, height / 2);
    fill(tc);
    noStroke();
    textSize(width / 30);
    textAlign(LEFT, TOP);
    if (this.quote != false) {
      if (this.speaker != "Nate") {
        text(
          `${this.speaker}: ${this.quote}`,
          width / 30,
          height / 1.4,
          width - width / 30
        );
      } else {
        text(`${this.quote}`, width / 30, height / 1.4, width - width / 30);
      }
    }
    if (this.hasButton == true) {
      for (let button of buttons) {
        button.show();
      }
    }
  }
}

function windowResized() {
  if (windowHeight > map(9, 0, 16, 0, windowWidth)) {
    resizeCanvas(windowWidth, map(9, 0, 16, 0, windowWidth));
  } else {
    resizeCanvas(map(16, 0, 9, 0, windowHeight), windowHeight);
  }
}
