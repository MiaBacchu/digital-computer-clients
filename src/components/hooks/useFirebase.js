import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../../fireBase/initialize";


initializeAuthentication()
const useFirebase = () => {
    const [user,setUser]=useState([])
    const [error,setError]=useState([])
    const [name,setName]=useState('')
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
        .catch((error) => {
            setError(error.message);
          });
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
      .catch((error) => {
        setError(error.message);
      });
    }
    const handleRegister = e => {
        e.preventDefault();
        isLogin ? processLogin() : processRegister()
        setUserName()
    }
    const setUserName=()=>{
        updateProfile(auth.currentUser, {displayName:name})
        .then(result => {
            console.log(result)
        })
        .catch((error) => {
            setError(error.message);
          });
    }
    const handleName=e=>{
        setName(e.target.value)
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
          .catch((error) => {
            setError(error.message);
          });
    }
    const processLogin=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            console.log(result.user)
          })
          .catch((error) => {
            setError(error.message);
          });
    }
    const toggleLogin=(e)=>{
        setIslogin(e.target.checked)
    }
    return {
        toggleLogin,
        handlePassword,
        handleEmail,
        handleName,
        handleRegister,
        logout,
        isLogin,
        error,
        user,
        googleSignIn
    };
};

export default useFirebase;