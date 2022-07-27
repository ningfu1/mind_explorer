import { Router } from 'express';
import controllers from './http.controllers';
import middleware from './express.middleware';

const router = Router();
/* routes */
router.get('/healthcheck', (req, res) => res.send('ok 200'));
router.post('/quiz/:step', middleware.validate_sid, controllers.handle);

export default router;
