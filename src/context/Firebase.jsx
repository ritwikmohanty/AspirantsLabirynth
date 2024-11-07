import { createContext ,useContext } from "react";
import {initializeApp} from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyAp8xZC-I41j_LbIN5Ell9n5HF61YA6PfY",
    authDomain: "hack-tuah.firebaseapp.com",
    projectId: "hack-tuah",
    storageBucket: "hack-tuah.appspot.com",
    messagingSenderId: "40757691680",
    appId: "1:40757691680:web:1e9461ecdf04c1aadec345"
  };

export const useFirebase= () =>useContext(FirebaseContext)

const firebaseapp =initializeApp(firebaseConfig);
const firebaseaAuth=getAuth(firebaseapp);
const googleprovider=new GoogleAuthProvider();

export const FirebaseProvider = (props) =>{
    const signupUserwithEmailandPassword =(email,password)=>createUserWithEmailAndPassword(firebaseaAuth,email,password);
    const singinUserWithEmailAndPass = (email, password) =>
        signupUserwithEmailandPassword(firebaseaAuthirebaseAuth, email, password);
    const signinWithGoogle=()=>signInWithPopup(firebaseaAuth,googleprovider)
    return(
        <FirebaseContext.Provider value ={{
            singinUserWithEmailAndPass,
            signupUserwithEmailandPassword,
            signinWithGoogle
            }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}