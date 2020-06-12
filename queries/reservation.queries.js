const Reservation = require('../database/models/reservation.model');


/*exports.createReservation = async (reservation)=>{
    try{
        const newReservation = new reservation({
            nom: reservation.nom,
            prenom:reservation.prenom,
            adress:reservation.adress,
            arrivage:reservation.arrivage,
            email:reservation.email,
            phone:reservation.phone 
        }) 
        return newReservation.save();
     }catch(e) {
  throw e;
}
}*/
exports.createReservation = (reservation) => {
    const newReservation = new Reservation(reservation);
    return newReservation.save();
  }