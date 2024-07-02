const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('draw');
    }
}

export default Circle