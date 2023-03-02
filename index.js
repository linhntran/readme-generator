// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining what, why, and how of your project.',
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    // License and Badge
    {
        type: 'list',
        name: 'license',
        message: 'What license (if any) would you like to use?',
        choices: [
            'Apache',
            'BSD3',
            'GPLv2', 
            'LGPL',  
            'MIT',  
            'MPL', 
            'None', 
        ]
    },
    // How to Contribute
    {
        type: 'input',
        name: 'contribute',
        message: 'What are the guidelines for how other developers could contribute to your project?',
    },
    // Tests
    {
        type: 'input',
        name: 'test',
        message: 'How can this application be tested?',
    },
    // Questions (user GitHub username and email here)
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) => {
        if (err)
            throw err;
            console.log('README has been generated!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
