function generateMarkdown(data) {

    console.log(data)

/******************************************** MARKDOWN ********************************************/
    let markdown = 
`#${data.title}

    

    `

    return markdown;
}

module.exports = generateMarkdown;