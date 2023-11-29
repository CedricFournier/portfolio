import { useContext } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { UserContext } from "../../context/userContext";
import Button, { BUTTON_TYPES } from '../../composants/Button';
import { db } from "../../firebase.config";

function Getproject() {
    const {list} = useContext(UserContext);
    
    const deletedata = async (e) => {
      e.preventDefault();
      try {
        await deleteDoc(doc(db, "projets", e.target.id));
      } catch (e) {
        console.error("Error delete document: ", e);
      }
    };

    return (
      <div className="div-getproject">
        {list.map((item, index) => (
            <div key={index} className="" >
              <p>{item.id}</p>
              <p>{item.data.url}</p>
              <p>{item.data.title}</p>
              <Button type={BUTTON_TYPES.DEFAULT} 
              id={item.id} 
              class="button sign-in-button" 
              click={deletedata} 
              content="Suprimer"
              />
            </div>
            ))}
      </div>
    )
  }
  
  export default Getproject