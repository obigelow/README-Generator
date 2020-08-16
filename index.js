const inquirer = require("inquirer")
const fs = require("fs")


inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "project"
        },
        {
            type: "input",
            message: "Give a short description about what this program does?",
            name: "description"
        },
        {
            type: "input",
            message: "To install necessary dependencies, run the following command",
            default: "npm i",
            name: "install"
        },
        {
            type: "input",
            message: "How do you use this program?",
            name: "use"
        },
        {
            type: "input",
            message: "Who built this program?",
            name: "credits"
        },
        {
            type: "list",
            message: "Select a license",
            choices: ["MIT","ISC", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
            name: "license"
        },
        {
            type: "input",
            message: "To run tests, run the following command",
            default: "npm test",
            name: "test"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your github username",
            name: "github"
        },
    ]).then(response => {
        var titleContent = response.project.toLowerCase().split(" ").join("-")
        fs.writeFile("EADME.md", `# ${response.project}\n`, (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", `## Description\n${response.description}\n`, (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", `## Table of Contents \n * [Title](#${titleContent})\n * [Description](#Description)\n * [Installation](#Installation)\n * [Usage](#Usage)\n * [Credits](#Credits)\n * [License](#License)\n * [Tests](#Tests)\n * [Question](#Question)\n`, (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", "## Installation\n To install necessary dependencies, run the following command:\n```\n" + response.install + "\n```\n", (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", `## Usage\n${response.use}\n`, (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", `## Credits\n${response.credits}\n`, (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", `## License\n[![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)](https://github.com/${response.github}/${titleContent})\n`, (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", "## Tests\nTo run tests, run the following command:\n```" + response.test + "\n```\n", (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", `## Question\n * [GitHub Profile](https://github.com/${response.github})\n* Email: ${response.question} * If you have any questions email me and checkout my github profile for updates.`, (error) => {
            if (error) {
                console.log("error")
            }
        })
        

    })