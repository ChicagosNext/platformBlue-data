import { PbBase } from './PbBase';

export class PbEvent extends PbBase {
    constructor(public readonly ID?: string) {
        super();
        this.FirebasePath = 'Events/'

        if(ID) {
            this.ID = ID;
        }
    }

    public readonly FirebasePath: string;
    public Name: string;
    public Description: string;
    public Location: string;
    public IsPublic: boolean;
    public IsActive: Boolean;

    public RegisteredProfiles?: Array<object>;
    public EventCoordinators?: Array<object>;
    public Photos?: Array<object>;
    public Teams?: Array<object>;

    

}





