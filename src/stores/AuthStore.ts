import { observable, action } from 'mobx';
import * as fb from 'firebase'
import { firebaseConfig } from '../config';
import { Event, Result } from '../common';


export class AuthStore {
    constructor() {
        fb.initializeApp(firebaseConfig);

        fb.auth().onAuthStateChanged( (user: fb.UserInfo) => {
            if(user) {
                this.currentUser = user;
                
            }
            else {
                this.currentUser = user;
            }
        })

        this.GetDbRef();
    }

    @observable
    public db: fb.database.Database;
    @observable
    public currentUser: fb.UserInfo;

    public GetDbRef() {
        this.db = fb.database();
    }

}

let authStore = new AuthStore();
export { authStore };
