const Movie = require("../model/movieSchema");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });
exports.upload = upload.single("image");

exports.indexpage = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render("index", { movies });
    } catch (err) {
        console.log(err);
        res.send("Error loading home");
    }
};

exports.addPage = (req, res) => {
    res.render("addMovie");
};

exports.addMovie = async (req, res) => {
    try {
        if (!req.file) {
            return res.send("Image is required");
        }

        const movie = new Movie({
            name: req.body.name,
            actors: req.body.actors,
            directors: req.body.directors,
            languages: req.body.languages,
            desc: req.body.desc,
            category: req.body.category,
            rating: req.body.rating,
            year: req.body.year,
            image: "/uploads/" + req.file.filename
        });

        await movie.save();
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
};

exports.viewPage = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render("viewMovies", { movies });
    } catch (err) {
        console.log(err);
        res.send("Error loading movies");
    }
};

exports.viewSingle = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.render("singleMovie", { movie });
    } catch (err) {
        console.log(err);
        res.send("Movie not found");
    }
};

exports.editPage = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.render("editMovie", { movie });
    } catch (err) {
        console.log(err);
        res.send("Error loading edit page");
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        const updateData = {
            name: req.body.name,
            actors: req.body.actors,
            directors: req.body.directors,
            languages: req.body.languages,
            desc: req.body.desc,
            category: req.body.category,
            rating: req.body.rating,
            year: req.body.year
        };

        if (req.file) {
            if (movie.image) {
                const oldPath = path.join(__dirname, "..", movie.image);
                if (fs.existsSync(oldPath)) {
                    fs.unlinkSync(oldPath);
                }
            }
            updateData.image = "/uploads/" + req.file.filename;
        }

        await Movie.findByIdAndUpdate(req.params.id, updateData);

        res.redirect("/view");
    } catch (err) {
        console.log(err);
        res.send("Error updating movie");
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (movie && movie.image) {
            const imagePath = path.join(__dirname, "..", movie.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await Movie.findByIdAndDelete(req.params.id);

        res.redirect("/view");
    } catch (err) {
        console.log(err);
        res.send("Error deleting movie");
    }
};