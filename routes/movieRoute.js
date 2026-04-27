const express = require('express');
const router = express.Router();

const movieController = require('../controller/movieController');

router.get('/', movieController.indexpage);
router.get('/add', movieController.addPage);
router.get('/view', movieController.viewPage);

router.get('/movies/:id', movieController.viewSingle);

router.get('/edit/:id', movieController.editPage);

router.post('/movies/add', movieController.upload, movieController.addMovie);
router.get('/delete/:id', movieController.deleteMovie);
router.post('/update/:id', movieController.upload, movieController.updateMovie);

module.exports = router;