import { EventStore } from '../../src/stores';
import { Event, Result } from '../../src/common';
import { invalidEvent, validEvent } from '../../__testData__';

let eventStore = new EventStore();

describe('Create an event', () => {

    let valid = eventStore.CreateEvent(validEvent);
    let invalid = eventStore.CreateEvent(invalidEvent);


    it('creates a unique ID', () => {
        expect(validEvent.ID).toBeDefined();
    });

    it('populates audit info', () => {
        
        expect(validEvent.AuditInfo.Created).toBeDefined();
        expect(validEvent.AuditInfo.CreatedBy).toBeDefined();
    });

    it('was successful', () => {
        expect(eventStore.result.Error).toBe(false);
    });

    it('was unsuccessful', () => {

        //this won't work 

        console.log(eventStore.result);
        expect(eventStore.result.Error).toBe(true);

    });
});


describe.skip('Update an event', () => {


});

describe.skip('Returns a single event', () => {

});

describe.skip('Searches for events', () => {

});

describe.skip('Deletes an event', () => {

});






