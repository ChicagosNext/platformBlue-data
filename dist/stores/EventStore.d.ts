export declare class EventStore {
    constructor();
    readonly ID: string;
    readonly FirebasePath: string;
    EventName: string;
    EventDescription: string;
    Location: string;
    IsPublic: boolean;
    IsActive: Boolean;
    EventCoordinators?: Array<object>;
    Photos?: Array<object>;
    Teams?: Array<object>;
    CreatedBy?: string;
    Created?: string;
    ModifiedBy?: string;
    Modified?: string;
    CreateEvent(): void;
    private validate();
}
declare let eventStore: EventStore;
export { eventStore };
