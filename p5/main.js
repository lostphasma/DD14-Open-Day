var t = 0;
var bc = 180;
var ac = 40;
var m = 350;
var cnv;
document.body.style.backgroundColor = `rgb(${bc}, ${bc}, ${bc})`;

var slidervalues = [1, 1, 1, 1];

var sliders = document.getElementsByClassName('slider');
Array.prototype.forEach.call(sliders, function (slider, index) {
    slider.addEventListener('input', () => {
        var label = document.getElementsByClassName('label')[index]
        label.innerHTML = slider.value;
        slidervalues[index] = slider.value;

        console.log(slidervalues[index])

        loop();
    })
})

function setup() {
    cnv = createCanvas(720, 720);
    clear();
    strokeWeight(0.2);
    stroke(ac, ac, ac);
    noFill();
}

function draw() {
    background(ac);
    clear();
    translate(width / 2, height / 2);
    beginShape();
    for (i = 0; i < 360; i += 0.5) {
        vertex(px(i, slidervalues[0]), py(i, slidervalues[1]));
        vertex(px(i, slidervalues[2]), py(i, slidervalues[3]));
    }
    endShape();

    noLoop();
}

let pressed = 0;
function keyPressed() {
    if (keyIsDown(DOWN_ARROW) && pressed >= 1) {
        save(cnv, '_.png');
    }
    pressed ++;
}

function px(t, f) {
    return Math.sin(t / f) * m;
}

function py(t, f) {
    return Math.cos(t / f) * m;
}