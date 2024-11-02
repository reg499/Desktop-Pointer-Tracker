const robot = require("robotjs");

let lastPosition = { x: 0, y: 0 };

console.log("CTRL+C to exit.");

setInterval(() => {
  const mousePosition = robot.getMousePos();

  if (
    mousePosition.x !== lastPosition.x ||
    mousePosition.y !== lastPosition.y
  ) {
    const timestamp = new Date().toISOString();
    console.log(
      `Mouse movement - X: ${mousePosition.x}, Y: ${mousePosition.y}, Time: ${timestamp}`
    );

    lastPosition = mousePosition;
  }
}, 100);
