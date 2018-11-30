var chalk = require("chalk");

var message = chalk.bgGreen("Hello ") + chalk.yellow("World");
console.log(message);

var text = chalk.underline.blue("hahahaha") + chalk.bold("coool");
console.log(text);