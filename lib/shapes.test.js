const { Triangle, Circle, Square } = require("./shapes"); // Importing the shapes module

const shapes = [  // Defining array of shape types and their shape instances
    {type: 'Triangle', shape: new Triangle()},
    {type: 'Circle', shape: new Circle()},
    {type: 'Square', shape: new Square()},
  ];
  
  shapes.forEach(({ type, shape }) => {  // Loops through each shape type and runs test
    
    describe(type, () => {
      
      describe('Render', () => {
       
        it(`Should return a ${type} SVG`, () => {  // Define the test assertion for rendering the shape
          
          shape.setShapeColor("Blue"); // Set the shape color to "Red"
          
          const expectedOutput = getExpectedOutput(type); // Get the expected output for the shape type
          
          expect(shape.render()).toEqual(expectedOutput); // Checks generated output versus expected output
        });
      });
    });
  });
  
  // Define a function to return the expected output for each shape type
  function getExpectedOutput(shapeType) {
    switch(shapeType) {
      case 'Triangle':
        return `<polygon points="150, 18 244, 182 56, 182" fill="Blue" />`;

      case 'Circle':
        return `<circle cx="150" cy="100" r="80" fill="Blue" />`;

      case 'Square':
        return `<rect width="120" height="120" x="90" y="40" fill="Blue" />`;

      default:
        // Throw an error if the shape type is not recognized
        throw new Error(`Unexpected shape type: ${shapeType}`);
    }
  }