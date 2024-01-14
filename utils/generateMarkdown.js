// Get the year
const date = new Date();
let year = date.getFullYear();

// Create a function to generate license badge
const generateBadge = (license) => {
    switch (license) {
        case "Apache 2.0 License":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;    

        case "Boost Software License 1.0":
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            break;

        case "BSD 3-Clause License":
            return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
            
        case "BSD 2-Clause License":
            return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause) ";
            break;
            
        case "CC0":
            return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
            break;
            
        case "CC0-1.0":
            return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
            break;
            
        case "Attribution 4.0 International":
            return "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)";
            break;
            
        case "Attribution-ShareAlike 4.0 International":
            return "[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)";
            break;

        case "Attribution-NonCommercial 4.0 International":
            return "[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)";
            break;

        case "Attribution-NoDerivates 4.0 International":
            return "[![License: CC BY-ND 4.0](https://licensebuttons.net/l/by-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nd/4.0/)";
            break;
            
        case "Attribution-NonCommmercial-ShareAlike 4.0 International":
            return "[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
            break;
            
        case "Attribution-NonCommercial-NoDerivatives 4.0 International":
            return "[![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
            break;
            
        case "Eclipse Public License 1.0":
            return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
            break;
            
        case "GNU GPL v3":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
            
        case "GNU GPL v2":
            return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
            break;
            
        case "GNU AGPL v3":
            return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
            break;
            
        case "GNU LGPL v3":
            return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            break;
            
        case "GNU FDL v1.3":
            return "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
            break;
            
        case "Hippocratic 2.1 ":
            return "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";
            break;
            
        case "Hippocratic 3.0 ":
            return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)";
            break;
            
        case "IBM Public License Version 1.0":
            return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
            break;
            
        case "ISC License (ISC)":
            return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
            break;
            
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
            
        case "Mozilla Public License 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
            
        case "Attribution License (BY)":
            return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
            break;

        case "Open Database License (ODbL)":
            return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
            break;
            
        case "Public Domain Dedication and License (PDDL)":
            return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
            break;
            
        case "Perl Artistic-2.0":
            return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
            break;
            
        case "SIL Open Font License 1.1":
            return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
            break;
            
        case "Unlicense":
            return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            break;
            
        case "WTFPL":
            return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
            break;
            
        case "Zlib":
            return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
            break;
    
        default:
            return 'Badge Not Found for License!'
            break;
    }
};

// Function to generate markdowns for the README
const generateMarkdown = (data) => {
    return `# ${data.title}
    ## Description                       ${generateBadge(data.license)}
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

    Copyright (c) ${year} ${process.env.npm_package_author}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

    ## Contributing 
    ${data.contributing}
    
    ## Tests
    ${data.tests}

    ## Questions
    Please engage with me on https://github.com/${data.questions} if you have questions about the project. You can also reach me at ${data.email}.
    `
}

module.exports = generateMarkdown;