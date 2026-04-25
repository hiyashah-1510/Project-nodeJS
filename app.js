const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const { type } = require('os')
const path = require('path')

const port = 9002

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/bookStore')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

app.get('/', async (req, res) => {
    const books = await Book.find();
    res.render('index', { books });
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', upload.single('image'), async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        image: req.file.filename
    });

    await book.save();
    res.redirect('/');
});

app.get('/delete/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

app.get('/edit/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.render('edit', { book });
});

app.post('/update/:id', upload.single('image'), async (req, res) => {

    let updated = {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description
    };

    if (req.file) {
        updated.image = req.file.filename;
    }

    await Book.findByIdAndUpdate(req.params.id, updated);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});