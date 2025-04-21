function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(255);

  // פרמטרים
  let eyeRadius = 50;
  let pupilRadius = 15;
  let maxPupilOffset = eyeRadius - pupilRadius - 5;

  // מיקום עין שמאל
  let eye1X = 140;
  let eyeY = 100;

  // מיקום עין ימין – כך שהחפיפה תהיה רק בקווי המתאר
  let eye2X = eye1X + eyeRadius * 1.95; // כמעט בדיוק נגיעה בין העיניים

  // ציור – קודם שמאל ואז ימין כדי שימין תעלה בקו המתאר
  drawEye(eye1X, eyeY, eyeRadius, pupilRadius, maxPupilOffset);
  drawEye(eye2X, eyeY, eyeRadius, pupilRadius, maxPupilOffset);
}

function drawEye(x, y, eyeR, pupilR, maxOffset) {
  // קו מתאר של העין – עבה
  stroke(0);
  strokeWeight(6);
  noFill();
  ellipse(x, y, eyeR * 2, eyeR * 2);

  // תזוזת אישון
  let dx = mouseX - x;
  let dy = mouseY - y;
  let distance = sqrt(dx * dx + dy * dy);

  if (distance > maxOffset) {
    dx = (dx / distance) * maxOffset;
    dy = (dy / distance) * maxOffset;
  }

  // אישון שחור
  fill(0);
  noStroke();
  ellipse(x + dx, y + dy, pupilR * 2, pupilR * 2);
}