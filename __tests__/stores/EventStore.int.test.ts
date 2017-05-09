import { EventStore } from '../../src/stores';
import { Event } from '../../src/common';

var event = new Event();

describe.skip('Create', () =>{ 
    it('creates an event in the database', () => {
        var es = new EventStore();
        
        expect(event.AuditInfo.Created).toBe('Tom');

    });

    it('updates and event in the database', () => {});

    it('deletes an event from the database', () => {});

    it('retrieves a single event from the database', () => {});

    it('finds events in the database', () => {});

    it('should not delete an event due to permissions', () => {});


})
