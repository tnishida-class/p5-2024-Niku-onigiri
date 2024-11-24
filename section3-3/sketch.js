// テキスト「キーボード操作に反応する」
let x, y, vy;
const g = 1;
const jump = 30;
const ground = 55;
const size = 30;


function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width / 2;
  y = height - ground;
  vy = 0;
}

function draw() {
  background(160, 192, 255);

  fill(242, 212, 147);
  rect(0, windowHeight - ground, windowWidth, windowHeight);

  fill(255);
  ellipse(x, y, size);

  if (keyIsDown("D".charCodeAt(0))) { x += 10; }
  if (keyIsDown("A".charCodeAt(0))) { x -= 10; }
  if ((keyIsDown(SHIFT)) && (keyIsDown("D".charCodeAt(0)))) { x += 20; }
  if ((keyIsDown(SHIFT)) && (keyIsDown("A".charCodeAt(0)))) { x -= 20; }
  if (x > width) { x = 0; }
  else if (x < 0) { x = width; }

  y += vy;

  if (y < height - ground) {
    vy += g;
  }
  else {
    vy = 0;
    y = height - ground;
  }
}

function keyPressed() {
  if(key == " ")
  if (y >= height - ground) {  // on the ground
    vy = -jump;
 }
}




// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
