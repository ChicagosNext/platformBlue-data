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
        this.app = null;
        this.currentUser = null;
        this.init();
    }

    @observable
    public app: fb.app.App;

    @observable
    public database: fb.database.Database;

    @observable
    public currentUser: fb.User;

    async init() {
        
        this.app = await fb.initializeApp(firebaseConfig);
        this.database = await fb.database();

        fb.auth().onAuthStateChanged( (user: fb.User) => {
            if(user) {
                console.log('user is anon '+ user.isAnonymous);
                this.currentUser = user;
            }
            else {
                console.log('no user');
                // this.currentUser = user;
                // console.log(this.currentUser.displayName);
            };
        });
    };

    @action
    async signInAnon() {
        await fb.auth().signInAnonymously().catch((err) =>{
            console.log('err');
            console.log(err.message);
        });
    }
}

let authStore = new AuthStore();
export { authStore };

