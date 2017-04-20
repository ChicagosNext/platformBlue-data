import { observable } from 'mobx'


export class SampleStore {

    @observable
    public sampleString: string;


}

let sampleStore = new SampleStore();
export { sampleStore };


