# Writemeareadme
## Description
Writemeareadme is command line application developed in Node.js environment that prompts user for information about their new project and uses the data to create a professional README.md file.
The program prompts user for the title of the project/program being developed, brief description of the program does, installation and usage instructions, license under which the program was developed, how to contribute to the project, any test instructions and how to report issues found in the program.
The tools/technologies includes Node.js and NPM Inquirer.js. 

## Table of Contents
[Description](#description)

[Installation](#installation)

[Usage](#usage) 

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Installation
1. Open your terminal.
2. Check if Node.js is installed on your local machine by typing node -v and pressing Enter.
```bash
$ node -v
v20.10.0
```
3. If not installed, navigate to https://nodejs.org/en and install the LTS version of Node.js 
4. Change the current working directory to the location of choice or to a newly created directory if need be. For example,
```bash
$ cd sample
```
5. Type git clone and paste https://github.com/oluwaseunolusanya/writemeareadme.git
```bash
git clone https://github.com/oluwaseunolusanya/writemeareadme.git 
```
6. Press Enter to create create your local clone.
7. Type ls -l and confirm writemeareadme directory exists.
```bash
$ ls -l
total 4
drwxr-xr-x 1 Olu 197121 0 Jan 14 20:53 writemeareadme/
```

## Usage
1. Change directory to writemeareadme.
2. Install Inquirer.js.
```bash
npm install --save inquirer@^8.0.0
```
4. Run the index.js
```bash
$ node index.js
```
5. Follow the prompt and enter requested information.
6. Note to enter multilines for example steps of instruction enter '\n' to enter newline
```bash
? Provide installation instructions. 1. Open your terminal.\n2. Check if Node.js is installed on your local machine by typing node -v and pressing Enter.\n
```bash\n
$ node -v\n
v20.10.0\n
```

## License

## Contributing

## Tests

## Questions
