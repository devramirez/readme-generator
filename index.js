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
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter username!');
                    return false;
                }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false; 
                    }
                }
        
            },
            {
                type: 'input',
                name: 'title',
                message: 'What is your project name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your project name!');
                        return false; 
                    }
                }
            },
    
            {
                type: 'input',
                name: 'description',
                message: 'Please write a short description of your project.',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a description of your project!');
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please write a short description of your project.',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a description of your project!');
                        return false; 
                    }
                }
            }, 
            {
                type: 'list',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: ['MIT', 'GNU'],
                default: ["MIT"],
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please choose a license!');
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'install',
                message: 'What are the steps required to install your project?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter steps required to install your project!');
                        return false; 
                    }
                }
            },
            

        }
    ])
};