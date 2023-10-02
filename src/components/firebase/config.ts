//1. import the dependencies
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

//2. Initialize app with the config vars
const firebaseApp = initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_API_CONFIG ?? ""));

export const firebaseAnalytics = getAnalytics();

//3. export it for use
export const getFbAuth = getAuth(firebaseApp);
export default firebaseApp;
