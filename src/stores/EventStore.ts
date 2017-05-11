import { observable, action } from 'mobx';
import * as fb from 'firebase';
import * as moment from 'moment';

import { firebaseConfig } from '../config';
import { Event, EventManagementResult, Audit } from '../common';
import { authStore } from './AuthStore';

export class EventStore {
    constructor() {
       
    }

    // @observable
    // public result: Result = new Result();


    @action
    public CreateEvent(event: Event): EventManagementResult {

        let result = this.validateEvent(event);

        if (result.Error == true) {
            return result;                
        }
        
        if(authStore.currentUser != null) {

            event.AuditInfo = new Audit();
            event.AuditInfo.Created = moment().toISOString();
            authStore.db.ref('events/').set(JSON.stringify(event));
            


            return result;
        }
        else
        {
            result.Error = true;
            result.Messages.push('This operation is not allowed by anonymous users.'); 
            return result;
        }
    }

    //Refactor into a utility class
    private getPushID() {
        let pushID = authStore.db.ref().push();


    }

    private validateEvent(event: Event): EventManagementResult {

        let result = new EventManagementResult();
        result.Error = false;
        result.Messages = new Array<string>();



        if(moment(event.EventDate) <= moment())
        {
            result.Error = true;
            result.Messages.push('The event must occur in the future.');
        }

        if(event.EventName.length === 0){
            result.Error = true;
            result.Messages.push('The event must have a name.')
        }

        if(event.EventDescription.length === 0){
            result.Error = true;
            result.Messages.push('The event must have a description.')
        }

        return result;
    }

    


}

let eventStore = new EventStore();
export { eventStore };



