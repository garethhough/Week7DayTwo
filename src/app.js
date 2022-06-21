const yargs = require("yargs");

// Retrieves addMovie and listMovie from "./utils/index.js", you dont have to write index.js as it
// searches for that file by default
const { addMovie, listMovie } = require("./utils");

const app = (yargsObj) => {
  // If you use --add in the terminal the if statement is fired
  if (yargsObj.add) {
    addMovie({ title: yargsObj.title, actor: yargsObj.actor });
  // If you use --list in terminal then else if is fired
  } else if (yargsObj.list) {
    listMovie();

  // If user doesn't enter add or list then flags incorrect command
  } else {
    console.log("Incorrect command");
  }
};

app(yargs.argv);


// To add to the list use node src/app.js --add --title="spiderman" --actor="Tom Holland"
// To see the list run node src/app.js --list

// Remember to install yargs using npm i yargs
// Remember to install fs using npm i fs
// Remember to add .gitignore containing /node_modules