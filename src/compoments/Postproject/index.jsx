import { CloudUpload } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, styled, TextField } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
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
  const {data} = useContext(UserContext);
  
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
        urlimg: urlimg,
        description: form.current[6].value,
        lhtml: form.current[9].checked,
        lcss: form.current[10].checked,
        ljavascript: form.current[11].checked,
        lreact: form.current[12].checked,
        lfirebase: form.current[13].checked,
        lmongodb: form.current[14].checked
      });
      setImageUpload(null)
      data()
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    };
  }

    return (
      <Grid container spacing={4}>
        <Grid xs={7}>
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
            <TextField
                margin="normal"
                required
                multiline
                fullWidth
                id="description"
                label="Description"
                name="Description"
                autoComplete="Description"
                autoFocus
            />
              <FormControlLabel control={<Checkbox />} id="htmlc" label="HTML" />
              <FormControlLabel control={<Checkbox />} id="cssc" label="CSS" />
              <FormControlLabel control={<Checkbox />} id="javascriptc" label="Javascript" />
              <FormControlLabel control={<Checkbox />} id="reactc" label="React" />
              <FormControlLabel control={<Checkbox />} id="firebasec" label="Firebase" />
              <FormControlLabel control={<Checkbox />} id="mongodbc" label="Mongodb" />
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
        <Grid xs={5}>
          {imageUpload && (
            <img className="preview" src={URL.createObjectURL(imageUpload)}  alt="Preview" />
          )}
        </Grid>
      </Grid>
    )
  }
  
  export default Postproject