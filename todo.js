import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "that you want to add in task",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more task",
            default: "false",
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
}
console.log(todos);
