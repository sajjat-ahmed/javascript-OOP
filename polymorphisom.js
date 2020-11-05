class Circle {
    constructor(radious) {
        this.radious = radious;
    }
    area() {
        return Math.PI * Math.pow(this.radious, 2);
    }
}

class Ractangle {
    constructor(width, height) {
        this.width = width;
        this.heiht = height;
    }
    area() {
        return this.heiht * this.width;
    }
}

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    area() {
        return this.base * this.height/2;
    }
}

const shapes = [new Circle(10), new Ractangle(10, 5), new Circle(20), new Triangle(10, 5)];

for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    console.log(shape.area());
}