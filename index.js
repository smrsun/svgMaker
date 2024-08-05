const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');


// Questions for prompts
const questions = [
  {
    type: 'input',
    messasge: 'Enter up to 3 characters you would like for your logo.',
    name: 'mono',
  },
  {
    type: 'input',
    message: 'Enter the color you would like your text to be.',
    name: 'text',
  },
  {
    type: 'list',
    message: 'Choose the shape you would like your logo to have.',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    message: 'Enter the color you would like your shape.',
    name: 'shape-color',
  },
];

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Generated logo.svg');
    }
  });
};

function init () {
  inquirer
    .prompt(questions)
    .then((input) => {
      let logo;
      if (input.shape === 'Circle') {
        logo = new Circle('ABC', 'pink', 'blue')
      } else if (input.shape === 'Triangle') {
        logo =new Triangle()
      } else {
      }
      writeToFile('logo.svg', logo.render());
    })
    
};

init();
