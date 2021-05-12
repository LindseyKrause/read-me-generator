// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink({license}) {
  console.log('test');
  console.log(license);
// if (license.License === [0]) {
//   console.log("hello");
// }
// else {
//   console.log("not MIT")
// }

};

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
  // return ` # ${license.MIT}
  
  // `;
  // console.log(license.MIT);
  // console.log
// }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseLink(data);
  return ` #  ${data.project_name}








// `;
}

module.exports = generateMarkdown;