let platX = [];
let realPlatX = [];
let tempPlatX = []
let platY = [];
let platJump = [];
let ePlatJumpCount = []
let platLength = [];
let platNum
let platCheck;
let fall
let eFall = [];
let eCondition = [];
function Platform() {
  this.display = function (z) {
    let platdx = realPlatX[z] - platX[z];
    platX[z] += platdx * 0.05;
    if (stage[0]) {
      fill(130, 127, 127);
    } else if (stage[1]) {
      stroke(76, 186, 48)
      fill(14, 41, 7)
    } else if (stage[2]) {
      fill(151, 171, 201)
    } else if (stage[3]) {
      fill(84, 45, 30)
    } else if (stage[4]) {
      stroke(255)
      fill(48, 42, 42)
    }
    rectMode(CENTER);
    rect(platX[z], platY[z], platLength[z], 4);
    stroke(0)
    //Player
    if (
      !keyIsDown(83) &&
      !keyIsDown(40) &&
      a >= 0 &&
      !platJump[z] &&
      pY > platY[z] - 78 &&
      pY < platY[z] - 62 &&
      pX >= platX[z] - platLength[z] / 2 - 17 &&
      pX <= platX[z] + platLength[z] / 2 + 17
    ) {
      airtime = 0;
      after = false;
      jump = false;
      platJump[z] = true;
    }
    if (platJump[z]) {
      if (
        !keyIsDown(83) &&
        !keyIsDown(40) &&
        pX >= platX[z] - platLength[z] / 2 - 17 &&
        pX <= platX[z] + platLength[z] / 2 + 17
      ) {
        pY = platY[z] - 78;
        if (keyIsDown(87) || keyIsDown(38)) {
          a = -10;
          jump = true;
          platJump[z] = false;
        }
      } else {
        a = 0;
        after = true;
        jump = true;
        platJump[z] = false;
        fall = true;
      }
    }
    //Enemy
    for (let i = 0; i < enemyNum; i++) {
      if (
        eA[i] >= 0 &&
        eY[i] > platY[z] - 78 &&
        eY[i] < platY[z] - 62 &&
        eX[i] >= platX[z] - platLength[z] / 2 - 17 &&
        eX[i] <= platX[z] + platLength[z] / 2 + 17 &&
        pY + 78 == platY[z] &&
        !(ePlatJumpCount[i])[z]
      ) {
        eAirtime[i] = 0;
        (ePlatJumpCount[i])[z] = true;
        eJump[i] = false;
        eAfter[i] = false;
      }
      if ((ePlatJumpCount[i])[z]) {
        eY[i] = platY[z] - 78;
        if (!platJump[z] && pY + 76 < platY[z]) {
          (ePlatJumpCount[i])[z] = false;
          eJump[i] = true;
          eFall[i] = false;
          eA[i] = -10;
          eAfter[i] = false;
        }
        if (
          eX[i] < platX[z] - platLength[z] / 2 - 17 ||
          eX[i] > platX[z] + platLength[z] / 2 + 17
        ) {
          (ePlatJumpCount[i])[z] = false;
          eJump[i] = true;
          eFall[i] = true;
          eA[i] = 0;
          eAfter[i] = true;
        }
      }
    }
    platCheck = platJump.every(val => val === false)
  };
}
