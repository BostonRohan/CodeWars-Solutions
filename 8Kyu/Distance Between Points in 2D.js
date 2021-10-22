  // Point A = (x1,y1) Point B = (x2,y2)
  // pointA.x = x1
  // pointA.y = y1
  // pointB.x = x2
  // pointB.y = y2

  function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y-b.y);
  }
  distanceBetweenPoints(new Point(3, 3), new Point(3, 3))