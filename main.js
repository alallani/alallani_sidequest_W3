// ------------------------------------------------------------
// main.js = the “router” (traffic controller) for the whole game
// ------------------------------------------------------------
//
// Idea: this project has multiple screens (start, instructions, game, win, lose).
// Instead of putting everything in one giant file, each screen lives in its own
// file and defines two main things:
//   1) drawX()         → how that screen looks
//   2) XMousePressed() / XKeyPressed() → how that screen handles input
//
// This main.js file does 3 important jobs:
//   A) stores the current screen in a single shared variable
//   B) calls the correct draw function each frame
//   C) sends mouse/keyboard input to the correct screen handler

// ------------------------------
// Global game state
// ------------------------------
// This variable is shared across all files because all files run in the same
// global JavaScript scope when loaded in index.html.
//
// We store the “name” of the current screen as a string.
// Only one screen should be active at a time.
// ------------------------------
/** * GLOBAL VARIABLES
 * These live here so every other file can see them.
 */
let imgIntro, imgKitchen, imgStation, imgApex;
let connection = 40; // Sam starts at a breaking point
let totalDelay = 0; // Starts at 0, tracks "Damage Control"
let currentScreen = "intro";

// Logic trackers for branching
let path1Choice = ""; // Stores "sit" or "coffee"
let path2Choice = ""; // Stores "uber", "wait", "focus", or "call"
let path3Choice = 0; // Stores 1 (Left Button) or 2 (Right Button)

function preload() {
  // Path: assets folder -> images folder -> filename
  imgIntro = loadImage("assets/images/intro_image.png"); // [4]
  imgKitchen = loadImage("assets/images/kitchen_image.png"); // [2]
  imgStation = loadImage("assets/images/station_image.png"); // [3]
  imgApex = loadImage("assets/images/apex_image.jpg"); // [1]
}

/** SETUP & DRAW */
function setup() {
  createCanvas(900, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(20); // Dark theme for the "alarm failed" dread

  // THE SWITCHBOARD
  // This directs p5.js to the correct file's draw function
  if (currentScreen === "intro") {
    drawIntro();
  } else if (currentScreen === "kitchen") {
    drawKitchen();
  } else if (currentScreen === "station") {
    drawStation();
  } else if (currentScreen === "apex") {
    drawApex();
  } else if (currentScreen === "results") {
    drawResults();
  } else if (currentScreen === "kitchen_result") {
    drawKitchenResult();
  } else if (currentScreen === "station_result") {
    drawStationResult();
  } else if (currentScreen === "apex_result") {
    drawApexResults();
  } else if (currentScreen === "instr") drawInstr();
  {
  }
}

// ------------------------------
// mousePressed() runs once each time the mouse is clicked
// ------------------------------
// This routes mouse input to the correct screen handler.
function mousePressed() {
  // Each screen *may* define a mouse handler:
  // start.js         → startMousePressed()
  // instructions.js  → instrMousePressed()
  // game.js          → gameMousePressed()
  // win.js           → winMousePressed()
  // lose.js          → loseMousePressed()
  // The ?.() means “call this function only if it exists”
  // This prevents errors if a screen doesn’t implement a handler.

  if (currentScreen === "intro") introMousePressed();
  else if (currentScreen === "kitchen") kitchenMousePressed();
  else if (currentScreen === "kitchen_result") kitchenResultMousePressed();
  else if (currentScreen === "station") stationMousePressed();
  else if (currentScreen === "station_result") stationResultMousePressed();
  else if (currentScreen === "apex") apexMousePressed();
  else if (currentScreen === "results") resultsMousePressed();
  else if (currentScreen === "apex_result") apexResultsMousePressed();
  else if (currentScreen === "instr") instrMousePressed();
}

// ------------------------------
// keyPressed() runs once each time a key is pressed
// ------------------------------
// This routes keyboard input to the correct screen handler.
function keyPressed() {
  // Each screen *may* define a key handler:
  // start.js         → startKeyPressed()
  // instructions.js  → instrKeyPressed()
  // game.js          → gameKeyPressed()
  // win.js           → winKeyPressed()
  // lose.js          → loseKeyPressed()

  if (currentScreen === "start") startKeyPressed();
  else if (currentScreen === "instr") instrKeyPressed();
  else if (currentScreen === "game") gameKeyPressed?.();
  else if (currentScreen === "win") winKeyPressed?.();
  else if (currentScreen === "lose") loseKeyPressed?.();
}

// ------------------------------------------------------------
// Shared helper function: isHover()
// ------------------------------------------------------------
//
// Many screens have buttons.
// This helper checks whether the mouse is inside a rectangle.
//
// Important: our buttons are drawn using rectMode(CENTER),
// meaning x,y is the CENTRE of the rectangle.
// So we check mouseX and mouseY against half-width/half-height bounds.
//
// Input:  an object with { x, y, w, h }
// Output: true if mouse is over the rectangle, otherwise false
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 && // mouse is right of left edge
    mouseX < x + w / 2 && // mouse is left of right edge
    mouseY > y - h / 2 && // mouse is below top edge
    mouseY < y + h / 2 // mouse is above bottom edge
  );
}
