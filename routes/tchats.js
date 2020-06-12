const router = require('express').Router();
const Tchat = require('../database/models/tchat.model');
const { tchatList, tchatNew, tchatCreate, tchatDelete, tchatEdit, tchatUpdate } = require('../controllers/tchats.controller');

router.get('/', tchatList);
router.get('/new', tchatNew);
router.post('/', tchatCreate);
router.get('/edit/:tchatId', tchatEdit);
router.post('/update/:tchatId', tchatUpdate);
router.delete('/:tchatId', tchatDelete);

module.exports = router;