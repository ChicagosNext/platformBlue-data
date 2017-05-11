import { Audit } from './Audit';
import * as moment from 'moment';

/**
 * An event object records is used to store all information about events.
 * 
 * @export
 * @class Event
 */
export class Event {
    constructor(
      
        public EventName: string,
        public EventDescription: string,
        public EventDate: string,
        public Location: string,
        public Public: boolean,
        public AuditInfo?: Audit,
        public ID?: string,
        public EventCoordinators?: Array<object>,
        public Photos?: Array<object>,
        public Teams?: Array<object>) {

            if(this.ID) {
                console.log('ID supplied');
            }
            else
            {
                this.ID = 'I am an ID';
                console.log('ID not supplied');
            }


            this.AuditInfo = new Audit();
            this.EventCoordinators = new Array<object>();
            this.Photos = new Array<object>();
            this.Teams = new Array<object>();
            
    }    
}

var a = new Event('Hi', 'I am an event', moment().toISOString(), 'Chicago', true)
console.log(a.ID.length);