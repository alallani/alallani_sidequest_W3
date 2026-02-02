/** DRAW THE STATION RESULT SCREEN */
function drawStationResult() {
  push();

  // 1. BACKGROUND
  image(imgStation, 0, 0, width, height);
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
  textAlign(LEFT, TOP);
  textSize(18);
  textLeading(24);

  let resultText = "";
  let buttonLabel = ""; // Now determined by the choice

  // Branching Logic for text AND button labels
  if (path2Choice === "uber") {
    resultText =
      "You frantically book a ride, eyes glued to the GPS. You ignore Sam’s check-in text, focused entirely on making it to Apex.";
    buttonLabel = "Head to the office";
  } else if (path2Choice === "wait") {
    resultText =
      "You take a breath and use the extra time to call Sam, thanking her for staying when things got hard.";
    buttonLabel = "Get on the next train";
  } else if (path2Choice === "focus") {
    resultText =
      "You push everything else out of your head, visualizing the perfect pitch. By the time the train arrives, you’re locked in.";
    buttonLabel = "Get on the train";
  } else if (path2Choice === "call") {
    resultText =
      "The call goes to voicemail. You leave a heartfelt message, feeling a little lighter. As you hang up, you realize you missed your train.";
    buttonLabel = "Book a Lyft";
  }

  // 3a. Calculate dynamic text height
  let textHeight = max(getTextBlockHeight(resultText, TEXT_W), MIN_TEXT_H);

  // 3b. Draw the text
  text(resultText, TEXT_X, TEXT_Y, TEXT_W, textHeight);

  // 4. "NEXT" BUTTON
  let btn = {
    x: width / 2,
    y: TEXT_Y + textHeight + BUTTON_SPACING,
    w: BUTTON_W,
    h: BUTTON_H,
  };
  drawSceneButton(btn, buttonLabel);

  pop();
}

/** INPUT LOGIC FOR STATION RESULT */
function stationResultMousePressed() {
  let resultText = "";
  if (path2Choice === "uber")
    resultText =
      "You frantically book a ride, eyes glued to the GPS. You ignore Sam’s check-in text, focused entirely on making it to Apex.";
  else if (path2Choice === "wait")
    resultText =
      "You take a breath and use the extra time to call Sam, thanking her for staying when things got hard.";
  else if (path2Choice === "focus")
    resultText =
      "You push everything else out of your head, visualizing the perfect pitch. By the time the train arrives, you’re locked in.";
  else if (path2Choice === "call")
    resultText =
      "The call goes to voicemail. You leave a heartfelt message, feeling a little lighter. As you hang up, you realize you missed your train.";

  let textHeight = max(getTextBlockHeight(resultText, TEXT_W), MIN_TEXT_H);

  let btn = {
    x: width / 2,
    y: TEXT_Y + textHeight + BUTTON_SPACING,
    w: BUTTON_W,
    h: BUTTON_H,
  };

  if (isHover(btn)) {
    currentScreen = "apex";
  }
}
