import { observable, action } from 'mobx';
import * as fb from 'firebase';
import * as moment from 'moment';

// import { Event, EventManagementResult, Audit } from '../common';
// import { FbApp } from '../config';
import { authStore } from './';



export class EventStore {

    constructor() {
        authStore.signInAnon();
        this.FirebasePath = 'Events/';
    }
   
    public readonly ID: string;
    public readonly FirebasePath: string;
    public EventName: string;
    public EventDescription: string;
    public Location: string;
    public IsPublic: boolean;
    public IsActive: Boolean; 
    public EventCoordinators?: Array<object>;
    public Photos?: Array<object>;
    public Teams?: Array<object>;
    public CreatedBy?: string;
    public Created?: string;
    public ModifiedBy?: string;
    public Modified?: string;

    public CreateEvent() {
        if(authStore.currentUser != null) {

            authStore.currentUser.displayName;

        }
        else
        {
            console.log('Must be logged on');
        }

    }


    private validate() {

    }


}

let eventStore = new EventStore();
export { eventStore };


