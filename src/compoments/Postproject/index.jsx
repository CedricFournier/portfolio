import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRef, useState } from "react";
import Button, { BUTTON_TYPES } from '../../composants/Button';
import Field, { FIELD_TYPES } from '../../composants/Field';
import { db, storage } from "../../firebase.config";

function Postproject() {
  const form = useRef();
  const [imageUpload, setImageUpload] = useState(null);

  const handleForm = async (e) => {
    e.preventDefault();
      const title = form.current[0].value;
      const nameimg = "projet" + title
      const storageRef = ref(storage, nameimg);
      uploadBytes(storageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
        .then((urlimg) => {
          sendinfo(title, urlimg)
        });
      });
  };

  async function sendinfo (title, urlimg) {
    try{
      const docRef = await addDoc(collection(db, "projets"), {
        title: title,
        url: form.current[1].value,
        urlimg: urlimg
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    };
  }

    return (
      <div className="div-postproject">
        <form ref={form} onSubmit={e => handleForm(e)}>
          <Field 
          type={FIELD_TYPES.INPUT_TEXT} 
          content="Titre : " 
          id="titre" 
          />
          <Field 
          type={FIELD_TYPES.INPUT_TEXT} 
          content="Url : " 
          id="url" 
          />
          <Field 
          type={FIELD_TYPES.INPUT_FILE} 
          content="Image : " 
          id="image"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
          />
          {imageUpload && (
            <img className="preview" src={URL.createObjectURL(imageUpload)}  alt="Preview" />
          )}
          <Button type={BUTTON_TYPES.SUBMIT} class="button sign-in-button" content="Ajouter"/>
        </form>
      </div>
    )
  }
  
  export default Postproject