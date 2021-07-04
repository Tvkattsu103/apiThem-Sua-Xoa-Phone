const Router = require('express').Router;
const phoneModel = require('../models/phone');
const useRoutes = require('./useRoutes');
const path = require('path');
const router = Router();

//??
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

router.use('/phone', useRouters);

module.exports = router;
