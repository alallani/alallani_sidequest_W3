/** DRAW THE APEX RESULT SCREEN */
function drawApexResults() {
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

  // 2. STORY LOGIC
  let resultText = "";
  let buttonLabel = "Enter the boardroom";

  if (path2Choice === "uber") {
    if (path3Choice === 1)
      resultText =
        "You stop in the hallway and unlock your phone. You thank Sam for checking in and tell her how much she means to you.";
    else
      resultText =
        "You put your phone on silent and step into the room. You can reach out to Sam later, but the presentation needs to be done now.";
  } else if (path2Choice === "wait") {
    if (path3Choice === 1)
      resultText =
        "All but one of the elevators are broken, and it’s agonizingly slow. You fill the wait by scrolling through your Photos app, smiling at pictures of you and Sam.";
    else
      resultText =
        "You bolt for the stairs, taking them two at a time. By the 10th floor, you’re gasping for air. Sam is the furthest thing from your mind.";
  } else if (path2Choice === "focus") {
    if (path3Choice === 1)
      resultText =
        "You put your phone on silent and step into the room. You can reach out to Sam later, but the presentation needs to be done now.";
    else
      resultText =
        "You frantically dial Sam’s number, pleading with her to stay. The conversation is heavy, and the minutes tick by.";
  } else if (path2Choice === "call") {
    if (path3Choice === 1)
      resultText =
        "You put your phone on silent and step into the room. You can reach out to Sam later, but the presentation needs to be done now.";
    else
      resultText =
        "You stop in the hallway and tell Sam how much she means to you. You promise to finally plan a holiday together.";
  }

  // Draw Outcome Text
  fill(255);
  textAlign(LEFT, TOP);
  textSize(18);
  textLeading(24);
  let textHeight = max(getTextBlockHeight(resultText, TEXT_W), MIN_TEXT_H);
  text(resultText, TEXT_X, TEXT_Y, TEXT_W, textHeight);

  // 3. NEXT BUTTON
  let btn = {
    x: width / 2,
    y: TEXT_Y + textHeight + BUTTON_SPACING,
    w: BUTTON_W,
    h: BUTTON_H,
  };
  drawSceneButton(btn, "Find out your fate");
  pop();
}

/** INPUT LOGIC FOR APEX RESULTS */
function apexResultsMousePressed() {
  // Use the same logic to find the button position
  let resultText = getApexResultText(); // Helper for cleaner code
  let textHeight = max(getTextBlockHeight(resultText, TEXT_W), MIN_TEXT_H);

  let btn = {
    x: width / 2,
    y: TEXT_Y + textHeight + BUTTON_SPACING,
    w: BUTTON_W,
    h: BUTTON_H,
  };

  if (isHover(btn)) {
    currentScreen = "results";
  }
}

// Helper to keep mousePressed and Draw in sync
function getApexResultText() {
  if (path2Choice === "uber") {
    return path3Choice === 1
      ? "You stop in the hallway and unlock your phone. You thank Sam for checking in and tell her how much she means to you."
      : "You put your phone on silent and step into the room. You can reach out to Sam later, but the presentation needs to be done now.";
  }
  if (path2Choice === "wait") {
    return path3Choice === 1
      ? "All but one of the elevators are broken, and it’s agonizingly slow. You fill the wait by scrolling through your Photos app, smiling at pictures of you and Sam."
      : "You bolt for the stairs, taking them two at a time. By the 10th floor, you’re gasping for air. Sam is the furthest thing from your mind.";
  }
  if (path2Choice === "focus") {
    return path3Choice === 1
      ? "You put your phone on silent and step into the room. You can reach out to Sam later, but the presentation needs to be done now."
      : "You frantically dial Sam’s number, pleading with her to stay. The conversation is heavy, and the minutes tick by.";
  }
  if (path2Choice === "call") {
    return path3Choice === 1
      ? "You put your phone on silent and step into the room. You can reach out to Sam later, but the presentation needs to be done now."
      : "You stop in the hallway and tell Sam how much she means to you. You promise to finally plan a holiday together.";
  }
  return "";
}
