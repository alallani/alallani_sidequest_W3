/** DRAW THE INSTRUCTIONS SCREEN */
function drawInstr() {
  push();
  image(imgIntro, 0, 0, width, height);

  fill(0, 230);
  rectMode(CORNER);
  rect(0, 0, width, height);

  textAlign(CENTER, CENTER);
  fill(255, 204, 0);
  textSize(32);
  // This stays width/2 because it's a single point alignment
  text("HOW TO PLAY", width / 2, 100);

  fill(255);
  textSize(18);
  textLeading(30);

  let infoText =
    "Every choice you make affects two things:\n\n" +
    "1. CONNECTION: Your relationship with Sam.\n" +
    "If this drops too low, you might lose the person you love.\n\n" +
    "2. DELAY: How late you are for your pitch.\n" +
    "If you are too late, your career goals could slip away.\n\n" +
    "Balance your time and your heart carefully.";

  // --- THE FIX IS HERE ---
  let boxW = width - 200;
  let boxH = 300;
  // Use (width / 2 - boxW / 2) to center the rectangle horizontally
  text(infoText, width / 2 - boxW / 2, height / 2 - boxH / 2, boxW, boxH);

  // Back Button
  // Ensure rectMode is CENTER for the helper function to work correctly
  rectMode(CENTER);
  let backBtn = { x: width / 2, y: height - 100, w: 120, h: 50 };
  drawIntroButton(backBtn, "Back");
  pop();
}

function instrMousePressed() {
  let backBtn = { x: width / 2, y: height - 100, w: 120, h: 50 };
  if (isHover(backBtn)) {
    currentScreen = "intro";
  }
}
