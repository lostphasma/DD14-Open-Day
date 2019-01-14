#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {
    b.layer("circles"); // get or create this layer and set it as the active one
    
    for(i=0; i<10; i++){
        var cazzo = b.random(10,30);
        var ell = b.ellipse(b.random(0,600), b.random(0,1000), cazzo * 2, cazzo * 2);
        ell.contentType = ContentType.TEXT_TYPE;
    }
}

b.go();