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
        type:"input",
        message: 'Describe how to use the program.',
        name: 'usage'
    },
    {
        type:"list",
        message: "Choose a license to open source your repository.",
        name: "License"
    },
    {
        type:"list",
        message: "Choose a license to open source your repository.",
        name: "License",
        choices:[
            "Apache 2.0 License",
            "Boost Software License 1.0",
            "BSD 3-Clause License",
            "BSD 2-Clause License",
            "CC0",
            "CC0-1.0",
            "Attribution 4.0 International",
            "Attribution-ShareAlike 4.0 International",
            "Attribution-NonCommercial 4.0 International",
            "Attribution-NoDerivates 4.0 International",
            "Attribution-NonCommmercial-ShareAlike 4.0 International",
            "Attribution-NonCommercial-NoDerivatives 4.0 International",
            "Eclipse Public License 1.0",
            "GNU GPL v3",
            "GNU GPL v2",
            "GNU AGPL v3",
            "GNU LGPL v3",
            "GNU FDL v1.3",
            "Hippocratic 2.1 ",
            "Hippocratic 3.0 ",
            "IBM Public License Version 1.0",
            "ISC License (ISC)",
            "MIT",
            "Mozilla Public License 2.0",
            "Attribution License (BY)",
            "Open Database License (ODbL)",
            "Public Domain Dedication and License (PDDL)",
            "Perl Artistic-2.0",
            "SIL Open Font License 1.1",
            "Unlicense",
            "WTFPL",
            "Zlib",
        ]
    },
    {
        type:"input",
        message: "Provide instructions on how to contribute to the project.",
        name: "contributing"
    },
    {
        type:"input",
        message: "Provide testing instructions.",
        name: "tests"
    },
    {
        type:"input",
        message: "Provide your github username to address any questions.",
        name: "github-username"
    },
    {
        type:"input",
        message: "Provide your email to address questions about the project.",
        name: "email"
    },
];

