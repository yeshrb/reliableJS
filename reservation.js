/**
 * Created by lijunjie on 16/12/23.
 */
"use strict";
export function createReservation(passenger, flight, saver) {
    var reservation = {
        passengerInfo: passenger,
        flightInfo: flight
    };
    saver.saveReservation(reservation);
    return reservation;
}
export function ReservationSaver() {
    this.saveReservation = function (reservation) {

    }
}


