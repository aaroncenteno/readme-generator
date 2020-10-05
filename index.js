const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = () => {
    data = []
    return inquirer.prompt([

    {
        type: 'input',
        name: 'title',
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
    ])
};


// function to write README file
const writeToFile = pageMD => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', pageMD, err => {
            if (err) {
                reject(err)
                return;
            }
            resolve ({
                ok: true,
                message: 'ReadMe Created! Check the directory dist to see it!'
            });
        })
    })
}

questions()
.then (data => {
    return generateMarkdown(data);
})
.then(pageMD => {
    return writeToFile(pageMD)
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message)
})
.catch(err => {
    console.log(err);
});