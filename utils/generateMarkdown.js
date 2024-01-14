// Function to generate markdowns for the README
const generateMarkdown = (data) => {
    return `# ${data.title}
    ## Description
    ${data.description} 
    ## Table of Contents 
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage) 
    [License](#license)
    [Contributing](#contributing) 
    [Tests](#tests) 
    [Questions](#questions)

    ## Installation 
    ${data.installation} 

    ## Usage
    ${data.usage} 

    ## License 
    ${data.license}

    ## Contributing 
    ${data.contributing}
    
    ## Tests
    ${data.tests}

    ## Questions
    Please engage with me on https://github.com/${data.questions} if you have questions about the project. You can also reach me at ${email}.
    `
}

module.exports = generateMarkdown;