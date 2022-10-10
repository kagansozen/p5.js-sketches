Dlet a, b, c, d, e;

function setup() {
  createCanvas(710, 400);
  noStroke();
  a = color(53, 118, 174);
  b = color(104, 174, 201);
  c = color(169, 216, 222);
  d = color(233, 203, 142);
  e = color(165, 102, 58);
  noLoop(); // Draw only one time
}

function draw() {
  drawBand(a, b, c, d, e, 0, width / 15 );
  drawBand(c, a, d, b, e, height / 2, width / 223);
}

function drawBand(v, w, x, y, z, ypos, barWidth) {
  let num = 5;
  let colorOrder = [v, w, x, y, z];
  for (let i = 0; i < width; i += barWidth * num) {
    for (let j = 0; j < num; j++) {
      fill(colorOrder[j]);
      rect(i + j * barWidth, ypos, barWidth, height / 2);

    }
  }
}
