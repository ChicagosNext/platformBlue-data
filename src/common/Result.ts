/**
 * Used to return a standard message from all database operations.
 * 
 * @export
 * @class Result
 */
export class Result {
    Error: boolean;
    Messages: Array<string>;
    Data: Object;
}