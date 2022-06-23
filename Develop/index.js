// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdownPage = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = () => {
        return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your title!');
              return false; 
          }
        }
      },
      {
        type: "input",
        message: "What is the description of your project:",
        name: "description",
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your description!');
              return false; 
          }
        }
      },
      {
        type: "list",
        message: "Please select the license you used for this project.",
        name: "license",
        choices: [
          "Mozilla",
          "MIT",
        ],
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please select your licence!');
              return false; 
          }
        }
      },
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your name!');
              return false; 
          }
        }
      },
      {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your GitHub user name!');
              return false; 
          }
        }
      },
      {
        type: "input",
        name: "userEmail",
        message: "What is your email?",
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your email!');
              return false; 
          }
        }
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo, besides contact info?'
    },
      {
        type: "input",
        name: "URL",
        message: "What is the URL of the live site?",
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your URL!');
              return false; 
          }
        }
      },
      {
        type: "input",
        name: "repo",
        message: "What is the URL of the github repo?",
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your GitHub repo!');
              return false; 
          }
        }
      }
    ]);
  }

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('README.md', data, err => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("You have a README!")
    }
})
}; 


// TODO: Create a function to initialize app

questions()
.then(answers => {
    return generateMarkdownPage(answers);
})
.then(data => {
    return writeToFile(data);
})
.catch(err => {
    console.log(err)
})
