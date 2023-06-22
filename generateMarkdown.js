// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }

  // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license){
        return `## License 
        ${license} license is used for this project.`;
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
*[Features](#features)
*[Usage](#usage)
*[Dependencies](#dependencies)
*[Contributors](#contributors)
*[Tests](#tests)
*[GitHub](#user)
*[Questions](#email)
## Features
${data.features}
## Usage
${data.usage}
## Dependencies
${data.dependencies}
## Contributors
${data.contributors}
## Tests
${data.tests}
## GitHub
${data.user}
## Questions
If you have any questions about this project, please direct them [here](mailto:${data.email})
`;
}

module.exports = generateMarkdown;