// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "UserName",
    },
    {
        type: "input",
        message: "Enter your emailAdress",
        name: "Email",
    },
    {
        type: "input",
        message: "Enter the Title of your Project",
        name: "Title",
    },
    {
        type: "input",
        message: "Enter a description of your project",
        name: "Description",
    },
    {
        type: "input",
        message: "What dependencies mist be installed to run this application",
        name: "Installation",
    },
    {
        type: "input",
        message: "what license was used for this README",
        name: "License",
    },
    {
        type: "input",
        message: "Enter any contributors",
        name: "Contributor",
    },
    {
        type: "input",
        message: "what command must be entered to test this application",
        name: "Test",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) {
            return console.log(err);
        }
        console.log ("Successfully wrote: " + fileName);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("./dist/README.md", generatorMarkdown(data));
    })
}

// Function call to initialize app
init();
