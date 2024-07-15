#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
//CLASS FOR STUDENT:
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
//CLASS FOR PERSON + ADDSTUDENT METHOD WITH  PUSH METHOD:
class person {
    students = [];
    addstudent(obj) {
        this.students.push(obj);
    }
}
//MAKING  VARIABLE FOR PERSON CLASS:
const persons = new person;
const programStart = async (persons) => {
    do {
        console.log(chalk.white("-".repeat(60)));
        console.log(chalk.red(`\t"WELCOME TO OBJECT ORIENTED PROGRAM!!"`));
        console.log(chalk.white("-".repeat(60)));
        const ans = await inquirer.prompt([
            {
                name: "Select",
                type: "list",
                message: chalk.yellow("Whom you like to intrect with?"),
                choices: [{ value: "Staff" }, { value: "Student" }, { value: "Exit" }],
            }
        ]);
        if (ans.Select === "Staff") {
            console.log(chalk.white("-".repeat(60)));
            console.log(chalk.green("\nYou approach the staff room ,Please feel free to ask any question\n"));
        }
        else if (ans.Select === "Student") {
            const ans = await inquirer.prompt([
                {
                    name: "find",
                    type: "input",
                    message: (chalk.yellow("Enter the student's name you wish to engage with"))
                }
            ]);
            const student = persons.students.find(val => val.name == ans.find);
            if (!student) {
                const name = new Student(ans.find);
                persons.addstudent(name);
                console.log(chalk.white("-".repeat(60)));
                console.log(chalk.green(`\n"Hello i am ${name.name} , Nice to meet You"`));
                console.log(chalk.white("-".repeat(60)));
                console.log("New student added:");
                console.log(chalk.white("-".repeat(60)));
                console.log(chalk.red("list of Current Student:"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.white("-".repeat(60)));
                console.log(chalk.green(`\n"Hello i am ${student.name} , Nice to see You again"`));
                console.log(chalk.white("-".repeat(60)));
                console.log(chalk.red("List of Existing student:"));
                console.log(persons.students);
            }
        }
        else if (ans.Select === "Exit") {
            console.log(chalk.white("-".repeat(60)));
            console.log(chalk.green("\tExiting the pogram...\n"));
            process.exit();
        }
    } while (true);
};
programStart(persons);
