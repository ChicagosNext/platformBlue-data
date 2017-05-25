export abstract class PbBase {
    constructor() {
       
    }
    abstract readonly ID?: string;
    abstract readonly FirebasePath: string;
    public CreatedBy?: string;
    public DateCreated?: string;
    public ModifiedBy?: string;
    public DateModified?: string;
}