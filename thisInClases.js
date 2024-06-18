'use strict'

const Circle = function () {
    this.draw = function () { console.log(this); }
};

const c = new Circle();

// Method Call
c.draw()

const draw = c.draw;

// Function Call
draw();

// Without strict mode, console.log(this) on draw function will point to window object
// With strict mode, will be undefined

// Strict mode is automatically set inside class