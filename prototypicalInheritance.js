function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

Circle.prototype = Object.create(Shape.prototype)
// After add new prototype, its good to reset also constructor so 
// new Circle.prototype.constructor(1) will be Circle and not Shape
Circle.prototype.constructor = Circle

// Best i make extend function
// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child
// }

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function () {
    console.log('draw');
}

c = new Circle();

