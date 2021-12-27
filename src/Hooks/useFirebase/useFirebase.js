import initializeAthentication from '../../Firebase/initialize';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeAthentication()
const useFirebase = () => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState([])
    const[error,setError]=useState('')
    const [admin,setAdmin]=useState()
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();

    const emailRegister=(email, password,name,navigate,location)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=> {
            setUser(result.user)
            if (location?.state?.from) {
                navigate(location.state.from)
            }
            else{
                navigate('/')
            }
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

    const emailLogin=(email,password,navigate,location)=>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(result=> {
            setUser(result.user)
            if (location?.state?.from) {
                navigate(location.state.from)
            }
            else{
                navigate('/')
            }
          })
          .catch(error=> {
            setError(error.message)
          })
          .finally(setLoading(false))
    }

    const signInWithGoogle=(navigate,location)=>{
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
            if (location?.state?.from) {
                navigate(location.state.from)
            }
            else{
                navigate('/')
            }
            setLoading(false)
            saveUser(user.displayName,user.email,'PUT')
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(setLoading(false))
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
                setLoading(false)
              })
    },[auth,user.email])

    const saveUser=(displayName,email,method)=>{
        const newUser={displayName,email}
        fetch('https://still-ravine-45870.herokuapp.com/user',{
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
        setLoading(true)
        console.log(user.email)
        fetch(`https://still-ravine-45870.herokuapp.com/user/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        setAdmin(data)
        setLoading(false)
    })
    },[user.email])
    return (
        {
            user,
            error,
            admin,
            loading,
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