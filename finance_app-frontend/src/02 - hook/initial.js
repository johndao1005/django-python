// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBzigY6SeOnRFN5JJXTwk36WEAsTFrLdvs",
  authDomain: "personal-finance-4ca99.firebaseapp.com",
  projectId: "personal-finance-4ca99",
  storageBucket: "personal-finance-4ca99.appspot.com",
  messagingSenderId: "155045893091",
  appId: "1:155045893091:web:f56c6686076d796ffc06d6",
  measurementId: "G-51454FB1KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { auth, analytics };