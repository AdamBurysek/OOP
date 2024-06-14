function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

// Can separate types
for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

// Can't separate types
const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
    console.log('Circle has a radius.');