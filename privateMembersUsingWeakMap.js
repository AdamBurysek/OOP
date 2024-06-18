const _radius = new WeakMap();
const _move = new WeakMap();
const privateProps = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);


        // With arrow function will be acessible and target Circle
        // With function will be undefince, because use strict inside class
        _move.set(this, () => {
            console.log('move', this);
        });
    }

    draw() {
        _move.get(this)();

        console.log('draw');
    }
}

const c = new Circle(1);
