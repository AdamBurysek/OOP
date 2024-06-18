class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    // Overiding parent function
    move() {
        // Calling also parent
        super.move();

        console.log('circle move');
    }
}

const c = new Circle();

