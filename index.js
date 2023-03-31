// Needed packages below
const inquirer = require('inquirer');
const fs = require('fs');
const shapesJS = require('./lib/shapes'); //"Imports" shapes file

const prompts = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What is your preferred license?',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Sucessfully created SVG file!')
    );
}

function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        console.log(data);
        const markdownContent = generateMarkdown(data);
        console.log(markdownContent)
        writeToFile('./examples/logo.svg', markdownContent);
    })
}

init();