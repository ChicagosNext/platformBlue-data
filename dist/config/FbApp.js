"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fb = require("firebase");
exports.firebaseConfig = {
    apiKey: "AIzaSyA8zAnWnG0o57yfa--MmvX5t_wDa2tSl1Q",
    authDomain: "platformblue-935ca.firebaseapp.com",
    databaseURL: "https://platformblue-935ca.firebaseio.com",
    projectId: "platformblue-935ca",
    storageBucket: "platformblue-935ca.appspot.com",
    messagingSenderId: "928927788821"
};
let FbApp = fb.initializeApp(exports.firebaseConfig);
exports.FbApp = FbApp;
//# sourceMappingURL=FbApp.js.map