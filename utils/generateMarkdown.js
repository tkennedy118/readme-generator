function generateMarkdown(data) {

    console.log(data)

/************************************ MARKDOWN ************************************/
    let markdown = `# ${data.title}

## Table of Contents
1. [ Description ](#description)
2. [ Installation ](#installation)
3. [ Usage ](#usage)
4. [ License ](#license)
5. [ Contributing ](#contributing)
6. [ Testing ](#testing)
7. [ Questions ](#questions)

<a name="description"></a>
# Description
${data.description}

<a name="installation"></a>
# Installation
${data.install}

<a name="usage"></a>
# Usage
${data.usage}

<a name="license"></a>
# License
${data.license}

<a name="contributing"></a>
# Contributing
${data.contribute}

<a name="testing"></a>
# Testing
${data.tests}

<a name="questions"></a>
# Questions
For any questions, please contact ${data.name} at ${data.email}.
`;
/**********************************************************************************/
    return markdown;
}

module.exports = generateMarkdown;