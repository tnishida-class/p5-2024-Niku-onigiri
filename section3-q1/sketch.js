// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;
let s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
  s = 1;
}

function windowResized() {
  resezeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(160, 192, 255);
  count = (count + s) % cycle;
  if (mouseIsPressed) { s = 3; }
  else { s = 1; }

  if (count < cycle / 2) { size = count + 50; }
  else { size = cycle - count + 50; }


  // BLANK[1]
  ellipse(width / 2, height / 2, size);
}
