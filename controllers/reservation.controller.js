const {createReservation} = require('../queries/reservation.queries');
//const { create } = require('../database/models/tchat.model');

exports.reservationNew = (req,res, next)=>{
    res.render('contact/trajet')
}

exports.reservationCreate = async (req, res, next)=>{
    try{
        const body = req.body;
        const reservation =  await createReservation(body);
    res.redirect('/tchats'); 
    }catch(e){
        res.render('contact/trajet', { errors: [ e.message ], isAuthenticated: req.isAuthenticated(), currentUser: req.user });
    }
}
