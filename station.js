/** DRAW THE STATION SCREEN */
function drawStation() {
  push();
  image(imgStation, 0, 0, width, height);
  drawHUD();

  // 1. CONTENT PANEL
  rectMode(CORNER);
  noStroke();
  fill(0, 210);
  rect(0, PANEL_TOP, width, height - PANEL_TOP);
  stroke(255, 40);
  line(0, PANEL_TOP, width, PANEL_TOP);

  // 2. LOCATION LABEL
  noStroke();
  fill(255, 180);
  textAlign(LEFT, TOP);
  textSize(16);
  text("TRAIN STATION", TEXT_X, PANEL_TOP + 20);

  // 3. STORY LOGIC
  let story = "";
  let btn1Label = "";
  let btn2Label = "";

  if (path1Choice === "sit") {
    story =
      "You arrive at the station just in time to see the bus pull away. Your heart pounds with anxiety as you stare at the empty curb.";
    btn1Label = "Book an Uber";
    btn2Label = "Wait for the next train";
  } else {
    story =
      "You arrive at the station with time to spare, but your mind feels scattered.";
    btn1Label = "Focus on the presentation";
    btn2Label = "Call Sam to apologize";
  }

  // Draw Story Text
  fill(255);
  textAlign(LEFT, TOP);
  textSize(18);
  textLeading(24);
  let textHeight = max(getTextBlockHeight(story, TEXT_W), MIN_TEXT_H);
  text(story, TEXT_X, TEXT_Y, TEXT_W, textHeight);

  // 4. BUTTONS
  let btnY = TEXT_Y + textHeight + BUTTON_SPACING;
  let btn1 = {
    x: width / 2 - BUTTON_W / 2 - 20,
    y: btnY,
    w: BUTTON_W,
    h: BUTTON_H,
  };
  let btn2 = {
    x: width / 2 + BUTTON_W / 2 + 20,
    y: btnY,
    w: BUTTON_W,
    h: BUTTON_H,
  };

  drawSceneButton(btn1, btn1Label);
  drawSceneButton(btn2, btn2Label);
  pop();
}

/** INPUT LOGIC FOR STATION */
function stationMousePressed() {
  // We need to recalculate the dynamic Y for clicks
  let story =
    path1Choice === "sit"
      ? "You arrive at the station just in time to see the train pull away. Your heart pounds with anxiety as you look at the empty curb."
      : "You arrive at the station with time to spare, but your mind feels scattered.";

  let textHeight = max(getTextBlockHeight(story, TEXT_W), MIN_TEXT_H);
  let btnY = TEXT_Y + textHeight + BUTTON_SPACING;

  let btn1 = {
    x: width / 2 - BUTTON_W / 2 - 20,
    y: btnY,
    w: BUTTON_W,
    h: BUTTON_H,
  };
  let btn2 = {
    x: width / 2 + BUTTON_W / 2 + 20,
    y: btnY,
    w: BUTTON_W,
    h: BUTTON_H,
  };

  if (isHover(btn1)) {
    if (path1Choice === "sit") {
      // Book Uber
      connection -= 15;
      totalDelay += 5;
      path2Choice = "uber";
    } else {
      // Focus
      connection -= 10;
      totalDelay += 0;
      path2Choice = "focus";
    }
    currentScreen = "station_result";
  } else if (isHover(btn2)) {
    if (path1Choice === "sit") {
      // Wait
      connection += 15;
      totalDelay += 15;
      path2Choice = "wait";
    } else {
      // Call Sam
      connection += 10;
      totalDelay += 5;
      path2Choice = "call";
    }
    currentScreen = "station_result";
  }
}
