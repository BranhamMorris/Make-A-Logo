const fs = require('fs');

const inquirer = require('inquirer');

const {triangle, square, circle} = require('./lib/shapes');

function writeToFile(filename, answers) {
    let svgString = "";


    let shapeChoice;
   
    if(answers.shape === 'triangle') {
        shapeChoice = new triangle();
    
    } else if (answers.shape === 'square') {
        shapeChoice = new square();
    
    } else if (answers.shape === 'circle') {
        shapeChoice = new circle();

    } else {
        shapeChoice = undefined();
    }
};

function promptUser() {
    inquirer
    .prompt(
        {
        type: 'input',
        message: 'what shape would you like the logo to be?',
        choices: ('triangle', 'square', 'circle'),
        name: 'shape',
        },

        {
            type: 'input',
            message: 'what color would you like the shape to be?',
            choices: ('red', 'green', 'blue'),
            name: 'shapeColor',
        },

            {
                type: 'input',
                message: 'what text would you like the logo to show?',
                choices: ('up to three characters'),
                name: 'text',
            },

                {
                    type: 'input',
                    message: 'what color would yo like text to be?',
                    choices: ('white', 'black'),
                    name: 'textColor'
                },
        )
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log('max of three characters');
                promptUser();
            } else {
                writeToFile('logo.svg', answers);
            }
        });
}

promptUser();