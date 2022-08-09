const express = require("express");
const request = require("request");
const movieRoutes = require('./routes/movieRoutes');
const app = express();
const port = 5000

// Templating Engine
app.set("view engine", "ejs");

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

// movie routes
app.use('/', movieRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))
