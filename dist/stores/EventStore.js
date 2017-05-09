"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const moment = require("moment");
const common_1 = require("../common");
const AuthStore_1 = require("./AuthStore");
class EventStore {
    constructor() {
        this.result = new common_1.Result();
    }
    CreateEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initializeResultObject();
            if (AuthStore_1.authStore.currentUser != null) {
                yield this.validateEvent(event);
                event.AuditInfo = new common_1.Audit();
                event.AuditInfo.Created = moment().toISOString();
                AuthStore_1.authStore.db.ref('events/').set(JSON.stringify(event));
            }
            else {
                this.result.Error = true;
                this.result.Messages.push('This operation is not permitted to anonymous users.');
            }
        });
    }
    //Refactor into a utility class
    getPushID() {
    }
    validateEvent(event) {
        if (moment(event.EventDate) <= moment()) {
            this.result.Error = true;
            this.result.Messages.push('The event must occur in the future.');
        }
        if (event.EventDescription.length === 0) {
            this.result.Error = true;
            this.result.Messages.push();
        }
    }
    initializeResultObject() {
        this.result = new common_1.Result();
        this.result.Messages = new Array();
    }
}
__decorate([
    mobx_1.observable
], EventStore.prototype, "result", void 0);
__decorate([
    mobx_1.action
], EventStore.prototype, "CreateEvent", null);
exports.EventStore = EventStore;
let eventStore = new EventStore();
exports.eventStore = eventStore;
//# sourceMappingURL=EventStore.js.map