import { observable, action } from 'mobx';
import * as fb from 'firebase';
import * as moment from 'moment';

import { firebaseConfig } from '../config';
import { Event, Result, Audit } from '../common';
import { authStore } from './AuthStore';


export class EventStore {
    constructor() {
       
    }

    @observable
    public result: Result = new Result();


    @action
    public async CreateEvent(event: Event) {

        await this.initializeResultObject();       

        if(authStore.currentUser != null) {

            await this.validateEvent(event);



            event.AuditInfo = new Audit();
            event.AuditInfo.Created = moment().toISOString();
            authStore.db.ref('events/').set(JSON.stringify(event));
        }
        else
        {
            this.result.Error = true;
            this.result.Messages.push('This operation is not permitted to anonymous users.')   
        }
    }

    //Refactor into a utility class
    private getPushID() {

    }

    private validateEvent(event: Event) {
        if(moment(event.EventDate) <= moment())
        {
            this.result.Error = true;
            this.result.Messages.push('The event must occur in the future.');

        }

        if(event.EventDescription.length === 0){
            this.result.Error = true;
            this.result.Messages.push()
        }
    }

    private initializeResultObject() {
        this.result = new Result();
        this.result.Messages = new Array<string>();
    }


}

let eventStore = new EventStore();
export { eventStore };



