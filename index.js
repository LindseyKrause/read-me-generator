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
    {
        type: 'list',
        name: 'license',
        message: "Which license does your project have?",
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None']
        
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },{
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use."
    },{
        type: 'input',
        name: 'credits-collaborators',
        message: "List your collaborators, if any, with links to their GitHub profiles.",
    },{
        type: 'input',
        name: 'credits-thirdparty',
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
    },{
        type: 'credits-tutorials',
        name: 'description',
        message: "If you followed tutorials, include links to those here.",
    },{
        type: 'input',
        name: 'license-description',
        message: "In addition to what license your project holds, provide any information that will let other developers know what they can and can't do with your project",
    },{
        type: 'input',
        name: 'screenshots',
        message: "If you would like to add any screenshots to your description section add them here.  They will appear at the top of your description section. Alternatively, once the Read-me is complete, you could drag and drop any assets to precise locations.  Use this format to submit your screenshot: ![alt text](assets/images/screenshot.png) Use the pathways specific to your project assets file.  If no screenshots are necessary, please press enter.",
    },
    {
        type: 'input',
        name: 'github-userid',
        message: "Enter your Github user id",
    },
    {
        type: 'input',
        name: 'github-link',
        message: "Enter the link to your Github Profile",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email address",
    },

];
// // TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, function (err) {
        if (err) throw err;
        console.log('file written');
        
    })
};

// // TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((answers) => {
        // const generateLicense = renderLicenseBadge(answers);
        const markdown = generateMarkdown(answers);
        writeToFile('readme-test.md', (markdown));
    });
    
}

// // Function call to initialize app
init();
