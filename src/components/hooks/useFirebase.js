import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../../fireBase/initialize";


initializeAuthentication()
const useFirebase = () => {
    const [user,setUser]=useState([])
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isLogin,setIslogin]=useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
        })
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        }
    });
    const logout=()=>{
        signOut(auth)
    .then(() => {
        setUser({})
      })
    }
    const handleRegister = e => {
        e.preventDefault();
        isLogin ? processLogin() : processRegister()
    }
    const handleEmail=e=>{
        setEmail(e.target.value)
    }
    const handlePassword=e=>{
        setPassword(e.target.value)
    }
    const processRegister=()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            console.log(result.user)
          })
    }
    const processLogin=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            console.log(result.user)
          })
    }
    const toggleLogin=(e)=>{
        setIslogin(e.target.checked)
    }
    return {
        isLogin,
        toggleLogin,
        handlePassword,
        handleEmail,
        handleRegister,
        logout,
        user,
        googleSignIn
    };
};

export default useFirebase;