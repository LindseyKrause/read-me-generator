// TODO: Create a function that returns a license badge based on which license is passed in

const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");

// If there is no license, return an empty string
// function renderLicenseBadge(data) {
//   console.log("hello")
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   return ` # ${license.MIT}
  
//   `;
//   console.log(license.MIT);
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` #  ${data.project_name}








`;
  console.log("success!");
}

module.exports = generateMarkdown;
