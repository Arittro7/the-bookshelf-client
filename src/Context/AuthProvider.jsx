
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../FIrebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const Logout = () =>{
    setLoading(true)
    return signOut(auth)
  }

  const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  const updateUserProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user =>{
      setCurrentUser(user)
      console.log('current user', user)
      setLoading(false);
      if(user){
        const {email, displayName, photoURL} = user;
        const userData ={
          email, userName: displayName, photo: photoURL
        }
        console.log(userData);
      }
    })
    return() =>{
      return unsubscribe();
    }
  },[])


  const authInfo = {
    currentUser,
    loading,
    createUser,
    signIn,
    Logout,
    updateUserProfile,
    signInWithGoogle
  }

  return (
    <AuthContext.Provider value= {authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;