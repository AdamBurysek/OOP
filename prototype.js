function Circle(radius) {
    this.radius = radius;

    this.move = function () {
        this.draw();
        console.log('move');
    }
}

Circle.prototype.draw = function () {
    console.log('draw');
}

const circle = new Circle(1);


// Iterating //

// Return instance members
console.log(Object.keys(circle));

// Return all members (instance + prototype)
for (let key in circle) console.log(key);