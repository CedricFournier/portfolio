import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import {auth, db} from "../firebase.config.js"
import { collection, getDocs } from "firebase/firestore";

export const UserContext = createContext()

export function UserContextProvider(props) {
  const [user, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);
  const [list, setList] = useState([]);
  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

useEffect(() => {
  const loguser = onAuthStateChanged(auth, (user) => {
    setCurrentUser(user)
    setLoadingData(false)
  })
  return loguser;
})

const data = async () => {
  try {
      let item = [];
      const querySnapshot = await getDocs(collection(db, "projets"));
      querySnapshot.forEach((doc) => {
      const id = doc.id
      const data = doc.data()
      const object = {id: id, data}
      item.push(object);
      setList(item)
      });
  } catch (err) {
      console.log(err);
  };   
}

useEffect(() => {
  data();
}, [])

  return (
    <UserContext.Provider value={{user, list, signIn, data}}>
      {!loadingData && props.children}
    </UserContext.Provider>
  )
}