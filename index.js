// Imports required packages and classes
const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const {Circle, Triangle, Square, finalShapeRender} = require('./lib/shapes');

// Defines prompts for user inputs
const prompts = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters',

        // Validates the input length
        validate: function(characters) {
            if (characters.length > 3) {
                return 'Must be 3 characters or less';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color:',
    },
    {
        type: 'list',
        name: 'shapeList',
        message: 'What is your preferred shape?',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color:',
    },
];

// Prompts the user inputs and generates the SVG file
async function generateSVG() {
    try {
      // Awaits user inputs
      const { text, textColor, shapeList, shapeColor } = await inquirer.prompt(prompts);
      
      // Determines which shape was chosen
      let shape;
      switch (shapeList) {

        case 'Circle':
          shape = new Circle();
          break;

        case 'Triangle':
          shape = new Triangle();
          break;

        case 'Square':
          shape = new Square();
          break;
      }

      // Sets the color of the chosen shape
      shape.setShapeColor(shapeColor);
      
      // Creates a finalShapeRender object and sets the text and shape
      const logoRender = new finalShapeRender();

      logoRender.setShape(shape);
      logoRender.setText(text, textColor);
     
      // Writes the generated SVG file
      await writeFile('./examples/logo.svg', logoRender.render());
      console.log('Generated SVG File!');
    } catch (error) {
      console.log(error);
    }
  }
  
  // Calls function to start the program
  generateSVG();