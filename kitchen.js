/** DRAW THE KITCHEN SCREEN */
function drawKitchen() {
  push();

  // 1. DRAW THE KITCHEN BACKGROUND
  image(imgKitchen, 0, 0, width, height);

  // 2. HUD (Status Bars) - Always keep these visible at the top
  drawHUD();

  // 3. FULL-WIDTH BOTTOM CONTENT PLATE
  rectMode(CORNER);
  noStroke();
  fill(0, 210);
  rect(0, PANEL_TOP, width, height - PANEL_TOP);

  // Subtle top border for the plate
  stroke(255, 40);
  line(0, PANEL_TOP, width, PANEL_TOP);

  // 4. "THE KITCHEN" LABEL (Top Left of the bar)
  noStroke();
  fill(255, 180);
  textAlign(LEFT, TOP);
  textSize(16);
  text("KITCHEN", TEXT_X, PANEL_TOP + 20);

  // 5. STORY TEXT
  fill(255);
  textAlign(LEFT, TOP);
  textSize(18);
  textLeading(24);

  let story =
    "Sam is standing by the counter with a coffee already poured for you. “I know today is important, but I can’t keep being the only one showing up for us. Can you sit for a bit…please?”";

  // Calculate dynamic height for the text block
  let textHeight = max(getTextBlockHeight(story, TEXT_W), MIN_TEXT_H);

  // Draw text
  text(story, TEXT_X, TEXT_Y, TEXT_W, textHeight);

  // 6. CHOICE BUTTONS (use shared constants)
  let btnSit = {
    x: width / 2 - BUTTON_W / 2 - 20,
    y: TEXT_Y + textHeight + BUTTON_SPACING,
    w: BUTTON_W,
    h: BUTTON_H,
  };
  let btnCoffee = {
    x: width / 2 + BUTTON_W / 2 + 20,
    y: TEXT_Y + textHeight + BUTTON_SPACING,
    w: BUTTON_W,
    h: BUTTON_H,
  };

  drawSceneButton(btnSit, "Sit and talk to Sam");
  drawSceneButton(btnCoffee, "Take the coffee to go");

  pop();
}

/** INPUT LOGIC FOR KITCHEN */
function kitchenMousePressed() {
  let btnY =
    TEXT_Y +
    max(
      getTextBlockHeight(
        "Sam is standing by the counter with a coffee already poured for you. “I know today is important, but I can’t keep being the only one showing up for us. Can you sit for a bit…please?”",
        TEXT_W,
      ),
      MIN_TEXT_H,
    ) +
    BUTTON_SPACING;

  let btnSit = {
    x: width / 2 - BUTTON_W / 2 - 20,
    y: btnY,
    w: BUTTON_W,
    h: BUTTON_H,
  };
  let btnCoffee = {
    x: width / 2 + BUTTON_W / 2 + 20,
    y: btnY,
    w: BUTTON_W,
    h: BUTTON_H,
  };

  if (isHover(btnSit)) {
    connection = min(connection + 20, 100);
    totalDelay += 5;
    path1Choice = "sit";
    currentScreen = "kitchen_result";
  } else if (isHover(btnCoffee)) {
    connection = max(connection - 20, 0);
    totalDelay += 0;
    path1Choice = "coffee";
    currentScreen = "kitchen_result";
  }
}
