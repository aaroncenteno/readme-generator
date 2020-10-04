const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
        validate: titleinput => {
            if (titleinput) {
                return true;
            } else {
                console.log('Please enter a title!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description about this project:'
    },
   {
       type: 'input',
       name: 'installation',
       message: 'How would you install this application? Please give specific instruciton necessary to run the application.'
   },
   {
       type: 'input',
       name: 'usage',
       message: 'Please give instructions and examples on how to use this application:'
   },
   {
       type: 'checkbox',
       name: 'license',
       message: 'What license is this project under?',
       choices: ['MIT', 'GNU', 'OBSD', 'Apache', 'ISC', 'None']
   },
   {
       type: 'input',
       name: 'contributing',
       message: 'Add any contributors for this project:'
   },
   {
       type: 'input',
       name: 'test',
       message: 'How would you run a test?'
   },
   {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?(Required)',
        validate: userinput => {
            if (userinput) {
                return true;
            } else {
                console.log('Please enter a GitHub username!')
                return false;
            }
        }
   },
   {
       type: 'input',
       name: 'email',
       message: 'What is your email?'
   }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();