let color1, color2, color3, color4, color5;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
  color1 = color(0, 0, 255);
  color2 = color(128, 0, 128);
  color3 = color(0, 255, 0);
  color4 = color(255, 0, 0);
  color5 = color(255, 165, 0);
}

function draw() {
  let r1 = map(sin(time * 0.2), -1, 1, red(color1), red(color2));
  let g1 = map(sin(time * 0.5), -1, 1, green(color1), green(color3));
  let b1 = map(sin(time * 0.7), -1, 1, blue(color1), blue(color2));
  
  let r2 = map(sin(time * 0.6), -1, 1, red(color2), red(color3));
  let g2 = map(sin(time * 0.4), -1, 1, green(color2), green(color1));
  let b2 = map(sin(time * 0.3), -1, 1, blue(color2), blue(color3));
  
  let r3 = map(sin(time * 0.9), -1, 1, red(color4), red(color5));
  let g3 = map(sin(time * 1.1), -1, 1, green(color4), green(color1));
  let b3 = map(sin(time * 1.2), -1, 1, blue(color4), blue(color5));
  
  setGradient(0, 0, width, height, color(r1, g1, b1), color(r2, g2, b2), 1);
  
  for (let i = 0; i < width; i += 10) {
    for (let j = 0; j < height; j += 10) {
      let n = noise(i * 0.05, j * 0.05, time * 0.1);
      let blendColor = lerpColor(color1, color4, n);
      fill(blendColor);
      ellipse(i + 5, j + 5, 30, 30);
    }
  }

  time += 0.01;
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  
  if (axis === 1) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === 2) {
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}