import Router from 'express';
import * as gameTitlesController from './gameTitles.controller.js';

const router = Router();

// CREATE
router.post('/create', gameTitlesController.create);

// READ
router.get('/all', gameTitlesController.getAll); // this line of code must be above the '/:id' route
router.get('/:id', gameTitlesController.getById);
router.get('/productId/:id', gameTitlesController.getByProductId);

// UPDATE
router.patch('/updateGenres/:id', gameTitlesController.updateGenres);

// DELETE
router.delete('/delete/:id', gameTitlesController.destroy);

export default router;
