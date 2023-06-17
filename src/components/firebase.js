import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
export const firebaseConfig = {
    apiKey: "AIzaSyDStz0BbTU5vXXKRA8qizFaGDQUmhLKyw8",
    authDomain: "portfolio-3456b.firebaseapp.com",
    projectId: "portfolio-3456b",
    storageBucket: "portfolio-3456b.appspot.com",
    messagingSenderId: "1073113150390",
    appId: "1:1073113150390:web:e58aa6a9fdcf0025898717"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;