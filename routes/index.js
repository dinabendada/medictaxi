const router = require('express').Router();
const { ensureAuthenticated } = require('../config/guards.config');
const tchats = require('./tchats');
const users = require('./users.routes');
const auth = require('./auth.routes');
const reservation = require('./reservation');


router.use('/tchats', ensureAuthenticated, tchats);
router.use('/users', users);
router.use('/auth', auth);
router.use('/reservation', reservation);


router.get('/', (req, res) => {
  res.redirect('/tchats');
})

module.exports = router;