import * as fb from 'firebase';
export declare class AuthStore {
    constructor();
    db: fb.database.Database;
    currentUser: fb.UserInfo;
    GetDbRef(): void;
}
declare let authStore: AuthStore;
export { authStore };
