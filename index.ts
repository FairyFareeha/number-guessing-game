#! /usr/bin/env node
import inquirer from "inquirer";
const randomNunber = Math.floor(Math.random()*10+1);
console.log("Welcome to Number Guessing Game");
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
if(answers.userGuessNumber===randomNunber){
    console.log("Congratulations ! You guess right number.")
}else{
    console.log("You guessed  a wrong number.")
    
}










