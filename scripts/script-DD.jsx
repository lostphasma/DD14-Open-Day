#includepath "~/Documents/;%USERPROFILE%Documents";

#include "basiljs/bundle/basil.js";

//quante volte lo esporta
var exportCounter = 1;

function draw() {

    for (i = 0; i < exportCounter; i++) {

        // ------ TIMESTAMP ------
        b.clear(b.layer("timestamp"));
        b.layer("timestamp");

        var yMin = b.margins().top;
        var yMax = b.height - b.margins().bottom;

        b.colorMode(b.CMYK);
        b.fill(15, 12, 10, 0);
        b.textSize(7);
        b.textFont("Akkurat Mono", "Regular");
        b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.TOP_ALIGN);
        var boxWidth = 100;
        var boxHeight = 30;
        b.text("Generated on " + "\n" + b.day() + "." + b.month() + "." + b.year() + "\n" + "h. " + b.hour() + ":" + b.minute() + ":" + b.second(), b.width - b.margins().right - boxWidth, b.margins().top, boxWidth, boxHeight);

        // ------ LINEE DALLE LETTERE ------

        b.layer("texts");
        var textsElements = b.items(b.layer("texts")); // prende tutti gli elementi del livello, è un array

        textFrames0 = b.characters(textsElements[0]);
        textFrames1 = b.characters(textsElements[1]);
        textFrames2 = b.characters(textsElements[2]);
        textFrames3 = b.characters(textsElements[3]);

        b.clear(b.layer("generatedLines")); // pulisce il livello generatedLines
        b.layer("generatedLines"); // get or create this layer and set it as the active one

        // ------ RANDOM MOVE ------
        moveElement(textsElements[1], 290, 350); //chiamo la funzione per offset elemento in x e y
        moveElement(textsElements[2], 630, 670);
        moveElement(textsElements[3], 790, 860);

        linesGeneration(textFrames0, textFrames1);
        linesGeneration(textFrames1, textFrames2);
        linesGeneration(textFrames2, textFrames3);

        b.savePDF("Flyer" + i + ".pdf", false);
    }
}

b.go();






// ------ --------- ------
// ------ FUNCTIONS ------
// ------ --------- ------


// function linesGenerationTitle(tf1, tf2) {

//     var inc1 = b.ceil(b.random(1,3));
//     var inc2 = b.ceil(b.random(4,7));
//     var start1 = 0;
//     var start2 = 0;

//     // serve sotto: direzione delle bézier
//     var direction = plusMinus();

//     for (var i = start1; i < tf1.length; i = i + inc1) { // for each word

//         var w1 = tf1[i]; // current letter from the first tf

//         // nested for-loop, connect each word with all other words of other tf
//         for (var j = start2; j < tf2.length; j = j + inc2) {

//             var w2 = tf2[j]; // the current word from the second tf
//             if (w1.contents != " " && w2.contents != " ") {
//                 b.colorMode(b.CMYK);
//                 b.stroke(0, 75, 75, 20);
//                 b.noFill();
//                 b.strokeWeight(b.random(0, 1));

//                 //---LINEE DRITTE
//                 //
//                 b.opacity(
//                     b.line(
//                         // add half of the width and height to make sure the lines are centered
//                         b.bounds(w1).left + b.bounds(w1).width / 2,
//                         b.bounds(w1).top + b.bounds(w1).height / 2,
//                         b.bounds(w2).left + b.bounds(w2).width / 2,
//                         b.bounds(w2).top + b.bounds(w2).height / 2
//                     ),
//                     b.random(50, 100));
//             }
//         }
//     }
// }

// function linesGeneration(tf1, tf2) {

//     var inc1 = 1;
//     var inc2 = 1;
//     // var inc1 = b.ceil(b.random(5,8));
//     // var inc2 = b.ceil(b.random(4,7));
//     var start1 = 0;
//     var start2 = 0;

//     // serve sotto: direzione delle bézier
//     var direction = plusMinus();

//     for (var i = start1; i < tf1.length; i = i + inc1) { // for each word

//         var w1 = tf1[i]; // current letter from the first tf

//         // nested for-loop, connect each word with all other words of other tf
//         for (var j = start2; j < tf2.length; j = j + inc2) {

//             var w2 = tf2[j]; // the current word from the second tf

//             if (w2.contents.toLowerCase() == w1.contents.toLowerCase() && w2.contents != " ") {
//                 b.colorMode(b.CMYK);
//                 b.stroke(0, 75, 75, 20);
//                 b.noFill();
//                 b.strokeWeight(b.random(0, 1));

//                 //---LINEE DRITTE
//                 //
//                 b.opacity(
//                     b.line(
//                         // add half of the width and height to make sure the lines are centered
//                         b.bounds(w1).left + b.bounds(w1).width / 2,
//                         b.bounds(w1).top + b.bounds(w1).height / 2,
//                         b.bounds(w2).left + b.bounds(w2).width / 2,
//                         b.bounds(w2).top + b.bounds(w2).height / 2
//                     ),
//                     b.random(50, 100));
//             }
//         }
//     }
// }

// function linesGenerationDate(tf1, tf2) {

//     var inc1 = b.ceil(b.random(5,8));
//     var inc2 = b.ceil(b.random(4,7));
//     var start1 = 0;
//     var start2 = 0;

//     // serve sotto: direzione delle bézier
//     var direction = plusMinus();

//     for (var i = start1; i < tf1.length; i = i + inc1) { // for each word

//         var w1 = tf1[i]; // current letter from the first tf

//         // nested for-loop, connect each word with all other words of other tf
//         for (var j = start2; j < tf2.length; j = j + inc2) {

//             var w2 = tf2[j]; // the current word from the second tf
//                 b.colorMode(b.CMYK);
//                 b.stroke(0, 75, 75, 20);
//                 b.noFill();
//                 b.strokeWeight(b.random(0, 1));

//                 //---LINEE DRITTE
//                 //
//                 b.opacity(
//                     b.line(
//                         // add half of the width and height to make sure the lines are centered
//                         b.bounds(w1).left + b.bounds(w1).width / 2,
//                         b.bounds(w1).top + b.bounds(w1).height / 2,
//                         b.bounds(w2).left + b.bounds(w2).width / 2,
//                         b.bounds(w2).top + b.bounds(w2).height / 2
//                     ),
//                     b.random(50, 100));
//         }
//     }
// }

function linesGeneration(tf1, tf2) {

    var inc1 = 1;
    var inc2 = 1;
    var start1 = 0;
    var start2 = 0;

    // serve sotto: direzione delle bézier
    var direction = plusMinus();

    for (var i = start1; i < tf1.length; i = i + inc1) { // for each word

        var w1 = tf1[i]; // current letter from the first tf

        // nested for-loop, connect each word with all other words of other tf
        for (var j = start2; j < tf2.length; j = j + inc2) {

            var w2 = tf2[j]; // the current word from the second tf

            if (w2.contents.toLowerCase() == w1.contents.toLowerCase() && w2.contents != " ") {
                b.colorMode(b.CMYK);
                b.stroke(0, 75, 75, 20);
                b.noFill();
                b.strokeWeight(b.random(0, 1));

                // ---LINEE MOLLEGGIATE YEAH
                
                var x1 = b.bounds(w1).left + b.bounds(w1).width / 2;
                var y1 = b.bounds(w1).top + b.bounds(w1).height / 2;
                var x2 = b.bounds(w2).left + b.bounds(w2).width / 2;
                var y2 = b.bounds(w2).top + b.bounds(w2).height / 2;

                function conditioner(v1, v2, off) {
                    return v1 > v2 ? off * -1 : off * 1;
                }

                var absX = b.abs(x1+x2)/2;
                var absY = b.abs(y1+y2)/2;
                var offsetX = absY / b.map(absY, y1, y2, 0.25, 8);
                var offsetY = absY / b.map(absY, y1, y2, 4, 8);


                b.beginShape();

                b.vertex(
                    x1,
                    y1
                );

                b.vertex(
                    //b.vertex(x, y, [xAnchorLeft], [yAnchorLeft], [xAnchorRight], [yAnchorRight])
                    absX,
                    absY,
                    absX - offsetX * direction,
                    absY - offsetY,
                    absX + offsetX * direction,
                    absY + offsetY
                );

                b.vertex(
                    x2,
                    y2
                );

                b.opacity(b.endShape(), b.random(50, 100));
            }
        }
    }
}

function moveElement(el, minY, maxY) {
    //randomizzo un moltiplicatore per definire spostamento positivo o negativo

    var plusMinus = b.random(0, 1) < 0.5 ? -1 : 1;
    b.itemPosition(
        el,
        b.ceil(b.random(b.margins().left, b.width - b.itemSize(el).width - b.margins().right)),
        b.random(minY, maxY)
    );
}

function plusMinus() {
    var pm = b.random(0, 1) < 0.5 ? -1 : 1;
    return pm;
}