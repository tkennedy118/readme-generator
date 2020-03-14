function generateMarkdown(data) {

    console.log(data)

/************************************ MARKDOWN ************************************/
    let markdown = `# ${data.title} 
[<img src="http://raster.shields.io/badge/random-badge-lightgray?style-flat-square](http://github.com/tkennedy118/readme-generator)

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
<a name="description"></a>
# Description
${data.description}
<a name="testing"></a>
## Testing
${data.tests}

<a name="questions"></a><a name="description"></a>
# Description
${data.description}
## Questions
For any questions, please contact [](https://avatars3.githubusercontent.com/u/16977628?s=460&u=20f0858359030461d69101d722744520cc7ac379&v=4)[${data.login}](http://tkennedy118) at ${data.email}.
`;
/**********************************************************************************/
    return markdown;
}

module.exports = generateMarkdown;