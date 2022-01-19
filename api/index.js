const { Router } = require('express');
const checkToken = require('../middleware/auth');

const router = Router();

router.use('/login', require('./login'));

// router.use('/songs', require('./song'));
// router.use('/albums', require('./album'));
router.use('/artists', checkToken, require('./artists'));

module.exports = router;
