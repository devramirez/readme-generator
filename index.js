// require modules 
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// linking to page where the README is generated 
const generateMarkdown = require('./generateMarkdown.js');

//array of questions for user
const questions = () => {
    // using inquirer to prompt questions to user
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
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
            name: 'usage',
            message: "Provide instructions and examples for use. Include screenshots as needed.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description!');
                    return false;
                }
            }
        },
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
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GNU', 'APACHE2.0', 'MPL2.0', 'BSD2', 'BSD3', 'none'],
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
        {
            type: "input",
            name: "usage",
            message:
              "State the languages or technologies associated with this project.",
          },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests on this application?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'What does the user need to know about contributing to the repo?'
        }
    ]);
};

// function to write README file 

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error
        if  (err) {
            console.log(err)
            return;
        
        // prompt when README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}

// function to initialize program
questions()

// getting answers
.then(answers =>{
    return generateMarkdown(answers)
})
.then(data =>{
    return writeFile(data);
})
//catching errors
.catch(err => {
    console.log(err)
})
