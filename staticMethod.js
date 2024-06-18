class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // Instance Method
    draw() {
        console.log('draw');
    }

    // Static Method
    // not awabile in const circle
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

// no new 
const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);