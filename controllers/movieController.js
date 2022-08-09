const request = require("request");
const displayRandomMovies = (req, res) => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&page=${
      Math.floor(Math.random() * 100) + 1
    }`;
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const data = JSON.parse(body);
        res.render("index", { data: data.results ,title:"Home"});
      }
    });
  };
  const searchMovie = (req, res) => {
    const movie = req.query.search;
    const url =
      "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=" +
      movie;
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const results = JSON.parse(body);
        res.render("results", { data: results.results ,title:"Results"});
      }
    });
  };
module.exports = {
  displayRandomMovies,
  searchMovie
};
