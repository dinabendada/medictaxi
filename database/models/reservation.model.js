const mongoose = require('mongoose');
const schema = mongoose.Schema;

const reservationSchema = schema({
    nom:{type: String, required:true},
    prenom:{type:String, required:true},
    adress:{type:String, required:true},
    arrivage:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, require:true}
})

const Reservation = mongoose.model('reservation', reservationSchema);
module.exports = Reservation;