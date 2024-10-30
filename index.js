const inquirer = require("inquirer");
const fs = require("fs")
const SVG = require("./lib/svg")
const Text = require("./lib/text")
const shape = require("./lib/shapes")
// const Shape = require("./lib/shapes")

inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter three characters"
    },
    {
        type: "input",
        name: "textColor",
        message: "What is the text color"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What is the color of the shape?"
    }
])
.then(answers => {
    // console.log(answers)

    const shapeObj = new shape.Circle(answers.shapeColor)
    const shapeCode = shapeObj.render();
    


    const textObj = new Text(answers.text, answers.textColor)
    const textCode = textObj.render();


    const svgObj = new SVG(shapeCode, textCode)
    const svgCode = svgObj.render();

    fs.writeFile("./examples/sample.svg", svgCode, () => {
        console.log("Logo has been generated!")
    })


})