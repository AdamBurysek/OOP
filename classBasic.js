// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function () {
//         console.log('draw');
//     }
// }

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function () {

        }
    }

    draw() {
        console.log('draw');
    }
}

// With class you need to provide new!!

const c = new Circle(1);