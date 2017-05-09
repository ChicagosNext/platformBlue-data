import { Event, Result } from '../common';
export declare class EventStore {
    constructor();
    result: Result;
    CreateEvent(event: Event): Promise<void>;
    private getPushID();
    private validateEvent(event);
    private initializeResultObject();
}
declare let eventStore: EventStore;
export { eventStore };
