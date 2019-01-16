#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
  var selItems = b.selections(); // get all selected items
  
  var textFrame1 = selItems[0]; // the first textframe
  var textFrame2 = selItems[1]; // the second textframe
  
  var words1 = b.characters(textFrame1);
  var words2 = b.characters(textFrame2);   
  
  var inc1 = b.ceil(b.random(3,5));
  var inc2 = b.ceil(b.random(10,15));
  var start1 = b.ceil(b.random(0,3));
  var start2 = b.ceil(b.random(0,3));
  
  b.layer("generatedLines"); // get or create this layer and set it as the active one
  b.strokeWeight(1); // we like hairs
  
  for(var i = start1; i < words1.length; i = i+inc1){ // for each word
      
    var w1 = words1[i]; // current word from the first textframe

    // nested for-loop, connect each word with all other words of other textframe
    for(var j = start2; j < words2.length; j=j+inc2){ 

      var w2 = words2[j]; // the current word from the second textframe
      b.colorMode(b.RGB)
      b.stroke(0,0,0);
      b.opacity(b.line(
          // add half of the width and height to make sure the lines are centered
          b.bounds(w1).left + b.bounds(w1).width /1.5, 
          b.bounds(w1).top + b.bounds(w1).height / 1.5 ,
          b.bounds(w2).left + b.bounds(w2).width / 1.5 ,
          b.bounds(w2).top + b.bounds(w2).height /1.5
      ),  20);
    }
  }
}

b.go();