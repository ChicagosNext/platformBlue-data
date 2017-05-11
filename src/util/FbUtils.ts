import * as fb from 'firebase';

export function getPushID(dbRef: fb.database.Database):fb.database.ThenableReference {

    let pushID: fb.database.ThenableReference = dbRef.ref().push();

    return pushID;

}