import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBi_wjENTX0Saj4Zyb2zlC52KLZZ0VqGcM",
  authDomain: "blogapp-64a73.firebaseapp.com",
  projectId: "blogapp-64a73",
  storageBucket: "blogapp-64a73.appspot.com",
  messagingSenderId: "744972813689",
  appId: "1:744972813689:web:eaa9caf3e30449f0dedba8"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;