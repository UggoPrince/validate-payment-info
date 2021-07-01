import { Router } from 'express';
import validator from '../validation/paymentInfoMiddleware';
import validCard from '../controllers';

const router = Router();

router.post('/payment', validator.validate, validCard.valid);

export default router;
