const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');

// Questions for prompts
const questions = [
  {
    type: 'input',
    message: 'Enter up to 3 characters you would like for your logo.',
    name: 'char',
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
    message: 'Enter the color you would like for your shapes background.',
    name: 'shapeColor',
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

function init() {
  inquirer
    .prompt(questions)

    .then((data) => {
      console.log(data);
      const { char, text, shape, shapeColor } = data;
      const svg = new SVG();
      let shapeObject;
      if (shape === 'Circle') {
        shapeObject = new Circle();
      } else if (shape === 'Triangle') {
        shapeObject = new Triangle();
      } else if (shape === 'Square') {
        shapeObject = new Square();
      }
      shapeObject.setColor(shapeColor);
      svg.setShape(shapeObject);
      svg.setText(char, text)
      writeToFile('logo.svg', svg.render());
    });
}

init();
