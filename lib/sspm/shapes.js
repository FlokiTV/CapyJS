class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
    this.type = "circle";
  }
}

class Rectangle extends Shape {
  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.type = "rectangle";
  }
}

class Line extends Shape {
  constructor(x1, y1, x2, y2) {
    super(x1, y1);
    this.x2 = x2;
    this.y2 = y2;
    this.type = "line";
  }
}
