float t;

void setup() {
  size(640, 480);
  int width = 640;
  int height = 480;
  background(0);
}

void draw() {

  translate(width/2, height/2);

  strokeWeight(2);
  
  int NUM_LINES = 12;
  
  for (int i = 0; i <= NUM_LINES; i++) {
    stroke(255, map(i, 0, 12, 0, 20));
    line(px1(t + i), py1(t + i), px2(t + i), py2(t + i));
  }
  
  t += 1;
}

float px1(float t) {
  return sin(t / 10) * 100 + sin(t / 5) * 20;
}

float py1(float t) {
  return cos(t / 10) * 100;
}

float px2(float t) {
  return sin(t / 14) * 200 + sin(t) * 2;
}

float py2(float t) {
  return cos(t / 10) * 200 + cos(t / 2) * 20;
}
