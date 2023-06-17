// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// linking to page where the README is generated 
const generatePage = require('./utils/generateMarkdown.js');

//array of questions for user
const questions = () => {
    // using inquirer to prompt questions to user
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) => {
                    return true;
                } else {
                    console.log('Please enter username!');
                }
            }
        }
    ])
}