// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_name',
        message: "What's your project name",
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter your description. At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out?",
    },


];
// // TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile('/read-me-generator.examplerm.md', generateMarkdown())
};

// // TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((answers) => {
        generateMarkdown(answers);
        writeToFile('', answers)
        console.log(JSON.stringify(answers, null, '  '));
    });
    
}

// // Function call to initialize app
init();
