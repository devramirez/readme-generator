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

