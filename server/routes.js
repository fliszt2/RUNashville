const router = require('express').Router();
const controller = require('./controllers');

router.post('/login', controller.login.post);
router.post('/signup', controller.signup.post);

module.exports = router;
