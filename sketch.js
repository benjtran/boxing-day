let p;
let c;

//screen
let screen
let screenCount

//buttons
let playSize 
let pauseCount

//boundary
let origin
let realOrigin 
let boundary1
let realBoundary1 
let boundary1Start;
let boundary1End;
let boundary2 
let realBoundary2 
let boundary2Start;
let boundary2End;
let part = [];

//stages
let stage = [];
let stageStart = [];
let stageEnd = [];
let stageChange = [];
let transition = [];
let fade
let twice;
let thrice;
let name = [];
let currentCharacter 
let charTimer

//waves of enemies;
let waves = [];

//healing
let medX = [];
let tempMedX = [];
let medY = [];
let realMedX = [];
let usedMed = [];
let heal;

//buff
let appleX = [];
let realAppleX = [];
let tempAppleX = [];
let appleY = [];
let usedApple = [];
let buffTimer = [];
let buff = [];
let buffCheck;

//snowball launcher
let l = [];
let rand;
let launchX = [];
let realLaunchX = [];
let launchY = [];
let launchTimer = [];
let shoot = [];
let balls = [];
let launchNum
let collide;

//boss
let speach = [];
let speachChar
let sceneNum 
let angry;
let appleAccel 
let bossDiff 
let bossHit;
let bossShake 
let bossShakeTimer
let appleTimer
let appleFade = [];
let disappear = [];

//background for title
let bagAng

//background scenery for stage 1
let houseX 
let realHouseX
let houseHeight = [];
let trashX
let realTrashX 
let trashRNG = [];
let pavementX 
let realPavementX
let smokeX = [];
let realSmokeX 
let smokeXOff 
let smokeY = [];
let smokeYOff
let smokeSize = [];
let smokesee 
let mountainX = [];
let mountainY = [];

//background scenery for stage 2
let treeHeight = [];
let treeRand = [];
let treeTrunkCol = [];
let treeLeafCol = [];

//background scenery for stage 3
let snowX = [];
let snowXOff = [];
let snowY = [];
let snowSize = [];
let f = [];

//background scenery for stage 4
let cloudX = [];
let cloudY = [];
let cloudL = [];
let cloudW = [];
let cloudSpeed = [];

//background scenery for stage 5
let audienceTimer
let spotlightX
let spotlightY 
let ang 
let spotlightX2 
let spotlightY2
let ang2 
let spotlightX3 
let spotlightY3 
let ang3 
let credits

function setup() {
  createCanvas(600, 400);
  resetSketch()
  //killcount = 9;
  //killcount = 27
  //killcount = 34;
  //killcount = 50;
}

function draw() {
  //stage[0] = false
  //stage[1] = true
  //stage[0] = false
  //stage[2] = true
  //stage[0] = false;
  //stage[3] = true;
  //stage[0] = false;
  //stage[4] = true;
  if (screen == "intro") {
    background(0);
    stroke(0)
    if (idleTimer <= 30) {
      idleTimer++;
      pIdle1(250, 200, direction, "red", hit);
    } else if (idleTimer > 30 && idleTimer <= 60) {
      idleTimer++;
      pIdle2(250, 200, direction, "red", hit);
    } else if (idleTimer > 60 && idleTimer <= 90) {
      idleTimer++;
      pIdle3(250, 200, direction, "red", hit);
    } else {
      idleTimer = 0;
      pIdle1(250, 200, direction, "red", hit);
    }
    rectMode(CENTER);
    push();
    translate(330, 0);
    rotate(radians(sin(bagAng)));
    bagAng += 0.025;
    stroke(97, 61, 44);
    strokeWeight(4);
    line(0, 180, 0, 0);
    stroke(0);
    strokeWeight(1);
    fill(217, 49, 37);
    rect(0, 180, 37, 100, 12);
    pop();
    push();
    scale(1.5, 0.35);
    spotlight();
    noStroke();
    circle(200, 800, 300);
    pop();
    textFont("Verdana");
    textSize(40);
    fill(255);
    text("BOXING DAY.", 165, 40);
    fill(110, 110, 110);
    if (
      mouseX >= 225 - playSize / 2 &&
      mouseX <= 375 + playSize / 2 &&
      mouseY >= 325 - playSize / 6 &&
      mouseY <= 375 + playSize / 6
    ) {
      fill(173, 173, 173);
      playSize = 10;
      textSize(30);
    } else {
      playSize = 0;
      textSize(25);
    }
    rect(300, 350, 150 + playSize, 50 + playSize / 3);
    fill(255);
    text("PLAY.", 269 - playSize / 2, 357);
  }
  if (screen == "scene") {
    if (screenCount == 1) {
      background(38, 25, 13);
      rectMode(CORNER);
      noStroke();
      //Mr Bean Pattern
      for (let i = 20; i < width; i += 200) {
        for (let j = 30; j < height; j += 200) {
          //up
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(-12, -26, 52, 52);
          pop();

          //down
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(125, 110, 52, 52);
          pop();

          //up2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(200, -235, 52, 52);
          pop();

          //down2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(335, -100, 52, 52);
          pop();

          //edgeupright1
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(410, -445, 52, 52);
          pop();

          //edgerightdown2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(545, -310, 52, 52);
          pop();

          //tiny
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(65, -20, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(135, 50, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(275, -230, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(485, -160, 40, 40);
          pop();
        }
      }

      //window
      stroke(19, 13, 7);
      strokeWeight(10);
      fill(10, 0, 25);
      rect(20, 90, 150, 150);
      rect(425, 90, 150, 150);
      //moon
      noStroke();
      fill(130);
      circle(65, 135, 75);
      fill(150);
      circle(69, 135, 69);
      stroke(19, 13, 7);
      line(95, 90, 95, 240);
      line(25, 165, 165, 165);
      line(500, 90, 500, 240);
      line(430, 165, 575, 165);

      //flooring
      noStroke();
      fill(20, 0, 0);
      rect(0, 330, 600, 100);

      //couch
      //legs
      fill(35, 16, 0);
      rect(90, 325, 40, 50);
      rect(470, 325, 40, 50);

      //seat
      fill(80);
      rect(75, 180, 450, 120, 10);
      fill(70);
      rect(300, 180, 215, 120, 10);
      fill(60);
      rect(75, 290, 450, 35, 5);
      fill(50);
      rect(215, 290, 305, 35, 5);

      //boxie
      //left arm
      fill(180);
      beginShape();
      vertex(260, 185);
      vertex(255, 230);
      vertex(215, 235);
      vertex(220, 200);
      endShape();
      //shade
      fill(150);
      beginShape();
      vertex(260, 185);
      vertex(238, 221);
      vertex(250, 220);
      endShape();

      //right arm
      fill(180);
      beginShape();
      vertex(330, 180);
      vertex(380, 230);
      vertex(370, 240);
      vertex(245, 220);
      endShape();
      //shade
      fill(150);
      beginShape();
      vertex(330, 180);
      vertex(363, 228);
      vertex(355, 237);
      endShape();

      //hands
      fill(80, 26, 0);
      circle(210, 220, 45);
      circle(380, 240, 45);
      fill(102, 26, 0);
      ellipse(207, 220, 38, 40);
      ellipse(378, 240, 38, 40);

      //body
      fill(80, 26, 0);
      ellipse(300, 270, 150, 70);
      fill(170);
      beginShape();
      vertex(270, 160);
      vertex(325, 160);
      vertex(375, 270);
      vertex(225, 270);
      endShape();

      //remote
      fill(15);
      rect(205, 220, 40, 18);
      fill(0, 102, 102);
      circle(225, 230, 5);

      //legs && feet
      fill(180);
      rect(220, 300, 40, 60);
      rect(340, 300, 40, 60);
      //shade
      fill(150);
      rect(375, 300, 5, 60);
      rect(255, 300, 5, 60);

      //pants && shoes
      //shade
      fill(80, 26, 0);
      circle(240, 280, 60);
      circle(360, 280, 60);
      fill(102, 26, 0);
      ellipse(355, 280, 55, 60);
      ellipse(235, 280, 55, 60);
      //shade
      fill(80, 26, 0);
      ellipse(235, 360, 60, 40);
      ellipse(365, 360, 60, 40);
      fill(102, 26, 0);
      ellipse(230, 360, 50, 35);
      ellipse(360, 360, 50, 35);

      //head
      //shade
      fill(150);
      circle(300, 140, 120);
      fill(180);
      ellipse(295, 140, 115, 115);
      //eyes
      fill(0);
      circle(270, 125, 15);
      circle(325, 125, 15);
    } else if (screenCount == 2) {
      //wallpaper
      background(38, 25, 15);
      rectMode(CORNER);
      noStroke();
      for (let i = 20; i < width; i += 200) {
        for (let j = 30; j < height; j += 200) {
          //up
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(-12, -26, 52, 52);
          pop();

          //down
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(125, 110, 52, 52);
          pop();

          //up2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(200, -235, 52, 52);
          pop();

          //down2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(335, -100, 52, 52);
          pop();

          //down3
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(270, 250, 52, 52);
          pop();

          //down3
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(480, 35, 52, 52);
          pop();

          //edgeupright1
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(410, -445, 52, 52);
          pop();

          //edgerightdown2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(545, -310, 52, 52);
          pop();

          //tiny
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(65, -20, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(135, 50, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(275, -230, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(417, -95, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(280, 190, 40, 40);
          pop();
        }
      }

      //rightstand
      fill(19, 13, 7);
      beginShape();
      vertex(50, 400);
      vertex(440, 15);
      vertex(500, 25);
      vertex(180, 400);
      endShape();
      //left
      fill(19, 13, 7);
      beginShape();
      vertex(550, 400);
      vertex(130, 15);
      vertex(80, 25);
      vertex(420, 400);
      endShape();
      //knobs
      fill(153, 92, 0);
      circle(95, 5, 80);
      circle(470, 5, 80);

      //tv
      fill(26, 26, 26);
      rect(30, 50, 540, 330, 30);
      fill(41, 41, 61);
      rect(55, 70, 490, 290, 20);

      //boxer1
      //left arm
      fill(150);
      beginShape();
      vertex(150, 195);
      vertex(110, 150);
      vertex(95, 160);
      vertex(140, 240);
      endShape();
      //right arm
      beginShape();
      vertex(210, 195);
      vertex(255, 150);
      vertex(270, 160);
      vertex(225, 240);
      endShape();
      //hands
      fill(77, 77, 77);
      circle(100, 150, 45);
      circle(260, 150, 45);

      //body
      fill(140);
      beginShape();
      vertex(150, 190);
      vertex(130, 275);
      vertex(235, 275);
      vertex(210, 190);
      endShape();

      //head
      fill(150);
      circle(180, 150, 110);
      fill(0);
      //eyes
      circle(155, 140, 15);
      circle(205, 140, 15);
      //eyebrows
      beginShape();
      vertex(150, 110);
      vertex(175, 125);
      vertex(170, 130);
      vertex(140, 115);
      endShape();

      beginShape();
      vertex(210, 110);
      vertex(185, 125);
      vertex(190, 130);
      vertex(220, 115);
      endShape();

      //boxer2
      //left arm
      fill(150);
      beginShape();
      vertex(375, 190);
      vertex(315, 240);
      vertex(335, 250);
      vertex(360, 240);
      endShape();
      //right arm
      beginShape();
      vertex(440, 190);
      vertex(500, 240);
      vertex(480, 250);
      vertex(425, 235);
      endShape();

      //hands
      fill(77, 77, 77);
      circle(325, 240, 45);
      circle(490, 240, 45);

      //body
      fill(140);
      beginShape();
      vertex(375, 190);
      vertex(345, 275);
      vertex(470, 275);
      vertex(440, 190);
      endShape();
      //head
      fill(150);
      circle(410, 150, 110);
      fill(0);
      circle(385, 140, 15);
      circle(430, 140, 15);
      //eyebrows
      beginShape();
      vertex(380, 110);
      vertex(405, 125);
      vertex(400, 130);
      vertex(370, 115);
      endShape();

      beginShape();
      vertex(440, 110);
      vertex(415, 125);
      vertex(420, 130);
      vertex(450, 115);
      endShape();

      //text
      fill(128, 0, 0);
      rect(55, 270, 490, 90, 10);
      fill(255);
      textSize(18);
      text("BREAKING NEWS!!!", 210, 290);
      text("Boxers roam the streets!!", 190, 310);
      text("Could this be related to the upcoming", 140, 330);
      text("boxing championship finals??!!", 170, 350);
    } else if (screenCount == 3) {
      background(38, 25, 15);
      noStroke();
      for (let i = 20; i < width; i += 200) {
        for (let j = 30; j < height; j += 200) {
          //up
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(-12, -26, 52, 52);
          pop();

          //down
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(125, 110, 52, 52);
          pop();

          //up2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(200, -235, 52, 52);
          pop();

          //down2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(335, -100, 52, 52);
          pop();

          //down3
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(270, 250, 52, 52);
          pop();

          //edgeupright1
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(410, -445, 52, 52);
          pop();

          //edgerightdown2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(545, -310, 52, 52);
          pop();

          //tiny
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(65, -20, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(135, 50, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(275, -230, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(417, -95, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(280, 190, 40, 40);
          pop();
        }
      }

      //body
      fill(180);
      rect(280, 335, 50, 15);
      stroke(100);
      strokeWeight(2);
      circle(290, 320, 68);
      noStroke();
      fill(170);
      beginShape();
      vertex(335, 240);
      vertex(500, 240);
      vertex(545, 400);
      vertex(300, 400);
      endShape();
      fill(140);
      rect(435, 200, 72, 200);

      //head
      fill(140);
      circle(420, 150, 250);
      fill(180);
      ellipse(410, 150, 230, 250);
      fill(0);
      ellipse(330, 140, 40, 80);
      ellipse(450, 140, 45, 80);
      fill(180);
      rect(310, 90, 40, 20);
      rect(430, 90, 40, 20);

      //left arm
      fill(180);
      beginShape();
      vertex(330, 235);
      vertex(360, 260);
      vertex(313, 347);
      vertex(260, 300);
      endShape();

      //right arm
      fill(150);
      beginShape();
      vertex(502, 245);
      vertex(460, 265);
      vertex(510, 390);
      vertex(575, 380);
      endShape();

      fill(80, 26, 0);
      circle(355, 230, 70);
      ellipse(545, 390, 75, 75);
      fill(102, 26, 0);
      ellipse(350, 230, 60, 70);
      ellipse(540, 390, 60, 70);

      //thought bubble
      fill(180);
      circle(275, 130, 30);
      circle(125, 60, 100);
      circle(80, 90, 100);
      circle(65, 163, 100);
      circle(71, 240, 100);
      circle(140, 270, 100);
      circle(220, 240, 100);
      circle(215, 157, 100);
      circle(215, 157, 100);
      circle(205, 78, 100);
      rect(100, 60, 120, 200);

      //text
      fill(0);
      textSize(18);
      text("I think this is related", 55, 130);
      text("to my opponent.", 70, 150);
      text("Perhaps he's sending", 45, 170);
      text("his henchmen my way", 45, 190);
      text("to weaken me before", 50, 210);
      text("our fight!!", 100, 230);
    } else if (screenCount == 4) {
      //wallpaper
      background(38, 25, 15);
      noStroke();
      for (let i = 20; i < width; i += 200) {
        for (let j = 30; j < height; j += 200) {
          //up
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(-12, -26, 52, 52);
          pop();

          //down
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(125, 110, 52, 52);
          pop();

          //up2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(200, -235, 52, 52);
          pop();

          //down2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(335, -100, 52, 52);
          pop();

          //down3
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(270, 250, 52, 52);
          pop();

          //down3
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(480, 35, 52, 52);
          pop();

          //edgeupright1
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(410, -445, 52, 52);
          pop();

          //edgerightdown2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(545, -310, 52, 52);
          pop();

          //tiny
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(65, -20, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(135, 50, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(275, -230, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(417, -95, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(280, 190, 40, 40);
          pop();
        }
      }

      //map
      fill(172, 115, 57);
      rect(60, 15, 480, 370);

      //path
      strokeWeight(3);
      stroke(0);
      //home
      line(270, 310, 355, 310);
      //forest
      line(435, 170, 435, 300);
      //mountain
      line(435, 160, 285, 160);
      //stadium
      line(170, 100, 340, 100);

      //breakage
      noStroke();
      //house
      fill(172, 115, 57);
      rect(280, 300, 10, 20);
      rect(310, 300, 10, 20);
      rect(340, 300, 10, 20);
      //forest
      rect(430, 180, 20, 10);
      rect(430, 210, 20, 10);
      rect(430, 240, 20, 10);
      rect(430, 270, 20, 10);
      //mountains
      rect(415, 150, 10, 20);
      rect(385, 150, 10, 20);
      rect(355, 150, 10, 20);
      rect(325, 150, 10, 20);
      rect(295, 150, 10, 20);
      //stadium
      rect(180, 90, 10, 20);
      rect(200, 90, 10, 20);
      rect(230, 90, 10, 20);
      rect(260, 90, 10, 20);
      rect(290, 90, 10, 20);
      rect(320, 90, 10, 20);

      //birck houses
      fill(30);
      rect(65, 300, 200, 15);
      rect(140, 310, 15, 70);
      houseMap(70, 245);
      houseMap(80, 310);
      houseMap(155, 315);
      houseMap(190, 245);

      //forest
      treeMap(460, 260);
      treeMap(390, 180);
      treeMap(490, 255);
      treeMap(370, 240);
      treeMap(470, 175);
      treeMap(390, 310);
      treeMap(460, 320);
      treeMap(310, 205);

      //mountain
      mountain(190, 15);
      mountain(120, 20);
      mountain(110, 90);
      mountain(210, 120);
      mountain(190, 140);
      mountain(95, 165);

      //snow
      fill(200);
      circle(260, 120, 5);
      circle(220, 125, 10);
      circle(135, 170, 10);
      circle(115, 180, 5);
      circle(80, 105, 5);
      circle(165, 105, 8);
      circle(90, 30, 8);
      circle(150, 30, 7);
      circle(160, 40, 5);

      //stadium
      fill(148, 148, 184);
      rect(390, 36, 130, 50, 10);
      fill(133, 133, 173);
      ellipse(455, 40, 130, 15);
      fill(230, 184, 0);
      ellipse(455, 40, 80, 10);

      fill(92, 92, 138);
      rect(440, 71, 25, 15, 5);

      //stadiumHouses
      stadHouse(365, 110);
      stadHouse(280, 50);
      stadHouse(410, 105);
      stadHouse(470, 110);
      stadHouse(330, 40);

      //labels
      noStroke();
      fill(0);
      textSize(15);
      text("Home", 140, 270);
      text("Stadium", 425, 65);

      textSize(13);
      fill(160);
      rect(200, 320, 190, 75);
      fill(0);
      text("The stadium is in another", 210, 340);
      text("city and the fight starts", 220, 360);
      text("in 3 hours!!!", 260, 380);

      //left arm
      fill(180);
      beginShape();
      vertex(25, 215);
      vertex(60, 245);
      vertex(20, 450);
      vertex(-30, 320);
      endShape();

      //right arm
      beginShape();
      vertex(575, 215);
      vertex(540, 245);
      vertex(580, 450);
      vertex(630, 320);
      endShape();

      //hands
      fill(80, 26, 0);
      circle(55, 205, 85);
      circle(545, 205, 85);
      fill(102, 26, 0);
      ellipse(60, 205, 70, 85);
      ellipse(540, 205, 70, 85);
    } else if (screenCount == 5) {
      background(38, 25, 15);
      noStroke();
      for (let i = 20; i < width; i += 200) {
        for (let j = 30; j < height; j += 200) {
          //up
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(-12, -26, 52, 52);
          pop();

          //down
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(125, 110, 52, 52);
          pop();

          //up2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(200, -235, 52, 52);
          pop();

          //down2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(335, -100, 52, 52);
          pop();

          //down3
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(270, 250, 52, 52);
          pop();

          //down3
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(480, 35, 52, 52);
          pop();

          //edgeupright1
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(410, -445, 52, 52);
          pop();

          //edgerightdown2
          push();
          fill(58, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(545, -310, 52, 52);
          pop();

          //tiny
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(65, -20, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(135, 50, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(275, -230, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(417, -95, 40, 40);
          pop();
          push();
          fill(66, 38, 19);
          translate(i / 2, j / 2);
          rotate(PI / 4.0);
          rect(280, 190, 40, 40);
          pop();
        }
      }
      //flooring and exit
      fill(20, 0, 0);
      rect(0, 330, 600, 100);
      fill(10, 0, 25);
      rect(140, 10, 300, 320);

      //boxi

      //right arm
      fill(170);
      beginShape();
      vertex(310, 115);
      vertex(360, 175);
      vertex(350, 190);
      vertex(305, 155);
      endShape();

      //left arm
      beginShape();
      vertex(255, 115);
      vertex(205, 165);
      vertex(220, 190);
      vertex(255, 145);
      endShape();

      //hands
      fill(80, 26, 0);
      circle(355, 180, 40);
      circle(210, 180, 40);
      fill(102, 26, 0);
      ellipse(353, 180, 35, 40);
      ellipse(208, 180, 35, 40);

      //body
      fill(160);
      beginShape();
      vertex(250, 120);
      vertex(315, 120);
      vertex(340, 210);
      vertex(225, 210);
      endShape();

      //legs and feet
      fill(80, 26, 0);
      ellipse(283, 220, 125, 50);
      ellipse(240, 250, 45, 80);
      ellipse(325, 250, 45, 80);

      //head
      fill(140);
      circle(283, 80, 105);
      fill(155);
      ellipse(278, 80, 100, 105);

      //text
      rect(90, 260, 400, 120);
      textSize(23);
      fill(0);
      text("I guess I have no choice", 165, 300);
      text("but to fight", 230, 330);
      text("my way there...", 215, 360);
    }

    textSize(15);
    fill(255);
    text("Press left arrow key to go back...", 10, 390);
    textSize(20);
    text("Click for next...", 440, 23);
  }
  if (screen == "play") {
    let origindx = realOrigin - origin;
    origin += origindx * 0.05;
    let boundary1dx = realBoundary1 - boundary1;
    boundary1 += boundary1dx * 0.05;
    let boundary2dx = realBoundary2 - boundary2;
    boundary2 += boundary2dx * 0.05;
    let housedx = realHouseX - houseX;
    houseX += housedx * 0.05;
    let trashdx = realTrashX - trashX;
    trashX += trashdx * 0.05;
    let pavementdx = realPavementX - pavementX;
    pavementX += pavementdx * 0.05;
    if (pauseCount == 1) {
      screen = "pause"
    }
    if (deduct >= 50) {
      if (lives > 1) {
        screen = "lose"
      } else {
        screen = "gameOver"
      }
    }
    //stage 1
    if (stage[0]) {
      background(220);
      rectMode(CORNER);
      nightSky();
      rect(0, 0, 600, 400);
      fill(17, 33, 18);
      rect(0, 300, 600, 100);
      fill(61, 66, 58);
      noStroke();
      beginShape();
      vertex(0, 300);
      for (let i = 0; i < 600; i++) {
        vertex(mountainX[i] + (origin - 200) / 3, mountainY[i]);
      }
      vertex(600, 300);
      endShape();
      for (let i = 0; i < 10; i++) {
        factory(-300 + origin / 2 + i * 220, "big");
      }
      for (let i = 0; i < 14; i++) {
        factory(-400 + origin / 2 + i * 175, "tall");
      }
      for (let i = 0; i < 18; i++) {
        factory(-330 + origin / 2 + i * 120, "long");
      }

      //boundary
      //wave 2 boundaries
      if (part[0]) {
        if (killcount >= 2 && killcount < 5 && !boundary2End) {
          boundary2Start = true;
        }
        if (boundary2Start) {
          boundary2Start = false;
          boundary2End = true;
          boundary2 = origin + 2300;
          realBoundary2 = origin + 2300;
        }
        if (realHouseX < -1500 && !boundary1End) {
          boundary1Start = true;
        }
        if (boundary1Start) {
          boundary1Start = false;
          boundary1End = true;
          boundary1 = -100;
          realBoundary1 = -100;
        }
      }

      if (killcount >= 5 && killcount < 7 && !part[1]) {
        boundary1End = false;
        boundary2End = false;
        part[0] = false;
        part[1] = true;
      }

      //wave 3 boundaries
      if (part[1]) {
        if (!boundary2End) {
          boundary2Start = true;
        }
        if (boundary2Start) {
          boundary2Start = false;
          boundary2End = true;
          boundary2 = origin + 3200;
          realBoundary2 = origin + 3200;
        }
        if (realHouseX < -3000 && !boundary1End) {
          boundary1Start = true;
        }
        if (boundary1Start) {
          boundary1Start = false;
          boundary1End = true;
          boundary1 = -100;
          realBoundary1 = -199;
        }
      }

      if (killcount == 7) {
        part[1] = false;
        part[2] = true;
        boundary2 = origin + 3700;
      }

      for (let i = 0; i < 16; i++) {
        house(houseX + i * 250, 50 + houseHeight[i], i);
      }
      for (let i = 0; i < 8; i++) {
        lamp(houseX + i * 500);
      }
      for (let i = 0; i < 7; i++) {
        trash(trashX + i * 500 + trashRNG[i]);
      }
      fill(255);
      textSize(15);
      text(
        "Use A D or LEFT and RIGHT\narrow keys to move left\nand right.",
        100 + origin - 200,
        40
      );
      text("W or UP arrow key\nto jump!", 400 + origin - 200, 250);
      text(
        "Hold S or DOWN arrow key\nto fall through platforms.",
        600 + origin - 200,
        150
      );
      text(
        "Press SPACE bar\nconsecutively to combo.",
        1610 + origin - 200,
        150
      );
      text("Press SPACE bar to punch!", 610 + origin - 210, 290);
      text("Med kits will heal you!", 1880 + origin - 200, 210);
      text("Hold SHIFT to\nblock punches!", 3120 + origin - 200, 170);
      for (let i = 0; i < 15; i++) {
        if (i % 5 != 0) {
          tree(houseX + 4200 + i * 40 + treeRand[i] / 3, i);
        } else {
          tree(houseX + 4200 + i * 40 + treeRand[0] / 3, i);
        }
      }
      fill(0);
      roadblock(houseX - 170);
      sign(houseX + 4000, "forest");
      rectMode(CORNER);
      for (let i = 0; i < 110; i++) {
        fill(32, 33, 33);
        rect(pavementX, 374, 4400, 26);
        fill(125, 125, 124);
        rect(pavementX, 374, 4400, 10);
        line(pavementX + i * 40, 374, pavementX + i * 40, 384);
      }
      fill(32, 54, 30);
      rect(pavementX + 4400, 374, 4400, 26);

      //waves
      for (let i = 0; i < 2; i++) {
        e[i].enemy(i);
      }

      if (realHouseX < -1500) {
        waves[0] = true;
      }
      if (waves[0]) {
        for (let i = 2; i < 5; i++) {
          e[i].enemy(i);
        }
      }

      if (realHouseX < -3000) {
        waves[1] = true;
      }
      if (waves[1]) {
        for (let i = 5; i < 7; i++) {
          e[i].enemy(i);
        }
      }
      for (let i = 0; i < 8; i++) {
        c.display(i);
      }
      for (let i = 0; i < 1; i++) {
        m.display(i);
      }
    }

    //stage 2
    if (!stage[0] && stage[1]) {
      background(220);
      fill(0, 0, 0, 255);
      rectMode(CORNER);
      morningSky();
      rect(0, 0, 600, 400);
      for (let i = 0; i < 100; i++) {
        rectMode(CENTER);
        fill(33, 23, 21);
        noStroke();
        rect(50 + i * 60 + origin - 200, 200, 50, 400);
      }
      for (let i = 0; i < 150; i++) {
        if (i % 5 != 0) {
          tree(origin - 300 + i * 40 + treeRand[i] / 3, i);
        } else {
          tree(origin - 300 + i * 40 + treeRand[0] / 3, i);
        }
      }
      sign(origin + 5500, "mountain");
      rectMode(CORNER);
      fill(8, 64, 17);
      rect(0, 374, 600, 26);
      //Tree trunk
      rectMode(CENTER);
      noStroke(0);
      fill(92, 43, 27);
      rect(origin + 1800, 354, 50, 40);
      triangle(origin + 1775, 359, origin + 1775, 374, origin + 1765, 374);
      triangle(origin + 1825, 359, origin + 1825, 374, origin + 1835, 374);
      stroke(0);
      fill(255);
      textSize(15);
      text("Should I eat that fruit..?", 2070 + origin - 200, 170);

      for (let i = 0; i < 1; i++) {
        apple.display(i);
      }

      //boundaries
      //change from 2 to 9
      if (part[0]) {
        if (killcount == 9 && !boundary2End) {
          boundary2Start = true;
        }
        if (boundary2Start) {
          boundary2Start = false;
          boundary2End = true;
          boundary2 = origin + 2500;
          realBoundary2 = origin + 2500;
        }
        if (pX > origin + 1500 && !boundary1End) {
          boundary1Start = true;
        }
        if (boundary1Start) {
          boundary1Start = false;
          boundary1End = true;
          boundary1 = -200;
          realBoundary1 = -200;
        }
        //change from 10 to 17
        if (killcount == 17 && !part[1]) {
          boundary1End = false;
          boundary2End = false;
          part[0] = false;
          part[1] = true;
        }
      }
      if (part[1]) {
        if (killcount == 17 && !boundary2End) {
          boundary2Start = true;
        }
        if (boundary2Start) {
          boundary2Start = false;
          boundary2End = true;
          boundary2 = origin + 3700;
          realBoundary2 = origin + 3700;
        }
        if (pX > origin + 3000 && !boundary1End) {
          boundary1Start = true;
        }
        if (boundary1Start) {
          boundary1Start = false;
          boundary1End = true;
          boundary1 = -500;
          realBoundary1 = -500;
        }
        //change from 13 to 20
        if (killcount == 20 && !part[2]) {
          boundary1End = false;
          boundary2End = false;
          part[1] = false;
          part[2] = true;
        }
      }
      if (part[2]) {
        if (killcount == 20 && !boundary2End) {
          boundary2Start = true;
        }
        if (boundary2Start) {
          boundary2Start = false;
          boundary2End = true;
          boundary2 = origin + 5000;
          realBoundary2 = origin + 5000;
        }
        if (pX > origin + 4400 && !boundary1End) {
          boundary1Start = true;
        }
        if (boundary1Start) {
          boundary1Start = false;
          bonudary1End = true;
          boundary1 = -500;
          realBoundary1 = -500;
        }
      }

      //change from 18 to 25
      if (killcount == 25) {
        part[2] = false;
        part[3] = true;
        boundary2 = origin + 6000;
      }

      //waves
      if (realPlatX[10] < 400) {
        waves[0] = true;
      }
      if (waves[0]) {
        for (let i = 7; i < 9; i++) {
          e[i].enemy(i);
        }
      }
      if (pX > origin + 1760) {
        waves[1] = true;
      }
      if (waves[1]) {
        for (let i = 9; i < 17; i++) {
          e[i].enemy(i);
        }
      }
      if (pX > origin + 3000) {
        waves[2] = true;
      }
      if (waves[2]) {
        for (let i = 17; i < 20; i++) {
          e[i].enemy(i);
        }
      }
      if (pX > origin + 4300) {
        waves[3] = true;
      }
      if (waves[3]) {
        for (let i = 20; i < 25; i++) {
          e[i].enemy(i);
        }
      }
      for (let i = 8; i < 21; i++) {
        c.display(i);
      }
      for (let i = 1; i < 2; i++) {
        m.display(i);
      }
    }

    //stage 3
    if (!stage[1] && stage[2]) {
      background(220);
      fill(0, 0, 0, 255);
      rectMode(CORNER);
      snowSky();
      rect(0, 0, 600, 400);
      fill(207, 207, 207);
      rect(0, 300, 600, 100);
      fill(61, 66, 58);
      noStroke();
      beginShape();
      vertex(0, 300);
      for (let i = 0; i < 600; i++) {
        vertex(mountainX[i] + (origin - 400) / 3, mountainY[i]);
      }
      vertex(1600 + (origin - 200) / 3, 300);
      endShape();
      fill(151, 171, 201);
      strokeWeight(20);
      sign(origin + 4300, "stadium");
      rectMode(CORNER);
      stroke(255);
      rect(-10, 374, 620, 36);
      strokeWeight(1);
      for (let i = 0; i < 1250; i++) {
        f[i].display();
      }
      for (let i = 0; i < 6; i++) {
        l[i].display(launchX[i] + origin - 200, launchY[i]);
        if (launchX[i] + origin - 200 < 900) {
          l[i].update(launchX[i] + origin - 200, launchY[i], i);
        }
      }
      for (let i = 0; i < balls.length; i++) {
        balls[i].display();
        if (collide) {
          deduct += 5;
          balls.splice(i, 1);
        }
      }

      //boundaries
      if (part[0]) {
        if (killcount == 27 && !boundary2End) {
          boundary2Start = true;
        }
        if (boundary2Start) {
          boundary2Start = false;
          boundary2End = true;
          boundary2 = origin + 2300;
          realBoundary2 = origin + 2300;
        }
        if (pX > origin + 1800 && !boundary1End) {
          boundary1Start = true;
        }
        if (boundary1Start) {
          boundary1Start = false;
          boundary1End = true;
          boundary1 = -200;
          realBoundary1 = -200;
        }
        //change from 10 to 17
        if (killcount == 29 && !part[1]) {
          boundary1End = false;
          boundary2End = false;
          part[0] = false;
          part[1] = true;
        }
      }
      if (part[1]) {
        if (killcount == 29 && !boundary2End) {
          boundary2Start = true;
        }
        if (boundary2Start) {
          boundary2Start = false;
          boundary2End = true;
          boundary2 = origin + 3200;
          realBoundary2 = origin + 3200;
        }
        if (pX > origin + 2800 && !boundary1End) {
          boundary1Start = true;
        }
        if (boundary1Start) {
          boundary1Start = false;
          boundary1End = true;
          boundary1 = -200;
          realBoundary1 = -200;
        }
        if (killcount == 31 && !part[2]) {
          boundary1End = false;
          boundary2End = false;
          part[1] = false;
          part[2] = true;
        }
      }

      if (part[2]) {
        if (killcount == 31 && !boundary2End) {
          boundary2Start = true;
        }
        if (boundary2Start) {
          boundary2Start = false;
          boundary2End = true;
          boundary2 = origin + 4200;
          realBoundary2 = origin + 4200;
        }
        if (pX > origin + 3850 && !boundary1End) {
          boundary1Start = true;
        }
        if (boundary1Start) {
          boundary1Start = false;
          boundary1End = true;
          boundary1 = -200;
          realBoundary1 = -200;
        }
      }

      if (killcount == 34) {
        part[2] = false;
        part[3] = true;
        boundary2 = origin + 4500;
      }

      //waves
      if (pX > origin + 700) {
        waves[0] = true;
      }
      if (waves[0]) {
        for (let i = 25; i < 27; i++) {
          e[i].enemy(i);
        }
      }
      if (pX > origin + 1800) {
        waves[1] = true;
      }
      if (waves[1]) {
        for (let i = 27; i < 29; i++) {
          e[i].enemy(i);
        }
      }
      if (pX > origin + 2800) {
        waves[2] = true;
      }
      if (waves[2]) {
        for (let i = 29; i < 31; i++) {
          e[i].enemy(i);
        }
      }
      if (pX > origin + 3850) {
        waves[3] = true;
      }
      if (waves[3]) {
        for (let i = 31; i < 34; i++) {
          e[i].enemy(i);
        }
      }
      for (let i = 21; i < 32; i++) {
        c.display(i);
      }
      for (let i = 2; i < 3; i++) {
        m.display(i);
      }
    }

    //stage 
    if (!stage[2] && stage[3]) {
      background(220);
      fill(0, 0, 0, 255);
      rectMode(CORNER);
      afternoonSky();
      rect(0, 0, 600, 400);
      fill(255);
      for (let i = 0; i < cloudX.length; i++) {
        drawCloud(cloudX[i], cloudY[i], cloudL[i], cloudW[i]);
        cloudX[i] -= cloudSpeed[i];
        if (cloudX[i] < -100) {
          cloudX[i] = 700;
          cloudY[i] = random(50, 160);
          cloudL[i] = random(40, 80);
          cloudW[i] = random(25, 65);
          cloudSpeed[i] = random(1, 2);
        }
      }
      push();
      scale(0.75);
      for (let i = 0; i < 17; i++) {
        house(100 + origin + i * 500, 200, 0, true);
      }
      pop();
      fill(129, 129, 130);
      rect(0, 280, 600, 10);
      fill(74, 74, 74);
      rect(0, 285, 600, 75);
      fill(31, 125, 41);
      rect(0, 350, 600, 50);
      for (let i = 3; i < 10; i++) {
        house(houseX - 1500 + i * 600, 50 + houseHeight[i], i, true);
      }
      rectMode(CORNER);
      fill(129, 129, 130);
      rect(0, 374, 600, 26);
      stroke(64, 64, 71);
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 130; j++) {
          if (i % 2 == 0) {
            line(
              origin - 500 + j * 50,
              374 + i * 20,
              origin - 500 + j * 50,
              389 + i * 20
            );
          } else {
            line(
              origin - 525 + j * 50,
              389 + i * 10,
              origin - 525 + j * 50,
              379 + i * 10
            );
          }
        }
      }
      for (let i = 6; i < 9; i++) {
        l[i].display(launchX[i] + origin - 200, launchY[i]);
        if (launchX[i] + origin - 200 < 900) {
          l[i].update(launchX[i] + origin - 200, launchY[i], i);
        }
      }
      for (let i = 0; i < balls.length; i++) {
        balls[i].display();
        if (collide) {
          deduct += 5;
          balls.splice(i, 1);
        }
      }
      for (let i = 1; i < 2; i++) {
        apple.display(i);
      }
      rectMode(CENTER)
      stroke(98, 100, 110)
      fill(102, 107, 128)
      rect(origin + 4700, 187, 1300, 374)
      fill(132, 140, 171)
      rect(origin + 4700, 270, 400, 208)
      fill(34, 36, 43)
      rect(origin + 4700, 310, 100, 128)
      fill(120, 130, 161)
      line(0, 389, 600, 389);
      stroke(0)
      if (part[0]) {
        if (killcount == 37 && !boundary2End) {
          boundary2Start = true;
        }
        if (boundary2Start) {
          boundary2Start = false;
          boundary2End = true;
          boundary2 = origin + 3000;
          realBoundary2 = origin + 3000;
        }
        if (pX > origin + 2300 && !boundary1End) {
          boundary1Start = true;
        }
        if (boundary1Start) {
          boundary1Start = false;
          boundary1End = true;
          boundary1 = -400;
          realBoundary1 = -400;
        }
        if (killcount == 42 && !part[1]) {
          boundary1End = false;
          boundary2End = false;
          part[0] = false;
          part[1] = true;
        }
      }

      if (part[1]) {
        if (killcount == 42 && !boundary2End) {
          boundary2Start = true;
        }
        if (boundary2Start) {
          boundary2Start = false;
          boundary2End = true;
          boundary2 = origin + 3900;
          realBoundary2 = origin + 3900;
        }
        if (pX > origin + 3400 && !boundary1End) {
          boundary1Start = true;
        }
        if (boundary1Start) {
          boundary1Start = false;
          boundary1End = true;
          boundary1 = -400;
          realBoundary1 = -400;
        }
      }

      if (killcount == 50) {
        boundary1End = false;
        boundary2End = false;
        part[1] = false;
        part[2] = true;
        boundary2 = origin + 4700;
      }

      //waves
      if (pX > origin + 700) {
        waves[0] = true;
      }
      if (waves[0]) {
        for (let i = 34; i < 37; i++) {
          e[i].enemy(i);
        }
      }
      if (pX > origin + 2200) {
        waves[1] = true;
      }
      if (waves[1]) {
        for (let i = 37; i < 42; i++) {
          e[i].enemy(i);
        }
      }
      if (pX > origin + 3400) {
        waves[2] = true;
      }
      if (waves[2]) {
        for (let i = 42; i < 50; i++) {
          e[i].enemy(i);
        }
      }
      for (let i = 32; i < 39; i++) {
        c.display(i);
      }
      for (let i = 3; i < 4; i++) {
        m.display(i);
      }
    }

    //stage 5
    if (!stage[3] && stage[4]) {
      audienceTimer++;
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 50; j++) {
          if (i % 2 == 0) {
            if (j % 2 == 0) {
              if (audienceTimer < 50) {
                audience(origin - 600 + j * 50, i * 50, 5);
              } else if (audienceTimer >= 50 && audienceTimer < 100) {
                audience(origin - 600 + j * 50, i * 50, 0);
              } else {
                audienceTimer = 0;
                audience(origin - 600 + j * 50, i * 50, 0);
              }
            } else {
              if (audienceTimer < 50) {
                audience(origin - 600 + j * 50, i * 50, 0);
              } else if (audienceTimer >= 50 && audienceTimer < 100) {
                audience(origin - 600 + j * 50, i * 50, 5);
              } else {
                audienceTimer = 0;
                audience(origin - 600 + j * 50, i * 50, 5);
              }
            }
          } else {
            if (j % 2 == 0) {
              if (audienceTimer < 50) {
                audience(origin - 575 + j * 50, i * 50, 5);
              } else if (audienceTimer >= 50 && audienceTimer < 100) {
                audience(origin - 575 + j * 50, i * 50, 0);
              } else {
                audienceTimer = 0;
                audience(origin - 575 + j * 50, i * 50, 0);
              }
            } else {
              if (audienceTimer < 50) {
                audience(origin - 575 + j * 50, i * 50, 0);
              } else if (audienceTimer >= 50 && audienceTimer < 100) {
                audience(origin - 575 + j * 50, i * 50, 5);
              } else {
                audienceTimer = 0;
                audience(origin - 575 + j * 50, i * 50, 5);
              }
            }
          }
        }
      }
      rectMode(CORNER);
      fill(39, 42, 59);
      rect(0, 230, 600, 170);
      fill(33, 33, 33, 170);
      rect(0, 0, 600, 400);
      fill(240, 255, 181, 50);
      noStroke();
      ellipse(spotlightX, spotlightY + sin(ang) * 70, 150, 110);
      ang += 0.05;
      spotlightX += 2;
      if (spotlightX > origin + 1300) {
        spotlightX = origin - 1200;
      }
      ellipse(spotlightX2, spotlightY2 + sin(ang2) * 70, 150, 110);
      ang2 += 0.05;
      spotlightX2 += 2;
      if (spotlightX2 > origin + 1300) {
        spotlightX2 = origin - 1200;
      }
      ellipse(spotlightX3, spotlightY3 + sin(ang3) * 70, 150, 110);
      ang3 += 0.05;
      spotlightX3 += 2;
      if (spotlightX3 > origin + 1300) {
        spotlightX3 = origin - 1200;
      }
      fill(125, 125, 125);
      stroke(0);
      rect(0, 300, 600, 100);
      stroke(26, 60, 138);
      strokeWeight(5);
      line(origin - 110, 215, origin + 320, 215);
      line(origin - 625, 325, origin - 110, 215);
      line(origin + 825, 325, origin + 320, 215);
      stroke(195, 203, 219);
      line(origin - 110, 225, origin + 320, 225);
      line(origin - 625, 345, origin - 110, 225);
      line(origin + 825, 345, origin + 320, 225);
      line(origin - 110, 245, origin + 320, 245);
      line(origin - 625, 375, origin - 110, 245);
      line(origin + 825, 375, origin + 320, 245);
      stroke(186, 40, 35);
      line(origin - 110, 235, origin + 320, 235);
      line(origin - 625, 360, origin - 110, 235);
      line(origin + 825, 360, origin + 320, 235);
      fill(151, 160, 146);
      stroke(0);
      strokeWeight(1);
      rect(origin - 120, 200, 10, 70);
      rect(origin + 320, 200, 10, 70);
      fill(123, 199, 249);
      stroke(43, 67, 111);
      strokeWeight(20);
      quad(
        origin - 600,
        400,
        origin - 100,
        270,
        origin + 300,
        270,
        origin + 800,
        400
      );
      noStroke();
      quad(
        origin - 28,
        260,
        origin + 228,
        260,
        origin + 314,
        283,
        origin - 114,
        283
      );
      fill(151, 160, 146);
      stroke(0);
      strokeWeight(1);
      rect(origin - 625, 300, 15, 100);
      rect(origin + 825, 300, 15, 100);
      stroke(43, 67, 111);
      strokeWeight(7);
      line(origin - 60, 264, origin + 260, 264);
      stroke(0);
      strokeWeight(1);
      e[50].enemy(50);
      for (let i = 39; i < 41; i++) {
        c.display(i);
      }
    }

    buffCheck = buff.every((val) => val === false);
    if (!buffCheck) {
      noStroke();
      aura(pX, pY + 30);
      circle(pX, pY + 30, 100);
    }
    p.player(pX, pY);

    //stage 1 overlay
    if (stage[0]) {
      fill(0, 0, 0, 130);
      rect(0, 0, 600, 400);

      for (let i = 0; i < 800; i++) {
        if (!part[2]) {
          s.display(i, 0);
        } else {
          smokesee -= 0.00025;
          s.display(i, smokesee);
          if (smokesee < -25) {
            break;
          }
        }
      }
      for (let i = 0; i < 8; i++) {
        lampLight(houseX + i * 500);
      }
      if (charTimer < 300) {
        let currentString = name[0].substring(0, currentCharacter);
        fill(255);
        textSize(20);
        text(currentString, 30, 70);
        currentCharacter += 0.08;
        charTimer++;
        if (charTimer % 8 == 0 && charTimer < 70) {
          rectMode(CENTER);
          rect(25 + charTimer, 63, 10, 25);
        } else if (
          (charTimer % 40 == 0 || charTimer % 41 == 0) &&
          charTimer >= 70
        ) {
          rectMode(CENTER);
          rect(95, 63, 10, 25);
        }
      }
    }

    //stage 2 overlay
    if (stage[1]) {
      rectMode(CORNER);
      fill(240, 255, 31, 60);
      rect(0, 0, 600, 400);
      for (let i = 0; i < treeHeight.length; i++) {
        fill(61, 36, 23);
        noStroke();
        rect(origin - 500 + i * 700 + treeRand[i] * 2, 0, 75, 600);
        stroke(0);
      }
      noStroke(0);
      light(origin + 1800);
      quad(
        origin + 1790,
        0,
        origin + 1810,
        0,
        origin + 1850,
        374,
        origin + 1750,
        374
      );
      if (charTimer < 300) {
        let currentString = name[1].substring(0, currentCharacter);
        fill(255);
        textSize(20);
        text(currentString, 30, 70);
        currentCharacter += 0.08;
        charTimer++;
        if (charTimer % 8 == 0 && charTimer < 130) {
          rectMode(CENTER);
          rect(25 + charTimer / 1.1, 63, 10, 25);
        } else if (
          (charTimer % 40 == 0 || charTimer % 41 == 0) &&
          charTimer >= 130
        ) {
          rectMode(CENTER);
          rect(145, 63, 10, 25);
        }
      }
    }
    //stage 3 overlay
    if (stage[2]) {
      fill(255, 255, 255, 80);
      rectMode(CORNER);
      rect(0, 0, 600, 400);
      for (let i = 1500; i < 2500; i++) {
        noStroke();
        f[i].display();
      }
      if (charTimer < 300) {
        let currentString = name[2].substring(0, currentCharacter);
        fill(255);
        textSize(20);
        text(currentString, 30, 70);
        currentCharacter += 0.08;
        charTimer++;
        if (charTimer % 8 == 0 && charTimer < 175) {
          rectMode(CENTER);
          rect(25 + charTimer / 1.1, 63, 10, 25);
        } else if (
          (charTimer % 40 == 0 || charTimer % 41 == 0) &&
          charTimer >= 165
        ) {
          rectMode(CENTER);
          rect(185, 63, 10, 25);
        }
      }
    }

    //stage 4 overlay
    if (stage[3]) {
      if (charTimer < 300) {
        let currentString = name[3].substring(0, currentCharacter);
        fill(255);
        noStroke();
        textSize(20);
        text(currentString, 30, 70);
        currentCharacter += 0.08;
        charTimer++;
        if (charTimer % 8 == 0 && charTimer < 60) {
          rectMode(CENTER);
          rect(25 + charTimer / 0.9, 63, 10, 25);
        } else if (
          (charTimer % 40 == 0 || charTimer % 41 == 0) &&
          charTimer >= 60
        ) {
          rectMode(CENTER);
          rect(90, 63, 10, 25);
        }
      }
    }

    //stage 5 overlay
    if (stage[4]) {
      if (charTimer < 300) {
        let currentString = name[4].substring(0, currentCharacter);
        fill(255);
        noStroke();
        textSize(20);
        text(currentString, 30, 70);
        currentCharacter += 0.08;
        charTimer++;
        if (charTimer % 8 == 0 && charTimer < 100) {
          rectMode(CENTER);
          rect(25 + charTimer / 1.2, 63, 10, 25);
        } else if (
          (charTimer % 40 == 0 || charTimer % 41 == 0) &&
          charTimer >= 100
        ) {
          rectMode(CENTER);
          rect(120, 63, 10, 25);
        }
      }
      if (eDeduct[50] >= 50) {
        fill(0, 0, 0, credits)
        credits++;
        rectMode(CORNER)
        rect(0, 0, 600, 400)
        celebrate(pX, pY, "right", "red")
        belt(pX + 23, pY - 23)
        textSize(30)
        fill(random(255), random(255), random(255))
        text("YOU ARE THE CHAMPION", 100, 50)
      }
      if (credits >= 255) {
        screen = "end"
      }
    }

    //stage transitions
    if (transition[3] && fade < 255) {
      fade++;
      thrice = true;
    } else if (fade > 0 && stageChange[2] == 0) {
      fade--;
      stageChange[3]--;
      transition[3] = false;
      stage[3] = false;
      stage[4] = true;
    }
    if (!stageEnd[3] && stage[4]) {
      stageStart[3] = true;
    }
    if (stageStart[3]) {
      for (let i = 0; i < 4; i++) {
        if (i == 0) {
          part[i] = true;
        } else {
          part[i] = false;
        }
      }
      for (let i = 0; i < 4; i++) {
        waves[i] = false;
      }
      for (let i = 32; i < 41; i++) {
        platX[i] = tempPlatX[i];
        realPlatX[i] = platX[i];
      }
      for (let i = 0; i < appleX.length; i++) {
        appleX[i] = tempAppleX[i];
        realAppleX[i] = tempAppleX[i];
      }
      for (let i = 0; i < medX.length; i++) {
        medX[i] = tempMedX[i];
        realMedX[i] = tempMedX[i];
      }
      stageStart[3] = false;
      stageEnd[3] = true;
      boundary1Start = false;
      boundary1End = false;
      boundary2Start = false;
      boundary2End = false;
      origin = 200;
      realOrigin = 200;
      boundary1 = -220;
      realBoundary1 = -220;
      boundary2 = 820;
      realBoundary2 = 820;
      currentCharacter = 0;
      charTimer = 0;
      houseX = -300;
      realHouseX = -300;
      spotlightX = 200;
      spotlightX2 = -300;
      spotlightX3 = 700;
      deduct = 0;
    }
    if (transition[2] && fade < 255) {
      fade++;
      twice = true;
    } else if (fade > 0 && stageChange[1] == 0 && !thrice) {
      fade--;
      stageChange[2]--;
      transition[2] = false;
      stage[2] = false;
      stage[3] = true;
    }
    if (!stageEnd[2] && stage[3]) {
      stageStart[2] = true;
    }
    if (stageStart[2]) {
      for (let i = 0; i < 4; i++) {
        if (i == 0) {
          part[i] = true;
        } else {
          part[i] = false;
        }
      }
      for (let i = 0; i < 4; i++) {
        waves[i] = false;
      }
      for (let i = 32; i < 39; i++) {
        platX[i] = tempPlatX[i];
        realPlatX[i] = platX[i];
      }
      for (let i = 0; i < appleX.length; i++) {
        appleX[i] = tempAppleX[i];
        realAppleX[i] = tempAppleX[i];
      }
      for (let i = 0; i < medX.length; i++) {
        medX[i] = tempMedX[i];
        realMedX[i] = tempMedX[i];
      }
      stageStart[2] = false;
      stageEnd[2] = true;
      boundary1Start = false;
      boundary1End = false;
      boundary2Start = false;
      boundary2End = false;
      origin = 200;
      realOrigin = 200;
      boundary1 = 50;
      realBoundary1 = 50;
      boundary2 = 1600;
      realBoundary2 = 1600;
      currentCharacter = 0;
      charTimer = 0;
      houseX = -300;
      realHouseX = -300;
    }
    if (transition[1] && fade < 255) {
      fade++;
    } else if (fade > 0 && stageChange[0] == 0 && !twice && !thrice) {
      fade--;
      stageChange[1]--;
      transition[1] = false;
      stage[1] = false;
      stage[2] = true;
    }
    if (!stageEnd[1] && stage[2]) {
      stageStart[1] = true;
    }
    if (stageStart[1]) {
      for (let i = 0; i < 4; i++) {
        if (i == 0) {
          part[i] = true;
        } else {
          part[i] = false;
        }
      }
      for (let i = 0; i < 4; i++) {
        waves[i] = false;
      }
      for (let i = 21; i < 32; i++) {
        platX[i] = tempPlatX[i];
        realPlatX[i] = platX[i];
      }
      for (let i = 0; i < appleX.length; i++) {
        appleX[i] = tempAppleX[i];
        realAppleX[i] = tempAppleX[i];
      }
      for (let i = 0; i < medX.length; i++) {
        medX[i] = tempMedX[i];
        realMedX[i] = tempMedX[i];
      }
      stageStart[1] = false;
      stageEnd[1] = true;
      boundary1Start = false;
      boundary1End = false;
      boundary2Start = false;
      boundary2End = false;
      origin = 200;
      realOrigin = 200;
      boundary1 = 50;
      realBoundary1 = 50;
      boundary2 = 1600;
      realBoundary2 = 1600;
      currentCharacter = 0;
      charTimer = 0;
    }
    if (transition[0] && fade < 255) {
      fade++;
    } else if (
      fade > 0 &&
      stageChange != 0 &&
      !transition[1] &&
      !stage[2] &&
      !twice
    ) {
      fade--;
      stageChange[0]--;
      transition[0] = false;
      stage[0] = false;
      stage[1] = true;
    }
    if (!stageEnd[0] && stage[1]) {
      stageStart[0] = true;
    }
    if (stageStart[0]) {
      for (let i = 0; i < 4; i++) {
        if (i == 0) {
          part[i] = true;
        } else {
          part[i] = false;
        }
      }
      for (let i = 0; i < 4; i++) {
        waves[i] = false;
      }
      for (let i = 8; i < 21; i++) {
        platX[i] = tempPlatX[i];
        realPlatX[i] = platX[i];
      }
      for (let i = 0; i < appleX.length; i++) {
        appleX[i] = tempAppleX[i];
        realAppleX[i] = tempAppleX[i];
      }
      for (let i = 0; i < medX.length; i++) {
        medX[i] = tempMedX[i];
        realMedX[i] = tempMedX[i];
      }
      stageStart[0] = false;
      stageEnd[0] = true;
      boundary1Start = false;
      boundary1End = false;
      boundary2Start = false;
      boundary2End = false;
      origin = 200;
      realOrigin = 200;
      boundary1 = 50;
      realBoundary1 = 50;
      boundary2 = 1600;
      realBoundary2 = 1600;
      currentCharacter = 0;
      charTimer = 0;
    }
    fill(0, 0, 0, fade);
    rectMode(CORNER);
    rect(0, 0, 600, 400);
    fill(255);
    if (sceneNum == 1 && part[0]) {
      part[1] = true;
      part[0] = false;
      speachChar = 0;
    } else if (sceneNum == 2 && part[1]) {
      part[2] = true;
      part[1] = false;
      speachChar = 0;
      angry = true;
    } else if (sceneNum >= 3 && part[2]) {
      part[3] = true;
      part[2] = false;
    }
    if (eDeduct[50] < 50) {
      textSize(15)
      fill(255)
      text("Lives: " + lives, 530, 15)
    }
  }
  if (screen == "pause") {
    fill(255)
    textSize(20)
    text("Game paused...", 200, 200)
    if (mouseX >= 250 - playSize / 2 && mouseX <= 297 + playSize / 2 && mouseY >= 230 - playSize / 6 && mouseY <= 250 + playSize / 6) {
      textSize(25)
      playSize = 10
    } else {
      playSize = 0;
    }
    text("Quit", 260 - playSize / 2, 250)
    if (pauseCount == 2) {
      pauseCount = 0;
      screen = "play"
    }
  }
  if (screen == "end") {
    fill(0, 0, 0, credits)
    credits++;
    rectMode(CORNER)
    rect(0, 0, 600, 400)
    celebrate(pX, pY, "right", "red")
    belt(pX + 23, pY - 23)
    textSize(30)
    fill(random(255), random(255), random(255))
    text("YOU ARE THE CHAMPION", 100, 50)
    fill(255)
    textSize(16)
    if (mouseX >= 250 - playSize / 2 && mouseX <= 350 + playSize / 2 && mouseY >= 220 - playSize / 6 && mouseY <= 237 + playSize / 6) {
      textSize(20)
      playSize = 10
    } else {
      playSize = 0
    }
    text("Return to title.", 253 - playSize, 240)
  }
  if (screen == "lose") {
    rectMode(CORNER)
    fill(0, 0, 0, 5)
    rect(0, 0, 600, 400)
    fill(255)
    textSize(20)
    text("You got KO'd.", 230, 150)
    textSize(17)
    if (mouseX >= 130 - playSize / 2 && mouseX <= 266 + playSize / 2 && mouseY >= 213 - playSize / 6 && mouseY <= 232 + playSize / 6) {
      textSize(20)
      playSize = 10
    } else {
      playSize = 0
    }
    text("Try again? (-1 life)", 130 - playSize, 230)
    textSize(17)
    if (mouseX >= 380 - playSize / 2 && mouseX <= 411 + playSize / 2 && mouseY >= 212 - playSize / 6 && mouseY <= 227 + playSize / 6) {
      textSize(20)
      playSize = 10;
    } else {
      playSize = 0;
    }
    text("Quit.", 380 - playSize / 3, 230)
  }
  if (screen == "gameOver") {
    rectMode(CORNER)
    fill(0, 0, 0, 5)
    rect(0, 0, 600, 400)
    fill(255)
    textSize(20)
    text("Game over", 250, 150)
    textSize(16)
    text("You are out of lives.", 230, 200)
    if (mouseX >= 250 - playSize / 2 && mouseX <= 350 + playSize / 2 && mouseY >= 250 - playSize / 6 && mouseY <= 267 + playSize / 6) {
      textSize(20)
      playSize = 10
    } else {
      playSize = 0
    }
    text("Return to title.", 253 - playSize, 270)
  }
}

function mouseClicked() {
  if (
    mouseX >= 225 - playSize / 2 &&
    mouseX <= 375 + playSize / 2 &&
    mouseY >= 325 - playSize / 6 &&
    mouseY <= 375 + playSize / 6 &&
    screen == "intro"
  ) {
    screen = "scene";
  }
  if (
    mouseX >= 130 - playSize / 2 &&
    mouseX <= 266 + playSize / 2 &&
    mouseY >= 213 - playSize / 6 &&
    mouseY <= 232 + playSize / 6 &&
    screen == "lose"
  ) {
    screen = "play";
    deduct = 15;
    lives--
  }
  if (mouseX >= 250 - playSize / 2 && mouseX <= 297 + playSize / 2 && mouseY >= 230 - playSize / 6 && mouseY <= 250 + playSize / 6 && screen == "pause") {
    screen = "intro"
    resetSketch()
  }
  if (mouseX >= 380 - playSize / 2 && mouseX <= 411 + playSize / 2 && mouseY >= 212 - playSize / 6 && mouseY <= 227 + playSize / 6 && screen == "lose") {
    screen = "intro"
    resetSketch()
  }
  if (mouseX >= 250 - playSize / 2 && mouseX <= 350 + playSize / 2 && mouseY >= 250 - playSize / 6 && mouseY <= 267 + playSize / 6 && screen == "gameOver") {
    screen = "intro"
    resetSketch()
  }
  if (mouseX >= 250 - playSize / 2 && mouseX <= 350 + playSize / 2 && mouseY >= 220 - playSize / 6 && mouseY <= 237 + playSize / 6 && screen == "end") {
    screen = "intro"
    resetSketch()
  }
  if (screen == "scene") {
    screenCount++;
  }
  if (screen == "scene" && screenCount >= 6) {
    screen = "play";
  }
  if (stage[4] && screen == "play") {
    sceneNum++;
  }
}

function keyReleased() {
  if (stage[4]) {
    sceneNum++;
  }
  if (screen == "scene" && keyCode == 37 && screenCount != 1) {
    screenCount--;
  }
  if (screen == "play" && keyCode == 27 && pauseCount == 0) {
    pauseCount++;
  }
  if (screen == "pause" && keyCode == 27 && pauseCount == 1) {
    pauseCount++;
  }
}

function resetSketch() {
  credits = 0;
  pauseCount = 0;
  //PLAYER VARIABLES
 direction = "right";
 pX = 200;
 pY = 300;
 lives = 3;
//idle variables
 idleTimer = 0;
//run variables
 runTimer = 0;
 pSpeed = 4;
 runLeft = false;
 runRight = false;
//jump variables
 a = -10;
 jump = false;
 after = false;
 airtime = 0;
//punch variables
 timerR = 0;
 timerL = 0;
 punchR = false;
 punchL = false;
 combo = false;
 comboTimer = 0;
 punchDiff = 0;
//block variables
 blockTimer = 0;
 block = false;
// player damaged variables
 damage = false;
 hit = false;
 hitInd = false;
 deduct = 0;
 damageTimer = 0;

//ENEMY VARIABLES
 enemyNum = 51;
 e = [];
 eX = [
  -50,
  650,
  -50,
  -70,
  650,
  -80,
  680,
  -50,
  650,
  -250,
  -200,
  -150,
  -100,
  700,
  750,
  800,
  850,
  -150,
  -75,
  700,
  -170,
  -150,
  -100,
  700,
  750,
  -100,
  700,
  -100,
  700,
  -100,
  700,
  -100,
  700,
  750,
  -100,
  -200,
  700,
  -100,
  -170,
  -250,
  700,
  800,
  -100,
  -200,
  -500,
  -800,
  -1200,
  -1300,
  -1500,
  -2000,
  400,
];
 eColour = "gray";
//enemy damaged variables
 killcount = 0;
//enemy fight variables
 eFightingCheck = false;
 platX = [500, 700, 900, 1700, 1950, 2200, 2900, 3100,
            800, 1000, 1200, 1800, 2200, 2800, 3000, 3200, 3400, 3600, 4200, 4500, 4800,
            1000, 1200, 2300, 3400, 3300, 3200, 3200, 3100, 3000, 3900, 4200,
            1000, 1300, 2400, 2400, 2800, 2000, 3800,
            100, 500];
 platY = [300, 250, 300, 275, 275, 275, 275, 200,
            300, 275, 300, 275, 275, 275, 300, 275, 300, 275, 250, 300, 250,
            275, 275, 250, 300, 200, 100, 300, 200, 100, 250, 250,
            250, 300, 275, 170, 200, 200, 250, 
            275, 275];
 platLength = [100, 200, 100, 100, 100, 100, 200, 200,
                 150, 150, 150, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
                 100, 100, 250, 100, 100, 100, 100, 100, 100, 200, 200, 
                200, 175, 450, 250, 150, 150, 350,
                 200, 200];
 platNum = 41;
 fall = false;
  
//screen
 screen = "intro";
 screenCount = 0;

//buttons
 playSize = 0;

//boundary
 origin = 200;
 realOrigin = 200;
 boundary1 = -370;
 realBoundary1 = -370;
 boundary1Start = false;
 boundary1End = false;
 boundary2 = 1200;
 realBoundary2 = 1200;
 boundary2Start = false;
 boundary2End = false;
 part = [];

//stages
 stage = [];
 stageStart = [];
 stageEnd = [];
 stageChange = [];
 transition = [];
 fade = 0;
 twice = false;
 thrice = false;
 name = ["Home", "The Forest", "The Mountains", "Away", "The Ring"];
 currentCharacter = 0;
 charTimer = 0;

//waves of enemies;
 waves = [];

//healing
 medX = [2000, 3000, 3000, 3500];
 tempMedX = [];
 medY = [358, 358, 358, 358];
 realMedX = [];
 usedMed = [];
 heal = false;

//buff
 appleX = [2000, 2400, 400, 0, 0, 0, 0];
 realAppleX = [];
 tempAppleX = [];
 appleY = [314, 190, 250, 0, 0, 0, 0];
 usedApple = [];
 buffTimer = [];
 buff = [];
 buffCheck = false;

//snowball launcher
 l = [];
 launchX = [1500, 2600, 2400, 3450, 3350, 3250, 2900, 2800, 4100];
 realLaunchX = [];
 launchY = [350, 350, 230, 277, 177, 77, 353, 177, 353];
 launchTimer = [];
 shoot = [];
 balls = [];
 launchNum = 9;
 collide = false;

//boss
 speach = [
  "...",
  "So you've managed to\ndefeat my henchmen...",
  "I guess I'll have to\nbeat you up myself.",
];
 speachChar = 0;
 sceneNum = 0;
 angry = false;
 appleAccel = -10;
 bossDiff = 0;
 bossHit = false;
 bossShake = 0;
 bossShakeTimer = 0;
 appleTimer = 0;
 appleFade = [];
 disappear = [];

//background for title
 bagAng = 0;

//background scenery for stage 1
 houseX = -300;
 realHouseX = -300;
 houseHeight = [];
 trashX = -500;
 realTrashX = -500;
 trashRNG = [];
 pavementX = -600;
 realPavementX = -600;
 smokeX = [];
 realSmokeX = 300;
 smokeXOff = 100;
 smokeY = [];
 smokeYOff = 300;
 smokeSize = [];
 smokesee = 0;
 mountainX = [];
 mountainY = [];

//background scenery for stage 2
 treeHeight = [];
 treeRand = [];
 treeTrunkCol = [];
 treeLeafCol = [];

//background scenery for stage 3
 snowX = [];
 snowXOff = [];
 snowY = [];
 snowSize = [];
 f = [];

//background scenery for stage 4
 cloudX = [];
 cloudY = [];
 cloudL = [];
 cloudW = [];
 cloudSpeed = [];

//background scenery for stage 5
 audienceTimer = 0;
 spotlightX = 200;
 spotlightY = 100;
 ang = 0;
 spotlightX2 = -300;
 spotlightY2 = 150;
 ang2 = 0;
 spotlightX3 = 700;
 spotlightY3 = 50;
 ang3 = 0;
  
  for (let i = 0; i < 5; i++) {
    stageStart[i] = false;
    stageEnd[i] = false;
    stageChange[i] = 255;
    transition[i] = false;
    if (i == 0) {
      stage[i] = true;
    } else {
      stage[i] = false;
    }
  }
  for (let i = 0; i < 4; i++) {
    if (i == 0) {
      part[i] = true;
    } else {
      part[i] = false;
    }
  }
  for (let i = 0; i < 2500; i++) {
    snowX[i] = random(-300, 600);
    snowXOff[i] = snowX[i];
    snowY[i] = random(-600, 0);
    snowSize[i] = random(1, 5);
    f[i] = new Snowfall(snowX[i], snowY[i], i);
  }
  for (let i = 0; i < launchNum; i++) {
    realLaunchX[i] = launchX[i];
    launchTimer[i] = 0;
    shoot[i] = false;
    l[i] = new Launcher(launchX[i], launchY[i]);
  }
  for (let i = 0; i < 16; i++) {
    houseHeight[i] = random(100);
  }
  for (let i = 0; i < 600; i++) {
    mountainX[i] = 0 + i * 2;
    mountainY[i] = map(noise(200 + i / 90), 0, 1, 70, 300);
  }
  for (let i = 0; i < 7; i++) {
    trashRNG[i] = random(100, 300);
  }
  for (let i = 0; i < enemyNum; i++) {
    e[i] = new Entity();
    eA[i] = -10;
    eJump[i] = false;
    eAfter[i] = false;
    eFall[i] = false;
    eDamage[i] = false;
    eHit[i] = false;
    eFighting[i] = false;
    killcountStart[i] = false;
    killcountEnd[i] = false;
    blockTrue[i] = true;
    eAirtime[i] = 0;
    eIdleTimer[i] = 0;
    eRunTimer[i] = 0;
    ePunchTimer[i] = 0;
    eDamageTimer[i] = 0;
    eDeduct[i] = 0;
    eY[i] = 300;
    if (i >= 0 && i < 7) {
      eSpeed[i] = random(1, 2);
    } else if (i >= 7 && i < 50) {
      eSpeed[i] = random(3, 4.5);
    } else {
      eSpeed[i] = 4;
    }
    eDirection[i] = "left";
    realEX[i] = eX[i];
    let ePlatJump = [];
    for (let j = 0; j < platNum; j++) {
      ePlatJump.push(false);
    }
    ePlatJumpCount.push(ePlatJump);
  }
  for (let i = 0; i < platNum; i++) {
    platJump[i] = false;
    realPlatX[i] = platX[i];
    tempPlatX[i] = platX[i];
  }
  for (let i = 0; i < 4; i++) {
    waves[i] = false;
  }
  for (let i = 0; i < medX.length; i++) {
    tempMedX[i] = medX[i];
    realMedX[i] = medX[i];
    usedMed[i] = false;
  }
  for (let i = 3; i < appleX.length; i++) {
    appleX[i] = random(-220, 820);
    appleY[i] = random(200, 300);
  }
  for (let i = 0; i < appleX.length; i++) {
    realAppleX[i] = appleX[i];
    tempAppleX[i] = appleX[i];
    usedApple[i] = false;
    appleFade[i] = 255;
    buffTimer[i] = 0;
    buff[i] = false;
    disappear[i] = false;
  }
  for (let i = 0; i < 1200; i++) {
    smokeSize[i] = random(10, 30);
  }
  for (let i = 0; i < 500; i++) {
    treeHeight[i] = random(80);
    treeTrunkCol[i] = round(random(1, 4));
    treeLeafCol[i] = round(random(1, 3));
  }
  for (let i = 0; i < treeHeight.length * 5; i++) {
    treeRand[i] = random(-30, 30);
    if (i % 5 == 0) {
      treeRand[i] = random(50, 55);
    }
  }
  for (let i = 0; i < 5; i++) {
    cloudX[i] = random(0, 900);
    cloudY[i] = random(50, 160);
    cloudL[i] = random(40, 80);
    cloudW[i] = random(25, 65);
    cloudSpeed[i] = random(1, 2);
  }
  p = new Entity(200, 300);
  c = new Platform();
  m = new Med();
  apple = new Apple();
  s = new Smoke();
}

function nightSky() {
  let ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(300, 0, 300, 374);
  gradient.addColorStop(0, color(23, 29, 38));
  gradient.addColorStop(1, color(171, 110, 44));
  ctx.fillStyle = gradient;
}

function morningSky() {
  let ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(300, 100, 300, 500);
  gradient.addColorStop(0, color(36, 168, 255));
  gradient.addColorStop(1, color(227, 227, 11));
  ctx.fillStyle = gradient;
}

function snowSky() {
  let ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(300, -100, 300, 400);
  gradient.addColorStop(0, color(177, 200, 224));
  gradient.addColorStop(1, color(116, 129, 143));
  ctx.fillStyle = gradient;
}

function afternoonSky() {
  let ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(300, -100, 300, 400);
  gradient.addColorStop(0, color(35, 145, 235));
  gradient.addColorStop(1, color(125, 196, 255));
  ctx.fillStyle = gradient;
}

function light(x) {
  let ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(x, 174, x, 374);
  gradient.addColorStop(0, color(230, 186, 67, 200));
  gradient.addColorStop(1, color(230, 186, 67, 5));
  ctx.fillStyle = gradient;
}

function Med() {
  this.display = function (z) {
    if (!usedMed[z]) {
      if (dist(pX, 0, medX[z], 0) < 45 && dist(0, pY, 0, medY[z]) < 60) {
        heal = true;
      } else {
        let meddx = realMedX[z] - medX[z];
        medX[z] += meddx * 0.05;
        rectMode(CENTER);
        fill(255, 245, 247);
        ellipse(medX[z], medY[z] - 12, 20, 20);
        noFill();
        ellipse(medX[z], medY[z] - 12, 12, 12);
        fill(255, 245, 247);
        rect(medX[z], medY[z], 40, 30, 10);
        fill(240, 7, 54);
        beginShape();
        vertex(medX[z] - 2, medY[z] - 7);
        vertex(medX[z] + 2, medY[z] - 7);
        vertex(medX[z] + 2, medY[z] - 2);
        vertex(medX[z] + 7, medY[z] - 2);
        vertex(medX[z] + 7, medY[z] + 3);
        vertex(medX[z] + 2, medY[z] + 3);
        vertex(medX[z] + 2, medY[z] + 8);
        vertex(medX[z] - 2, medY[z] + 8);
        vertex(medX[z] - 2, medY[z] + 3);
        vertex(medX[z] - 7, medY[z] + 3);
        vertex(medX[z] - 7, medY[z] - 2);
        vertex(medX[z] - 2, medY[z] - 2);
        vertex(medX[z] - 2, medY[z] - 7);
        endShape();
      }
    }
    if (heal) {
      heal = false;
      usedMed[z] = true;
      if (deduct < 25) {
        deduct = 0;
      } else {
        deduct -= 25;
      }
    }
  };
}

function Apple() {
  this.display = function (z) {
    if (!usedApple[z]) {
      if (
        (dist(pX, 0, appleX[z] + origin - 200, 0) < 40 &&
          dist(0, pY + 30, 0, appleY[z]) < 55) ||
        disappear[z]
      ) {
        if (!disappear[z]) {
          buff[z] = true;
        }
      } else {
        //let appledx = realAppleX[z] - appleX[z];
        //appleX[z] += appledx * 0.05;
        push();
        translate(appleX[z] + origin - 200, appleY[z]);
        noStroke();
        fill(204, 55, 51, appleFade[z]);
        circle(0, 0, 30);
        strokeWeight(4);
        stroke(78, 38, 0, appleFade[z]);
        line(1, -10, 3, -18);
        noStroke();
        rotate(radians(70));
        fill(39, 166, 21, appleFade[z]);
        ellipse(-16, 2, 9, 6);
        pop();
      }
    }
    if (buff[z]) {
      usedApple[z] = true;
      buffTimer[z]++;
      if (buffTimer[z] < 700) {
        pSpeed = 7;
        punchDiff = 6.5;
      } else {
        buff[z] = false;
        buffTimer[z] = 0;
        pSpeed = 4;
        punchDiff = 0;
      }
    }
  };
}

function aura(x, y) {
  let ctx = canvas.getContext("2d");
  let gradient = ctx.createRadialGradient(x, y, 0, x, y, 50);
  gradient.addColorStop(0, color(230, 186, 67, 200));
  gradient.addColorStop(1, color(230, 186, 67, 0));
  ctx.fillStyle = gradient;
}

function spotlight() {
  let ctx = canvas.getContext("2d");
  let gradient = ctx.createRadialGradient(200, 800, 0, 200, 800, 100);
  gradient.addColorStop(0, color(255, 250, 110, 120));
  gradient.addColorStop(1, color(255, 250, 110, 0));
  ctx.fillStyle = gradient;
}

function Smoke() {
  this.display = function (i, z) {
    let smokedx = realSmokeX - this.x;
    this.x += smokedx * 0.05;
    this.x = realSmokeX + map(noise(smokeXOff + i), 0, 1, -1500, 4500);
    this.y = map(noise(smokeYOff + i), 0, 1, 300, 400);
    smokeXOff += 0.0000002;
    smokeYOff += 0.000003;
    fill(59, 58, 58, 25 + z);
    noStroke(0);
    ellipse(this.x, this.y, smokeSize[i], smokeSize[i]);
  };
}

function Snowfall(x, y, i) {
  this.y = y;
  this.display = function () {
    this.x = map(noise(snowXOff[i]), 0, 1, -1000, 5000);
    snowXOff[i] += 0.0002;
    fill(255);
    circle(this.x + origin - 200, this.y, snowSize[i]);
    this.y++;
    if (this.y > 374) {
      this.y = random(-600, 0);
    }
  };
}

function Launcher() {
  this.display = function (x, y) {
    rand = random(-2, 2);
    stroke(0);
    fill(140, 149, 163);
    quad(x - 30, y - 20, x - 10, y - 20, x + 5, y + 20, x - 45, y + 20);
    rectMode(CENTER);
    fill(173, 173, 173);
    rect(x - 35, y - 5, 30, 15, 9);
    fill(138, 138, 138);
    ellipse(x - 45, y - 5, 12, 12);
    fill(173, 183, 199);
    quad(x - 10, y - 20, x + 10, y - 20, x + 25, y + 20, x - 25, y + 20);
    fill(255);
    for (let i = 0; i < 10; i++) {
      if (i < 2) {
        circle(x - 14 + i * 12 + rand, y - 49, 12);
      } else if (i < 5) {
        circle(x - 45 + i * 12 + rand, y - 41, 12);
      } else if (i < 9) {
        circle(x - 87 + i * 12 + rand, y - 33, 12);
      }
    }
    fill(140, 149, 163);
    quad(
      x - 30 + rand,
      y - 20,
      x - 10 + rand,
      y - 20,
      x - 5 + rand,
      y - 30,
      x - 35 + rand,
      y - 30
    );
    fill(173, 183, 199);
    quad(
      x - 10 + rand,
      y - 20,
      x + 10 + rand,
      y - 20,
      x + 15 + rand,
      y - 30,
      x - 15 + rand,
      y - 30
    );
  };

  this.update = function (x, y, i) {
    launchTimer[i]++;
    if (launchTimer[i] % 120 == 0) {
      shoot[i] = true;
      let b = new Snowball(x - 45, y - 5, i);
      balls.push(b);
    } else {
      shoot[i] = false;
    }
  };
}

function Snowball(x, y, i) {
  this.x = x;
  this.y = y;
  this.display = function () {
    if (keyIsDown(37) || keyIsDown(65)) {
      this.x -= 4;
    } else if (keyIsDown(39) || keyIsDown(68)) {
      this.x -= 8;
    } else {
      this.x -= 6;
    }
    fill(255);
    circle(this.x, this.y, 18);
    if (dist(this.x, 0, pX, 0) < 31 && dist(0, this.y, 0, pY + 30) < 55) {
      collide = true;
    } else {
      collide = false;
    }
  };
}

function house(x, y, z, away) {
  if (away) {
    let yScale = map(y, 0, 400, y, 374);
    fill(255, 79, 66);
    stroke(48, 26, 16);
    triangle(x - 200, y, x, y - 180, x + 200, y);
    quad(x - 155, y, x + 155, y, x + 155, 374, x - 155, 374);
    rectMode(CORNER);
    /*
    fill(74, 46, 33);
    rect(x + 100, 319, 50, 10);
    rect(x + 100, 339, 50, 10)
    beginShape();
    vertex(x + 125, 304);
    vertex(x + 130, 314);
    vertdx(x + 130, 374);
    vertex(x + 120, 374);
    vertex(x + 120, 314);
    vertex(x + 125, 304);
    endShape();
    */
    stroke(255, 201, 212);
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 15; j++) {
        if (i % 2 == 0) {
          line(x - 150 + j * 20, y + i * 10, x - 150 + j * 20, y + 10 + i * 10);
        } else {
          line(x - 140 + j * 20, y + i * 10, x - 140 + j * 20, y + 10 + i * 10);
        }
      }
    }
    for (let i = 0; i < 50; i++) {
      line(x - 154, y + 10 + 10 * i, x + 154, y + 10 + 10 * i);
    }
    rectMode(CENTER);
    fill(184, 76, 64);
    stroke(0);
    arc(x - 100, yScale - 25, 60, 40, radians(180), radians(0));
    arc(x + 100, yScale - 25, 60, 40, radians(180), radians(0));
    fill(163, 144, 142);
    stroke(0);
    rect(x - 100, yScale + 30, 60, 10);
    rect(x + 100, yScale + 30, 60, 10);
    fill(166, 200, 255);
    stroke(53, 58, 66);
    rect(x - 100, yScale, 50, 50);
    rect(x + 100, yScale, 50, 50);
    fill(163, 142, 134);
    rect(x - 100, yScale, 50, 4);
    rect(x - 100, yScale, 4, 50);
    rect(x + 100, yScale, 50, 4);
    rect(x + 100, yScale, 4, 50);
    if (y < 100) {
      fill(184, 76, 64);
      stroke(0);
      arc(x - 100, yScale + 105, 60, 40, radians(180), radians(0));
      arc(x + 100, yScale + 105, 60, 40, radians(180), radians(0));
      fill(163, 144, 142);
      stroke(0);
      rect(x - 100, yScale + 160, 60, 10);
      rect(x + 100, yScale + 160, 60, 10);
      fill(166, 200, 255);
      stroke(53, 58, 66);
      rect(x - 100, yScale + 130, 50, 50);
      rect(x + 100, yScale + 130, 50, 50);
      fill(163, 142, 134);
      rect(x - 100, yScale + 130, 50, 4);
      rect(x - 100, yScale + 130, 4, 50);
      rect(x + 100, yScale + 130, 50, 4);
      rect(x + 100, yScale + 130, 4, 50);
    }
    fill(79, 46, 43);
    rect(x, 324, 60, 100);
    fill(46, 46, 48);
    ellipse(x + 21, 329, 10, 10);
    fill(31, 125, 41);
    noStroke();
    rect(x + 300, 368, 290, 12);
    tree(origin - 1760 + z * 600 + treeRand[z] * 2, z);
    tree(
      origin - 1670 + z * 600 + treeRand[z + 1] * 2 - treeRand[z] * 2,
      z + 5
    );
  } else {
    let yScale = map(y, 0, 400, y, 374);
    fill(107, 59, 36);
    stroke(48, 26, 16);
    quad(x - 100, y, x + 100, y, x + 100, 374, x - 100, 374);
    quad(x - 105, y - 10, x + 105, y - 10, x + 105, y, x - 105, y);
    rectMode(CORNER);
    fill(74, 46, 33);
    rect(x + 100, 319, 50, 10);
    rect(x + 100, 339, 50, 10);
    beginShape();
    vertex(x + 125, 304);
    vertex(x + 130, 314);
    vertex(x + 130, 374);
    vertex(x + 120, 374);
    vertex(x + 120, 314);
    vertex(x + 125, 304);
    endShape();
    stroke(135, 68, 36);
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 10; j++) {
        if (i % 2 == 0) {
          line(x - 80 + j * 20, y + i * 10, x - 80 + j * 20, y + 10 + i * 10);
        } else {
          line(x - 90 + j * 20, y + i * 10, x - 90 + j * 20, y + 10 + i * 10);
        }
      }
    }
    for (let i = 0; i < 50; i++) {
      line(x - 100, y + 10 + 10 * i, x + 100, y + 10 + 10 * i);
    }
    fill(26, 25, 25);
    stroke(0);
    rectMode(CENTER);
    rect(x - 60, yScale, 40, 40);
    rect(x + 60, yScale, 40, 40);
    if (y < 100) {
      rect(x - 60, yScale + 100, 40, 40);
      rect(x + 60, yScale + 100, 40, 40);
    }
    if (z == 2) {
      fill(0);
      rect(x, 324, 60, 100);
    } else {
      fill(82, 72, 69);
      rect(x, 324, 60, 100);
      fill(46, 46, 48);
      ellipse(x + 21, 329, 10, 10);
    }
  }
}

function lamp(x) {
  rectMode(CENTER);
  fill(92, 92, 92);
  stroke(0);
  rect(x + 140, 274, 8, 200);
}

function lampLight(x) {
  fill(92, 92, 92);
  arc(x + 140, 174, 30, 20, radians(180), radians(0), OPEN);
  noStroke();
  light(x);
  quad(x + 125, 174, x + 155, 174, x + 205, 374, x + 75, 374);
  fill(0);
  stroke(0);
}

function roadblock(x) {
  rectMode(CENTER);
  fill(130, 129, 129);
  rect(x - 40, 314, 5, 10);
  rect(x + 40, 314, 5, 10);
  rect(x - 40, 344, 10, 60);
  rect(x + 40, 344, 10, 60);
  fill(255, 128, 0, 200);
  noStroke();
  circle(x - 40, 303, 19);
  circle(x + 40, 303, 19);
  stroke(0);
  fill(255, 128, 0);
  circle(x - 40, 303, 12);
  circle(x + 40, 303, 12);
  fill(255, 183, 0);
  rect(x, 324, 100, 10);
  rect(x, 344, 100, 10);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 2; j++) {
      strokeWeight(3);
      line(x - 48 + i * 10, 321 + j * 20, x - 43 + i * 10, 327 + j * 20);
      strokeWeight(1);
    }
  }
  stroke(255);
  fill(224, 45, 36);
  rect(x, 334, 40, 28, 5);
  noStroke();
  fill(255);
  textSize(8);
  text("ROAD", x - 11, 329);
  text("BLOCKED", x - 19, 339);
  stroke(0);
}

function sign(x, type) {
  if (type == "forest") {
    rectMode(CORNER);
    stroke(0);
    fill(172, 173, 172);
    rect(x - 5, 299, 10, 100);
    rectMode(CENTER);
    stroke(255);
    fill(50, 168, 82);
    rect(x, 274, 85, 50, 5);
    noStroke();
    textSize(12);
    fill(255);
    text("THIS WAY TO", x - 39, 264);
    text("THE FOREST", x - 38, 279);
    rect(x - 10, 289, 30, 5);
    triangle(x + 5, 284, x + 15, 289, x + 5, 294);
    stroke(0);
  } else if (type == "mountain") {
    rectMode(CORNER);
    stroke(0);
    fill(172, 173, 172);
    rect(x - 5, 299, 10, 100);
    rectMode(CENTER);
    stroke(255);
    fill(116, 168, 252);
    rect(x, 274, 105, 60, 5);
    noStroke();
    textSize(12);
    fill(255);
    text("THIS WAY TO", x - 41, 264);
    text("THE MOUNTAINS", x - 51, 279);
    rect(x - 10, 289, 30, 5);
    triangle(x + 5, 284, x + 15, 289, x + 5, 294);
    stroke(0);
  } else if (type == "stadium") {
    strokeWeight(1);
    rectMode(CORNER);
    stroke(0);
    fill(172, 173, 172);
    rect(x - 5, 299, 10, 100);
    rectMode(CENTER);
    stroke(255);
    fill(235, 52, 128);
    rect(x, 274, 105, 60, 5);
    noStroke();
    textSize(12);
    fill(255);
    text("THIS WAY TO", x - 39, 264);
    text("THE STADIUM", x - 38, 279);
    rect(x - 10, 289, 30, 5);
    triangle(x + 5, 284, x + 15, 289, x + 5, 294);
    stroke(0);
  }
}

function factory(x, type) {
  if (type == "long") {
    rectMode(CORNER);
    fill(105, 105, 105);
    rect(x + 10, 220, 10, 30);
    rect(x + 30, 235, 7, 15);
    rect(x, 250, 100, 50);
    for (let i = 0; i < 4; i++) {
      fill(252, 195, 38);
      rect(x + 10 + i * 22, 260, 10, 10);
    }
  } else if (type == "tall") {
    fill(84, 84, 84);
    rect(x + 10, 200, 10, 25);
    rect(x, 225, 50, 75);
    for (let i = 0; i < 2; i++) {
      fill(252, 195, 38);
      rect(x + 10 + i * 23, 235, 7, 7);
    }
  } else if (type == "big") {
    fill(48, 48, 48);
    beginShape();
    vertex(x, 200);
    vertex(x + 100, 200);
    vertex(x + 100, 230);
    vertex(x + 150, 230);
    vertex(x + 150, 300);
    vertex(x, 300);
    vertex(x, 200);
    endShape();
    rect(x + 10, 180, 10, 20);
    rect(x + 25, 190, 7, 10);
    rect(x + 130, 210, 6, 20);
    for (let i = 0; i < 4; i++) {
      fill(252, 195, 38);
      rect(x + 15 + i * 20, 215, 10, 10);
    }
  }
}

function trash(x) {
  fill(61, 58, 55);
  ellipse(x, 310, 10, 10);
  quad(x - 25, 314, x + 25, 314, x + 20, 374, x - 20, 374);
  line(x - 20, 314, x - 15, 374);
  line(x - 9, 314, x - 6, 374);
  line(x, 314, x, 374);
  line(x + 9, 314, x + 6, 374);
  line(x + 20, 314, x + 15, 374);
  quad(x - 28, 310, x + 28, 310, x + 28, 314, x - 28, 314);
}

function tree(x, z) {
  fill(0);
  rectMode(CORNER);
  stroke(107, 64, 42);
  if (treeTrunkCol[z] == 1) {
    fill(145, 88, 58);
  } else if (treeTrunkCol[z] == 2) {
    fill(130, 70, 38);
  } else if (treeTrunkCol[z] == 3) {
    fill(79, 56, 44);
  } else if (treeTrunkCol[z] == 4) {
    fill(69, 35, 17);
  }
  rect(x, 100 - treeHeight[z], 20, 274 + treeHeight[z]);
  noStroke();
  if (treeLeafCol[z] == 1) {
    fill(59, 133, 52, 200);
  } else if (treeLeafCol[z] == 2) {
    fill(31, 84, 26, 200);
  } else if (treeLeafCol[z] == 3) {
    fill(62, 99, 59, 200);
  }
  ellipse(x + treeRand[z], 100 - treeHeight[z] + treeRand[z], 70, 70);
  ellipse(x + treeRand[z + 1], 120 - treeHeight[z] + treeRand[z + 1], 100, 100);
  ellipse(x + treeRand[z + 2], 110 - treeHeight[z] + treeRand[z + 2], 75, 75);
  ellipse(x + treeRand[z + 3], 80 - treeHeight[z] + treeRand[z + 3], 125, 125);
  ellipse(
    x + treeRand[z + 4],
    200 - treeHeight[z] + treeRand[z + 4] * 2,
    65,
    65
  );
}

function audience(x, y, z) {
  strokeWeight(4);
  stroke(0);
  rectMode(CENTER);
  fill(122, 66, 66);
  rect(x, y + 25, 48, 50, 14);
  fill(189, 189, 189);
  rectMode(CORNER);
  rect(x - 17.5, y + 10 - z, 35, 40 + z, 8);
  circle(x, y - z, 25);
  strokeWeight(1);
}

function drawCloud(x, y, l, w) {
  fill(235, 235, 235, 240);
  noStroke();
  ellipse(x, y, 75, 85);
  ellipse(x - 30, y + 18, l, w);
  ellipse(x + 35, y + 15, l + 10, w + 10);
  ellipse(x + 60, y + 15, l - 10, w - 15);
}

function houseMap(x, y) {
  stroke(20);
  strokeWeight(2);
  fill(51, 26, 0);
  rect(x, y, 60, 58);

  //lining
  //1st
  rect(x, y, 20, 15);
  rect(x + 20, y, 20, 15);
  rect(x + 40, y, 20, 15);
  //2nd
  rect(x, y + 15, 10, 15);
  rect(x + 10, y + 15, 20, 15);
  rect(x + 30, y + 15, 20, 15);
  rect(x + 50, y + 15, 10, 15);
  //3rd
  rect(x, y + 30, 20, 15);
  rect(x + 20, y + 30, 20, 15);
  rect(x + 40, y + 30, 20, 15);
  //4th
  rect(x, y + 45, 10, 15);
  rect(x + 10, y + 45, 20, 15);
  rect(x + 30, y + 45, 20, 15);
  rect(x + 50, y + 45, 10, 15);

  //window
  noStroke();
  fill(179, 224, 255);
  rect(x + 5, y + 10, 20, 20);
  rect(x + 35, y + 10, 20, 20);
  stroke(20);
  line(x + 15, y + 10, x + 15, y + 30);
  line(x + 5, y + 20, x + 25, y + 20);
  line(x + 35, y + 20, x + 55, y + 20);
  line(x + 45, y + 10, x + 45, y + 30);

  //door
  fill(26, 13, 0);
  noStroke();
  rect(x + 20, y + 35, 20, 25);
  fill("yellow");
  circle(x + 35, y + 50, 3);
}

function treeMap(x, y) {
  noStroke();
  fill(77, 38, 0);
  rect(x, y, 20, 50);
  //leaf
  fill(0, 77, 0);
  circle(x + 10, y - 10, 40);
  circle(x - 10, y, 40);
  circle(x + 30, y, 40);
}

function mountain(x, y) {
  fill(92, 92, 138);
  beginShape();
  vertex(x, y);
  vertex(x - 45, y + 70);
  vertex(x + 45, y + 70);
  endShape();
  beginShape();

  beginShape();
  vertex(x + 40, y + 25);
  vertex(x + 5, y + 70);
  vertex(x + 75, y + 70);
  endShape();

  fill(200);
  beginShape();
  vertex(x - 12, y + 20);
  vertex(x, y + 45);
  vertex(x + 28, y + 40);
  vertex(x + 42, y + 53);
  vertex(x + 55, y + 45);
  vertex(x + 40, y + 25);
  vertex(x + 28, y + 40);
  vertex(x, y + 2);
  endShape();
}

function stadHouse(x, y) {
  fill(26, 13, 0);
  rect(x, y, 35, 35);
  fill(77, 51, 0);
  beginShape();
  vertex(x + 17, y - 25);
  vertex(x - 10, y);
  vertex(x + 45, y);
  endShape();
}

function belt(x, y) {
  stroke(84, 57, 3)
  fill(23, 22, 20)
  ellipse(x, y, 26, 20)
  quad(x - 28, y - 5, x - 8, y - 8, x - 8, y + 8, x - 28, y + 5)
  quad(x + 28, y - 5, x + 8, y - 8, x + 8, y + 8, x + 28, y + 5)
  fill(250, 192, 75)
  ellipse(x, y, 20, 18)
  ellipse(x, y, 16.2, 14.58)
}