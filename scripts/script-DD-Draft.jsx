#includepath "~/Documents/;%USERPROFILE%Documents";

#include "basiljs/bundle/basil.js";

//quante volte lo esporta
var exportCounter = 10;

function draw() {

    for (i = 0; i < exportCounter; i++) {

        // // ------ GENERAZIONE CERCHI
        // //pulisco layer dei cerchi e ne genero di nuovi
        // b.clear(b.layer("circles"));

        // //crea o seleziona il layer
        // b.layer("circles"); 

        // for(i=0; i<16; i++){
        //     // x 119, 238, 357, 476
        //     var radius = b.round(b.random(1,175));

        //     var multiplier = 2;

        //     var r1 = radius;
        //     var r2 = radius * multiplier;

        //     b.noFill();
        //     var grey = 200;
        //     b.stroke(grey,grey,grey);
        //     b.strokeWeight(0.5);

        //     if (i>=0 && i<=3) {
        //         b.ellipse(119, b.random(yMin, yMax), r1, r1);

        //     } else if (i>=4 && i<=7) {
        //         b.ellipse(238, b.random(yMin, yMax), r2, r2);

        //     } else if (i>=8 && i<=11) {
        //         b.ellipse(357, b.random(yMin, yMax), r1, r1);

        //     } else if (i>=12 && i<=15) {
        //         b.ellipse(476, b.random(yMin, yMax), r2, r2);
        //     }
        // }

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

        //b.strokeWeight(1);

        // ------ RANDOM MOVE ------
        moveElement(textsElements[1], 290, 350); //chiamo la funzione per offset elemento in x e y
        moveElement(textsElements[2], 630, 670);
        moveElement(textsElements[3], 790, 860);

        linesGenerationTitle(textFrames0, textFrames1);
        linesGeneration(textFrames1, textFrames2);
        linesGenerationDate(textFrames2, textFrames3);

        // ------ LINEE CERCHI ------
        /*
        var circles = b.items(b.layer("circles")); // get all elements of the layer "circles"

        var obj1;
        var obj2;
        var inc = 4;

        b.stroke(200,200,200);
        b.strokeWeight(0.25);

        for( var i = 0; i < circles.length; i=i+inc ){ // for every point ...
    
            obj1 = b.bounds(circles[i]); // ... save get its bounding box ...
            
            for( var j = 0; j < circles.length; j++ ){ // ... and draw a line to every other point
              
              if(i != j) { // but only if the other point is not the one you already know
                
                obj2 = b.bounds(circles[j]); // get the bounding box of the other word
                
                b.line( obj1.left + obj1.width / 2, 
                  obj1.top + obj1.height / 2, 
                  obj2.left + obj2.width / 2, 
                  obj2.top + obj2.height / 2 ); // draw a line from center of point 1 to the center of point 2
                
              }
            }
          }
        */
        b.savePDF("Flyer" + i + ".pdf", false);
    }
}

b.go();






// ------ -------- ------
// ------ FUNZIONI ------
// ------ -------- ------

function linesGenerationTitle(tf1, tf2) {

    var inc1 = b.ceil(b.random(1,3));
    var inc2 = b.ceil(b.random(4,7));
    var start1 = 0;
    var start2 = 0;

    // serve sotto: direzione delle bézier
    var direction = plusMinus();

    for (var i = start1; i < tf1.length; i = i + inc1) { // for each word

        var w1 = tf1[i]; // current letter from the first tf

        // nested for-loop, connect each word with all other words of other tf
        for (var j = start2; j < tf2.length; j = j + inc2) {

            var w2 = tf2[j]; // the current word from the second tf
            if (w1.contents != " " && w2.contents != " ") {
                b.colorMode(b.CMYK);
                b.stroke(0, 75, 75, 20);
                b.noFill();
                b.strokeWeight(b.random(0, 1));

                //---LINEE DRITTE
                //
                b.opacity(
                    b.line(
                        // add half of the width and height to make sure the lines are centered
                        b.bounds(w1).left + b.bounds(w1).width / 2,
                        b.bounds(w1).top + b.bounds(w1).height / 2,
                        b.bounds(w2).left + b.bounds(w2).width / 2,
                        b.bounds(w2).top + b.bounds(w2).height / 2
                    ),
                    b.random(50, 100));
            }
        }
    }
}

function linesGeneration(tf1, tf2) {

    var inc1 = 1;
    var inc2 = 1;
    // var inc1 = b.ceil(b.random(5,8));
    // var inc2 = b.ceil(b.random(4,7));
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

                //---LINEE DRITTE
                //
                b.opacity(
                    b.line(
                        // add half of the width and height to make sure the lines are centered
                        b.bounds(w1).left + b.bounds(w1).width / 2,
                        b.bounds(w1).top + b.bounds(w1).height / 2,
                        b.bounds(w2).left + b.bounds(w2).width / 2,
                        b.bounds(w2).top + b.bounds(w2).height / 2
                    ),
                    b.random(50, 100));
            }
        }
    }
}

function linesGenerationDate(tf1, tf2) {

    var inc1 = b.ceil(b.random(5,8));
    var inc2 = b.ceil(b.random(4,7));
    var start1 = 0;
    var start2 = 0;

    // serve sotto: direzione delle bézier
    var direction = plusMinus();

    for (var i = start1; i < tf1.length; i = i + inc1) { // for each word

        var w1 = tf1[i]; // current letter from the first tf

        // nested for-loop, connect each word with all other words of other tf
        for (var j = start2; j < tf2.length; j = j + inc2) {

            var w2 = tf2[j]; // the current word from the second tf
                b.colorMode(b.CMYK);
                b.stroke(0, 75, 75, 20);
                b.noFill();
                b.strokeWeight(b.random(0, 1));

                //---LINEE DRITTE
                //
                b.opacity(
                    b.line(
                        // add half of the width and height to make sure the lines are centered
                        b.bounds(w1).left + b.bounds(w1).width / 2,
                        b.bounds(w1).top + b.bounds(w1).height / 2,
                        b.bounds(w2).left + b.bounds(w2).width / 2,
                        b.bounds(w2).top + b.bounds(w2).height / 2
                    ),
                    b.random(50, 100));
        }
    }
}

// function linesGeneration(tf1, tf2) {

//     var inc1 = 1;
//     var inc2 = 1;
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

//                 ---LINEE MOLLEGGIATE YEAH
                
//                 var x1 = b.bounds(w1).left + b.bounds(w1).width / 2;
//                 var y1 = b.bounds(w1).top + b.bounds(w1).height / 2;
//                 var x2 = b.bounds(w2).left + b.bounds(w2).width / 2;
//                 var y2 = b.bounds(w2).top + b.bounds(w2).height / 2;

//                 function conditioner(v1, v2, off) {
//                     return v1 > v2 ? off * -1 : off * 1;
//                 }

//                 var absX = b.abs(x1+x2)/2;
//                 var absY = b.abs(y1+y2)/2;
//                 var offsetX = absY / b.map(absY, y1, y2, 0.25, 8);
//                 var offsetY = absY / b.map(absY, y1, y2, 4, 8);


//                 b.beginShape();

//                 b.vertex(
//                     x1,
//                     y1
//                 );

//                 b.vertex(
//                     //b.vertex(x, y, [xAnchorLeft], [yAnchorLeft], [xAnchorRight], [yAnchorRight])
//                     absX,
//                     absY,
//                     absX - offsetX * direction,
//                     absY - offsetY,
//                     absX + offsetX * direction,
//                     absY + offsetY
//                 );

//                 b.vertex(
//                     x2,
//                     y2
//                 );

//                 b.opacity(b.endShape(), b.random(50, 100));
//             }
//         }
//     }
// }

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