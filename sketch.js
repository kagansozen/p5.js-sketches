
var backgroundColor = 0;

function setup() {
  createCanvas(800, 800);
  background(backgroundColor);
  noLoop();
}

function draw() {
  for (var s = 25; s < 800; s += 50) {
    for (var i = 25; i < 800; i +=50) {
      var r = random(5800);
      var g = random(342);
      var b = random(66);
      fill(r, g, b);
      ellipse(i, s, 50, 50);
      saveFrames()
    }
  }
}