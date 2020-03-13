const fs        = require("fs");
const inquirer  = require("inquirer");

const api       = require("./utils/api");
const gm        = require("./utils/generateMarkdown");

// questions about project
const questions = [
    {
        type: "input",
        name: "username",
        message: "GitHub username:"
    },
    {
        type: "input",
        name: "title",
        message: "Project title:",
        default: "none"
    },
    {
        type: "input",
        name: "description",
        message: "Description of project:",
        default: "none"
    },
    {
        type: "list",
        name: "license",
        message: "License:",
        choices: ['ISC', 'MIT', 'Apache', 'GPL', 'Other'],
        default: "ISC"
    },
    {
        type: "input",
        name: "install",
        message: "Command to install dependencies:",
        default: "npm install"
    },
    {
        type: "input",
        name: "tests",
        message: "Command to run tests:",
        default: "npm test"
    },
    {
        type: "input",
        name: "repo",
        message: "What should the user know about using this repository?",
    },
    {
        type: "input",
        name: "contribute",
        message: "What should the user know about contributing to the repositor?"
    }
];

const writeToFile = function(filename, data) {
    
    file = path.join(process.cwd(), filename);
    return fs.writeFileSync(file, data);
}

const init = function() {

    inquirer.prompt(questions).then(({ username }) => {
        console.log("Searching...");

        api.getUser(username).then(({ data }) => {
                writeToFile("README.md", generateMarkdown({ ...inqResponse, ...data}));
            })
        .catch(error => {
            return error;
        });

    
    //          .then( ({ data }) => {
    //              writeToFile("README.md", generateMarkdown({ ...inqResponse, ...data }));
    //          })
    //      }
    });
}

init();