import { observable, action } from 'mobx';
import * as fb from 'firebase';
import * as moment from 'moment';

// import { FbApp } from '../config';
import { authStore } from './AuthStore';


export class EventStore {
    constructor() {
        this.init();
        this.FirebasePath = 'Events/';
    }

    public ID: string;
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
    
    private eventRef: fb.database.Reference;

    public CreateEvent() {
        console.log('create started');

        // authStore.currentUser.isAnonymous
        if(authStore.currentUser === null) {
            console.log('Must be logged on');
        }
        else
        {
            console.log('blah');
            if(this.validate()){
                
                this.ID = this.eventRef.push().key;
                this.eventRef.update({e: 'hi there'});
            }
            else {

            }
        }
    }

    private validate(): Boolean {
        return true;
    }

    private async init() {
        console.log(authStore.database.app.name + 'from eventstore init');
        this.eventRef = await authStore.database.ref(this.FirebasePath);
    }
}

let eventStore = new EventStore();
export { eventStore };

authStore.signInAnon().then(() => {eventStore.CreateEvent()});

