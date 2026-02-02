// --------------------------------------------------
// SHARED SCENE LAYOUT CONSTANTS
// --------------------------------------------------
const PANEL_TOP = 400;

const TEXT_X = 30;
const TEXT_Y = 450;
const TEXT_W = 900 - 60;
const MIN_TEXT_H = 80;

const BUTTON_W = 380;
const BUTTON_H = 50;
const BUTTON_SPACING = 20; // space between text and buttons

function drawHUD() {
  push();
  rectMode(CORNER);
  textAlign(LEFT, TOP);
  textSize(14);

  let barW = 150;
  let barH = 15;
  let startX = 20;

  // --- 1. CONNECTION (Top) ---
  fill(60);
  rect(startX, 20, barW, barH, 5);

  // Draw Connection Fill
  noStroke(); // This prevents the "little line" at the start
  fill(100, 200, 255);
  let connFill = map(connection, 0, 100, 0, barW, true);
  rect(startX, 20, connFill, barH, 5);

  fill(255);
  text("CONNECTION: " + connection + "%", startX, 44);

  // --- 2. DELAY (Stacked Underneath) ---
  let delayBarY = 74; // Positioned below the first set
  fill(60);
  stroke(0); // Optional: if you want a subtle border on the track only
  strokeWeight(1);
  rect(startX, delayBarY, barW, barH, 5);

  // Draw Delay Fill
  noStroke(); // Ensures no ghost line when delay is 0
  fill(255, 100, 100);
  let delayFill = map(totalDelay, 0, 30, 0, barW, true);
  rect(startX, delayBarY, delayFill, barH, 5);

  fill(255);
  text("DELAY: " + totalDelay + " MINS", startX, delayBarY + 24);
  pop();
}

function drawSceneButton(b, label) {
  push();
  rectMode(CENTER); // Critical: your logic uses center-based math

  if (isHover(b)) {
    fill(255, 100); // Brighter when hovering
    stroke(255);
    cursor(HAND);
  } else {
    fill(255, 30); // Subtle transparent white
    stroke(200);
    cursor(ARROW);
  }

  strokeWeight(2);
  rect(b.x, b.y, b.w, b.h, 5); // Draws the button box

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(label, b.x, b.y); // Draws the label inside the box
  pop();
}

// --------------------------------------------------
// Utility: calculate wrapped text height
// --------------------------------------------------
function getTextBlockHeight(txt, maxWidth) {
  let words = txt.split(" ");
  let line = "";
  let lines = 1;

  for (let w of words) {
    let testLine = line + w + " ";
    if (textWidth(testLine) > maxWidth) {
      lines++;
      line = w + " ";
    } else {
      line = testLine;
    }
  }

  return lines * textLeading();
}
