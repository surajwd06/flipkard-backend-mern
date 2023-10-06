import express from 'express';
import { loginUser, userSignup } from '../controller/user-controller.js';
import { getProducts,getProductById } from '../controller/products-controller.js';

const router=express.Router();

router.post('/signup',userSignup);
router.post('/login',loginUser);

router.get('/products',getProducts)
router.get('/product/:id',getProductById)
export default router;