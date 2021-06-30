const Router = require('express').Router;
const useControllers = require('../controllers/usecontrollers');
/* const app = express(); */

const router = Router();

router.post('/phone', useControllers.registerPhone);

router.get('/', useControllers.getAllphone);

router.patch('/phone/:id', useControllers.updatePhone);

router.delete('/phone/:id', useControllers.deletePhone);

module.exports = router;
