"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const fb = require("firebase");
var firebaseConfig = {
    apiKey: "AIzaSyA8zAnWnG0o57yfa--MmvX5t_wDa2tSl1Q",
    authDomain: "platformblue-935ca.firebaseapp.com",
    databaseURL: "https://platformblue-935ca.firebaseio.com",
    projectId: "platformblue-935ca",
    storageBucket: "platformblue-935ca.appspot.com",
    messagingSenderId: "928927788821"
};
class AuthStore {
    constructor() {
        this.init();
        this.app = null;
        this.currentUser = null;
    }
    init() {
        this.app = fb.initializeApp(firebaseConfig);
        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.isAnonymous + ' user');
                this.currentUser = user;
            }
            else {
                console.log('no user');
                // this.currentUser = user;
                // console.log(this.currentUser.displayName);
            }
            ;
        });
    }
    ;
    signInAnon() {
        fb.auth().signInAnonymously().then((a) => {
            // console.log(this.currentUser.displayName);
            return a;
        }).catch((err) => {
            console.log('err');
            console.log(err.message);
        });
    }
}
__decorate([
    mobx_1.observable
], AuthStore.prototype, "app", void 0);
__decorate([
    mobx_1.observable
], AuthStore.prototype, "currentUser", void 0);
__decorate([
    mobx_1.action
], AuthStore.prototype, "signInAnon", null);
exports.AuthStore = AuthStore;
let authStore = new AuthStore();
exports.authStore = authStore;
//# sourceMappingURL=AuthStore.js.map