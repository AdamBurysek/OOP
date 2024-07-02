const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('draw');
    }
}

module.exports = Circle;

// const Circle = require('./circleCommonJs');

// const c = new Circle(10);

// c.draw()
