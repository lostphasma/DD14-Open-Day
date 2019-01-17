var t = 0;
var bc = 180;
var ac = 60;
var cnv;

function setup() {
    cnv = createCanvas(640, 480);
    //   var width = 640;
    //   var height = 480;
    background(bc);
    document.body.style.backgroundColor = `rgb(${bc}, ${bc}, ${bc}`;
}

function draw() {

    translate(width / 2, height / 2);

    strokeWeight(1);

    var NUM_LINES = 0;

    for (var i = 0; i <= NUM_LINES; i++) {
        stroke(ac, map(i, 0, 12, 255, 255));
        line(px1(t + i), py1(t + i), px2(t + i), py2(t + i));
    }

    // print(t);
    t += 0.5;

}

function mousePressed() {
    noLoop();
    save(cnv, 'yo.png');
}

function px1(t) {
    return Math.sin(t / 7) * 100;
}

function py1(t) {
    return Math.cos(t / 9) * 100;
}

function px2(t) {
    return Math.sin(t / 9) * 200;
}

function py2(t) {
    return Math.cos(t / 7) * 200;
}