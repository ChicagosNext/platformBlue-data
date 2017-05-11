import * as fb from 'firebase';
import * as fbUtils from '../../src/util';


it('Gets a firebase push ID', ()=> {



    let ref = fb.database().goOffline();
    let id = fbUtils.getPushID(ref);

    console.log(id);




})