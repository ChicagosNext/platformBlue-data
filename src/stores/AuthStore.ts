import { observable, action } from 'mobx';
import * as fb from 'firebase';


var firebaseConfig =  {
    apiKey: "AIzaSyA8zAnWnG0o57yfa--MmvX5t_wDa2tSl1Q",
    authDomain: "platformblue-935ca.firebaseapp.com",
    databaseURL: "https://platformblue-935ca.firebaseio.com",
    projectId: "platformblue-935ca",
    storageBucket: "platformblue-935ca.appspot.com",
    messagingSenderId: "928927788821"
};


export class AuthStore {
    constructor() {
        this.init();
        this.app = null;
        this.currentUser = null;
    }

    @observable
    public app: fb.app.App;

    @observable
    public currentUser: fb.UserInfo;

    init() {
       this.app = fb.initializeApp(firebaseConfig);
       fb.auth().onAuthStateChanged( (user: fb.User) => {
            if(user) {
                console.log(user.isAnonymous + ' user')
                this.currentUser = user;
               
            }
            else {
                console.log('no user');
                // this.currentUser = user;
                // console.log(this.currentUser.displayName);
            };
        })
    };

    @action
    signInAnon() {
        fb.auth().signInAnonymously().then((a) => {

            // console.log(this.currentUser.displayName);
            return a;
            
        }).catch((err) =>{
            console.log('err');
            console.log(err.message);
        });
    }
}

let authStore = new AuthStore();
export { authStore };
