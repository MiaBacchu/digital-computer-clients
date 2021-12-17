import initializeAthentication from '../../Firebase/initialize';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeAthentication()
const useFirebase = () => {
    const [user,setUser]=useState([])
    const[error,setError]=useState('')
    const [admin,setAdmin]=useState()
    console.log(admin)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();

    const emailRegister=(email, password,name)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=> {
            setUser(result.user)
            saveUser(name,email,'POST')
            updateProfile(auth.currentUser, {
                displayName: name
              })
              .then(window.location.reload())
          })
          .catch(error=> {
            setError(error.message)
          });
    }

    const emailLogin=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=> {
            setUser(result.user)
          })
          .catch(error=> {
            setError(error.message)
          })
    }

    const signInWithGoogle=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
            saveUser(user.displayName,user.email,'PUT')
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const signInWithGithub=()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const signInWithFacebook=()=>{
        signInWithPopup(auth, facebookProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const Logout=()=>{
        signOut(auth)
        .then(() => {
           setUser({}) 
          })
          .catch((error) => {
            setError(error.message)
          });
    }
        useEffect(()=>{
            onAuthStateChanged(auth,user => {
                if (user) {
                  setUser(user)
                }
              })
    },[auth])

    const saveUser=(displayName,email,method)=>{
        const newUser={displayName,email}
        fetch('http://localhost:5000/user',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
        })
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data))
    },[user])
    return (
        {
            user,
            error,
            admin,
            emailRegister,
            emailLogin,
            signInWithGoogle,
            signInWithGithub,
            signInWithFacebook,
            Logout
        }
    );
};

export default useFirebase;