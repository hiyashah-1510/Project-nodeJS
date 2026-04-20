const express = require("express");
const path = require("path");

const app = express();
const PORT = 8008;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/chartjs", (req, res) => {
    res.render("chartjs");
});

app.get("/table", (req, res) => {
    res.render("table");
});

app.get("/icon", (req, res) => {
    res.render("icon");
});

app.get("/form", (req, res) => {
    res.render("form");
});

app.get("/docs", (req, res) => {
    res.render("docs/docs");
});

app.get("/error", (req, res) => {
    res.render("user-page/error");
});

app.get("/error-500", (req, res) => {
    res.render("user-page/error-500");
});

app.get("/blankPage", (req, res) => {
    res.render("user-page/blankPage");
});

app.get("/login", (req, res) => {
    res.render("user-page/login");
});

app.get("/register", (req, res) => {
    res.render("user-page/register");
});

app.get("/buttons", (req, res) => {
    res.render("ui-features/buttons");
});

app.get('/dropdowns', (req, res) => {
  res.render('ui-features/dropdowns');
});

app.get("/typography", (req, res) => {
    res.render("ui-features/typography");
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});