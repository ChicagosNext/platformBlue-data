"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Event, EventManagementResult, Audit } from '../common';
// import { FbApp } from '../config';
const _1 = require("./");
var authStore = new _1.AuthStore();
class EventStore {
    constructor() {
        authStore.signInAnon();
        this.FirebasePath = 'Events/';
    }
    CreateEvent() {
        if (authStore.currentUser != null) {
            authStore.currentUser.displayName;
        }
        else {
            console.log('Must be logged on');
        }
    }
    validate() {
    }
}
exports.EventStore = EventStore;
let eventStore = new EventStore();
exports.eventStore = eventStore;
//# sourceMappingURL=EventStore.js.map