import * as fb from 'firebase';
export declare class AuthStore {
    constructor();
    app: fb.app.App;
    currentUser: fb.UserInfo;
    init(): void;
    signInAnon(): void;
}
declare let authStore: AuthStore;
export { authStore };
