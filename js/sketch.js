
var printType;
var img;
var smallPoint, largePoint;


var w = 10;
// An array of 0s and 1s 
var cells;

 // We arbitrarily start with just the middle cell having a state of "1"
var generation = 0;

// An array to store the ruleset, for example {0,1,1,0,1,1,0,1}
var ruleset = [0, 1, 0, 1, 1, 0, 1, 0];

function setup() {
  createCanvas(600, 400);
  //var rightcell= createCanvas(300,300);
  cells = Array(floor(width/w));
  for (var i = 0; i < cells.length; i++) {
    cells[i] = 0;
  }
  cells[cells.length/2] = 1;

  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);

}



function automata() {
  for (var n = 0; n < 50; n++) {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i] === 1) {
      fill(200);
    } else {
      fill(51);
      noStroke();
      rect(i*w, generation*w, w, w);
    }
  }
  if (generation < height/w) {
    generate();
  }
}
}

// The process of creating the new generation
function generate() {
  // First we create an empty array for the new values
  var nextgen = Array(cells.length);
  // For every spot, determine new state by examing current state, and neighbor states
  // Ignore edges that only have one neighor
  for (var i = 1; i < cells.length-1; i++) {
    var left   = cells[i-1];   // Left neighbor state
    var me     = cells[i];     // Current state
    var right  = cells[i+1];   // Right neighbor state
    nextgen[i] = rules(left, me, right); // Compute next generation state based on ruleset
  }
  // The current generation is the new generation
  cells = nextgen;
  generation++; 
}


// Implementing the Wolfram rules
// Could be improved and made more concise, but here we can explicitly see what is going on for each case
function rules(a, b, c) {
  if (a == 1 && b == 1 && c == 1) return ruleset[0];
  if (a == 1 && b == 1 && c == 0) return ruleset[1];
  if (a == 1 && b == 0 && c == 1) return ruleset[2];
  if (a == 1 && b == 0 && c == 0) return ruleset[3];
  if (a == 0 && b == 1 && c == 1) return ruleset[4];
  if (a == 0 && b == 1 && c == 0) return ruleset[5];
  if (a == 0 && b == 0 && c == 1) return ruleset[6];
  if (a == 0 && b == 0 && c == 0) return ruleset[7];
  return 0;
}





function download(){

var zip = new JSZip();
zip.file("Printsettings.txt", "Hello World\n");
for (var i = 0; i < 33; i++) {
var imageData = canvas.toDataURL('image/png');
zip.file("slice_"+i+".png", imageData.slice(22), {base64: true}); // remove base64 tag from image string 
}
var content = zip.generate({type:"blob"});
saveAs(content,"zippy.zip");
//save('canvas.png');

}
 

function input(){




}

function tallPrint(){
  printType = 1;
}

