// Import Required Modules.
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Declare an Array of User Prompts
const questions = [
    {
        type:"input",
        message: "Enter the title of your project.",
        name: "title"
    },
    {
        type:"input",
        message: "Enter a concise description of the project.",
        name: "description"
    },
    {
        type:"input",
        message: "Provide installation instructions.",
        name: "installation"
    },
    {
        type:'input',
        message: 'Describe how to use the program.',
        name: 'usage'
    },
    {
        type:'input',
        message: ''.',
        name: 'description'
    },
];

