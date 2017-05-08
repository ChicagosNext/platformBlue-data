import { EventStore } from '../src/stores/';
import { Event } from '../src/data';

var event = new Event();



it('creates an event in the database', () => {
    var es = new EventStore();
    
    expect(event.AuditInfo.Created).toBe('Tom');

});

it('updates and event in the database', () => {});



