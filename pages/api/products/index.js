import { createRouter } from 'next-connect';
import dbConnect from '@/backend/config/dbConnect';
import { newProduct } from '@/backend/controllers/productControllers';


const router = createRouter();

dbConnect();

handler.post(newProduct);

export default router.handler;