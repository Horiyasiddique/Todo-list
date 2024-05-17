import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgRedBright.italic(" \n \t welcome to TODO list application \n "));
console.log("=".repeat(70));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task "
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} task added in todo list successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "moreTask",
            type: "confirm",
            message: "do you want to add more tasks?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.moreTask;
}
console.log(chalk.cyanBright.bold("ypur updated todo list is :", todoList));
