// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicense({ license }) {
if (license !== 'None') {
  return `
![License](https://img.shields.io/badge/license-${license}-blue.svg)
  
  
  
  `
}
else {
  return ''
}
};

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` #  ${data.project_name}
  ${renderLicense(data)}


## Description 
${data.screenshots}
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#Contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.creditscollaborators}
${data.creditsthirdparty}
${data.creditstutorials}

## License
${renderLicense(data)}
${data.licensedescription}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions or need additional information, you can reach me at the following places:
### Github
${data.githubuserid}
${data.githublink}
### Email
${data.email}
 `
}

module.exports = generateMarkdown;