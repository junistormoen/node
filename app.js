import chalk from "chalk";

const joke = ["Hvor", "lærte", "haien", "engelsk?", "På", "Hai", "School!"];
const colors = ["red", "green", "yellow", "blue", "mangenta", "cyan"];
let coloredJoke = "";

for(let i = 0; i < joke.length; i++){
    let colorIndex = Math.floor(Math.random() * colors.length)
    coloredJoke += chalk.colors[colorIndex](joke[i]) + "";
};

console.log(coloredJoke);