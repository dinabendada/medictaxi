const router = require('express').Router();
const {reservationNew , reservationCreate}= require('../controllers/reservation.controller');


router.get('/newR', reservationNew);
router.post('/reservation', reservationCreate);
module.exports = router;