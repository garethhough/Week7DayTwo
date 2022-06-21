const fs = require("fs");

const addMovie = (movieObj) => {
  try {
    //stringifies object we pass in
    const stringyObj = JSON.stringify(movieObj);
    //takes data from stringyObj and stores it in storage.json
    fs.writeFileSync('./storage.json', stringyObj);
  } catch (error) {
    //catch error
    console.log(error);
  }
};

const listMovie = () => {
  try {
    //read what we have stored in storage.json file
    const movieList = fs.readFileSync('./storage.json');
    const list = JSON.parse(movieList);
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addMovie, listMovie };
