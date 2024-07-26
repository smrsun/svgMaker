const inquirer = require('inquirer');
const fs = require('fs');
const makeLogo = require('./lib/shapes.test.js');
// Question 1

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
      console.log('logo.svg');
    }
  });
};

const init = () => {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log('Generated logo.svg');
      const start = makeLogo(answers);
      writeToFile('examples');
    })
    .catch((err) => console.log(err));
};
// // promises are chained to directly pass inquirer data into fetch request
// .then((res) => fetch(`https://api}`))
// // promises are chained to parse the request for the json data
// .then((res) => res.json())
// // json data is accepted as user and logged to the console
// .then((user) => console.log(user));


init();
