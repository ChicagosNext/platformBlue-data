import { Audit } from './Audit';

/**
 * An event object records is used to store all information about events.
 * 
 * @export
 * @class Event
 */
export class Event {
    ID: string;
    AuditInfo: Audit;
    EventCoordinators: Array<object>;
    EventName: string;
    EventDescription: string;
    EventDate: Date;
    Public: boolean;
    Photos: Array<object>;
    Location: string;
    Teams: Array<object>;
    

}