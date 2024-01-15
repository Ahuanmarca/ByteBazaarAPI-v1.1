import Router from 'express';

import authRouter from './auth/auth.router.js';
import platformsRouter from './platforms/platforms.router.js';
import productsRouter from './products/products.router.js';
import usersRouter from './users/users.router.js';

const router = Router();

router.use('/auth', authRouter);

router.use('/platforms', platformsRouter);
router.use('/products', productsRouter);
router.use('/users', usersRouter);

export default router;
