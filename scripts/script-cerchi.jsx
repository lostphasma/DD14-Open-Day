#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
    // ------ GENERAZIONE CERCHI
    //pulisco layer dei cerchi e ne genero di nuovi
    b.clear(b.layer("circles"));

    //crea o seleziona il layer
    b.layer("circles"); 

    for(i=0; i<16; i++){
        // x 119, 238, 357, 476
        var radius = b.round(b.random(1,175));

        var multiplier = 2;

        var r1 = radius;
        var r2 = radius * multiplier;

        b.noFill();
        var grey = 200;
        b.stroke(grey,grey,grey);
        b.strokeWeight(0.5);

        var yMin = b.margins().top;
        var yMax = b.height - b.margins().bottom;
        b.println(yMax);
        b.println(yMin);

        if (i>=0 && i<=3) {
            b.ellipse(119, b.random(yMin, yMax), r1, r1);

        } else if (i>=4 && i<=7) {
            b.ellipse(238, b.random(yMin, yMax), r2, r2);

        } else if (i>=8 && i<=11) {
            b.ellipse(357, b.random(yMin, yMax), r1, r1);

        } else if (i>=12 && i<=15) {
            b.ellipse(476, b.random(yMin, yMax), r2, r2);
        }          
    }

    // ------ TIMESTAMP ------
    b.fill(200,200,200);
    b.textSize(7);
    b.textFont("Akkurat Mono", "Regular")
    b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN)
    var boxWidth = 161;
    var boxHeight = 11;
    b.text("Generated on " + b.day() + "." + b.month() + "." + b.year() + " - h. " + b.hour() + ":" + b.minute() + ":" + b.second(), b.width/2-boxWidth/2, (yMax)-(boxHeight/2)+(b.margins().bottom/2), boxWidth, boxHeight);
    
    // ------ RANDOM MOVE ------

    // ------ LINEE DALLE LETTERE ------

    b.layer("texts"); 
    var textsElements = b.items(b.layer("texts")); // prende tutti gli elementi del livello, è un array

    textFrames1 = b.characters(textsElements[0]);
    textFrames2 = b.characters(textsElements[1]);
    textFrames3 = b.characters(textsElements[2]);
    textFrames4 = b.characters(textsElements[3]);

    b.clear(b.layer("generatedLines")); // pulisce il licello generatedLines
    b.layer("generatedLines"); // get or create this layer and set it as the active one

    //b.strokeWeight(1);

    moveElement(textsElements[1]); //chiamo la funzione per offset elemento in x e y
    moveElement(textsElements[2]);
    moveElementDate(textsElements[3]);

    linesGeneration(textFrames1, textFrames2);
    linesGeneration(textFrames2, textFrames3);
    linesGeneration(textFrames3, textFrames4);

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
}

b.go();

// ------ -------- ------
// ------ FUNZIONI ------
// ------ -------- ------

function linesGeneration(textFrame1, textFrame2) {

    var inc1 = 5;
    var inc2 = 3;
    var start1 = b.ceil(b.random(0,3));
    var start2 = b.ceil(b.random(0,3));

    for(var i = start1; i < textFrame1.length; i = i+inc1){ // for each word
        
        var w1 = textFrame1[i]; // current word from the first textframe

        // nested for-loop, connect each word with all other words of other textframe
        for(var j = start2; j < textFrame2.length; j=j+inc2){ 

            var w2 = textFrame2[j]; // the current word from the second textframe
            b.colorMode(b.RGB)
            b.stroke(200,20,0);
            b.strokeWeight(b.random(0,1));
            b.opacity(b.line(
                // add half of the width and height to make sure the lines are centered
                b.bounds(w1).left + b.bounds(w1).width / 2, 
                b.bounds(w1).top + b.bounds(w1).height / 2,
                b.bounds(w2).left + b.bounds(w2).width / 2,
                b.bounds(w2).top + b.bounds(w2).height / 2
            ),  b.random(25,75));
        }        
    }
}

function moveElement (el) {
    //randomizzo un moltiplicatore per definire spostamento positivo o negativo
    var plusMinus = b.random(0,1) < 0.5 ? -1 : 1;
    var offset = 100;
    b.itemPosition(el, b.ceil(b.random(b.margins().left, b.width - b.itemSize(el).width - b.margins().right)), b.itemPosition(el).y + (b.random(0,offset) * plusMinus));
}

function moveElementDate (el) {
    //randomizzo un moltiplicatore per definire spostamento positivo o negativo
    var plusMinus = b.random(0,1) < 0.5 ? -1 : 1;
    var offset = 100;
    b.itemPosition(el, b.ceil(b.random(b.margins().left + 100, b.width - b.itemSize(el).width - b.margins().right)), b.itemPosition(el).y + (b.random(0,offset) * plusMinus));
}