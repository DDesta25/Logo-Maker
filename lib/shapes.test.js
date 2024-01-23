const { Shape, Circle, Square, Triangle } = require("./shapes");

test(" instantiate shape class and assign shape color", () => {
  const shape = new Shape();
  shape.setColor("blue");
  expect(shape.shapeColor).toBe("blue");
});
test(" instantiate shape class and assign text", () => {
  const shape = new Shape();
  shape.setText("abc");
  expect(shape.text).toBe("abc");
});
test(" instantiate shape class and assign text color", () => {
  const shape = new Shape();
  shape.settextColor("blue");
  expect(shape.textColor).toBe("blue");
});
test(" instantiate circle class and assign shape color", () => {
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.shapeColor).toBe("blue");
});
test(" instantiate circle class and assign text", () => {
  const shape = new Circle();
  shape.setText("abc");
  expect(shape.text).toBe("abc");
});
test(" instantiate circle class and assign text color", () => {
  const shape = new Circle();
  shape.settextColor("blue");
  expect(shape.textColor).toBe("blue");
});
test(" instantiate Square class and assign shape color", () => {
  const shape = new Square();
  shape.setColor("blue");
  expect(shape.shapeColor).toBe("blue");
});
test(" instantiate square class and assign text", () => {
  const shape = new Square();
  shape.setText("abc");
  expect(shape.text).toBe("abc");
});
test(" instantiate square class and assign text color", () => {
  const shape = new Square();
  shape.settextColor("abc");
  expect(shape.textColor).toBe("abc");
});

test(" instantiate triangle class and assign shape color", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.shapeColor).toBe("blue");
});
test(" instantiate triangle class and assign text", () => {
  const shape = new Triangle();
  shape.setText("abc");
  expect(shape.text).toBe("abc");
});
test(" instantiate triangle class and assign text color", () => {
  const shape = new Triangle();
  shape.settextColor("blue");
  expect(shape.textColor).toBe("blue");
});
