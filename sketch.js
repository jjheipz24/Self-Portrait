/*
Jin Jin Heipler
9/1/17
Mini Project - Self Portrait
*/ 

function setup() {
    createCanvas(800, 800);
    background(252, 217, 143);
    
    noStroke();
    fill(37, 64, 118);
    quad(98, 641, 656, 629, 710, 808, 48, 806); // shirt
    
    noStroke();
    fill(204, 156, 119);
    quad(283, 557, 466, 569, 484, 619, 262, 629); // neck
    
    
    fill(227, 170, 140);
    beginShape();
    vertex(239, 183);
    vertex(253, 453);
    vertex(321, 534);
    vertex(435, 525);
    vertex(505, 445);
    vertex(524, 179);
    endShape(CLOSE); //head shape
    
    stroke(54, 49, 46);
    strokeWeight(3);
    line(239, 183, 524, 179);//hairline
    
    noStroke();
    fill(54, 49, 46);
    beginShape();
    vertex(520, 309);
    vertex(524, 179);
    vertex(496, 181);
    vertex(515, 306);
    endShape(CLOSE); // hairline right
    
    beginShape();
    vertex(238, 292);
    vertex(239, 183);
    vertex(271, 182);
    vertex(248, 288);
    endShape(CLOSE); // hairline left
    
    fill(118, 43, 168);
    triangle(239, 158, 257, 173, 380, 175);
    fill(118, 43, 168);
    arc(380, 175, 285, 200, 3.25, 0); // hair
    
    fill(76, 69, 65);
    beginShape();
    vertex(415, 279);
    vertex(498, 280);
    vertex(500, 290);
    vertex(469, 286);
    vertex(428, 292);
    endShape(CLOSE); // right eyebrow
    
    beginShape();
    vertex(351, 285);
    vertex(280, 275);
    vertex(264, 290);
    vertex(299, 285);
    vertex(336, 295);
    endShape(CLOSE); // left eyebrow
    
    fill(187, 119, 96);
    beginShape();
    vertex(233, 292);
    vertex(219, 307);
    vertex(223, 362);
    vertex(238, 385);
    endShape(CLOSE); //left ear
    
    beginShape();
    vertex(529, 309);
    vertex(538, 318);
    vertex(528, 380);
    vertex(513, 401);
    endShape(CLOSE); // right ear
    
    fill(230);
    ellipse(310, 320, 60, 38);
    ellipse(450, 320, 60, 38);
    fill(0);
    ellipse(310, 320, 35, 40);
    ellipse(450, 320, 35, 40); // eyes
    
    fill(216, 163, 134);
    beginShape();
    vertex(369, 343);
    vertex(332, 408);
    vertex(351, 407);
    vertex(362, 415);
    vertex(388, 415);
    vertex(404, 407);
    vertex(422, 408);
    vertex(396, 343);
    endShape(CLOSE);
    
    fill(255);
    quad(324, 443, 333, 472, 415, 476, 430, 450);// teeth
    
    stroke(217, 131, 133);
    strokeWeight(6);
    noFill();
    beginShape();
    vertex(309, 441);
    vertex(353, 496);
    vertex(409, 493);
    vertex(445, 448);
    endShape();
    strokeWeight(5);
    line(309, 441, 445, 448);
    strokeWeight(12);
    arc(379, 465, 95, 65, .25, 2.89);
    arc(379, 460, 98, 65, .25, 2.89);
    arc(379, 455, 110, 65, .25, 2.89);
    arc(379, 447, 121, 65, .25, 2.89); // mouth
    
    
    noStroke();
    fill(242, 239, 237, 50);
    rect(252, 305, 105, 65, 20);
    rect(402, 305, 101, 65, 20);//lenses of glasses
    
    stroke(10, 27, 41);
    strokeWeight(7);
    noFill();
    arc(380, 330, 48, 20, PI, 0); // bridge
    strokeWeight(7);
    arc(302, 330, 110, 60, PI, 0);
    arc(453, 330, 100, 60, PI, 0);
   
   
}

function draw() { 
    //put drawing code here
    
}
 