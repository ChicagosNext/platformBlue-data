import { Event} from './Event';

/**
 * Used to return a standard message from all database operations.
 * 
 * @export
 * @class Result
 */
export class Result {
    Error: boolean;
    Messages: Array<string>;
}

export class EventManagementResult extends Result {

    Data: Event;

}