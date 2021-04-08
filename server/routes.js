const router = require('express').Router();
const controller = require('./controllers');

router.post('/login', controller.login.post);
router.post('/signup', controller.signup.post);
router.get('/user/:id/type', controller.user.getType);
router.get('/user/:id', controller.user.getDetails);
router.get('/friends/:uid', controller.user.getFriends);
router.get('/users', controller.user.getAll);
// router.get('/post', controller.)

module.exports = router;
