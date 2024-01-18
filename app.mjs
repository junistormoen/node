import chalk from "chalk";

const joke = "Hvor lærte haien engelsk? På Hai School!";
const jokeWords = joke.split(" ");
console.log(jokeWords);

const colors = [chalk.red, chalk.green, chalk.yellow, chalk.blue, chalk.magenta, chalk.cyan];
let coloredJoke = "";


jokeWords.forEach((word) =>{
    const colorIndex = Math.floor(Math.random() * colors.length);
    coloredJoke += colors[colorIndex](word) + " ";
}); 

console.log(coloredJoke);

