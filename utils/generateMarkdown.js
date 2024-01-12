// Function to generate markdowns for the README
const generateMarkdown = (data) => {
    `# ${data.title}
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
    ${data.description} 

    ## Usage
    ${data.description} 
    
    ## License 
    ## Contributing 
    ## Tests 
    ## Questions
    `
}