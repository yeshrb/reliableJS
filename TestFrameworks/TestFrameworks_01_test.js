describe('createReservation(passenger,flight)', function () {

    var testPassenger = null;
    var testFlight = null;
    var testReservation = null;
    var testSaver = null;

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
        testSaver = new ReservationSaver();
        spyOn(testSaver,'saveReservation');

        testReservation = createReservation(testPassenger, testFlight,testSaver);

    });


    it('assigns the provided passenger to the passengerInfo property',
        function () {
            expect(testReservation.passengerInfomation).toBe(testPassenger);

        });

    it('assigns the provided flight to the flightInfo property',
        function () {
            expect(testReservation.flightInfomation).toBe(testFlight);

        });
    it('saves the reservation',function () {
        expect(testSaver.saveReservation).toHaveBeenCalled();

    });
});
