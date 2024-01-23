const fs = require("fs");
const inquirer = require("inquirer");

const{Shape, Square,Triangle,Circle} = require("./lib/shapes");


const questions = [
  // users github user name
  {
    type: "input",
    name: "text-color",
    message: "what color should it be?",
  },
  // users email
  {
    type: "list",
    name: "shape",
    message: "what color is the text?",
    choices: ['Square','Triangle','Circle']
  },
  // title of the project
  {
    type: "input",
    name: "text",
    message: "enter 3 or less letters?",
  },
  {
    type: "input",
    name: "shape-color",
    message: "what color should the shape-color be?",
  }]
  
