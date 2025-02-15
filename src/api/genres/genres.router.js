import Router from 'express';
import * as genresController from './genres.controller.js';

const router = Router();

router.get('/all', genresController.getAll);
router.get('/getByNames', genresController.getByNames);
router.get('/:id', genresController.getById);
router.post('/create', genresController.create);

export default router;
