/** DRAW THE FINAL RESULTS SCREEN */
function drawResults() {
  push();

  // 1. BACKGROUND IMAGE
  image(imgApex, 0, 0, width, height);

  // 2. DRAW THE HUD (So player can see final stats)
  drawHUD();

  // 3. SEMI-TRANSPARENT BOTTOM PANEL (Matches station/kitchen result style)
  rectMode(CORNER);
  noStroke();
  fill(0, 210); // Darker black for the finale
  rect(0, PANEL_TOP, width, height - PANEL_TOP);
  stroke(255, 40);
  line(0, PANEL_TOP, width, PANEL_TOP);

  // 4. LOGIC FOR ENDINGS
  let title = "";
  let story = "";
  let jobSaved = totalDelay <= 10;
  let relationshipSaved = connection >= 40;

  if (jobSaved && relationshipSaved) {
    title = "THE BEST OF BOTH WORLDS";
    story =
      "Your presentation dazzled the board, and when you return home, Sam is waiting with a smile and a hug. You really can have it all!";
  } else if (jobSaved && !relationshipSaved) {
    title = "SUCCESS...AT A COST";
    story =
      "The pitch lands perfectly! The board is ecstatic…but the victory feels hollow. A final text from Sam waits: “I can't do this anymore.”";
  } else if (!jobSaved && relationshipSaved) {
    title = "LOVE...AT A COST";
    story =
      "You arrived late, and the board wasted no time moving on…you’re fired. When you return home, Sam is waiting with a smile and hug. Some things are worth more than a paycheck.";
  } else {
    title = "TOTAL COLLAPSE";
    story =
      "You arrived late and the board wasted no time moving on…you’re fired. When you return home, Sam is gone.";
  }

  // 5. TEXT STYLING (Adjusted for the panel height)
  textAlign(LEFT, TOP);

  // Title Positioning
  fill(255, 204, 0);
  textSize(16);
  text(title, TEXT_X, PANEL_TOP + 20);

  // Story Body
  fill(255);
  textSize(18);
  textLeading(24);
  let textHeight = max(getTextBlockHeight(story, TEXT_W), MIN_TEXT_H);
  text(story, TEXT_X, TEXT_Y, TEXT_W, textHeight);

  // 6. THE "TRY AGAIN" BUTTON (Centered at the bottom)
  let btn = {
    x: width / 2,
    y: height - 60, // Fixed position near the bottom of the panel
    w: 160,
    h: 40,
  };

  rectMode(CENTER);
  if (isHover(btn)) {
    fill(255, 255, 255, 80);
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
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Try Again", btn.x, btn.y);
  pop();
}

/** INPUT LOGIC FOR RESULTS */
function resultsMousePressed() {
  // Must match the button position in drawResults
  let btn = { x: width / 2, y: height - 60, w: 160, h: 40 };

  if (isHover(btn)) {
    connection = 40;
    totalDelay = 0;
    path1Choice = "";
    path2Choice = "";
    path3Choice = 0;
    currentScreen = "intro";
  }
}
