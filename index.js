const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const port = 9000;

const app = express();

connectDB();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', require('./routes/movieRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server running on http://localhost:${port}`);
    }
});