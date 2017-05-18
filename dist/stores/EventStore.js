"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Event, EventManagementResult, Audit } from '../common';
// import { FbApp } from '../config';
const _1 = require("./");
class EventStore {
    constructor() {
        _1.authStore.signInAnon();
        this.FirebasePath = 'Events/';
    }
    CreateEvent() {
        if (_1.authStore.currentUser != null) {
            _1.authStore.currentUser.displayName;
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