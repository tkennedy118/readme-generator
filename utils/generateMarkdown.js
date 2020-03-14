function generateMarkdown(data) {

/************************************ MARKDOWN ************************************/
    let markdown = `# ${data.title} 
<center><img src="https://avatars3.githubusercontent.com/u/${data.id}?s=25&v=4" alt="${data.login}" /></center>

![](https://img.shields.io/badge/random-badge-blue?style=flat-square)

<a name="description"></a>
## Description
${data.description}

## Table of Contents
1. [ Description ](#description)
2. [ Installation ](#installation)
3. [ Usage ](#usage)
4. [ License ](#license)
5. [ Contributing ](#contributing)
6. [ Testing ](#testing)
7. [ Questions ](#questions)

<a name="installation"></a>
## Installation
${data.install}

<a name="usage"></a>
## Usage
${data.usage}

<a name="license"></a>
## License
${data.license}

<a name="contributing"></a>
## Contributing
${data.contribute}

<a name="testing"></a>
## Testing
${data.tests}

<a name="questions"></a><a name="description"></a>
# Questions
For any questions, please contact [${data.login}](http://github.com/${data.login}) at ${data.email}.
`;
/**********************************************************************************/
    return markdown;
}

module.exports = generateMarkdown;