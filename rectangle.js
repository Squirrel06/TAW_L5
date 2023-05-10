"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.Point = Point;
class Rectangle {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    move(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    getArea() {
        const width = Math.sqrt(Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2));
        const height = Math.sqrt(Math.pow(this.c.x - this.a.x, 2) + Math.pow(this.c.y - this.a.y, 2));
        return width * height;
    }
}
const a = new Point(1, 1);
const b = new Point(4, 2);
const c = new Point(3, 1);
const d = new Point(5, 4);
const rect = new Rectangle(a, b, c, d);
console.log(rect.getArea());
