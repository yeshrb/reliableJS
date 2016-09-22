describe('createReservation(passenger,flight)', function () {

    var testPassenger = null;
    var testFlight = null;
    var reservation = null;

    beforeEach(function () {
        testPassenger = {
            firstName: 'Peter',
            lastName: 'Mitchell'
        };

        testFlight = {
            number: '3443',
            carrier: 'AceAir',
            destination: 'Miramar,ca'
        };

        reservation = createReservation(testPassenger, testFlight);

    });


    it('assigns the provided passenger to the passengerInfo property',
        function () {
            expect(reservation.passengerInfomation).toBe(testPassenger);

        });

    it('assigns the provided flight to the flightInfo property',
        function () {
            expect(reservation.flightInfomation).toBe(testFlight);

        });
})
