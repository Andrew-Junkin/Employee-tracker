
const inquirer = require("inquirer");
const manageDB = require("./manageDB");


function employeeTracker() {

   .

    inquirer
        .prompt([
            {
                type: "list",
                message: "Welcome to the Employee Database.",
                name: "mainMenu",
                choices: [
                    "View department list",
                    "View roles",
                    "View employee list",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update employee role",
                    "Update employee's manager",
                    "Remove a role from database",
                    "Remove employee from database",
                    "Exit"]
            },
        ])
        .then(function (response) {

            switch (response.mainMenu) {
                default:
                    text = "What did you do?! Now all of China knows you're here!";
                    break;
        
                case "View department list":
                    manageDB.viewDept(function () {
                        //restart questions
                        employeeTracker();
                    });
                    break;
              
                case "View roles":
                    manageDB.viewRoles(function () {
                        employeeTracker();
                    });
                    break;
               
                case "View employee list":
                    manageDB.viewEmployees(function () {
                        employeeTracker();
                    });
                    break;
               
                case "Add a department":
                    manageDB.createDept(function () {
                        employeeTracker();
                    });
                    break;
              
                case "Add a role":
                    manageDB.createRole(function () {
                        employeeTracker();
                    });
                    break;
              
                case "Add an employee":
                    manageDB.createEmployee(function () {
                        employeeTracker();
                    });
                    break;
                
                case "Update employee role":
                    manageDB.updateEmployeeRole(function () {
                        employeeTracker();
                    });
                    break;
                
                case "Update employee's manager":
                    manageDB.updateEmployeeManager(function () {
                        employeeTracker();
                    });
                    break;
            
                case "Remove a role from database":
                    manageDB.removeRole(function () {
                        employeeTracker();
                    });
                    break;
          
                case "Remove employee from database":
                    manageDB.removeEmployee(function () {
                        employeeTracker();
                    });
                    break;
          
                case "Exit":
                    console.log("Exiting employee database.");
                    manageDB.afterConnection(function () {
                        process.exit();
                    });
                    break;
            }
        });
};

employeeTracker();