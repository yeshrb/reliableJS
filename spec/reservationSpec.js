/**
 * Created by lijunjie on 16/12/23.
 */
"use strict";
import {createReservation, ReservationSaver} from "../reservation";
describe('createReservation(passenger,flight)', function () {

    var testPassenger = null;
    var testFlight = null;
    var reservation = null;
    var testSaver = null;

    beforeEach(function () {
        testPassenger = {
            firstName: 'Pete',
            lastName: 'Mitchell'
        };

        testFlight = {
            number: '3443',
            carrier: 'AceAir',
            destination: 'Mirmar,ca'

        };


        testSaver = new ReservationSaver();
        spyOn(testSaver, 'saveReservation');

        reservation = createReservation(testPassenger, testFlight, testSaver);
    });

    it('assigns the provided passenger to passengerInfo property', function () {
        expect(reservation.passengerInfo).toBe(testPassenger);
    });

    it('assigns the provided flight to the flightInfo property', function () {
        expect(reservation.flightInfo).toBe(testFlight);
    });

    it('save the reservation', function () {
        expect(testSaver.saveReservation).toHaveBeenCalled();
    });


});


