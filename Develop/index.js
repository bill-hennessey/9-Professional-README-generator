// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the project title",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage instructions",
  },
  {
    type: "input",
    name: "contributions",
    message: "How can others contribute to this project?",
  },
  {
    type: "input",
    name: "test",
    message: "Please describe how to test this application",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license would you like to use?",
    choices: ["MIT", "GNU", "GPLv3"],
  },
];

inquirer.prompt(questions).then((responses) => console.log(responses));
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
