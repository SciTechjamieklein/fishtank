let fimg;
let sand;
let seaweed;
let seaweedframe;
var fishColButton;
var fishCol = 1;
var backCol = 1;
var backColButton;
var seashowf = true;
var seashowl = true;
var seashowfB;
var seashowlB;
var fx = 201;
var fy = 320;
var txs;
var tys;
var txl;
var tyl;
var foodx;
var foody;
var sd = 1.5;
var th;
function changeFish() {
  if (fishCol == 1) {
    fishCol = 2;
  } else {
    if (fishCol == 2) {
      fishCol = 3;
    } else {
      if (fishCol == 3) {
        fishCol = 4;
      } else {
        if (fishCol == 4) {
          fishCol = 1;
        }
      }
    }
  }
}
function changeBg() {
  if (backCol == 1) {
    backCol = 2;
  } else {
    if (backCol == 2) {
      backCol = 3;
    } else {
      if (backCol == 3) {
        backCol = 4;
      } else {
        if (backCol == 4) {
          backCol = 1;
        }
      }
    }
  }
}
function sSf() {
  if (seashowf == true) {
    seashowf = false;
  } else {
    if (seashowf == false) {
      seashowf = true;
    }
  }
}
function sSl() {
  if (seashowl == true) {
    seashowl = false
  } else {
    if (seashowl == false) {
      seashowl = true
    }
  }
}
function setup() {
  createCanvas(500, 500)
  fishCol = 1;
  fimg = loadImage('realfish.png')
  sand = loadImage('sand.png')
  seaweed = loadImage('seaweed.png')
  seaweedframe = loadImage('seaweedframe.png')
  fishColButton = createButton('change fish color')
  fishColButton.mouseClicked(changeFish)
  fishColButton.position(50, 625)
  backColButton = createButton('change background color')
  backColButton.mouseClicked(changeBg)
  backColButton.position(200, 625)
  seashowfB = createButton('toggle seaweed visibility')
  seashowfB.mouseClicked(sSf)
  seashowfB.position(400, 625)
  seashowlB = createButton('toggle seaweed visibility')
  seashowlB.mouseClicked(sSl)
  seashowlB.position(590, 625)
}
function draw() {
  th = Math.random();
  th = Math.round(th);
  if (backCol == 1) {
    background(0, 67, 250);
    fill(0, 0, 0)
  } else {
    if (backCol == 2) {
      background(13, 18, 100)
      fill(255, 255, 255)
    } else {
      if (backCol == 3) {
        background(62, 160, 161)
        fill(0, 0, 0)
      } else {
        if (backCol == 4) {
          background(6, 200, 120)
        }
      }
    }
  }
  if (seashowf == true) {
    image(seaweed, 250, 250)
  } else {
    if (seashowf == false) {
    }
  }
  if (seashowl == true) {
    image(seaweedframe, 100, 250)
  } else {
    if (seashowl == false) {
    }
  }
  image(fimg, fx - 15, fy - 15);
  image(sand, 0, 400);
  text("fish", fx - 5, fy - 5);
  if (fx >= 400) {
    txl = true;
    txs = false;
  }
  if (fx <= 50) {
    txs = true;
    txl = false;
  }
  if (fy >= 370) {
    tyl = true;
    tys = false;
  }
  if (fy <= 10) {
    tys = true;
    tyl = false;
  }
  if (txl == true) {
    fx = fx - sd;
    if (fishCol == 1) {
      fimg = loadImage('flipfish.png')
    } else {
      if (fishCol == 2) {
        fimg = loadImage('altfishflip.png')
      } else {
        if (fishCol == 3) {
          fimg = loadImage('altaltfishflip.png')
        } else {
          if (fishCol == 4) {
            fimg = loadImage('greenflip.png')
          }
        }
      }
    }
    if (tyl != true) {
      if (th == 1) {
        fy = fy + sd;
      }
    }
  } else {
    fx = fx + sd;
    if (tyl != true) {
      if (th == 0) {
        fy = fy + sd;
      }
    }
  }
  if (tyl == true) {
    fy = fy - sd;
    if (txl != true) {
      if (th == 1) {
        fx = fx + sd;
      }
    }
  } else {
    fy = fy + sd;
    if (txs != true) {
      if (th == 1) {
        fx = fx - sd;
      }
    }
  }
  if (txs == true) {
    fx = fx + sd;
    if (fishCol == 1) {
      fimg = loadImage('realfish.png')
    } else {
      if (fishCol == 2) {
        fimg = loadImage('altfish.png')
      } else {
        if (fishCol == 3) {
          fimg = loadImage('altaltfish.png')
        } else {
          if (fishCol == 4) {
            fimg = loadImage('green.png')
          }
        }
      }
    }
    if (tys != true) {
      if (th == 1) {
        fx = fx - sd;
      }
    }
  }
  if (tys == true) {
    fy = fy + sd;
    if (txl != true) {
      if (th == 1) {
        fx = fx + sd;
      }
    }
  }
}