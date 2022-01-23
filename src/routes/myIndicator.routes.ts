import { Router } from "express";
import MyIndicatorController from '../controllers/myIndicatorController';

const router: Router = Router();

router.get('/all-indicators', MyIndicatorController.getAllIndicators);

export default router;