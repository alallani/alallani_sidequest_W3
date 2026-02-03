/** DRAW THE INTRO SCREEN */
function drawIntro() {
  push();
  image(imgIntro, 0, 0, width, height);

  noStroke();
  fill(0, 210);
  rectMode(CORNER);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER, CENTER);
  let boxWidth = width - 160;
  let boxHeight = 300;
  let centerX = width / 2;
  let centerY = height / 2 - 40;

  textSize(18);
  textLeading(24);
  text(
    "Today is your presentation at Apex for the firm’s biggest client. After 3 years of 60-hour weeks, the Senior Designer role is finally within reach.\n\nBut success comes at a cost. Your partner, Sam—who has supported you through every late night and missed holiday—is at a breaking point.\n\nYour alarm didn’t go off. You’re already late.\n\nCan you keep your dream alive without losing the person who helped you build it?",
    centerX - boxWidth / 2,
    centerY - boxHeight / 2,
    boxWidth,
    boxHeight,
  );

  // 4. BUTTONS
  rectMode(CENTER);
  let btnY = height / 2 + 180;
  let btnW = 140; // Slightly wider for "Instructions"
  let btnH = 50;

  let startBtn = { x: width / 2 - 80, y: btnY, w: btnW, h: btnH };
  let instrBtn = { x: width / 2 + 80, y: btnY, w: btnW, h: btnH };

  // Draw Start Button
  drawIntroButton(startBtn, "Start");
  // Draw Instructions Button
  drawIntroButton(instrBtn, "How to Play");

  pop();
}

/** Helper to draw consistent intro buttons */
function drawIntroButton(btn, label) {
  if (isHover(btn)) {
    fill(255, 255, 255, 80);
    stroke(255);
    cursor(HAND);
  } else {
    fill(255, 255, 255, 30);
    stroke(200);
  }
  strokeWeight(2);
  rect(btn.x, btn.y, btn.w, btn.h, 4);
  noStroke();
  fill(255);
  textSize(16);
  text(label, btn.x, btn.y);
}

function introMousePressed() {
  let btnY = height / 2 + 180;
  let startBtn = { x: width / 2 - 80, y: btnY, w: 140, h: 50 };
  let instrBtn = { x: width / 2 + 80, y: btnY, w: 140, h: 50 };

  if (isHover(startBtn)) {
    currentScreen = "kitchen";
  } else if (isHover(instrBtn)) {
    currentScreen = "instr";
  }
}
