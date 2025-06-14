//PLAYER VARIABLES
let direction;
let pX;
let pY;
let lives;
//idle variables
let idleTimer;
//run variables
let runTimer;
let pSpeed;
let runLeft;
let runRight;
//jump variables
let a;
let jump;
let after;
let airtime;
//punch variables
let timerR;
let timerL;
let punchR;
let punchL;
let combo;
let comboTimer;
let punchDiff;
//block variables
let blockTimer;
let block;
let blockTrue = [];
let blockCheck;
// player damaged variables
let damage;
let hit;
let hitInd;
let deduct;
let damageTimer;

//ENEMY VARIABLES
let enemyNum;
let e = [];
let eX = [];
let realEX = [];
let eY = [];
let eColour;
let eDirection = [];
let eSpeed = [];
//enemy damaged variables
let eDamage = [];
let eDeduct = [];
let eHit = [];
let killcount;
let killcountStart = [];
let killcountEnd = [];
//enemy timers
let eIdleTimer = [];
let eRunTimer = [];
let ePunchTimer = [];
let eDamageTimer = [];
//enemy jump variables
let eA = [];
let eJump = [];
let eAfter = [];
let eAirtime = [];
//enemy fight variables
let eFighting = [];
let eFightingCheck;

function Entity(x, y) {
  this.player = function () {
    let pdx = 200 - pX;
    pX += pdx * 0.05;
    rectMode(CENTER);
    stroke(0);
    noFill();
    rect(pX, pY - 20, 50, 3);
    noStroke();
    fill(0, 255, 0);
    quad(
      pX - 25,
      pY - 21.5,
      pX + 25 - deduct,
      pY - 21.5,
      pX + 25 - deduct,
      pY - 18.5,
      pX - 25,
      pY - 18.5
    );
    if (eDeduct[50] < 50) {
      if (stage[4] && !part[4]) {
        stroke(1);
        if (!jump && !keyIsDown(16)) {
          if (idleTimer <= 15) {
            idleTimer++;
            pIdle1(pX, pY, direction, "red", hit);
          } else if (idleTimer > 15 && idleTimer <= 30) {
            idleTimer++;
            pIdle2(pX, pY, direction, "red", hit);
          } else if (idleTimer > 30 && idleTimer <= 45) {
            idleTimer++;
            pIdle3(pX, pY, direction, "red", hit);
          } else {
            idleTimer = 0;
            pIdle1(pX, pY, direction, "red", hit);
          }
        }
      } else {
        stroke(0);
        if (!punchR && !punchL) {
          if (
            (keyIsDown(87) || keyIsDown(38)) &&
            airtime < 10 &&
            after == false
          ) {
            jump = true;
            airtime++;
            pY -= 8;
            pJump(pX, pY, direction, "red", hit);
          } else if (jump == true && pY <= 300) {
            after = true;
            a++;
            pY += a;
            pJump(pX, pY, direction, "red", hit);
          } else {
            jump = false;
            after = false;
            fall = false;
            a = -10;
            airtime = 0;
            if (platCheck) {
              pY = 300;
            }
          }
          if (
            ((keyIsDown(65) || keyIsDown(37)) &&
              !keyIsDown(68) &&
              !keyIsDown(39)) ||
            ((keyIsDown(68) || keyIsDown(39)) &&
              !keyIsDown(65) &&
              !keyIsDown(37))
          ) {
            if (keyIsDown(65) || keyIsDown(37)) {
              if (!block) {
                if (pX > boundary1) {
                  pX -= pSpeed;
                  spotlightX += pSpeed;
                  spotlightX2 += pSpeed;
                  spotlightX3 += pSpeed;
                  realOrigin += pSpeed;
                  realBoundary1 += pSpeed;
                  realBoundary2 += pSpeed;
                  realHouseX += pSpeed;
                  realTrashX += pSpeed;
                  realPavementX += pSpeed;
                  realSmokeX += pSpeed;
                  realLaunchX[0] += pSpeed;
                  for (let i = 0; i < platNum; i++) {
                    realPlatX[i] += pSpeed;
                  }
                  for (let i = 0; i < medX.length; i++) {
                    realMedX[i] += pSpeed;
                  }
                  for (let i = 0; i < appleX.length; i++) {
                    realAppleX[i] += pSpeed;
                  }
                } else {
                  fill(random(255), random(255), random(255));
                  textSize(20);
                  if (!stage[4]) {
                    text("WRONG WAY!", 200, 140);
                  }
                }
              }
              direction = "left";
              if (!jump && !block) {
                if (runTimer <= 5) {
                  runTimer++;
                  pRun1(pX, pY, direction, "red", hit);
                } else if (runTimer > 5 && runTimer <= 10) {
                  runTimer++;
                  pRun2(pX, pY, direction, "red", hit);
                } else if (runTimer > 10 && runTimer <= 15) {
                  runTimer++;
                  pRun3(pX, pY, direction, "red", hit);
                } else if (runTimer > 15 && runTimer <= 20) {
                  runTimer++;
                  pRun4(pX, pY, direction, "red", hit);
                } else if (runTimer > 20 && runTimer <= 25) {
                  runTimer++;
                  pRun5(pX, pY, direction, "red", hit);
                } else if (runTimer > 25 && runTimer <= 30) {
                  runTimer++;
                  pRun6(pX, pY, direction, "red", hit);
                } else if (runTimer > 30 && runTimer <= 35) {
                  runTimer++;
                  pRun7(pX, pY, direction, "red", hit);
                } else if (runTimer > 35 && runTimer < 40) {
                  runTimer++;
                  pRun8(pX, pY, direction, "red", hit);
                } else {
                  runTimer = 0;
                  pRun8(pX, pY, direction, "red", hit);
                }
              }
            }
            if (keyIsDown(68) || keyIsDown(39)) {
              if (!block) {
                if (pX < boundary2) {
                  pX += pSpeed;
                  spotlightX -= pSpeed;
                  spotlightX2 -= pSpeed;
                  spotlightX3 -= pSpeed;
                  realOrigin -= pSpeed;
                  realBoundary1 -= pSpeed;
                  realBoundary2 -= pSpeed;
                  realHouseX -= pSpeed;
                  realTrashX -= pSpeed;
                  realPavementX -= pSpeed;
                  realSmokeX -= pSpeed;
                  realLaunchX[0] -= pSpeed;
                  for (let i = 0; i < platNum; i++) {
                    realPlatX[i] -= pSpeed;
                  }
                  for (let i = 0; i < medX.length; i++) {
                    realMedX[i] -= pSpeed;
                  }
                  for (let i = 0; i < appleX.length; i++) {
                    realAppleX[i] -= pSpeed;
                  }
                } else {
                  fill(random(255), random(255), random(255));
                  textSize(20);
                  if (
                    (stage[0] && !part[2]) ||
                    (stage[1] && !part[3]) ||
                    (stage[2] && !part[3]) ||
                    (stage[3] && !part[2])
                  ) {
                    text("DEFEAT ALL ENEMIES FIRST!", 100, 140);
                  } else {
                    if (stage[0]) {
                      transition[0] = true;
                    }
                    if (stage[1]) {
                      transition[1] = true;
                    }
                    if (stage[2]) {
                      transition[2] = true;
                    }
                    if (stage[3]) {
                      transition[3] = true;
                    }
                  }
                }
              }
              direction = "right";
              if (!jump && !block) {
                if (runTimer <= 5) {
                  runTimer++;
                  pRun1(pX, pY, direction, "red", hit);
                } else if (runTimer > 5 && runTimer <= 10) {
                  runTimer++;
                  pRun2(pX, pY, direction, "red", hit);
                } else if (runTimer > 10 && runTimer <= 15) {
                  runTimer++;
                  pRun3(pX, pY, direction, "red", hit);
                } else if (runTimer > 15 && runTimer <= 20) {
                  runTimer++;
                  pRun4(pX, pY, direction, "red", hit);
                } else if (runTimer > 20 && runTimer <= 25) {
                  runTimer++;
                  pRun5(pX, pY, direction, "red", hit);
                } else if (runTimer > 25 && runTimer <= 30) {
                  runTimer++;
                  pRun6(pX, pY, direction, "red", hit);
                } else if (runTimer > 30 && runTimer <= 35) {
                  runTimer++;
                  pRun7(pX, pY, direction, "red", hit);
                } else if (runTimer > 35 && runTimer < 40) {
                  runTimer++;
                  pRun8(pX, pY, direction, "red", hit);
                } else {
                  runTimer = 0;
                  pRun8(pX, pY, direction, "red", hit);
                }
              }
            }
          } else {
            runTimer = 0;

            if (!jump && !keyIsDown(16)) {
              if (idleTimer <= 15) {
                idleTimer++;
                pIdle1(pX, pY, direction, "red", hit);
              } else if (idleTimer > 15 && idleTimer <= 30) {
                idleTimer++;
                pIdle2(pX, pY, direction, "red", hit);
              } else if (idleTimer > 30 && idleTimer <= 45) {
                idleTimer++;
                pIdle3(pX, pY, direction, "red", hit);
              } else {
                idleTimer = 0;
                pIdle1(pX, pY, direction, "red", hit);
              }
            }
          }
        } else if (punchR && !combo) {
          if (jump) {
            if (keyIsDown(65) || keyIsDown(37)) {
              if (pX > boundary1) {
                pX -= pSpeed;
                spotlightX += pSpeed;
                spotlightX2 += pSpeed;
                spotlightX3 += pSpeed;
                realOrigin += pSpeed;
                realBoundary1 += pSpeed;
                realBoundary2 += pSpeed;
                realHouseX += pSpeed;
                realTrashX += pSpeed;
                realPavementX += pSpeed;
                realSmokeX += pSpeed;
                realLaunchX[0] += pSpeed;
                for (let i = 0; i < platNum; i++) {
                  realPlatX[i] += pSpeed;
                }
                for (let i = 0; i < medX.length; i++) {
                  realMedX[i] += pSpeed;
                }
                for (let i = 0; i < appleX.length; i++) {
                  realAppleX[i] += pSpeed;
                }
              }
            }
          }
          if (keyIsDown(68) || keyIsDown(39)) {
            if (jump) {
              if (pX < boundary2) {
                pX += pSpeed;
                spotlightX -= pSpeed;
                spotlightX2 -= pSpeed;
                spotlightX3 -= pSpeed;
                realOrigin -= pSpeed;
                realBoundary1 -= pSpeed;
                realBoundary2 -= pSpeed;
                realHouseX -= pSpeed;
                realTrashX -= pSpeed;
                realPavementX -= pSpeed;
                realSmokeX -= pSpeed;
                realLaunchX[0] -= pSpeed;
                for (let i = 0; i < platNum; i++) {
                  realPlatX[i] -= pSpeed;
                }
                for (let i = 0; i < medX.length; i++) {
                  realMedX[i] -= pSpeed;
                }
                for (let i = 0; i < appleX.length; i++) {
                  realAppleX[i] -= pSpeed;
                }
              }
            }
          }
          if (timerR <= 7 - punchDiff) {
            timerR++;
            pRightPunch1(pX, pY, direction, "red", hit);
            if (jump == true && airtime < 10 && after == false) {
              airtime++;
              pY -= 8;
            } else if (jump == true && pY <= 300) {
              after = true;
              a++;
              pY += a;
            } else {
              jump = false;
              after = false;
              a = -10;
              airtime = 0;
              if (platCheck) {
                pY = 300;
              }
            }
          } else if (timerR > 7 - punchDiff && timerR <= 10 - punchDiff) {
            timerR++;
            pRightPunch2(pX, pY, direction, "red", hit);
            if (jump == true && airtime < 10 && after == false) {
              airtime++;
              pY -= 8;
            } else if (jump == true && pY <= 300) {
              after = true;
              a++;
              pY += a;
            } else {
              jump = false;
              after = false;
              a = -10;
              airtime = 0;
              if (platCheck) {
                pY = 300;
              }
            }
          } else if (timerR > 10 - punchDiff && timerR <= 20 - punchDiff) {
            timerR++;
            pRightPunch3(pX, pY, direction, "red", hit);
            if (jump == true && airtime < 10 && after == false) {
              airtime++;
              pY -= 8;
            } else if (jump == true && pY <= 300) {
              after = true;
              a++;
              pY += a;
            } else {
              jump = false;
              after = false;
              a = -10;
              airtime = 0;
              if (platCheck) {
                pY = 300;
              }
            }
            for (let i = 0; i < enemyNum; i++) {
              if (
                direction == "left" &&
                dist(pX - 39, 0, eX[i], 0) < 21 &&
                dist(0, pY + 10, 0, eY[i]) < 21
              ) {
                eDamage[i] = true;
                eHit[i] = true;
              } else if (
                direction != "left" &&
                dist(pX + 39, 0, eX[i], 0) < 21 &&
                dist(0, pY + 10, 0, eY[i]) < 21
              ) {
                eDamage[i] = true;
                eHit[i] = true;
              }
            }
          } else {
            timerR = 0;
            punchR = false;
            combo = true;
            pRightPunch3(pX, pY, direction, "red", hit);
            if (jump == true && airtime < 10 && after == false) {
              airtime++;
              pY -= 8;
            } else if (jump == true && pY <= 300) {
              after = true;
              a++;
              pY += a;
            } else {
              jump = false;
              after = false;
              a = -10;
              airtime = 0;
              if (platCheck) {
                pY = 300;
              }
            }
          }
        } else if (!punchL) {
          pIdle1(pX, pY, direction, "red", hit);
          if (jump == true && airtime < 10 && after == false) {
            airtime++;
            pY -= 8;
          } else if (jump == true && pY <= 300) {
            after = true;
            a++;
            pY += a;
          } else {
            jump = false;
            after = false;
            a = -10;
            airtime = 0;
            if (platCheck) {
              pY = 300;
            }
          }
          if (
            ((keyIsDown(65) || keyIsDown(37)) &&
              !keyIsDown(68) &&
              !keyIsDown(39)) ||
            ((keyIsDown(68) || keyIsDown(39)) &&
              !keyIsDown(65) &&
              !keyIsDown(37))
          ) {
            if ((keyIsDown(65) || keyIsDown(37)) && jump) {
              if (!block) {
                if (pX > boundary1) {
                  pX -= pSpeed;
                  spotlightX += pSpeed;
                  spotlightX2 += pSpeed;
                  spotlightX3 += pSpeed;
                  realOrigin += pSpeed;
                  realBoundary1 += pSpeed;
                  realBoundary2 += pSpeed;
                  realHouseX += pSpeed;
                  realTrashX += pSpeed;
                  realPavementX += pSpeed;
                  realSmokeX += pSpeed;
                  realLaunchX[0] += pSpeed;
                  for (let i = 0; i < platNum; i++) {
                    realPlatX[i] += pSpeed;
                  }
                  for (let i = 0; i < medX.length; i++) {
                    realMedX[i] += pSpeed;
                  }
                  for (let i = 0; i < appleX.length; i++) {
                    realAppleX[i] += pSpeed;
                  }
                } else {
                  fill(random(255), random(255), random(255));
                  textSize(20);
                  if (!stage[4]) {
                    text("WRONG WAY!", 200, 140);
                  }
                }
              }
              direction = "left";
            }
            if ((keyIsDown(68) || keyIsDown(39)) && jump) {
              if (!block) {
                if (pX < boundary2) {
                  pX += pSpeed;
                  spotlightX -= pSpeed;
                  spotlightX2 -= pSpeed;
                  spotlightX3 -= pSpeed;
                  realOrigin -= pSpeed;
                  realBoundary1 -= pSpeed;
                  realBoundary2 -= pSpeed;
                  realHouseX -= pSpeed;
                  realTrashX -= pSpeed;
                  realPavementX -= pSpeed;
                  realSmokeX -= pSpeed;
                  realLaunchX[0] -= pSpeed;
                  for (let i = 0; i < platNum; i++) {
                    realPlatX[i] -= pSpeed;
                  }
                  for (let i = 0; i < medX.length; i++) {
                    realMedX[i] -= pSpeed;
                  }
                  for (let i = 0; i < appleX.length; i++) {
                    realAppleX[i] -= pSpeed;
                  }
                } else {
                  fill(random(255), random(255), random(255));
                  textSize(20);
                  if (
                    (stage[0] && !part[2]) ||
                    (stage[1] && !part[3]) ||
                    (stage[2] && !part[3]) ||
                    (stage[3] && !part[2])
                  ) {
                    text("DEFEAT ALL ENEMIES FIRST!", 100, 140);
                  } else {
                    if (stage[0]) {
                      transition[0] = true;
                    }
                    if (stage[1]) {
                      transition[1] = true;
                    }
                    if (stage[2]) {
                      transition[2] = true;
                    }
                    if (stage[3]) {
                      transition[3] = true;
                    }
                  }
                }
              }
              direction = "right";
            }
          }
        }
        if (!punchL && punchR) {
          if (combo) {
            comboTimer++;
          }
          if (comboTimer > 10) {
            combo = false;
            comboTimer = 0;
          }
        }
        if (punchL && combo) {
          if (jump) {
            if (keyIsDown(65) || keyIsDown(37)) {
              if (pX > boundary1) {
                pX -= pSpeed;
                spotlightX += pSpeed;
                spotlightX2 += pSpeed;
                spotlightX3 += pSpeed;
                realOrigin += pSpeed;
                realBoundary1 += pSpeed;
                realBoundary2 += pSpeed;
                realHouseX += pSpeed;
                realTrashX += pSpeed;
                realPavementX += pSpeed;
                realSmokeX += pSpeed;
                realLaunchX[0] += pSpeed;
                for (let i = 0; i < platNum; i++) {
                  realPlatX[i] += pSpeed;
                }
                for (let i = 0; i < medX.length; i++) {
                  realMedX[i] += pSpeed;
                }
                for (let i = 0; i < appleX.length; i++) {
                  realAppleX[i] += pSpeed;
                }
              }
            }
            if (keyIsDown(68) || keyIsDown(39)) {
              if (pX < boundary2) {
                pX += pSpeed;
                spotlightX -= pSpeed;
                spotlightX2 -= pSpeed;
                spotlightX3 -= pSpeed;
                realOrigin -= pSpeed;
                realBoundary1 -= pSpeed;
                realBoundary2 -= pSpeed;
                realHouseX -= pSpeed;
                realTrashX -= pSpeed;
                realPavementX -= pSpeed;
                realSmokeX -= pSpeed;
                realLaunchX[0] -= pSpeed;
                for (let i = 0; i < platNum; i++) {
                  realPlatX[i] -= pSpeed;
                }
                for (let i = 0; i < medX.length; i++) {
                  realMedX[i] -= pSpeed;
                }
                for (let i = 0; i < appleX.length; i++) {
                  realAppleX[i] -= pSpeed;
                }
              }
            }
          }
          if (timerL <= 7 - punchDiff) {
            timerL++;
            pLeftPunch1(pX, pY, direction, "red", hit);
            if (jump == true && airtime < 10 && after == false) {
              airtime++;
              pY -= 8;
            } else if (jump == true && pY <= 300) {
              after = true;
              a++;
              pY += a;
            } else {
              jump = false;
              after = false;
              a = -10;
              airtime = 0;
              if (platCheck) {
                pY = 300;
              }
            }
          } else if (timerL > 7 - punchDiff && timerL <= 10 - punchDiff) {
            timerL++;
            pLeftPunch2(pX, pY, direction, "red", hit);
            if (jump == true && airtime < 10 && after == false) {
              airtime++;
              pY -= 8;
            } else if (jump == true && pY <= 300) {
              after = true;
              a++;
              pY += a;
            } else {
              jump = false;
              after = false;
              a = -10;
              airtime = 0;
              if (platCheck) {
                pY = 300;
              }
            }
          } else if (timerL > 10 - punchDiff && timerL <= 20 - punchDiff) {
            timerL++;
            pLeftPunch3(pX, pY, direction, "red", hit);
            if (jump == true && airtime < 10 && after == false && !fall) {
              airtime++;
              pY -= 8;
            } else if (jump == true && pY <= 300) {
              after = true;
              a++;
              pY += a;
            } else {
              jump = false;
              after = false;
              a = -10;
              airtime = 0;
              if (platCheck) {
                pY = 300;
              }
            }
            for (let i = 0; i < enemyNum; i++) {
              if (
                direction == "left" &&
                dist(pX - 34, 0, eX[i], 0) < 21 &&
                dist(0, pY + 7, 0, eY[i]) < 21
              ) {
                eDamage[i] = true;
                eHit[i] = true;
              } else if (
                direction != "left" &&
                dist(pX + 34, 0, eX[i], 0) < 21 &&
                dist(0, pY + 7, 0, eY[i]) < 21
              ) {
                eDamage[i] = true;
                eHit[i] = true;
              }
            }
          } else {
            timerL = 0;
            punchL = false;
            combo = false;
            pLeftPunch3(pX, pY, direction, "red", hit);
            if (jump == true && airtime < 10 && after == false) {
              airtime++;
              pY -= 8;
            } else if (jump == true && pY <= 300) {
              after = true;
              a++;
              pY += a;
            } else {
              jump = false;
              after = false;
              a = -10;
              airtime = 0;
              if (platCheck) {
                pY = 300;
              }
            }
          }
        }
        if (!jump && !punchL && !punchR && keyIsDown(16)) {
          block = true;
          if (blockTimer < 30) {
            blockTimer++;
            pBlock1(pX, pY, direction, "red", hit);
          } else if (blockTimer >= 30 && blockTimer < 60) {
            blockTimer++;
            pBlock2(pX, pY, direction, "red", hit);
          } else {
            blockTimer = 0;
            pBlock2(pX, pY, direction, "red", hit);
          }
        } else if (block) {
          block = false;
          pBlock1(pX, pY, direction, "red", hit);
        }
      }
    }
  };

  this.enemy = function (z) {
    if (z == 50 && (part[0] || part[1] || part[2] || part[3])) {
      direction = "right"
      eColour = "slateblue";
      if (idleTimer <= 15) {
        idleTimer++;
        pIdle1(eX[z], eY[z], "left", "slateblue", hit, angry);
      } else if (idleTimer > 15 && idleTimer <= 30) {
        idleTimer++;
        pIdle2(eX[z], eY[z], "left", "slateblue", hit, angry);
      } else if (idleTimer > 30 && idleTimer <= 45) {
        idleTimer++;
        pIdle3(eX[z], eY[z], "left", "slateblue", hit, angry);
      } else {
        idleTimer = 0;
        pIdle1(eX[z], eY[z], "left", "slateblue", hit, angry);
      }
      if (part[0]) {
        fill(255);
        triangle(360, 280, 380, 280, 385, 290);
        rectMode(CENTER);
        rect(355, 260, 75, 40, 10);
        let currentString = speach[0].substring(0, speachChar);
        fill(0);
        noStroke();
        textSize(35);
        text(currentString, 338, 265);
        speachChar += 0.02;
      }
      if (part[1]) {
        fill(255);
        triangle(360, 280, 380, 280, 385, 290);
        rectMode(CENTER);
        rect(330, 255, 140, 50, 10);
        let currentString = speach[1].substring(0, speachChar);
        fill(0);
        noStroke();
        textSize(11);
        text(currentString, 265, 250);
        speachChar += 0.5;
      }
      if (part[2]) {
        fill(255);
        triangle(360, 280, 380, 280, 385, 290);
        rectMode(CENTER);
        rect(330, 255, 140, 50, 10);
        let currentString = speach[2].substring(0, speachChar);
        fill(0);
        noStroke();
        textSize(12);
        text(currentString, 270, 250);
        speachChar += 0.5;
      }
      if (part[3]) {
        apple.display(2);
        appleY[2] += appleAccel;
        appleAccel += 0.35;
        if (appleY[2] > 300) {
          part[3] = false;
          part[4] = true;
          bossDiff = 6.5;
        }
      }
    } else {
      if (
        (eFighting.every((val) => val === true) &&
          blockTrue.every((val) => val === true)) ||
        (eFighting[z] && blockTrue[z])
      ) {
        blockCheck = true;
      } else if (
        blockTrue.every((val) => val === false) ||
        (eFighting[z] && !blockTrue[z])
      ) {
        blockCheck = false;
      }
      let edx = realEX[z] - eX[z];
      eX[z] += edx * 0.05;
      if (eDeduct[z] < 50) {
        if (appleY[2] > 300) {
          noStroke();
          aura(eX[z], eY[z] + 30);
          circle(eX[z], eY[z] + 30, 100);
          stroke(0);
          let bossHealth = map(eDeduct[z], 0, 50, 0, 500);
          rectMode(CENTER);
          stroke(255);
          strokeWeight(4);
          rect(300 + bossShake, 50 + bossShake, 500, 20);
          fill(0, 255, 0);
          noStroke();
          quad(
            50 + bossShake,
            40 + bossShake,
            550 + bossShake - bossHealth,
            40 + bossShake,
            550 + bossShake - bossHealth,
            60 + bossShake,
            50 + bossShake,
            60 + bossShake
          );
          stroke(0);
          strokeWeight(1);
          if (bossHit) {
            if (bossShakeTimer < 15) {
              bossShakeTimer++;
              bossShake = random(-5, 5);
            } else {
              bossHit = false;
              bossShakeTimer = 0;
            }
          }
          appleTimer++;
          if (appleTimer > 100) {
            apple.display(3);
            appleFade[3] -= 1;
            if (appleFade[3] <= 0) {
              disappear[3] = true;
            }
            if (disappear[3]) {
              appleX[3] = random(-220, 820);
              appleY[3] = random(200, 300);
              disappear[3] = false;
              appleFade[3] = 255;
            }
            if (!buff[3]) {
              usedApple[3] = false;
            }
          }
          if (appleTimer > 200) {
            apple.display(4);
            appleFade[4] -= 1;
            if (appleFade[4] <= 0) {
              disappear[4] = true;
            }
            if (disappear[4]) {
              appleX[4] = random(-220, 820);
              appleY[4] = random(200, 300);
              disappear[4] = false;
              appleFade[4] = 255;
            }
            if (!buff[4]) {
              usedApple[4] = false;
            }
          }
          if (appleTimer > 300) {
            apple.display(5);
            appleFade[5] -= 1;
            if (appleFade[5] <= 0) {
              disappear[5] = true;
            }
            if (disappear[5]) {
              appleX[5] = random(-220, 820);
              appleY[5] = random(200, 300);
              disappear[5] = false;
              appleFade[5] = 255;
            }
            if (!buff[5]) {
              usedApple[5] = false;
            }
          }
        }
        if (eHit[z]) {
          rectMode(CENTER);
          stroke(0);
          noFill();
          rect(eX[z], eY[z] - 20, 50, 3);
          noStroke();
          fill(0, 255, 0);
          quad(
            eX[z] - 25,
            eY[z] - 21.5,
            eX[z] + 25 - eDeduct[z],
            eY[z] - 21.5,
            eX[z] + 25 - eDeduct[z],
            eY[z] - 18.5,
            eX[z] - 25,
            eY[z] - 18.5
          );
          stroke(0);
        }
        if (!eDamage[z]) {
          if (eX[z] < pX - 55) {
            eX[z] += eSpeed[z];
            realEX[z] += eSpeed[z];
            ePunchTimer[z] = 0;
            eFighting[z] = false;
            eDirection[z] = "right";
            if (eRunTimer[z] <= 5) {
              eRunTimer[z]++;
              pRun1(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 5 && eRunTimer[z] <= 10) {
              eRunTimer[z]++;
              pRun2(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 10 && eRunTimer[z] <= 15) {
              eRunTimer[z]++;
              pRun3(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 15 && eRunTimer[z] <= 20) {
              eRunTimer[z]++;
              pRun4(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 20 && eRunTimer[z] <= 25) {
              eRunTimer[z]++;
              pRun5(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 25 && eRunTimer[z] <= 30) {
              eRunTimer[z]++;
              pRun6(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 30 && eRunTimer[z] <= 35) {
              eRunTimer[z]++;
              pRun7(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 35 && eRunTimer[z] < 40) {
              eRunTimer[z]++;
              pRun8(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else {
              eRunTimer[z] = 0;
              pRun8(eX[z], eY[z], eDirection[z], eColour, false, angry);
            }
          } else if (eX[z] > pX + 55) {
            eX[z] -= eSpeed[z];
            realEX[z] -= eSpeed[z];
            ePunchTimer[z] = 0;
            eFighting[z] = false;

            eDirection[z] = "left";
            if (eRunTimer[z] <= 5) {
              eRunTimer[z]++;
              pRun1(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 5 && eRunTimer[z] <= 10) {
              eRunTimer[z]++;
              pRun2(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 10 && eRunTimer[z] <= 15) {
              eRunTimer[z]++;
              pRun3(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 15 && eRunTimer[z] <= 20) {
              eRunTimer[z]++;
              pRun4(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 20 && eRunTimer[z] <= 25) {
              eRunTimer[z]++;
              pRun5(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 25 && eRunTimer[z] <= 30) {
              eRunTimer[z]++;
              pRun6(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 30 && eRunTimer[z] <= 35) {
              eRunTimer[z]++;
              pRun7(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (eRunTimer[z] > 35 && eRunTimer[z] < 40) {
              eRunTimer[z]++;
              pRun8(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else {
              eRunTimer[z] = 0;
              pRun8(eX[z], eY[z], eDirection[z], eColour, false, angry);
            }
          } else if (eY[z] > pY) {
            eJump[z] = true;
            pJump(eX[z], eY[z], eDirection[z], eColour, false, angry);
          } else if (eX[z] >= pX) {
            eDirection[z] = "left";
            eFighting[z] = true;
            if (ePunchTimer[z] < 7 - bossDiff) {
              ePunchTimer[z]++;
              pRightPunch1(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (
              ePunchTimer[z] >= 7 - bossDiff &&
              ePunchTimer[z] < 10 - bossDiff
            ) {
              ePunchTimer[z]++;
              pRightPunch2(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (
              ePunchTimer[z] >= 10 - bossDiff &&
              ePunchTimer[z] < 20 - bossDiff
            ) {
              ePunchTimer[z]++;
              pRightPunch3(eX[z], eY[z], eDirection[z], eColour, false, angry);
              if (
                dist(eX[z] - 39, 0, pX, 0) < 21 &&
                dist(0, eY[z] + 10, 0, pY) < 21 &&
                !hit
              ) {
                damage = true;
                if (block && direction != "left") {
                  blockTrue[z] = true;
                } else {
                  blockTrue[z] = false;
                }
              }
            } else if (
              ePunchTimer[z] >= 20 - bossDiff &&
              ePunchTimer[z] < 27 - bossDiff
            ) {
              ePunchTimer[z]++;
              pLeftPunch1(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (
              ePunchTimer[z] >= 27 - bossDiff &&
              ePunchTimer[z] < 30 - bossDiff
            ) {
              ePunchTimer[z]++;
              pLeftPunch2(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (
              ePunchTimer[z] >= 30 - bossDiff &&
              ePunchTimer[z] < 40 - bossDiff
            ) {
              ePunchTimer[z]++;
              pLeftPunch3(eX[z], eY[z], eDirection[z], eColour, false, angry);
              if (
                dist(eX[z] - 34, 0, pX, 0) < 21 &&
                dist(0, eY[z] + 7, 0, pY) < 21 &&
                !hit
              ) {
                damage = true;
                if (block && direction != "left") {
                  blockTrue[z] = true;
                } else {
                  blockTrue[z] = false;
                }
              }
            } else {
              ePunchTimer[z] = 0;
              pLeftPunch3(eX[z], eY[z], eDirection[z], eColour, false, angry);
            }
          } else if (eX[z] < pX) {
            eDirection[z] = "right";
            eFighting[z] = true;
            if (ePunchTimer[z] < 7 - bossDiff) {
              ePunchTimer[z]++;
              pRightPunch1(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (
              ePunchTimer[z] >= 7 - bossDiff &&
              ePunchTimer[z] < 10 - bossDiff
            ) {
              ePunchTimer[z]++;
              pRightPunch2(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (
              ePunchTimer[z] >= 10 - bossDiff &&
              ePunchTimer[z] < 20 - bossDiff
            ) {
              ePunchTimer[z]++;
              pRightPunch3(eX[z], eY[z], eDirection[z], eColour, false, angry);
              if (
                dist(eX[z] + 39, 0, pX, 0) < 21 &&
                dist(0, eY[z] + 10, 0, pY) < 21 &&
                !hit
              ) {
                damage = true;
                if (block && direction == "left") {
                  blockTrue[z] = true;
                } else {
                  blockTrue[z] = false;
                }
              }
            } else if (
              ePunchTimer[z] >= 20 - bossDiff &&
              ePunchTimer[z] < 27 - bossDiff
            ) {
              ePunchTimer[z]++;
              pLeftPunch1(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (
              ePunchTimer[z] >= 27 - bossDiff &&
              ePunchTimer[z] < 30 - bossDiff
            ) {
              ePunchTimer[z]++;
              pLeftPunch2(eX[z], eY[z], eDirection[z], eColour, false, angry);
            } else if (
              ePunchTimer[z] >= 30 - bossDiff &&
              ePunchTimer[z] < 40 - bossDiff
            ) {
              ePunchTimer[z]++;
              pLeftPunch3(eX[z], eY[z], eDirection[z], eColour, false, angry);
              if (
                dist(eX[z] + 34, 0, pX, 0) < 21 &&
                dist(0, eY[z] + 7, 0, pY) < 21 &&
                !hit
              ) {
                damage = true;
                if (block && direction == "left") {
                  blockTrue[z] = true;
                } else {
                  blockTrue[z] = false;
                }
              }
            } else {
              ePunchTimer[z] = 0;
              pLeftPunch3(eX[z], eY[z], eDirection[z], eColour, false, angry);
            }
          }
          if (eJump[z] && eAirtime[z] < 10 && eAfter[z] == false && !eFall[z]) {
            eAirtime[z]++;
            eY[z] -= 8;
          } else if (eJump[z] && eY[z] <= 300) {
            eAfter[z] = true;
            eA[z]++;
            eY[z] += eA[z];
          } else {
            eJump[z] = false;
            eAfter[z] = false;
            eA[z] = -10;
            eAirtime[z] = 0;
            eY[z] = 300;
            eFall[z] = false;
          }
        } else {
          ePunchTimer[z] = 0;
          pIdle1(eX[z], eY[z], eDirection[z], eColour, false, angry);
          if (eDamageTimer[z] < 12) {
            eDamageTimer[z]++;
          } else {
            if (eDirection[z] == "left") {
              eX[z] += 8;
              realEX[z] += 8;
              if (z != 50) {
                eDeduct[z] += 10;
              } else {
                eDeduct[z] += 2;
              }
            } else {
              eX[z] -= 8;
              realEX[z] -= 8;
              if (z != 50) {
                eDeduct[z] += 10;
              } else {
                eDeduct[z] += 2;
              }
            }
            if (z == 50) {
              bossHit = true;
            }
            eDamageTimer[z] = 0;
            eDamage[z] = false;
            pIdle1(eX[z], eY[z], eDirection[z], "red", true);
          }
        }
        if (
          (keyIsDown(65) || keyIsDown(37)) &&
          (((punchL || punchR) && jump) || (!punchL && !punchR)) &&
          !block &&
          pX > boundary1 &&
          !keyIsDown(68) &&
          !keyIsDown(39)
        ) {
          realEX[z] += pSpeed;
        }
        if (
          (keyIsDown(68) || keyIsDown(39)) &&
          (((punchL || punchR) && jump) || (!punchL && !punchR)) &&
          !block &&
          pX < boundary2 &&
          !keyIsDown(65) &&
          !keyIsDown(37)
        ) {
          realEX[z] -= pSpeed;
        }
        if (damage && damageTimer < 10) {
          damageTimer++;
          hitInd = true;
          if (!blockCheck) {
            hit = true;
          }
        } else if (hitInd) {
          if (!blockTrue[z]) {
            if (z == 50) {
              deduct += 5;
            } else if (z == 0 || z == 1) {
              deduct += 0.25;
            } else {
              deduct += 1;
            }
          } else {
            if (z == 50) {
              deduct += 1;
            } else {
              deduct += 0.25;
            }
          }
          damage = false;
          hitInd = false;
          damageTimer = 0;
          hit = false;
        }
      } else if (!killcountEnd[z]) {
        blockTrue.splice(z, 1);
        killcountStart[z] = true;
      }
      if (killcountStart[z]) {
        killcount += 1;
        killcountEnd[z] = true;
        killcountStart[z] = false;
      }
    }
  };
}

function keyPressed() {
  if (keyCode == 32 && !punchL) {
    punchR = true;
  }
  if (keyCode == 32 && timerR > 10 - punchDiff && timerR <= 20 - punchDiff) {
    punchL = true;
  }
}

function pRun1(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 7.5, y + 18, x - 22.5, y + 18, x - 24, y + 31, x - 12, y + 31);
    //right shoulder
    arc(x - 15, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 18, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 30, y + 14, x - 35, y + 14, x - 24, y + 30, x - 16, y + 30);
    //right hand
    fill(colour);
    ellipse(x - 32.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 51, y + 55, x + 46, y + 60, x + 65, y + 69, x + 68, y + 65);
    fill(colour);
    //right quad
    quad(x + 31, y + 53, x + 46, y + 60, x + 51, y + 55, x + 36, y + 36);
    //right leg joint
    arc(x + 35, y + 46, 15, 15, radians(120), radians(340), OPEN);
    //right foot
    fill(hitColour);
    ellipse(x + 68, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 4, y + 4, x - 8, y, x, y + 48, x + 35, y + 33);
    //lower body
    fill(colour);
    arc(x + 15, y + 37, 45, 25, radians(350), radians(155), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x - 10, y + 7, 30, 30, 30);
    rectMode(CORNER);
    if (boss) {
      stroke(0);
      line(x - 16, y + 5, x - 10, y + 2);
      line(x - 21, y + 5, x - 27, y + 2);
    }
    //eyes
    ellipse(x - 15, y + 8, 2, 2);
    ellipse(x - 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 10, y + 12, x - 15, y + 12, x - 6, y + 31, x, y + 31);
    //left upper arm
    quad(x + 10.5, y + 17, x - 4.5, y + 17, x - 6, y + 32, x + 6, y + 32);
    //left shoulder
    arc(x + 3, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 12.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 5, y + 53, x + 22, y + 65, x + 23, y + 63, x + 10, y + 50);
    fill(colour);
    //left quad
    quad(x + 14, y + 37, x + 3, y + 45, x + 7, y + 52, x + 27, y + 48);
    //left knee
    arc(x + 7, y + 49, 11, 11, radians(120), radians(220));
    //left leg joint
    arc(x + 20, y + 42, 15, 15, radians(220), radians(90), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 22, y + 66, 12, 6);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 7.5, y + 18, x + 22.5, y + 18, x + 24, y + 31, x + 12, y + 31);
    //right shoulder
    arc(x + 15, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 18, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 30, y + 14, x + 35, y + 14, x + 24, y + 30, x + 16, y + 30);
    //right hand
    fill(colour);
    ellipse(x + 32.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 51, y + 55, x - 46, y + 60, x - 65, y + 69, x - 68, y + 65);
    fill(colour);
    //right quad
    quad(x - 31, y + 53, x - 46, y + 60, x - 51, y + 55, x - 36, y + 36);
    //right leg joint
    arc(x - 35, y + 46, 15, 15, radians(200), radians(60), OPEN);
    //right foot
    fill(hitColour);
    ellipse(x - 68, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 4, y + 4, x + 8, y, x, y + 48, x - 35, y + 33);
    //lower body
    fill(colour);
    arc(x - 15, y + 37, 45, 25, radians(30), radians(190), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x + 10, y + 7, 30, 30, 30);
    rectMode(CORNER);
    if (boss) {
      stroke(0);
      line(x + 16, y + 5, x + 10, y + 2);
      line(x + 21, y + 5, x + 27, y + 2);
    }
    //eyes
    ellipse(x + 15, y + 8, 2, 2);
    ellipse(x + 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 10, y + 12, x + 15, y + 12, x + 6, y + 31, x, y + 31);
    //left upper arm
    quad(x - 10.5, y + 17, x + 4.5, y + 17, x + 6, y + 32, x - 6, y + 32);
    //left shoulder
    arc(x - 3, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 12.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 5, y + 53, x - 22, y + 65, x - 23, y + 63, x - 10, y + 50);
    fill(colour);
    //left quad
    quad(x - 14, y + 37, x - 3, y + 45, x - 7, y + 52, x - 27, y + 48);
    //left knee
    arc(x - 7, y + 49, 11, 11, radians(320), radians(60));
    //left leg joint
    arc(x - 20, y + 42, 15, 15, radians(90), radians(320), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 22, y + 66, 12, 6);
  }
}

function pRun2(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 7.5, y + 18, x - 22.5, y + 18, x - 24, y + 31, x - 12, y + 31);
    //right shoulder
    arc(x - 15, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 18, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 30, y + 14, x - 35, y + 14, x - 24, y + 30, x - 16, y + 30);
    //right hand
    fill(colour);
    ellipse(x - 32.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 46, y + 55, x + 48, y + 60, x + 64, y + 55, x + 65, y + 50);
    fill(colour);
    //right quad
    quad(x + 29, y + 51, x + 39, y + 57, x + 45, y + 55, x + 38, y + 36);
    //right knee
    arc(x + 45, y + 54.5, 11, 11, radians(40), radians(165));
    //right leg joint
    arc(x + 33, y + 44, 15, 15, radians(120), radians(340), OPEN);
    //right foot
    fill(hitColour);
    ellipse(x + 68, y + 55, 6, 12);

    //TORSO
    //upper body
    quad(x - 4, y + 4, x - 8, y, x, y + 48, x + 35, y + 33);
    //lower body
    fill(colour);
    arc(x + 15, y + 37, 45, 25, radians(345), radians(150), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x - 10, y + 7, 30, 30, 30);
    rectMode(CORNER);
    if (boss) {
      stroke(0);
      line(x - 16, y + 5, x - 10, y + 2);
      line(x - 21, y + 5, x - 27, y + 2);
    }
    //eyes
    ellipse(x - 15, y + 8, 2, 2);
    ellipse(x - 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 10, y + 12, x - 15, y + 12, x - 6, y + 31, x, y + 31);
    //left upper arm
    quad(x + 10.5, y + 17, x - 4.5, y + 17, x - 6, y + 32, x + 6, y + 32);
    //left shoulder
    arc(x + 3, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 12.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 9, y + 57, x + 11, y + 75, x + 16, y + 73, x + 14, y + 50);
    fill(colour);
    //left quad
    quad(x + 13, y + 40, x + 6, y + 49, x + 12, y + 56, x + 25, y + 48);
    //left knee
    arc(x + 11, y + 52, 11, 11, radians(120), radians(220));
    //left leg joint
    arc(x + 20, y + 42, 15, 15, radians(190), radians(60), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 12, y + 72, 12, 6);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 7.5, y + 18, x + 22.5, y + 18, x + 24, y + 31, x + 12, y + 31);
    //right shoulder
    arc(x + 15, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 18, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 30, y + 14, x + 35, y + 14, x + 24, y + 30, x + 16, y + 30);
    //right hand
    fill(colour);
    ellipse(x + 32.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 46, y + 55, x - 48, y + 60, x - 64, y + 55, x - 65, y + 50);
    fill(colour);
    //right quad
    quad(x - 29, y + 51, x - 39, y + 57, x - 45, y + 55, x - 38, y + 36);
    //right knee
    arc(x - 45, y + 54.5, 11, 11, radians(10), radians(140));
    //right leg joint
    arc(x - 33, y + 44, 15, 15, radians(200), radians(60), OPEN);
    //right foot
    fill(hitColour);
    ellipse(x - 68, y + 55, 6, 12);

    //TORSO
    //upper body
    quad(x + 4, y + 4, x + 8, y, x, y + 48, x - 35, y + 33);
    //lower body
    fill(colour);
    arc(x - 15, y + 37, 45, 25, radians(30), radians(190), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x + 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 16, y + 5, x + 10, y + 2);
      line(x + 21, y + 5, x + 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 15, y + 8, 2, 2);
    ellipse(x + 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 10, y + 12, x + 15, y + 12, x + 6, y + 31, x, y + 31);
    //left upper arm
    quad(x - 10.5, y + 17, x + 4.5, y + 17, x + 6, y + 32, x - 6, y + 32);
    //left shoulder
    arc(x - 3, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 12.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 9, y + 57, x - 11, y + 75, x - 16, y + 73, x - 14, y + 50);
    fill(colour);
    //left quad
    quad(x - 13, y + 40, x - 6, y + 49, x - 12, y + 56, x - 25, y + 48);
    //left knee
    arc(x - 11, y + 52, 11, 11, radians(320), radians(60));
    //left leg joint
    arc(x - 20, y + 42, 15, 15, radians(120), radians(350), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 12, y + 72, 12, 6);
  }
}

function pRun3(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 7.5, y + 14, x - 22.5, y + 14, x - 24, y + 27, x - 12, y + 27);
    //right shoulder
    arc(x - 15, y + 15, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 18, y + 26, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 30, y + 10, x - 35, y + 10, x - 24, y + 26, x - 16, y + 26);
    //right hand
    fill(colour);
    ellipse(x - 32.5, y + 10, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 30, y + 55, x + 29, y + 60, x + 50, y + 58, x + 55, y + 55);
    fill(colour);
    //right quad
    quad(x + 20, y + 42, x + 25, y + 55, x + 35, y + 55, x + 33, y + 36);
    //right knee
    arc(x + 30, y + 53, 11, 11, radians(80), radians(180));
    //right foot
    fill(hitColour);
    ellipse(x + 56, y + 58, 6, 12);

    //TORSO
    //upper body
    quad(x - 4, y - 4, x - 8, y - 4, x, y + 44, x + 35, y + 29);
    //lower body
    fill(colour);
    arc(x + 15, y + 33, 45, 25, radians(345), radians(150), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x - 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 16, y + 5, x - 10, y + 2);
      line(x - 21, y + 5, x - 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 15, y + 8, 2, 2);
    ellipse(x - 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 10, y + 8, x - 15, y + 8, x - 6, y + 27, x, y + 27);
    //left upper arm
    quad(x + 10.5, y + 13, x - 4.5, y + 13, x - 6, y + 28, x + 6, y + 28);
    //left shoulder
    arc(x + 3, y + 14, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 27, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 12.5, y + 8, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 9, y + 57, x + 11, y + 75, x + 16, y + 73, x + 14, y + 50);
    fill(colour);
    //left quad
    quad(x + 7, y + 36, x + 8, y + 55, x + 13, y + 55, x + 23, y + 40);
    //left leg joint
    arc(x + 15, y + 38, 15, 15, radians(185), radians(20), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 12, y + 72, 12, 6);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 7.5, y + 14, x + 22.5, y + 14, x + 24, y + 27, x + 12, y + 27);
    //right shoulder
    arc(x + 15, y + 15, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 18, y + 26, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 30, y + 10, x + 35, y + 10, x + 24, y + 26, x + 16, y + 26);
    //right hand
    fill(colour);
    ellipse(x + 32.5, y + 10, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 30, y + 55, x - 29, y + 60, x - 50, y + 58, x - 55, y + 55);
    fill(colour);
    //right quad
    quad(x - 20, y + 42, x - 25, y + 55, x - 35, y + 55, x - 33, y + 36);
    //right knee
    arc(x - 30, y + 53, 11, 11, radians(0), radians(100));
    //right foot
    fill(hitColour);
    ellipse(x - 56, y + 58, 6, 12);

    //TORSO
    //upper body
    quad(x + 4, y - 4, x + 8, y - 4, x, y + 44, x - 35, y + 29);
    //lower body
    fill(colour);
    arc(x - 15, y + 33, 45, 25, radians(30), radians(190), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x + 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 16, y + 5, x + 10, y + 2);
      line(x + 21, y + 5, x + 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 15, y + 8, 2, 2);
    ellipse(x + 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 10, y + 8, x + 15, y + 8, x + 6, y + 27, x, y + 27);
    //left upper arm
    quad(x - 10.5, y + 13, x + 4.5, y + 13, x + 6, y + 28, x - 6, y + 28);
    //left shoulder
    arc(x - 3, y + 14, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 27, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 12.5, y + 8, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 9, y + 57, x - 11, y + 75, x - 16, y + 73, x - 14, y + 50);
    fill(colour);
    //left quad
    quad(x - 7, y + 36, x - 8, y + 55, x - 13, y + 55, x - 23, y + 40);
    //left leg joint
    arc(x - 15, y + 38, 15, 15, radians(160), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 12, y + 72, 12, 6);
  }
}

function pRun4(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 7.5, y + 14, x - 22.5, y + 14, x - 24, y + 27, x - 12, y + 27);
    //right shoulder
    arc(x - 15, y + 15, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 18, y + 26, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 30, y + 10, x - 35, y + 10, x - 24, y + 26, x - 16, y + 26);
    //right hand
    fill(colour);
    ellipse(x - 32.5, y + 10, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 2, y + 53, x + 2, y + 57, x + 20, y + 58, x + 25, y + 55);
    fill(colour);
    //right quad
    quad(x + 10, y + 30, x - 2, y + 50, x + 6, y + 55, x + 33, y + 36);
    //right knee
    arc(x + 3, y + 51, 11, 11, radians(20), radians(270));
    //right foot
    fill(hitColour);
    ellipse(x + 25, y + 58, 6, 12);

    //TORSO
    //upper body
    quad(x - 4, y - 4, x - 8, y - 4, x, y + 44, x + 35, y + 29);
    //lower body
    fill(colour);
    arc(x + 15, y + 33, 45, 25, radians(345), radians(150), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x - 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 16, y + 5, x - 10, y + 2);
      line(x - 21, y + 5, x - 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 15, y + 8, 2, 2);
    ellipse(x - 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 10, y + 8, x - 15, y + 8, x - 6, y + 27, x, y + 27);
    //left upper arm
    quad(x + 10.5, y + 13, x - 4.5, y + 13, x - 6, y + 28, x + 6, y + 28);
    //left shoulder
    arc(x + 3, y + 14, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 27, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 12.5, y + 8, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 27, y + 59, x + 38, y + 72, x + 43, y + 70, x + 30, y + 55);
    fill(colour);
    //left quad
    quad(x + 11, y + 46, x + 26, y + 57, x + 31, y + 55, x + 23, y + 37);
    //left leg joint
    arc(x + 18, y + 43, 15, 15, radians(145), radians(325), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 39, y + 72, 12, 6);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 7.5, y + 14, x + 22.5, y + 14, x + 24, y + 27, x + 12, y + 27);
    //right shoulder
    arc(x + 15, y + 15, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 18, y + 26, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 30, y + 10, x + 35, y + 10, x + 24, y + 26, x + 16, y + 26);
    //right hand
    fill(colour);
    ellipse(x + 32.5, y + 10, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 2, y + 53, x - 2, y + 57, x - 20, y + 58, x - 25, y + 55);
    fill(colour);
    //right quad
    quad(x - 10, y + 30, x + 2, y + 50, x - 6, y + 55, x - 33, y + 36);
    //right knee
    arc(x - 3, y + 51, 11, 11, radians(340), radians(90));
    //right foot
    fill(hitColour);
    ellipse(x - 25, y + 58, 6, 12);

    //TORSO
    //upper body
    quad(x + 4, y - 4, x + 8, y - 4, x, y + 44, x - 35, y + 29);
    //lower body
    fill(colour);
    arc(x - 15, y + 33, 45, 25, radians(30), radians(190), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x + 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 16, y + 5, x + 10, y + 2);
      line(x + 21, y + 5, x + 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 15, y + 8, 2, 2);
    ellipse(x + 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 10, y + 8, x + 15, y + 8, x + 6, y + 27, x, y + 27);
    //left upper arm
    quad(x - 10.5, y + 13, x + 4.5, y + 13, x + 6, y + 28, x - 6, y + 28);
    //left shoulder
    arc(x - 3, y + 14, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 27, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 12.5, y + 8, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 27, y + 59, x - 38, y + 72, x - 43, y + 70, x - 30, y + 55);
    fill(colour);
    //left quad
    quad(x - 11, y + 46, x - 26, y + 57, x - 31, y + 55, x - 23, y + 37);
    //left leg joint
    arc(x - 18, y + 43, 15, 15, radians(215), radians(35), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 39, y + 72, 12, 6);
  }
}

function pRun5(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 7.5, y + 14, x - 22.5, y + 14, x - 24, y + 27, x - 12, y + 27);
    //right shoulder
    arc(x - 15, y + 15, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 18, y + 26, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 30, y + 10, x - 35, y + 10, x - 24, y + 26, x - 16, y + 26);
    //right hand
    fill(colour);
    ellipse(x - 32.5, y + 10, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 2, y + 53, x + 2, y + 57, x + 20, y + 58, x + 25, y + 55);
    fill(colour);
    //right quad
    quad(x + 10, y + 30, x - 2, y + 50, x + 6, y + 55, x + 33, y + 36);
    //right knee
    arc(x + 3, y + 51, 11, 11, radians(20), radians(270));
    //right foot
    fill(hitColour);
    ellipse(x + 25, y + 58, 6, 12);

    //TORSO
    //upper body
    quad(x - 4, y, x - 8, y, x, y + 40, x + 35, y + 25);
    //lower body
    fill(colour);
    arc(x + 15, y + 29, 45, 25, radians(350), radians(155), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x - 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 16, y + 5, x - 10, y + 2);
      line(x - 21, y + 5, x - 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 15, y + 8, 2, 2);
    ellipse(x - 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 10, y + 8, x - 15, y + 8, x - 6, y + 27, x, y + 27);
    //left upper arm
    quad(x + 10.5, y + 13, x - 4.5, y + 13, x - 6, y + 28, x + 6, y + 28);
    //left shoulder
    arc(x + 3, y + 14, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 27, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 12.5, y + 8, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 40, y + 55, x + 56, y + 63, x + 61, y + 61, x + 43, y + 50);
    fill(colour);
    //left quad
    quad(x + 23, y + 43, x + 38, y + 54, x + 43, y + 52, x + 35, y + 34);
    //left leg joint
    arc(x + 30, y + 40, 15, 15, radians(145), radians(325), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 60, y + 63, 6, 12);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 7.5, y + 14, x + 22.5, y + 14, x + 24, y + 27, x + 12, y + 27);
    //right shoulder
    arc(x + 15, y + 15, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 18, y + 26, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 30, y + 10, x + 35, y + 10, x + 24, y + 26, x + 16, y + 26);
    //right hand
    fill(colour);
    ellipse(x + 32.5, y + 10, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 2, y + 53, x - 2, y + 57, x - 20, y + 58, x - 25, y + 55);
    fill(colour);
    //right quad
    quad(x - 10, y + 30, x + 2, y + 50, x - 6, y + 55, x - 33, y + 36);
    //right knee
    arc(x - 3, y + 51, 11, 11, radians(340), radians(90));
    //right foot
    fill(hitColour);
    ellipse(x - 25, y + 58, 6, 12);

    //TORSO
    //upper body
    quad(x + 4, y, x + 8, y, x, y + 40, x - 35, y + 25);
    //lower body
    fill(colour);
    arc(x - 15, y + 29, 45, 25, radians(30), radians(190), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x + 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 16, y + 5, x + 10, y + 2);
      line(x + 21, y + 5, x + 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 15, y + 8, 2, 2);
    ellipse(x + 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 10, y + 8, x + 15, y + 8, x + 6, y + 27, x, y + 27);
    //left upper arm
    quad(x - 10.5, y + 13, x + 4.5, y + 13, x + 6, y + 28, x - 6, y + 28);
    //left shoulder
    arc(x - 3, y + 14, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 27, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 12.5, y + 8, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 40, y + 55, x - 56, y + 63, x - 61, y + 61, x - 43, y + 50);
    fill(colour);
    //left quad
    quad(x - 23, y + 43, x - 38, y + 54, x - 43, y + 52, x - 35, y + 34);
    //left leg joint
    arc(x - 30, y + 40, 15, 15, radians(215), radians(35), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 60, y + 63, 6, 12);
  }
}

function pRun6(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 7.5, y + 14, x - 22.5, y + 14, x - 24, y + 27, x - 12, y + 27);
    //right shoulder
    arc(x - 15, y + 15, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 18, y + 26, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 30, y + 10, x - 35, y + 10, x - 24, y + 26, x - 16, y + 26);
    //right hand
    fill(colour);
    ellipse(x - 32.5, y + 10, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 1, y + 53, x - 5, y + 68, x, y + 68, x + 3, y + 55);
    fill(colour);
    //right quad
    quad(x + 7, y + 30, x - 2, y + 52, x + 6, y + 55, x + 28, y + 36);
    //right foot
    fill(hitColour);
    ellipse(x - 4, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 4, y - 4, x - 8, y - 4, x, y + 44, x + 35, y + 29);
    //lower body
    fill(colour);
    arc(x + 15, y + 33, 45, 25, radians(350), radians(155), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x - 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 16, y + 5, x - 10, y + 2);
      line(x - 21, y + 5, x - 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 15, y + 8, 2, 2);
    ellipse(x - 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 10, y + 8, x - 15, y + 8, x - 6, y + 27, x, y + 27);
    //left upper arm
    quad(x + 10.5, y + 13, x - 4.5, y + 13, x - 6, y + 28, x + 6, y + 28);
    //left shoulder
    arc(x + 3, y + 14, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 27, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 12.5, y + 8, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 45, y + 50, x + 65, y + 50, x + 66, y + 47, x + 48, y + 47);
    fill(colour);
    //left quad
    quad(x + 24, y + 45, x + 43, y + 51, x + 48, y + 45, x + 32, y + 32);
    //left leg joint
    arc(x + 30, y + 40, 15, 15, radians(120), radians(300), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 66, y + 52, 6, 12);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 7.5, y + 14, x + 22.5, y + 14, x + 24, y + 27, x + 12, y + 27);
    //right shoulder
    arc(x + 15, y + 15, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 18, y + 26, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 30, y + 10, x + 35, y + 10, x + 24, y + 26, x + 16, y + 26);
    //right hand
    fill(colour);
    ellipse(x + 32.5, y + 10, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 1, y + 53, x + 5, y + 68, x, y + 68, x - 3, y + 55);
    fill(colour);
    //right quad
    quad(x - 7, y + 30, x + 2, y + 52, x - 6, y + 55, x - 28, y + 36);
    //right foot
    fill(hitColour);
    ellipse(x + 4, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 4, y - 4, x + 8, y - 4, x, y + 44, x - 35, y + 29);
    //lower body
    fill(colour);
    arc(x - 15, y + 33, 45, 25, radians(30), radians(190), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x + 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 16, y + 5, x + 10, y + 2);
      line(x + 21, y + 5, x + 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 15, y + 8, 2, 2);
    ellipse(x + 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 10, y + 8, x + 15, y + 8, x + 6, y + 27, x, y + 27);
    //left upper arm
    quad(x - 10.5, y + 13, x + 4.5, y + 13, x + 6, y + 28, x - 6, y + 28);
    //left shoulder
    arc(x - 3, y + 14, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 27, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 12.5, y + 8, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 45, y + 50, x - 65, y + 50, x - 66, y + 47, x - 48, y + 47);
    fill(colour);
    //left quad
    quad(x - 24, y + 45, x - 43, y + 51, x - 48, y + 45, x - 32, y + 32);
    //left leg joint
    arc(x - 30, y + 40, 15, 15, radians(240), radians(60), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 66, y + 52, 6, 12);
  }
}

function pRun7(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 7.5, y + 18, x - 22.5, y + 18, x - 24, y + 31, x - 12, y + 31);
    //right shoulder
    arc(x - 15, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 18, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 30, y + 14, x - 35, y + 14, x - 24, y + 30, x - 16, y + 30);
    //right hand
    fill(colour);
    ellipse(x - 32.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 7, y + 53, x + 10, y + 72, x + 15, y + 72, x + 11, y + 55);
    fill(colour);
    //right quad
    quad(x + 7, y + 30, x + 1, y + 52, x + 13, y + 55, x + 20, y + 36);
    //right knee
    arc(x + 7, y + 53, 11, 11, radians(), radians(270));
    //right foot
    fill(hitColour);
    ellipse(x + 10, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 4, y + 4, x - 8, y, x, y + 48, x + 35, y + 33);
    //lower body
    fill(colour);
    arc(x + 15, y + 37, 45, 25, radians(350), radians(155), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x - 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 16, y + 5, x - 10, y + 2);
      line(x - 21, y + 5, x - 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 15, y + 8, 2, 2);
    ellipse(x - 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 10, y + 12, x - 15, y + 12, x - 6, y + 31, x, y + 31);
    //left upper arm
    quad(x + 10.5, y + 17, x - 4.5, y + 17, x - 6, y + 32, x + 6, y + 32);
    //left shoulder
    arc(x + 3, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 12.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 25, y + 61, x + 41, y + 61, x + 42, y + 57, x + 24, y + 57);
    fill(colour);
    //left quad
    quad(x + 16, y + 43, x + 19, y + 58, x + 27, y + 58, x + 31, y + 38);
    //left leg joint
    arc(x + 23, y + 43, 15, 15, radians(180), radians(0), OPEN);
    //left knee
    arc(x + 24, y + 55, 11, 11, radians(80), radians(180));
    //left foot
    fill(hitColour);
    ellipse(x + 43, y + 60, 6, 12);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 7.5, y + 18, x + 22.5, y + 18, x + 24, y + 31, x + 12, y + 31);
    //right shoulder
    arc(x + 15, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 18, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 30, y + 14, x + 35, y + 14, x + 24, y + 30, x + 16, y + 30);
    //right hand
    fill(colour);
    ellipse(x + 32.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 7, y + 53, x - 10, y + 72, x - 15, y + 72, x - 11, y + 55);
    fill(colour);
    //right quad
    quad(x - 7, y + 30, x - 1, y + 52, x - 13, y + 55, x - 20, y + 36);
    //right knee
    arc(x - 7, y + 53, 11, 11, radians(340), radians(90));
    //right foot
    fill(hitColour);
    ellipse(x - 10, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 4, y + 4, x + 8, y, x, y + 48, x - 35, y + 33);
    //lower body
    fill(colour);
    arc(x - 15, y + 37, 45, 25, radians(30), radians(190), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x + 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 16, y + 5, x + 10, y + 2);
      line(x + 21, y + 5, x + 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 15, y + 8, 2, 2);
    ellipse(x + 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 10, y + 12, x + 15, y + 12, x + 6, y + 31, x, y + 31);
    //left upper arm
    quad(x - 10.5, y + 17, x + 4.5, y + 17, x + 6, y + 32, x - 6, y + 32);
    //left shoulder
    arc(x - 3, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 12.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 25, y + 61, x - 41, y + 61, x - 42, y + 57, x - 24, y + 57);
    fill(colour);
    //left quad
    quad(x - 16, y + 43, x - 19, y + 58, x - 27, y + 58, x - 31, y + 38);
    //left leg joint
    arc(x - 23, y + 43, 15, 15, radians(180), radians(0), OPEN);
    //left knee
    arc(x - 24, y + 55, 11, 11, radians(0), radians(100));
    //left foot
    fill(hitColour);
    ellipse(x - 43, y + 60, 6, 12);
  }
}

function pRun8(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 7.5, y + 18, x - 22.5, y + 18, x - 24, y + 31, x - 12, y + 31);
    //right shoulder
    arc(x - 15, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 18, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 30, y + 14, x - 35, y + 14, x - 24, y + 30, x - 16, y + 30);
    //right hand
    fill(colour);
    ellipse(x - 32.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 33, y + 57, x + 43, y + 72, x + 48, y + 72, x + 37, y + 55);
    fill(colour);
    //right quad
    quad(x + 10, y + 35, x + 34, y + 57, x + 40, y + 55, x + 33, y + 36);
    //right foot
    fill(hitColour);
    ellipse(x + 41, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 4, y + 4, x - 8, y, x, y + 48, x + 35, y + 33);
    //lower body
    fill(colour);
    arc(x + 15, y + 37, 45, 25, radians(350), radians(155), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x - 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 16, y + 5, x - 10, y + 2);
      line(x - 21, y + 5, x - 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 15, y + 8, 2, 2);
    ellipse(x - 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 10, y + 12, x - 15, y + 12, x - 6, y + 31, x, y + 31);
    //left upper arm
    quad(x + 10.5, y + 17, x - 4.5, y + 17, x - 6, y + 32, x + 6, y + 32);
    //left shoulder
    arc(x + 3, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 12.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 8, y + 65, x + 28, y + 72, x + 32, y + 68, x + 13, y + 62);
    fill(colour);
    //left quad
    quad(x + 9, y + 44, x + 4, y + 58, x + 10, y + 62, x + 22, y + 51);
    //left leg joint
    arc(x + 16, y + 48, 15, 15, radians(200), radians(40), OPEN);
    //left knee
    arc(x + 10, y + 60, 11, 11, radians(100), radians(200));
    //left foot
    fill(hitColour);
    ellipse(x + 28, y + 69, 6, 12);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 7.5, y + 18, x + 22.5, y + 18, x + 24, y + 31, x + 12, y + 31);
    //right shoulder
    arc(x + 15, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 18, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 30, y + 14, x + 35, y + 14, x + 24, y + 30, x + 16, y + 30);
    //right hand
    fill(colour);
    ellipse(x + 32.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 33, y + 57, x - 43, y + 72, x - 48, y + 72, x - 37, y + 55);
    fill(colour);
    //right quad
    quad(x - 10, y + 35, x - 34, y + 57, x - 40, y + 55, x - 33, y + 36);
    //right foot
    fill(hitColour);
    ellipse(x - 41, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 4, y + 4, x + 8, y, x, y + 48, x - 35, y + 33);
    //lower body
    fill(colour);
    arc(x - 15, y + 37, 45, 25, radians(30), radians(190), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x + 10, y + 7, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 16, y + 5, x + 10, y + 2);
      line(x + 21, y + 5, x + 27, y + 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 15, y + 8, 2, 2);
    ellipse(x + 21, y + 8, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 10, y + 12, x + 15, y + 12, x + 6, y + 31, x, y + 31);
    //left upper arm
    quad(x - 10.5, y + 17, x + 4.5, y + 17, x + 6, y + 32, x - 6, y + 32);
    //left shoulder
    arc(x - 3, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 12.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 8, y + 65, x - 28, y + 72, x - 32, y + 68, x - 13, y + 62);
    fill(colour);
    //left quad
    quad(x - 9, y + 44, x - 4, y + 58, x - 10, y + 62, x - 22, y + 51);
    //left leg joint
    arc(x - 16, y + 48, 15, 15, radians(150), radians(340), OPEN);
    //left knee
    arc(x - 10, y + 60, 11, 11, radians(340), radians(80));
    //left foot
    fill(hitColour);
    ellipse(x - 28, y + 69, 6, 12);
  }
}

function pIdle1(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 2.5, y + 18, x - 12.5, y + 18, x - 14, y + 31, x - 2, y + 31);
    //right shoulder
    arc(x - 5, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 8, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 20, y + 14, x - 25, y + 14, x - 14, y + 30, x - 6, y + 30);
    //right hand
    fill(colour);
    ellipse(x - 22.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //left calf
    quad(x - 11, y + 57, x - 7, y + 72, x - 3, y + 72, x - 6, y + 57);
    fill(colour);
    //left quad
    quad(x - 6, y + 40, x - 13, y + 53, x - 6, y + 60, x + 8, y + 45);
    //left knee
    arc(x - 8, y + 56, 11, 11, radians(110), radians(220));
    //left leg joint
    arc(x + 1, y + 42, 15, 15, radians(190), radians(60), OPEN);
    //left foot
    fill(hitColour);

    ellipse(x - 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 3, y - 3, x, y - 3, x - 9, y + 42, x + 28, y + 42);
    //lower body
    fill(colour);
    arc(x + 10, y + 37, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);

    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 4, y - 1, x + 2, y - 4);
      line(x - 9, y - 1, x - 15, y - 4);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 2, y + 1, 2, 2);
    ellipse(x - 11, y + 1, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x, y + 12, x - 5, y + 12, x + 4, y + 31, x + 10, y + 31);
    //left upper arm
    quad(x + 20.5, y + 17, x + 5.5, y + 17, x + 4, y + 32, x + 16, y + 32);
    //left shoulder
    arc(x + 13, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x + 10, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 2.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);

    //left calf
    quad(x + 8, y + 57, x + 12, y + 72, x + 16, y + 72, x + 13, y + 57);
    fill(colour);
    //left quad
    quad(x + 13, y + 40, x + 6, y + 53, x + 13, y + 60, x + 27, y + 45);
    //left knee
    arc(x + 11, y + 56, 11, 11, radians(110), radians(250));
    //left leg joint
    arc(x + 20, y + 42, 15, 15, radians(190), radians(60), OPEN);
    //left foot
    fill(hitColour);

    ellipse(x + 12, y + 72, 12, 6);
  } else {
    //RIGHT ARM
    fill(hitColour);

    //right upper arm
    quad(x - 2.5, y + 18, x + 12.5, y + 18, x + 14, y + 31, x + 2, y + 31);
    //right shoulder
    arc(x + 5, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 8, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 20, y + 14, x + 25, y + 14, x + 14, y + 30, x + 6, y + 30);
    //right hand
    fill(colour);
    ellipse(x + 22.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //left calf
    quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
    fill(colour);
    //left quad
    quad(x + 6, y + 40, x + 13, y + 53, x + 6, y + 60, x - 8, y + 45);
    //left knee
    arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
    //left leg joint
    arc(x - 1, y + 42, 15, 15, radians(120), radians(350), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 3, y - 3, x, y - 3, x + 9, y + 42, x - 28, y + 42);
    //lower body
    fill(colour);
    arc(x - 10, y + 37, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 4, y - 1, x - 2, y - 4);
      line(x + 9, y - 1, x + 15, y - 4);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 2, y + 1, 2, 2);
    ellipse(x + 11, y + 1, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x, y + 12, x + 5, y + 12, x - 4, y + 31, x - 10, y + 31);
    //left upper arm
    quad(x - 20.5, y + 17, x - 5.5, y + 17, x - 4, y + 32, x - 16, y + 32);
    //left shoulder
    arc(x - 13, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x - 10, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 2.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 8, y + 57, x - 12, y + 72, x - 16, y + 72, x - 13, y + 57);
    fill(colour);
    //left quad
    quad(x - 13, y + 40, x - 6, y + 53, x - 13, y + 60, x - 27, y + 45);
    //left knee
    arc(x - 11, y + 56, 11, 11, radians(320), radians(60));
    //left leg joint
    arc(x - 20, y + 42, 15, 15, radians(120), radians(350), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 12, y + 72, 12, 6);
  }
}

function pIdle2(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 2.5, y + 18, x - 12.5, y + 18, x - 14, y + 31, x - 2, y + 31);
    //right shoulder
    arc(x - 5, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 8, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 20, y + 14, x - 25, y + 14, x - 14, y + 30, x - 6, y + 30);
    //right hand
    fill(colour);
    ellipse(x - 22.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 11, y + 57, x - 7, y + 72, x - 3, y + 72, x - 6, y + 57);
    fill(colour);
    //right quad
    quad(x - 7, y + 40, x - 13, y + 53, x - 6, y + 60, x + 11, y + 45);
    //right knee
    arc(x - 8, y + 56, 11, 11, radians(110), radians(250));
    //right foot
    fill(hitColour);
    ellipse(x - 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 3, y, x, y, x - 9, y + 45, x + 28, y + 45);
    //lower body
    fill(colour);
    arc(x + 10, y + 40, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y + 3, 30, 30, 30);
    rectMode(CORNER);
    if (boss) {
      stroke(0);
      line(x - 4, y + 2, x + 2, y - 1);
      line(x - 9, y + 2, x - 15, y - 1);
    }
    //eyes
    ellipse(x - 2, y + 4, 2, 2);
    ellipse(x - 11, y + 4, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x, y + 12, x - 5, y + 12, x + 4, y + 31, x + 10, y + 31);
    //left upper arm
    quad(x + 20.5, y + 17, x + 5.5, y + 17, x + 4, y + 32, x + 16, y + 32);
    //left shoulder
    arc(x + 13, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x + 10, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 2.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 8, y + 57, x + 12, y + 72, x + 16, y + 72, x + 13, y + 57);
    fill(colour);
    //left quad
    quad(x + 14, y + 40, x + 6, y + 53, x + 13, y + 60, x + 27, y + 48);
    //left knee
    arc(x + 11, y + 56, 11, 11, radians(110), radians(250));
    //left leg joint
    arc(x + 20, y + 45, 15, 15, radians(180), radians(50), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 12, y + 72, 12, 6);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 2.5, y + 18, x + 12.5, y + 18, x + 14, y + 31, x + 2, y + 31);
    //right shoulder
    arc(x + 5, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 8, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 20, y + 14, x + 25, y + 14, x + 14, y + 30, x + 6, y + 30);
    //right hand
    fill(colour);
    ellipse(x + 22.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
    fill(colour);
    //right quad
    quad(x + 7, y + 40, x + 13, y + 53, x + 6, y + 60, x - 11, y + 45);
    //right knee
    arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
    //right leg joint
    arc(x - 1, y + 45, 15, 15, radians(100), radians(330), OPEN);
    //right foot
    fill(hitColour);
    ellipse(x + 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 3, y, x, y, x + 9, y + 45, x - 28, y + 45);
    //lower body
    fill(colour);
    arc(x - 10, y + 40, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y + 3, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 4, y + 2, x - 2, y - 1);
      line(x + 9, y + 2, x + 15, y - 1);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 2, y + 4, 2, 2);
    ellipse(x + 11, y + 4, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x, y + 12, x + 5, y + 12, x - 4, y + 31, x - 10, y + 31);
    //left upper arm
    quad(x - 20.5, y + 17, x - 5.5, y + 17, x - 4, y + 32, x - 16, y + 32);
    //left shoulder
    arc(x - 13, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x - 10, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 2.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 8, y + 57, x - 12, y + 72, x - 16, y + 72, x - 13, y + 57);
    fill(colour);
    //left quad
    quad(x - 14, y + 40, x - 6, y + 53, x - 13, y + 60, x - 27, y + 48);
    //left knee
    arc(x - 11, y + 56, 11, 11, radians(320), radians(60));
    //left leg joint
    arc(x - 20, y + 45, 15, 15, radians(100), radians(330), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 12, y + 72, 12, 6);
  }
}

function pIdle3(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 2.5, y + 21, x - 12.5, y + 21, x - 14, y + 34, x - 2, y + 34);
    //right shoulder
    arc(x - 5, y + 22, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 8, y + 33, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 20, y + 17, x - 25, y + 17, x - 14, y + 33, x - 6, y + 33);
    //right hand
    fill(colour);
    ellipse(x - 22.5, y + 17, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 11, y + 57, x - 7, y + 72, x - 3, y + 72, x - 6, y + 57);
    fill(colour);
    //right quad
    quad(x - 7, y + 40, x - 13, y + 53, x - 6, y + 60, x + 11, y + 45);
    //right knee
    arc(x - 8, y + 56, 11, 11, radians(110), radians(250));
    //right foot
    fill(hitColour);
    ellipse(x - 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 3, y, x, y, x - 9, y + 45, x + 28, y + 45);
    //lower body
    fill(colour);
    arc(x + 10, y + 40, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y + 3, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 4, y + 1, x + 2, y - 2);
      line(x - 9, y + 1, x - 15, y - 2);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 2, y + 4, 2, 2);
    ellipse(x - 11, y + 4, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x, y + 15, x - 5, y + 15, x + 4, y + 34, x + 10, y + 34);
    //left upper arm
    quad(x + 20.5, y + 20, x + 5.5, y + 20, x + 4, y + 35, x + 16, y + 35);
    //left shoulder
    arc(x + 13, y + 21, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x + 10, y + 34, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 2.5, y + 15, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 8, y + 57, x + 12, y + 72, x + 16, y + 72, x + 13, y + 57);
    fill(colour);
    //left quad
    quad(x + 14, y + 40, x + 6, y + 53, x + 13, y + 60, x + 27, y + 48);
    //left knee
    arc(x + 11, y + 56, 11, 11, radians(110), radians(250));
    //left leg joint
    arc(x + 20, y + 45, 15, 15, radians(180), radians(50), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 12, y + 72, 12, 6);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 2.5, y + 21, x + 12.5, y + 21, x + 14, y + 34, x + 2, y + 34);
    //right shoulder
    arc(x + 5, y + 22, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 8, y + 33, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 20, y + 17, x + 25, y + 17, x + 14, y + 33, x + 6, y + 33);
    //right hand
    fill(colour);
    ellipse(x + 22.5, y + 17, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
    fill(colour);
    //right quad
    quad(x + 7, y + 40, x + 13, y + 53, x + 6, y + 60, x - 11, y + 45);
    //right knee
    arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
    //right leg joint
    arc(x - 1, y + 45, 15, 15, radians(100), radians(330), OPEN);
    //right foot
    fill(hitColour);
    ellipse(x + 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 3, y, x, y, x + 9, y + 45, x - 28, y + 45);
    //lower body
    fill(colour);
    arc(x - 10, y + 40, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y + 3, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 4, y + 2, x - 2, y - 1);
      line(x + 9, y + 2, x + 15, y - 1);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 2, y + 4, 2, 2);
    ellipse(x + 11, y + 4, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x, y + 15, x + 5, y + 15, x - 4, y + 34, x - 10, y + 34);
    //left upper arm
    quad(x - 20.5, y + 20, x - 5.5, y + 20, x - 4, y + 35, x - 16, y + 35);
    //left shoulder
    arc(x - 13, y + 21, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x - 10, y + 34, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 2.5, y + 15, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 8, y + 57, x - 12, y + 72, x - 16, y + 72, x - 13, y + 57);
    fill(colour);
    //left quad
    quad(x - 14, y + 40, x - 6, y + 53, x - 13, y + 60, x - 27, y + 48);
    //left knee
    arc(x - 11, y + 56, 11, 11, radians(320), radians(60));
    //left leg joint
    arc(x - 20, y + 45, 15, 15, radians(100), radians(330), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 12, y + 72, 12, 6);
  }
}

function pJump(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 10, y + 22, x + 10, y + 5, x - 20, y + 15, x - 20, y + 20);
    //right forearm
    quad(x - 20, y + 15, x - 28, y + 16, x - 28, y + 20, x - 20, y + 20);
    //right hand
    fill(colour);
    ellipse(x - 29, y + 17, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 15, y + 49, x - 11, y + 64, x - 7, y + 64, x - 10, y + 49);
    fill(colour);
    //right quad
    quad(x - 6, y + 40, x - 15, y + 41, x - 15, y + 51, x + 8, y + 47);
    //right knee
    arc(x - 12, y + 46, 11, 11, radians(120), radians(250));
    //right foot
    fill(hitColour);
    ellipse(x - 10, y + 67, 12, 6);

    //TORSO
    //upper body
    quad(x + 3, y, x, y, x - 9, y + 42, x + 28, y + 42);
    //lower body
    fill(colour);
    arc(x + 10, y + 37, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 4, y - 1, x + 2, y - 4);
      line(x - 9, y - 1, x - 15, y - 4);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 2, y + 1, 2, 2);
    ellipse(x - 11, y + 1, 2, 2);

    //LEFT ARM
    //left upper arm
    quad(x + 14, y + 7, x + 14, y + 21, x + 23, y + 19, x + 28, y + 9);
    //left shoulder
    arc(x + 15, y + 14, 15, 13, radians(90), radians(270));
    //left elbow
    arc(x + 25, y + 14, 14, 10, radians(270), radians(40), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 22, y + 19, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 12, y + 52, x + 16, y + 72, x + 20, y + 72, x + 17, y + 52);
    fill(colour);
    //left quad
    quad(x + 9, y + 40, x + 11, y + 53, x + 19, y + 53, x + 25, y + 42);
    //left leg joint
    arc(x + 17, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 17, y + 70, 6, 12);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 10, y + 22, x - 10, y + 5, x + 20, y + 15, x + 20, y + 20);
    //right forearm
    quad(x + 20, y + 15, x + 28, y + 16, x + 28, y + 20, x + 20, y + 20);
    //right hand
    fill(colour);
    ellipse(x + 29, y + 17, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 15, y + 49, x + 11, y + 64, x + 7, y + 64, x + 10, y + 49);
    fill(colour);
    //right quad
    quad(x + 6, y + 40, x + 15, y + 41, x + 15, y + 51, x - 8, y + 47);
    //right knee
    arc(x + 12, y + 46, 11, 11, radians(290), radians(60));
    //right foot
    fill(hitColour);
    ellipse(x + 10, y + 67, 12, 6);

    //TORSO
    //upper body
    quad(x - 3, y, x, y, x + 9, y + 42, x - 28, y + 42);
    //lower body
    fill(colour);
    arc(x - 10, y + 37, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 4, y - 1, x - 2, y - 4);
      line(x + 9, y - 1, x + 15, y - 4);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 2, y + 1, 2, 2);
    ellipse(x + 11, y + 1, 2, 2);

    //LEFT ARM
    //left upper arm
    quad(x - 14, y + 7, x - 14, y + 21, x - 23, y + 19, x - 28, y + 9);
    //left shoulder
    arc(x - 15, y + 15, 15, 13, radians(270), radians(90));
    //left elbow
    arc(x - 25, y + 14, 14, 10, radians(140), radians(270), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 22, y + 19, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 12, y + 52, x - 16, y + 72, x - 20, y + 72, x - 17, y + 52);
    fill(colour);
    //left quad
    quad(x - 9, y + 40, x - 11, y + 53, x - 19, y + 53, x - 25, y + 42);
    //left leg joint
    arc(x - 17, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 17, y + 70, 6, 12);
  }
}

function pRightPunch1(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 2.5, y + 18, x - 12.5, y + 18, x - 14, y + 31, x - 2, y + 31);
    //right shoulder
    arc(x - 5, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 8, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 20, y + 14, x - 25, y + 14, x - 14, y + 30, x - 6, y + 30);
    //right hand
    fill(colour);
    ellipse(x - 22.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 11, y + 57, x - 7, y + 72, x - 3, y + 72, x - 6, y + 57);
    fill(colour);
    //right quad
    quad(x - 6, y + 40, x - 13, y + 53, x - 6, y + 60, x + 8, y + 45);
    //right knee
    arc(x - 8, y + 56, 11, 11, radians(120), radians(220));
    //right leg joint
    arc(x + 1, y + 42, 15, 15, radians(120), radians(350), OPEN);
    //right foot
    fill(hitColour);
    ellipse(x - 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 3, y, x, y, x - 12, y + 42, x + 25, y + 42);
    //lower body
    fill(colour);
    arc(x + 6, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 6, y - 1, x, y - 4);
      line(x - 12, y - 1, x - 14, y - 4);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 5, y + 1, 2, 2);
    ellipse(x - 14, y + 1, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 3, y + 12, x - 8, y + 12, x + 1, y + 31, x + 7, y + 31);
    //left upper arm
    quad(x + 17.5, y + 17, x + 2.5, y + 17, x + 1, y + 32, x + 13, y + 32);
    //left shoulder
    arc(x + 10, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x + 7, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 5.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 16, y + 56, x + 22, y + 72, x + 26, y + 72, x + 21, y + 54);
    fill(colour);
    //left quad
    quad(x + 8, y + 40, x + 13, y + 53, x + 23, y + 53, x + 23, y + 42);
    //left knee
    arc(x + 19, y + 52, 11, 11, radians(110), radians(180));
    //left leg joint
    arc(x + 15, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 24, y + 69, 6, 12);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 2.5, y + 18, x + 12.5, y + 18, x + 14, y + 31, x + 2, y + 31);
    //right shoulder
    arc(x + 5, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 8, y + 30, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 20, y + 14, x + 25, y + 14, x + 14, y + 30, x + 6, y + 30);
    //right hand
    fill(colour);
    ellipse(x + 22.5, y + 14, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
    fill(colour);
    //right quad
    quad(x + 6, y + 40, x + 13, y + 53, x + 6, y + 60, x - 8, y + 45);
    //right knee
    arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
    //right leg joint
    arc(x - 1, y + 42, 15, 15, radians(120), radians(350), OPEN);
    //right foot
    fill(hitColour);
    ellipse(x + 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 3, y, x, y, x + 12, y + 42, x - 25, y + 42);
    //lower body
    fill(colour);
    arc(x - 6, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 6, y - 1, x, y - 4);
      line(x + 12, y - 1, x + 14, y - 4);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 5, y + 1, 2, 2);
    ellipse(x + 14, y + 1, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 3, y + 12, x + 8, y + 12, x - 1, y + 31, x - 7, y + 31);
    //left upper arm
    quad(x - 17.5, y + 17, x - 2.5, y + 17, x - 1, y + 32, x - 13, y + 32);
    //left shoulder
    arc(x - 10, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x - 7, y + 31, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 5.5, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 16, y + 56, x - 22, y + 72, x - 26, y + 72, x - 21, y + 54);
    fill(colour);
    //left quad
    quad(x - 8, y + 40, x - 13, y + 53, x - 23, y + 53, x - 23, y + 42);
    //left knee
    arc(x - 19, y + 52, 11, 11, radians(0), radians(70));
    //left leg joint
    arc(x - 15, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 24, y + 69, 6, 12);
  }
}

function pRightPunch2(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 17, y + 18, x - 12.5, y + 18, x + 15, y + 31, x + 12, y + 31);
    //right shoulder
    arc(x + 10, y + 19, 15, 15, radians(180), radians(0), OPEN);

    //RIGHT LEG
    fill(hitColour);
    //left calf
    quad(x - 11, y + 57, x - 7, y + 72, x - 3, y + 72, x - 6, y + 57);
    fill(colour);
    //left quad
    quad(x - 6, y + 40, x - 13, y + 53, x - 6, y + 60, x + 8, y + 45);
    //left knee
    arc(x - 8, y + 56, 11, 11, radians(120), radians(220));
    //left leg joint
    arc(x + 1, y + 42, 15, 15, radians(120), radians(350), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 1, y, x - 2, y, x - 14, y + 42, x + 23, y + 42);
    //lower body
    fill(colour);
    arc(x + 4, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 9, y, x - 3, y - 3);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 8, y + 1, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 20, y + 15, x - 25, y + 15, x - 19, y + 24, x - 13, y + 24);
    //left upper arm
    quad(x + 5, y + 24, x - 3, y + 11, x - 15, y + 19, x - 18, y + 25);
    //left shoulder
    arc(x, y + 18, 15, 15, radians(230), radians(60), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 25, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 13, y + 56, x + 20, y + 67, x + 24, y + 68, x + 18, y + 54);
    fill(colour);
    //left quad
    quad(x + 5, y + 40, x + 10, y + 53, x + 20, y + 53, x + 20, y + 42);
    //left knee
    arc(x + 16, y + 52, 11, 11, radians(110), radians(180));
    //left leg joint
    arc(x + 12, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 23, y + 69, 6, 12);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 17, y + 18, x + 12.5, y + 18, x - 15, y + 31, x - 12, y + 31);
    //right shoulder
    arc(x - 10, y + 19, 15, 15, radians(180), radians(0), OPEN);

    //RIGHT LEG
    fill(hitColour);
    //left calf
    quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
    fill(colour);
    //left quad
    quad(x + 6, y + 40, x + 13, y + 53, x + 6, y + 60, x - 8, y + 45);
    //left knee
    arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
    //left leg joint
    arc(x - 1, y + 42, 15, 15, radians(120), radians(350), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 1, y, x + 2, y, x + 14, y + 42, x - 23, y + 42);
    //lower body
    fill(colour);
    arc(x - 4, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 9, y, x - 3, y - 3);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 8, y + 1, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 20, y + 15, x + 25, y + 15, x + 19, y + 24, x + 13, y + 24);
    //left upper arm
    quad(x - 5, y + 24, x + 3, y + 11, x + 15, y + 19, x + 18, y + 25);
    //left shoulder
    arc(x, y + 18, 15, 15, radians(120), radians(300), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 25, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 13, y + 56, x - 20, y + 67, x - 24, y + 68, x - 18, y + 54);
    fill(colour);
    //left quad
    quad(x - 5, y + 40, x - 10, y + 53, x - 20, y + 53, x - 20, y + 42);
    //left knee
    arc(x - 16, y + 52, 11, 11, radians(0), radians(70));
    //left leg joint
    arc(x - 12, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 23, y + 69, 6, 12);
  }
}

function pRightPunch3(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 17, y + 16, x - 3, y + 16, x + 9, y + 29, x + 21, y + 29);
    //right shoulder
    arc(x + 10, y + 19, 15, 15, radians(160), radians(340), OPEN);
    //right elbow
    arc(x + 15, y + 28, 12, 10, radians(0), radians(180), OPEN);

    //RIGHT LEG
    fill(hitColour);
    //left calf
    quad(x - 11, y + 57, x - 7, y + 72, x - 3, y + 72, x - 6, y + 57);
    fill(colour);
    //left quad
    quad(x - 12, y + 40, x - 13, y + 53, x - 6, y + 60, x + 2, y + 45);
    //left knee
    arc(x - 8, y + 56, 11, 11, radians(120), radians(220));
    //left foot
    fill(hitColour);
    ellipse(x - 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 1, y, x - 2, y, x - 14, y + 42, x + 23, y + 42);
    //lower body
    fill(colour);
    arc(x + 4, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 9, y, x - 3, y - 3);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 8, y + 1, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 30, y + 10, x - 40, y + 10, x - 21, y + 17, x - 17, y + 13);
    //left upper arm
    quad(x - 3, y + 26, x + 1, y + 11, x - 18, y + 11, x - 20, y + 16);
    //left shoulder
    arc(x - 4, y + 18, 15, 15, radians(290), radians(90), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 39, y + 10, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 10, y + 56, x + 18, y + 67, x + 25, y + 68, x + 14, y + 54);
    fill(colour);
    //left quad
    quad(x + 1, y + 40, x + 6, y + 53, x + 16, y + 53, x + 16, y + 42);
    //left knee
    arc(x + 12, y + 52, 11, 11, radians(110), radians(180));
    //left leg joint
    arc(x + 8, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 23, y + 69, 6, 12);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 17, y + 16, x + 3, y + 16, x - 9, y + 29, x - 21, y + 29);
    //right shoulder
    arc(x - 10, y + 19, 15, 15, radians(200), radians(20), OPEN);
    //right elbow
    arc(x - 15, y + 28, 12, 10, radians(0), radians(180), OPEN);

    //RIGHT LEG
    fill(hitColour);
    //left calf
    quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
    fill(colour);
    //left quad
    quad(x + 12, y + 40, x + 13, y + 53, x + 6, y + 60, x - 2, y + 45);
    //left knee
    arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
    //left foot
    fill(hitColour);
    ellipse(x + 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 1, y, x + 2, y, x + 14, y + 42, x - 23, y + 42);
    //lower body
    fill(colour);
    arc(x - 4, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 9, y, x - 3, y - 3);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 8, y + 1, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 30, y + 10, x + 40, y + 10, x + 21, y + 17, x + 17, y + 13);
    //left upper arm
    quad(x + 3, y + 26, x - 1, y + 11, x + 18, y + 11, x + 20, y + 16);
    //left shoulder
    arc(x + 4, y + 18, 15, 15, radians(90), radians(250), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 39, y + 10, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 10, y + 56, x - 18, y + 67, x - 25, y + 68, x - 14, y + 54);
    fill(colour);
    //left quad
    quad(x - 1, y + 40, x - 6, y + 53, x - 16, y + 53, x - 16, y + 42);
    //left knee
    arc(x - 12, y + 52, 11, 11, radians(0), radians(70));
    //left leg joint
    arc(x - 8, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 23, y + 69, 6, 12);
  }
}

function pLeftPunch1(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right hand
    fill(colour);
    ellipse(x - 11, y + 25, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 11, y + 57, x - 7, y + 72, x - 3, y + 72, x - 6, y + 57);
    fill(colour);
    //right quad
    quad(x - 12, y + 40, x - 13, y + 53, x - 6, y + 60, x + 2, y + 45);
    //right knee
    arc(x - 8, y + 56, 11, 11, radians(120), radians(220));
    //right foot
    fill(hitColour);
    ellipse(x - 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 1, y, x - 2, y, x - 14, y + 42, x + 23, y + 42);
    //lower body
    fill(colour);
    arc(x + 4, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 9, y, x - 3, y - 3);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 8, y + 1, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 15, y + 7, x - 20, y + 7, x - 11, y + 17, x - 7, y + 13);
    //left upper arm
    quad(x + 6, y + 26, x + 8, y + 11, x - 5, y + 11, x - 6, y + 19);
    //left shoulder
    arc(x + 6, y + 18, 15, 15, radians(280), radians(100), OPEN);
    //left elbow
    ellipse(x - 5, y + 15, 9, 9);
    //left hand
    fill(colour);
    ellipse(x - 18, y + 8, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 8, y + 56, x + 16, y + 67, x + 21, y + 68, x + 13, y + 54);
    fill(colour);
    //left quad
    quad(x + 1, y + 40, x + 6, y + 53, x + 16, y + 53, x + 16, y + 42);
    //left knee
    arc(x + 12, y + 52, 11, 11, radians(110), radians(180));
    //left leg joint
    arc(x + 8, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 19, y + 69, 6, 12);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right hand
    fill(colour);
    ellipse(x + 11, y + 25, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
    fill(colour);
    //right quad
    quad(x + 12, y + 40, x + 13, y + 53, x + 6, y + 60, x - 2, y + 45);
    //right knee
    arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
    //right foot
    fill(hitColour);
    ellipse(x + 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 1, y, x + 2, y, x + 14, y + 42, x - 23, y + 42);
    //lower body
    fill(colour);
    arc(x - 4, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 9, y, x + 3, y - 3);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 8, y + 1, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 15, y + 7, x + 20, y + 7, x + 11, y + 17, x + 7, y + 13);
    //left upper arm
    quad(x - 6, y + 26, x - 8, y + 11, x + 5, y + 11, x + 6, y + 19);
    //left shoulder
    arc(x - 6, y + 18, 15, 15, radians(80), radians(260), OPEN);
    //left elbow
    ellipse(x + 5, y + 15, 9, 9);
    //left hand
    fill(colour);
    ellipse(x + 18, y + 8, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 8, y + 56, x - 16, y + 67, x - 21, y + 68, x - 13, y + 54);
    fill(colour);
    //left quad
    quad(x - 1, y + 40, x - 6, y + 53, x - 16, y + 53, x - 16, y + 42);
    //left knee
    arc(x - 12, y + 52, 11, 11, radians(0), radians(70));
    //left leg joint
    arc(x - 8, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 19, y + 69, 6, 12);
  }
}

function pLeftPunch2(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 5, y + 24, x - 7, y + 8, x - 18, y + 17, x - 15, y + 23);
    //right forearm
    quad(x - 25, y + 14, x - 27, y + 16, x - 20, y + 24, x - 16, y + 18);
    //right elbow
    arc(x - 17, y + 17, 20, 15, radians(60), radians(120));
    //right hand
    fill(colour);
    ellipse(x - 24, y + 15, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 11, y + 57, x - 7, y + 72, x - 3, y + 72, x - 6, y + 57);
    fill(colour);
    //right quad
    quad(x - 12, y + 40, x - 13, y + 53, x - 6, y + 60, x + 2, y + 45);
    //right knee
    arc(x - 8, y + 56, 11, 11, radians(120), radians(220));
    //right foot
    fill(hitColour);
    ellipse(x - 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 1, y, x - 2, y, x - 14, y + 42, x + 23, y + 42);
    //lower body
    fill(colour);
    arc(x + 4, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    rectMode(CORNER);
    if (boss) {
      stroke(0);
      line(x - 4, y - 1, x + 2, y - 4);
      line(x - 8, y - 1, x - 12, y - 4);
    }
    //eyes
    ellipse(x - 1, y, 2, 2);
    ellipse(x - 11, y, 2, 2);

    //LEFT ARM;
    //left upper arm
    quad(x + 19, y + 23, x + 18, y + 17, x + 4, y + 17, x + 9, y + 23);
    //left shoulder
    arc(x + 11, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x + 14, y + 22, 10, 6, radians(0), radians(180), OPEN);
    //left forearm
    quad(x - 3, y + 13, x + 3, y + 13, x + 19, y + 22, x + 9, y + 22);
    //left hand
    fill(colour);
    ellipse(x + 4, y + 14, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 8, y + 56, x + 16, y + 67, x + 21, y + 68, x + 13, y + 54);
    fill(colour);
    //left quad
    quad(x + 1, y + 40, x + 6, y + 53, x + 16, y + 53, x + 16, y + 42);
    //left knee
    arc(x + 12, y + 52, 11, 11, radians(110), radians(180));
    //left leg joint
    arc(x + 8, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 19, y + 69, 6, 12);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 5, y + 24, x + 7, y + 8, x + 18, y + 17, x + 15, y + 23);
    //right forearm
    quad(x + 25, y + 14, x + 27, y + 16, x + 20, y + 24, x + 16, y + 18);
    //right elbow
    arc(x + 17, y + 17, 20, 15, radians(60), radians(120));
    //right hand
    fill(colour);
    ellipse(x + 24, y + 15, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //left calf
    quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
    fill(colour);
    //left quad
    quad(x + 12, y + 40, x + 13, y + 53, x + 6, y + 60, x - 2, y + 45);
    //left knee
    arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
    //left foot
    fill(hitColour);
    ellipse(x + 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 1, y, x + 2, y, x + 14, y + 42, x - 23, y + 42);
    //lower body
    fill(colour);
    arc(x - 4, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 4, y - 1, x - 2, y - 4);
      line(x + 8, y - 1, x + 12, y - 4);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 1, y, 2, 2);
    ellipse(x + 11, y, 2, 2);

    //LEFT ARM;
    //left upper arm
    quad(x - 19, y + 23, x - 18, y + 17, x - 4, y + 17, x - 9, y + 23);
    //left shoulder
    arc(x - 11, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x - 14, y + 22, 10, 6, radians(0), radians(180), OPEN);
    //left forearm
    quad(x + 3, y + 13, x - 3, y + 13, x - 19, y + 22, x - 9, y + 22);
    //left hand
    fill(colour);
    ellipse(x - 4, y + 14, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 8, y + 56, x - 16, y + 67, x - 21, y + 68, x - 13, y + 54);
    fill(colour);
    //left quad
    quad(x - 1, y + 40, x - 6, y + 53, x - 16, y + 53, x - 16, y + 42);
    //left knee
    arc(x - 12, y + 52, 11, 11, radians(0), radians(70));
    //left leg joint
    arc(x - 8, y + 42, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 19, y + 69, 6, 12);
  }
}

function pLeftPunch3(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 5, y + 25, x - 7, y + 9, x - 20, y + 9, x - 22, y + 14);
    //right forearm
    quad(x - 36, y + 3, x - 38, y + 5, x - 22, y + 14, x - 20, y + 9);
    //right hand
    fill(colour);
    ellipse(x - 34, y + 7, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 11, y + 57, x - 7, y + 72, x - 3, y + 72, x - 6, y + 57);
    fill(colour);
    //right quad
    quad(x - 12, y + 40, x - 13, y + 53, x - 6, y + 60, x + 2, y + 45);
    //right knee
    arc(x - 8, y + 56, 11, 11, radians(120), radians(220));
    //right foot
    fill(hitColour);
    ellipse(x - 7, y + 72, 12, 6);

    //left upper arm
    quad(x + 17, y + 24, x + 19, y + 12, x + 4, y + 16, x + 9, y + 23);

    //TORSO
    //upper body
    quad(x + 1, y, x - 2, y, x - 14, y + 42, x + 23, y + 42);
    //lower body
    fill(colour);
    arc(x + 4, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x - 5, y - 1, x + 1, y - 4);
      line(x - 8, y - 1, x - 12, y - 4);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x - 2, y, 2, 2);
    ellipse(x - 11, y, 2, 2);

    //LEFT ARM;
    //left elbow
    arc(x + 16, y + 18, 12, 12, radians(280), radians(90), OPEN);
    //left forearm
    quad(x, y + 12, x + 3, y + 10, x + 19, y + 12, x + 15, y + 20);
    //left hand
    fill(colour);
    ellipse(x + 3, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 8, y + 58, x + 13, y + 69, x + 18, y + 70, x + 13, y + 56);
    fill(colour);
    //left quad
    quad(x + 1, y + 42, x + 6, y + 55, x + 16, y + 55, x + 16, y + 44);
    //left knee
    arc(x + 12, y + 54, 11, 11, radians(110), radians(180));
    //left leg joint
    arc(x + 8, y + 44, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 16, y + 71, 6, 12);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 5, y + 25, x + 7, y + 9, x + 20, y + 9, x + 22, y + 14);
    //right forearm
    quad(x + 36, y + 3, x + 38, y + 5, x + 22, y + 14, x + 20, y + 9);
    //right hand
    fill(colour);
    ellipse(x + 34, y + 7, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
    fill(colour);
    //right quad
    quad(x + 12, y + 40, x + 13, y + 53, x + 6, y + 60, x - 2, y + 45);
    //right knee
    arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
    //right foot
    fill(hitColour);
    ellipse(x + 7, y + 72, 12, 6);

    //left upper arm
    quad(x - 17, y + 24, x - 19, y + 12, x - 4, y + 16, x - 9, y + 23);

    //TORSO
    //upper body
    quad(x - 1, y, x + 2, y, x + 14, y + 42, x - 23, y + 42);
    //lower body
    fill(colour);
    arc(x - 4, y + 37, 38, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y, 30, 30, 30);
    if (boss) {
      stroke(0);
      line(x + 5, y - 1, x - 1, y - 4);
      line(x + 8, y - 1, x + 12, y - 4);
    }
    rectMode(CORNER);
    //eyes
    ellipse(x + 2, y, 2, 2);
    ellipse(x + 11, y, 2, 2);

    //LEFT ARM;
    //left elbow
    arc(x - 16, y + 18, 12, 12, radians(90), radians(260), OPEN);
    //left forearm
    quad(x, y + 12, x - 3, y + 10, x - 19, y + 12, x - 15, y + 20);
    //left hand
    fill(colour);
    ellipse(x - 3, y + 12, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 8, y + 58, x - 13, y + 69, x - 18, y + 70, x - 13, y + 56);
    fill(colour);
    //left quad
    quad(x - 1, y + 42, x - 6, y + 55, x - 16, y + 55, x - 16, y + 44);
    //left knee
    arc(x - 12, y + 54, 11, 11, radians(0), radians(70));
    //left leg joint
    arc(x - 8, y + 44, 15, 15, radians(180), radians(0), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 16, y + 71, 6, 12);
  }
}

function pBlock1(x, y, direction, colour, hit) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 2.5, y + 18, x - 12.5, y + 18, x - 17, y + 28, x - 2, y + 31);
    //right shoulder
    arc(x - 5, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 11, y + 28, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 15, y + 13, x - 20, y + 13, x - 16, y + 30, x - 11, y + 30);
    //right hand
    fill(colour);
    ellipse(x - 17, y + 7, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //left calf
    quad(x - 11, y + 57, x - 7, y + 72, x - 3, y + 72, x - 6, y + 57);
    fill(colour);
    //left quad
    quad(x - 6, y + 40, x - 13, y + 53, x - 6, y + 60, x + 8, y + 45);
    //left knee
    arc(x - 8, y + 56, 11, 11, radians(110), radians(220));
    //left leg joint
    arc(x + 1, y + 42, 15, 15, radians(190), radians(60), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 3, y - 3, x, y - 3, x - 9, y + 42, x + 28, y + 42);
    //lower body
    fill(colour);
    arc(x + 10, y + 37, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y + 3, 30, 30, 30);
    rectMode(CORNER);
    //eyes
    ellipse(x - 2, y + 4, 2, 2);
    ellipse(x - 11, y + 4, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 1, y + 12, x - 4, y + 12, x - 1, y + 28, x + 4, y + 28);
    //left upper arm
    quad(x + 20.5, y + 17, x + 5.5, y + 17, x, y + 29, x + 12, y + 29);
    //left shoulder
    arc(x + 13, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x + 6, y + 28, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 2, y + 7, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 8, y + 57, x + 12, y + 72, x + 16, y + 72, x + 13, y + 57);
    fill(colour);
    //left quad
    quad(x + 13, y + 40, x + 6, y + 53, x + 13, y + 60, x + 27, y + 45);
    //left knee
    arc(x + 11, y + 56, 11, 11, radians(110), radians(250));
    //left leg joint
    arc(x + 20, y + 42, 15, 15, radians(190), radians(60), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 12, y + 72, 12, 6);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 2.5, y + 18, x + 12.5, y + 18, x + 17, y + 28, x + 2, y + 31);
    //right shoulder
    arc(x + 5, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 11, y + 28, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 15, y + 13, x + 20, y + 13, x + 16, y + 30, x + 11, y + 30);
    //right hand
    fill(colour);
    ellipse(x + 17, y + 7, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //left calf
    quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
    fill(colour);
    //left quad
    quad(x + 6, y + 40, x + 13, y + 53, x + 6, y + 60, x - 8, y + 45);
    //left knee
    arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
    //left leg joint
    arc(x - 1, y + 42, 15, 15, radians(120), radians(350), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 3, y, x, y, x + 9, y + 42, x - 28, y + 42);
    //lower body
    fill(colour);
    arc(x - 10, y + 37, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y + 3, 30, 30, 30);
    rectMode(CORNER);
    //eyes
    ellipse(x + 2, y + 4, 2, 2);
    ellipse(x + 11, y + 4, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 1, y + 12, x + 4, y + 12, x + 1, y + 28, x - 4, y + 28);
    //left upper arm
    quad(x - 20.5, y + 17, x - 5.5, y + 17, x, y + 29, x - 12, y + 29);
    //left shoulder
    arc(x - 13, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x - 6, y + 28, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 2, y + 7, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 8, y + 57, x - 12, y + 72, x - 16, y + 72, x - 13, y + 57);
    fill(colour);
    //left quad
    quad(x - 13, y + 40, x - 6, y + 53, x - 13, y + 60, x - 27, y + 45);
    //left knee
    arc(x - 11, y + 56, 11, 11, radians(320), radians(60));
    //left leg joint
    arc(x - 20, y + 42, 15, 15, radians(120), radians(350), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 12, y + 72, 12, 6);
  }
}

function pBlock2(x, y, direction, colour, hit) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  if (direction == "left") {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x + 2.5, y + 18, x - 12.5, y + 18, x - 17, y + 29, x - 2, y + 32);
    //right shoulder
    arc(x - 5, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x - 11, y + 29, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x - 15, y + 15, x - 20, y + 15, x - 16, y + 31, x - 11, y + 31);
    //right hand
    fill(colour);
    ellipse(x - 17, y + 9, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x - 11, y + 57, x - 7, y + 72, x - 3, y + 72, x - 6, y + 57);
    fill(colour);
    //right quad
    quad(x - 6, y + 40, x - 13, y + 53, x - 6, y + 60, x + 8, y + 45);
    //right knee
    arc(x - 8, y + 56, 11, 11, radians(110), radians(220));
    //right leg joint
    arc(x + 1, y + 42, 15, 15, radians(190), radians(60), OPEN);
    //right foot
    fill(hitColour);
    ellipse(x - 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x + 3, y, x, y, x - 9, y + 42, x + 28, y + 42);
    //lower body
    fill(colour);
    arc(x + 10, y + 37, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y + 5, 30, 30, 30);
    rectMode(CORNER);
    //eyes
    ellipse(x - 2, y + 6, 2, 2);
    ellipse(x - 11, y + 6, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x + 1, y + 13, x - 4, y + 13, x - 1, y + 29, x + 4, y + 29);
    //left upper arm
    quad(x + 20.5, y + 17, x + 5.5, y + 17, x, y + 30, x + 12, y + 30);
    //left shoulder
    arc(x + 13, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x + 6, y + 29, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x - 2, y + 9, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x + 8, y + 57, x + 12, y + 72, x + 16, y + 72, x + 13, y + 57);
    fill(colour);
    //left quad
    quad(x + 13, y + 40, x + 6, y + 53, x + 13, y + 60, x + 27, y + 45);
    //left knee
    arc(x + 11, y + 56, 11, 11, radians(110), radians(250));
    //left leg joint
    arc(x + 20, y + 42, 15, 15, radians(190), radians(60), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x + 12, y + 72, 12, 6);
  } else {
    //RIGHT ARM
    fill(hitColour);
    //right upper arm
    quad(x - 2.5, y + 18, x + 12.5, y + 18, x + 17, y + 29, x + 2, y + 32);
    //right shoulder
    arc(x + 5, y + 19, 15, 15, radians(180), radians(0), OPEN);
    //right elbow
    arc(x + 11, y + 29, 12, 10, radians(0), radians(180), OPEN);
    //right forearm
    quad(x + 15, y + 15, x + 20, y + 15, x + 16, y + 31, x + 11, y + 31);
    //right hand
    fill(colour);
    ellipse(x + 17, y + 9, 12, 12);

    //RIGHT LEG
    fill(hitColour);
    //right calf
    quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
    fill(colour);
    //right quad
    quad(x + 6, y + 40, x + 13, y + 53, x + 6, y + 60, x - 8, y + 45);
    //right knee
    arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
    //right leg joint
    arc(x - 1, y + 42, 15, 15, radians(120), radians(350), OPEN);
    //right foot
    fill(hitColour);
    ellipse(x + 7, y + 72, 12, 6);

    //TORSO
    //upper body
    quad(x - 3, y, x, y, x + 9, y + 42, x - 28, y + 42);
    //lower body
    fill(colour);
    arc(x - 10, y + 37, 40, 25, radians(10), radians(170), OPEN);

    //HEAD
    fill(hitColour);
    rectMode(CENTER);
    rect(x, y + 5, 30, 30, 30);
    rectMode(CORNER);
    //eyes
    ellipse(x + 2, y + 6, 2, 2);
    ellipse(x + 11, y + 6, 2, 2);

    //LEFT ARM
    //left forearm
    quad(x - 1, y + 13, x + 4, y + 13, x + 1, y + 29, x - 4, y + 29);
    //left upper arm
    quad(x - 20.5, y + 17, x - 5.5, y + 17, x, y + 30, x - 12, y + 30);
    //left shoulder
    arc(x - 13, y + 18, 15, 15, radians(180), radians(0), OPEN);
    //left elbow
    arc(x - 6, y + 29, 12, 10, radians(0), radians(180), OPEN);
    //left hand
    fill(colour);
    ellipse(x + 2, y + 9, 12, 12);

    //LEFT LEG
    fill(hitColour);
    //left calf
    quad(x - 8, y + 57, x - 12, y + 72, x - 16, y + 72, x - 13, y + 57);
    fill(colour);
    //left quad
    quad(x - 13, y + 40, x - 6, y + 53, x - 13, y + 60, x - 27, y + 45);
    //left knee
    arc(x - 11, y + 56, 11, 11, radians(320), radians(60));
    //left leg joint
    arc(x - 20, y + 42, 15, 15, radians(120), radians(350), OPEN);
    //left foot
    fill(hitColour);
    ellipse(x - 12, y + 72, 12, 6);
  }
}

function celebrate(x, y, direction, colour, hit, boss) {
  let hitColour;
  if (hit) {
    hitColour = "red";
  } else {
    hitColour = "white";
  }
  stroke(0)
  //RIGHT ARM
  fill(hitColour);
  //right elbow
  arc(x + 6, y + 20, 12, 10, radians(0), radians(180), OPEN);
  //right forearm
  quad(x + 20, y - 14, x + 25, y - 14, x + 12, y + 20, x + 4, y + 20);
  //right hand
  fill(colour);
  ellipse(x + 22.5, y - 14, 12, 12);

  //RIGHT LEG
  fill(hitColour);
  //left calf
  quad(x + 11, y + 57, x + 7, y + 72, x + 3, y + 72, x + 6, y + 57);
  fill(colour);
  //left quad
  quad(x + 6, y + 40, x + 13, y + 53, x + 6, y + 60, x - 8, y + 45);
  //left knee
  arc(x + 8, y + 56, 11, 11, radians(320), radians(60));
  //left leg joint
  arc(x - 1, y + 42, 15, 15, radians(120), radians(350), OPEN);
  //left foot
  fill(hitColour);
  ellipse(x + 7, y + 72, 12, 6);

  //TORSO
  //upper body
  quad(x - 3, y - 3, x, y - 3, x + 9, y + 42, x - 28, y + 42);
  //lower body
  fill(colour);
  arc(x - 10, y + 37, 40, 25, radians(10), radians(170), OPEN);

  //HEAD
  fill(hitColour);
  rectMode(CENTER);
  rect(x, y, 30, 30, 30);
  if (boss) {
    stroke(0);
    line(x + 4, y - 1, x - 2, y - 4);
    line(x + 9, y - 1, x + 15, y - 4);
  }
  rectMode(CORNER);
  //eyes
  ellipse(x + 2, y + 1, 2, 2);
  ellipse(x + 11, y + 1, 2, 2);

  //LEFT ARM
  //left forearm
  quad(x, y + 12, x + 5, y + 12, x - 4, y + 31, x - 10, y + 31);
  //left upper arm
  quad(x - 20.5, y + 17, x - 5.5, y + 17, x - 4, y + 32, x - 16, y + 32);
  //left shoulder
  arc(x - 13, y + 18, 15, 15, radians(180), radians(0), OPEN);
  //left elbow
  arc(x - 10, y + 31, 12, 10, radians(0), radians(180), OPEN);
  //left hand
  fill(colour);
  ellipse(x + 2.5, y + 12, 12, 12);

  //LEFT LEG
  fill(hitColour);
  //left calf
  quad(x - 8, y + 57, x - 12, y + 72, x - 16, y + 72, x - 13, y + 57);
  fill(colour);
  //left quad
  quad(x - 13, y + 40, x - 6, y + 53, x - 13, y + 60, x - 27, y + 45);
  //left knee
  arc(x - 11, y + 56, 11, 11, radians(320), radians(60));
  //left leg joint
  arc(x - 20, y + 42, 15, 15, radians(120), radians(350), OPEN);
  //left foot
  fill(hitColour);
  ellipse(x - 12, y + 72, 12, 6);
}
