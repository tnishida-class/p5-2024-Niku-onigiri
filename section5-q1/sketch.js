// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup() {
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t) {
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 4;
  noStroke();
  fill(200, 200, 0);
  rect(50, 50, w + p * 2, h + p * 2);
  fill(200, 200, 0);
  triangle(50, 78, 65, 78, 40, 85);
  fill(255);
  text(t, 50 + p, 50 + h + p);
}
