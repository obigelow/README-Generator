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
            message: "How do you install your program?",
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
            message: "License?",
            choices: ["1","2"],
            name: "license"
        },
        {
            type: "input",
            message: "What tests?",
            name: "test"
        },
        {
            type: "input",
            message: "Questions?",
            name: "question"
        },
    ]).then(response => {
        var titleContent = response.project.toLowerCase().split(" ").join("-")
        fs.writeFile("EADME.md", "# " + response.project + "\n", (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", "## Description\n" + response.description + "\n", (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", "[Title](#" + titleContent +")\n[Description](#Description)\n[Installation](#Installation)\n[Usage](#Usage)\n[Credits](#Credits)\n[License](#License)\n[Tests](#Tests)\n[Question](#Question)\n", (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", "## Installation\n" + response.install + "\n", (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", "## Usage\n" + response.use + "\n", (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", "## Credits\n" + response.credits + "\n", (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", "## License\n" + response.license + "\n", (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", "## Tests\n" + response.test + "\n", (error) => {
            if (error) {
                console.log("error")
            }
        })
        fs.appendFile("EADME.md", "## Question\n" + response.question + "\n", (error) => {
            if (error) {
                console.log("error")
            }
        })
        

    })