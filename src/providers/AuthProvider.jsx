import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config';

export const  AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    
    
   const createUser = (email,password)=>{
    setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
   }
   
   const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   const provider = new GoogleAuthProvider
  const googleSignIn = ()=>{
    signInWithPopup(auth,provider)
  }

   const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
   }
  useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth,(currnetUser)=>{

        setUser(currnetUser)
        setLoading(false)
    })

    return()=>{
        unSubscribe()
    }
  },[])
   
  const authInfo = {user,loading,createUser,signIn,logOut,googleSignIn}

    return (
       <AuthContext.Provider value={authInfo}>
               {children}
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;