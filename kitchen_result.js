/** DRAW THE KITCHEN RESULT SCREEN */
function drawKitchenResult() {
  push();

  // 1. BACKGROUND
  image(imgKitchen, 0, 0, width, height);
  drawHUD();

  // 2. COMPACT BOTTOM PANEL
  rectMode(CORNER);
  noStroke();
  fill(0, 210);
  rect(0, PANEL_TOP, width, height - PANEL_TOP);

  stroke(255, 40);
  line(0, PANEL_TOP, width, PANEL_TOP);

  // 3. OUTCOME TEXT
  noStroke();
  fill(255);
  textAlign(LEFT, TOP); // Use TOP for consistent spacing
  textSize(18);
  textLeading(24);

  let resultText = "";
  let buttonLabel = "";

  if (path1Choice === "sit") {
    resultText =
      "You pull up a chair and Sam’s expression softens. For a moment, the world outside the kitchen disappears. You’re running late, but your heart feels lighter.";
    buttonLabel = "Run to the train station";
  } else {
    resultText =
      "You mumble an apology and duck out. You’ll be on time for your bus, but you can’t shake the image of Sam standing alone in the kitchen.";
    buttonLabel = "Walk to the train station";
  }

  // 3a. Calculate dynamic text height
  let textHeight = max(getTextBlockHeight(resultText, TEXT_W), MIN_TEXT_H);

  // 3b. Draw the text
  text(resultText, TEXT_X, TEXT_Y, TEXT_W, textHeight);

  // 4. "NEXT" BUTTON (same width/height & spacing as kitchen.js)
  let btn = {
    x: width / 2,
    y: TEXT_Y + textHeight + BUTTON_SPACING,
    w: BUTTON_W,
    h: BUTTON_H,
  };
  drawSceneButton(btn, buttonLabel);

  pop();
}

/** INPUT LOGIC FOR KITCHEN RESULT */
function kitchenResultMousePressed() {
  let resultText =
    path1Choice === "sit"
      ? "You pull up a chair and Sam’s expression softens. For a moment, the world outside the kitchen disappears. You’re running late, but your heart feels lighter."
      : "You mumble an apology and duck out. You’ll be on time for your bus, but you can’t shake the image of Sam standing alone in the kitchen.";

  let textHeight = max(getTextBlockHeight(resultText, TEXT_W), MIN_TEXT_H);

  let btn = {
    x: width / 2,
    y: TEXT_Y + textHeight + BUTTON_SPACING,
    w: BUTTON_W,
    h: BUTTON_H,
  };

  if (isHover(btn)) {
    currentScreen = "station";
  }
}
