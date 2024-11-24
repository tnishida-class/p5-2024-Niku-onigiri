// 最終課題を制作しよう
let snows = [];
let x, y, vn;
let m, n;
let ground;
const g = 1 / 2;
const jump = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = windowHeight - 50;
  m = width / 2;
  n = windowHeight - 125;
  ground = 25;
  vn = 0;
}

function draw() {
  background(160, 192, 255);

  x += random(-30, 30);
  if (x < 0) {
    x = 0
  }
  if (x > width) {
    x = width
  }

  if (m < 0) {
    m = 0
  }
  if (m > width) {
    m = width
  }

  n += vn;

  if (n < height - ground - 100) {
    vn += g;
  }
  else {
    vn = 0;
    n = height - ground - 100;
  }

  noStroke();
  fill(100, 100, 200);
  arc(m, n, 100, 100, PI, TWO_PI, CHORD);

  fill(255);
  rect(0, height - ground, width, height);

  stroke(50);
  strokeWeight(2);
  line(m, n, m, n + 50);

  noStroke();
  fill(255, 228, 181);
  ellipse(x, y, 90, 75);
  ellipse(x - 27, y - 33, 15);
  ellipse(x + 27, y - 33, 15);

  stroke(50);
  strokeWeight(2);
  line(x - 25, y - 8, x - 15, y - 8);
  line(x - 25, y - 6, x - 15, y - 6);
  line(x + 25, y - 8, x + 15, y - 8);
  line(x + 25, y - 6, x + 15, y - 6);
  line(x - 10, y + 15, x, y + 10);
  line(x, y + 10, x + 10, y + 15);

  if (keyIsDown("D".charCodeAt(0))) { m += 5; }
  if (keyIsDown("A".charCodeAt(0))) { m -= 5; }

  if (frameCount % 10 === 0) {
    snows.push({
      x: random(width),
      y: 0,
      size: random(5, 15),
      speed: random(1, 3),
    });
  }
  for (let i = snows.length - 1; i >= 0; i--) {
    let s = snows[i];
    fill(255);
    noStroke();
    ellipse(s.x, s.y, s.size);

    s.y += s.speed;

    if (s.y > height) {
      snows.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (key == " ")
    if (n >= height - ground - 100) {
      vn = -jump;
    }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
