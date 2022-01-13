// Order of requiring packages:
// Core Modules >> npm modules >> our own packages

const yargs = require("yargs");
const chalk = require("chalk"); //We get yargs library from the return value of require

const nameImported = require("./app2.js");
const { string } = require("yargs");

// Grabbing the third item by index from the argv array

const command = process.argv[2];
// if (command.toUpperCase() == "ADD") {
//   console.log(chalk.yellow.inverse.bold("Adding Note"));
// } else if (command.toUpperCase() === "LIST") {
//   console.log(chalk.yellow.inverse.bold("Listing Notes"));
// }
// Customising the yargs version. The version should be defined before the main code starts
yargs.version("1.6.7");
// console.log("----------");
// console.log(chalk.blue.inverse.bold(process.argv[2]));
// console.log("-----------");
// console.log(chalk.bgGreen.inverse.bold("output from process.argv"));
// console.log(process.argv);
// console.log(chalk.bgGreen.inverse.bold("output from yargs.argv"));
// console.log(yargs.argv); // Gives us the version of process.argv that yargs has parsed
// The _ property gives us the command that we have given

// Add, remove, list, read

// Create add command
// Note: A method is a function defined inside of a class. A class serves as a blueprint for an object.
yargs.command({
  command: ["add", "ad"],
  describe: "Add a new note",
  builder: {
    body: {
      describe: "Set Up body for command",
      demandOption: true,
      type: "string",
    },
    title: {
      describe: "Node addition",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: and body", argv.title);
    console.log("This is the body", argv.body);
  }, // The handler property describes what the program is supposed to do on getting a certain input. We bind a function to it
}); // Here we are calling the command method on the yargs object.

// To see some outputs, we need to console.log it

// Create remove command
yargs.command({
  command: ["rem", "rm", "remove"],
  description: "This command removes notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
    },
  }, // builder's value is an object and in that object we can define all the options that we want our command to support
  // In the builder we add the options as properties
  handler: function (argv) {
    console.log("Remove a note", argv);
  },
});

// Create list command

yargs.command({
  command: ["ls", "list"],
  description: "This command lists all the notes",
  builder: {
    title: {},
  },
  handler: function () {
    console.log("Listed the notes");
  },
});
// Create read command

yargs.command({
  command: "read",
  describe: "This command reads whatever is in the note",
  handler: function () {
    console.log("Reading whatever is in the note");
  },
});
yargs.parse();
// console.log(yargs.argv); // the argv property on yargs tells yargs to parse the input data
// console.log(yargs.argv);

// Storing data with JSON
