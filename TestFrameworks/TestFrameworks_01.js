function createReservation(passenger,flight,saver) {
    var reservation =  {
        passengerInfomation:passenger,
        flightInfomation:flight
    };

    saver.saveReservation(reservation);
    return reservation;
}

function ReservationSaver() {
    this.saveReservation = function (reservation) {
        //Complex code that interacts with a web service
        //to save the reservation
    }

}
