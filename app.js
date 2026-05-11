const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const port = 9006;

const connectDB = require("./config/db");
connectDB();

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static(
  path.join(__dirname, "public/assets/uploads")
));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const adminRoutes = require("./routes/adminRoutes");
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.redirect("/admin");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});