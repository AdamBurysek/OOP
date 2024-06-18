const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius
    }

    [_draw]() {

    }
}

const c = new Circle(1);


class Ball {
    constructor(radius) {
        // Some developers use this, but u can still acess it
        this._radius = radius;
    }
}

const b = new Ball(1);
b._radius