// Needed packages below
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triange, Square} = require('./lib/shapes'); //"Imports" shapes file

const prompts = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters',

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

inquirer.prompt(questions).then(({text,textColor, shapeList, shapeColor}) => {
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

  shape.setColor(shapeColor)
  svg.setText(text, textColor)
  svg.setShape(shape)
  return writeFile("./examples/logo.svg", svg.render())
  
  })
  .then(() => console.log("Generated logo.svg"))
  
  .catch(err => console.log(err));