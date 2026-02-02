/** DRAW THE APEX SCREEN */
function drawApex() {
  push();
  image(imgApex, 0, 0, width, height);
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
  text("APEX OFFICES", TEXT_X, PANEL_TOP + 20);

  // 3. STORY & BUTTON LOGIC
  let story = "";
  let btn1Label = "";
  let btn2Label = "";

  if (path2Choice === "uber") {
    story =
      "You stumble out of the Uber, checking your watch. You’re cutting it close, but you feel guilty for ignoring Sam’s text earlier.";
    btn1Label = "Respond to Sam";
    btn2Label = "Head to boardroom";
  } else if (path2Choice === "wait") {
    story =
      "You rush toward the elevators, catching a glimpse of your client as the doors slide shut. You’re on the ground floor; the meeting is on the 10th.";
    btn1Label = "Wait for elevator";
    btn2Label = "Take the stairs";
  } else if (path2Choice === "focus") {
    story =
      "As you exit the bus, your phone buzzes. It’s a text from Sam: “I’m packing a bag. I need to stay at my sister’s for a while.”";
    btn1Label = "Head to boardroom";
    btn2Label = "Call Sam";
  } else if (path2Choice === "call") {
    story =
      "As you walk into Apex, you check your phone. No response to your voicemail. Was a voicemail enough to fix this?";
    btn1Label = "Head to boardroom";
    btn2Label = "Text Sam";
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

/** INPUT LOGIC FOR APEX */
function apexMousePressed() {
  // Identify the story used for the height calculation
  let story = "";
  if (path2Choice === "uber")
    story =
      "You stumble out of the Uber, checking your watch. You’re cutting it close, but you feel guilty for ignoring Sam’s text earlier.";
  else if (path2Choice === "wait")
    story =
      "You rush toward the elevators, catching a glimpse of your client as the doors slide shut. You’re on the ground floor; the meeting is on the 10th.";
  else if (path2Choice === "focus")
    story =
      "As you exit the bus, your phone buzzes. It’s a text from Sam: “I’m packing a bag. I need to stay at my sister’s for a while.”";
  else if (path2Choice === "call")
    story =
      "As you walk into Apex, you check your phone. No response to your voicemail. Was a voicemail enough to fix this?";

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
    path3Choice = 1; // Save that button 1 was clicked
    handleApexChoice(1);
    currentScreen = "apex_result"; // Go to the result screen first!
  } else if (isHover(btn2)) {
    path3Choice = 2; // Save that button 2 was clicked
    handleApexChoice(2);
    currentScreen = "apex_result"; // Go to the result screen first!
  }
}

/** Helper to handle the complex branching stats */
function handleApexChoice(btnNum) {
  if (path2Choice === "uber") {
    if (btnNum === 1) {
      connection += 10;
      totalDelay += 5;
    } // Respond
    else {
      connection -= 10;
    } // Boardroom
  } else if (path2Choice === "wait") {
    if (btnNum === 1) {
      connection += 5;
      totalDelay += 10;
    } // Elevator
    else {
      connection -= 5;
      totalDelay += 5;
    } // Stairs
  } else if (path2Choice === "focus") {
    if (btnNum === 1) {
      connection -= 10;
    } // Boardroom
    else {
      connection += 15;
      totalDelay += 10;
    } // Call Sam
  } else if (path2Choice === "call") {
    if (btnNum === 1) {
      connection -= 10;
    } // Boardroom
    else {
      connection += 10;
      totalDelay += 5;
    } // Text Sam
  }
}
