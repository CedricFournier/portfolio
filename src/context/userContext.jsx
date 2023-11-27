import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import {auth} from "../firebase.config.js"

export const UserContext = createContext()

export function UserContextProvider(props) {

  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingData(false)
    })

    return unsubscribe;

  }, [])

  return (
    <UserContext.Provider value={{currentUser, signIn}}>
      {!loadingData && props.children}
    </UserContext.Provider>
  )
}