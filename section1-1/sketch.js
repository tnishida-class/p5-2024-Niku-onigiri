function setup() {
  createCanvas(800, 600); // キャンバスサイズ
  noLoop(); // 静止画として描画
}

function draw() {
  background(220); // 背景色を薄いグレーに設定

  // 傘の位置とサイズ
  let centerX = width / 2; // 傘の中心X座標
  let centerY = height / 2; // 傘の中心Y座標
  let radius = 150; // 傘の半径
  let handleLength = 200; // 傘の持ち手の長さ

  // 傘のトップ部分（半円形）
  fill(255, 0, 0); // 赤色
  arc(centerX, centerY, radius * 2, radius * 2, PI, TWO_PI, CHORD);

  // 傘の縁を分割するライン
  let segments = 7; // 傘を分割するセグメント数
  for (let i = 0; i <= segments; i++) {
    let angle = PI * (i / segments); // セグメントの角度
    let x = centerX + cos(angle) * radius;
    let y = centerY - sin(angle) * radius;
    stroke(0);
    line(centerX, centerY, x, y); // 中心から縁までのライン
  }

  // 傘の持ち手
  stroke(100, 50, 0); // 茶色
  strokeWeight(8); // 持ち手の太さ
  line(centerX, centerY, centerX, centerY + handleLength); // 持ち手の直線

  // 持ち手の先端を曲げる部分
  noFill();
  stroke(100, 50, 0);
  arc(centerX, centerY + handleLength - 10, 30, 30, 0, HALF_PI);
}

