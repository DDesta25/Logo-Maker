const fs = require("fs");
const inquirer = require("inquirer");

// const{Shape, Square,Triangle,Circle} = require("./lib/shapes");


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
    choices: ['Square','Triangle','Circle']
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
  }]
  
  function writeToFile(fileName, data) {
  
    
    return fs.writeFileSync(fileName, data);
  }
// text-color,shape,text,shape-color
  function init(questions) {
    inquirer
      .prompt(
        /* Pass your questions in here */
        questions
      )
      .then(({textColor,shape,text,shapeColor}) => {
        console.log(textColor,shape,text,shapeColor);
       
        switch (shape) {
            case "Square":
            //   shape = new Case1();
            console.log('Square');
              break;
  
            case "Triangle":
            //   shape = new Case2();
            console.log('Triangle');
              break;
  
            default:
            //   shape = new Case3();
            console.log('Circle');
              break;
          }
          const svg = new SVG()
        // Use user feedback for... whatever!!
        writeToFile("shape.svg", svg.render({...answers}));
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
          // Something else went wrong
          console.log("Something else went wrong");
        }
      });
  }
  
  // Function call to initialize app-this happens first
  init(questions);