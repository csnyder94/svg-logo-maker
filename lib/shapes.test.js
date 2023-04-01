const { Triangle, Circle, Square } = require("./shapes");

const shape = new Triangle ();
shape.setShapeColor("Red");

describe("Triangle", () => {
    describe('Render', () => {
        it("Should return a Triangle SVG with user inputs", () => {
            
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="Red" />`);
        });
    });
}); // Test for triangle WORKS!

