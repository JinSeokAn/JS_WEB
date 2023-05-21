import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// 로그인 기능
export function login(){
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    return user
  }).catch((error) => {
    console.log(error);
  });
}
// 로그아웃 기능
export function logout(){
  signOut(auth)
  .then(() => null)
  .catch((error) => {
    // An error happened.
  });
}
// 로그인 정보 상태값 관리 기능
export function onUserStateChange(callback){
onAuthStateChanged(auth, (user) => {
  callback(user)
});
};