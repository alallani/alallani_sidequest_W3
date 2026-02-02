/** DRAW THE INTRO SCREEN */
function drawIntro() {
  push();

  // 1. DRAW THE BACKGROUND IMAGE
  // We use 0, 0, width, height to stretch it to fit the canvas
  image(imgIntro, 0, 0, width, height);

  // 2. ADD A DARK OVERLAY
  // This is crucial for readability so the text doesn't get lost in the image
  noStroke();
  fill(0, 210); // Black with 150/255 transparency
  rectMode(CORNER);
  rect(0, 0, width, height);

  // 3. TEXT STYLING
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

  // 4. THE START BUTTON
  let btn = { x: width / 2, y: height / 2 + 180, w: 120, h: 50 };

  rectMode(CENTER);
  if (isHover(btn)) {
    fill(255, 255, 255, 80); // Brighter hover effect
    stroke(255);
    cursor(HAND);
  } else {
    fill(255, 255, 255, 30);
    stroke(200);
    cursor(ARROW);
  }

  strokeWeight(2);
  rect(btn.x, btn.y, btn.w, btn.h, 4);

  noStroke();
  fill(255);
  textSize(18);
  text("Start", btn.x, btn.y);
  pop();
}

function introMousePressed() {
  let btn = { x: width / 2, y: height / 2 + 180, w: 120, h: 50 };
  if (isHover(btn)) {
    currentScreen = "kitchen";
  }
}
