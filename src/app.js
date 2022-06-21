const yargs = require("yargs");

const { addMovie, listMovie } = require("./utils/index.js");

const app = (yargsObj) => {
  if (yargsObj.add) {
    addMovie({ title: yargsObj.title, actor: yargsObj.actor });
  } else if (yargsObj.list) {
    listMovie();
  } else {
    // If user doesn't enter add or list then flags incorrect command
    console.log("Incorrect command");
  }
};

app(yargs.argv);