import Router from 'express';
import * as productsController from './products.controller.js';

const router = Router();

router.get('/all', productsController.getAll);
router.get('/recommended', productsController.getRecommended);
router.post('/create', productsController.create);
router.get('/:id', productsController.getById); // '/:id' needs to be below '/all' and '/recommended'
router.get('/related/:id', productsController.getRelated);
router.post('/buy', productsController.buy);

export default router;
