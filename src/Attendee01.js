/**
 * Created by lijunjie on 16/12/24.
 */
Attendee = function (attendeeId) {
    if (!(this instanceof Attendee)) {
        return new Attendee(attendeeId);
    }

    this.attendeeId = attendeeId;

    this.service = new ConferenceWebSvc();
    this.messenger = new Messenger();
};

Attendee.prototype.reserve = function (session) {
    if (this.service.reserve(this.attendeeId, sessionId)) {
        this.messenger.success('Your seat has been reserved! ' +
            'You may make up to ' + this.service.getRemainningReservations() +
            ' additional reservations.');
    } else {
        this.messenger.failure('SOrry ; your set could not be reserved!');
    }
};
