const fs = require("fs");
const inquirer = require("inquirer");

const { Shape, Square, Triangle, Circle } = require("./lib/shapes");
const { log } = require("console");

const questions = [
  {
    type: "input",
    name: "textColor",
    message: "what color should it be?",
  },

  {
    type: "list",
    name: "shape",
    message: "which of the fallowing shapes would you like?",
    choices: ["Square", "Triangle", "Circle"],
  },

  {
    type: "input",
    name: "text",
    message: "enter 3 or less letters?",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "what color should the shape-color be?",
  },
];

// text-color,shape,text,shape-color
function init(questions) {
  inquirer
    .prompt(
      /* Pass your questions in here */
      questions
    )
    .then(({ textColor, shape, text, shapeColor }) => {
      
      let svg;
      switch (shape) {
        case "Square":
          svg = new Square(shapeColor, text, textColor);
          console.log("go to output and checkout square");
          break;

        case "Triangle":
          svg = new Triangle(shapeColor, text, textColor);
          console.log("go to output and checkout triangle");
          break;

        default:
          svg = new Circle(shapeColor, text, textColor);
          console.log("go to output and checkout circle");
          break;
      }

     
      // Use user feedback for... whatever!!
      fs.writeFile("./output/shape.svg", svg.render(), (err) => {
        console.log(err);
      });
    })
    .catch((error) => {
     if (error) {
      console.log(error);
     }
    });
}

// Function call to initialize app-this happens first
init(questions);
