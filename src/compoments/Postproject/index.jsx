import { collection, addDoc } from "firebase/firestore";
import { useRef } from "react";
import Button, { BUTTON_TYPES } from '../../composants/Button';
import Field, { FIELD_TYPES } from '../../composants/Field';
import { db } from "../../firebase.config";

function Postproject() {
  const form = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "projets"), {
        title: form.current[0].value,
        url: form.current[1].value
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    };
};

    return (
      <div className="div-postproject">
        <form ref={form} onSubmit={e => handleForm(e)}>
          <Field 
          type={FIELD_TYPES.INPUT_TEXT} 
          content="Titre : " 
          id="titre" 
          disabled="disabled" 
          />
          <Field 
          type={FIELD_TYPES.INPUT_TEXT} 
          content="Url : " 
          id="url" 
          disabled="disabled" 
          />
          <Button type={BUTTON_TYPES.SUBMIT} class="button sign-in-button" content="Ajouter"/>
        </form>
      </div>
    )
  }
  
  export default Postproject