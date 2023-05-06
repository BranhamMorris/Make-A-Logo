const {triangle, square, circle} =require('shapes.js');

describe('triangle test', () => {
    test ('test for a triangle with green background', () => {
        const shape = new triangle();
        shape.setColor('green');

    });
});

describe('square test', () => {
    test ('test for a square with red background', () => {
        const shape = new square();
        shape.setColor('red');

    });
});

describe('circle test', () => {
    test ('test for a circle with blue background', () => {
        const shape = new circle();
        shape.setColor('blue');

    });
});