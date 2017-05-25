import { observable, action } from 'mobx';
import * as fb from 'firebase';
import * as moment from 'moment';

// import { FbApp } from '../config';
import { authStore } from './AuthStore';
import { PbEvent } from '../common';


export class EventStore {
    constructor() {
        this.init();
    }    
    
    private eventRef: fb.database.Reference;

    @observable
    public IsValid: boolean;
    @observable
    public OperationStatus: string;

    public CreateEvent(event: PbEvent) {
        console.log('create started');

        // authStore.currentUser.isAnonymous
        if(authStore.currentUser === null) {
            console.log('Must be logged on');
        }
        else
        {
            console.log('blah');
            if(this.validate()){
                if(event.ID) {
                    event.ID === null;
                }

                
                
                
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
    }
}

let eventStore = new EventStore();
export { eventStore };

// authStore.signInAnon().then(() => {eventStore.CreateEvent()});

