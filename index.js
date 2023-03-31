// Needed packages below
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triange, Square} = require('./lib/shapes'); //"Imports" shapes file
//User Inputs Below
const prompts = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters',

        validate: function(characters) {
            if (characters.length > 3) {
                return 'Must be 3 characters or less'; //Checks for character length
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
//Prompting questions and then taking data and creating switch function with "fat arrow"
inquirer.prompt(prompts).then(({text,textColor, shapeList, shapeColor}) => {
    let shape;
  
    switch (shapeList) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      default:
        shape = new Square();
        break;
    }

  shape.setColor(shapeColor) //Setting color based on user input to be rendered
  svg.setText(text, textColor) //Setting text color based on user input to be rendered
  svg.setShape(shape) //Setting shape from list to be rendered

  return writeFile("./examples/logo.svg", svg.render()) //Writing to an SVG file
  
  })
  .then(() => console.log("Generated SVG File!")) //Success message
  
  .catch(err => console.log(err)); //Error message