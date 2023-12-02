import { CloudUpload, Handshake } from "@mui/icons-material";
import { Button, styled, TextField } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRef, useState } from "react";
import { db, storage } from "../../firebase.config";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

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
        url: form.current[2].value,
        urlgit: form.current[4].value,
        urlimg: urlimg
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    };
  }

    return (
      <Grid container spacing={2}>
        <Grid xs={8}>
          <form ref={form} onSubmit={e => handleForm(e)}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="titre"
              label="Titre"
              name="titre"
              autoComplete="titre"
              autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="url"
                label="Url"
                name="url"
                autoComplete="url"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="urlgit"
                label="Url Github"
                name="urlgit"
                autoComplete="urlgit"
                autoFocus
            />
            <Button 
            component="label" 
            variant="contained" 
            startIcon={<CloudUpload />}
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
            sx={{ mt: 3, width: 1 }}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Ajouter
            </Button>
          </form>
        </Grid>
        <Grid xs={4}>
          {imageUpload && (
            <img className="preview" src={URL.createObjectURL(imageUpload)}  alt="Preview" />
          )}
        </Grid>
      </Grid>
    )
  }
  
  export default Postproject