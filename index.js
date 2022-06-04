const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const output_dir = path.resolve(__dirname, "output");
const pathOutPut = path.join(output_dir, "wholeteam.html"); //path for url/html
const generatedTeam = require("./src/teamtemplate.js"); //path to template for html

teamArray = [];

function runApp() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter the team manager's name.",
      },

      {
        type: "input",
        name: "managerId",
        message: "Please enter the team manager's employee ID number.",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter the team manager's email address.",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please enter the team manager's office number.",
      },
      {
        type: "list",
        message: "What type of Employee would you like to add to the team?",
        name: "addEmployeePrompt",
        choices: [
          // "Manager",
          "Engineer",
          "Intern",
          "I do not wish to add another team member. My team is complete!",
        ],
      },
    ])
    .then(function (userInput) {
      switch (userInput.addEmployeePrompt) {
        // case "Manager":
        //   addManager();
        //   break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          htmlBuilder();
      }
    });
  // .then((answers) => {
  //   const manager = new Manager(
  //     answers.mangerName,
  //     answers.managerId,
  //     answers.managerEmail,
  //     answers.managerOfficeNumber
  //   );
  //   teamArray.push(manager);
  // });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter the engineer's name.",
      },

      {
        type: "input",
        name: "engineerId",
        message: "Please enter the engineer's employee ID number.",
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the engineer's email address.",
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "Please enter the engineer's Github username.",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamArray.push(engineer);
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter the intern's name.",
      },

      {
        type: "input",
        name: "internId",
        message: "Please enter the intern's employee ID number.",
      },

      {
        type: "input",
        name: "internEmail",
        message: "Please enter the intern's email address.",
      },

      {
        type: "input",
        name: "internSchool",
        message: "Please enter which school the intern attended.",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamArray.push(intern);
    });
}

runApp();

function htmlBuilder() {
  fs.writeFileSync(pathOutPut, generatedTeam(teamArray), "utf-8");
  console.log("Your team has been created!");
}
