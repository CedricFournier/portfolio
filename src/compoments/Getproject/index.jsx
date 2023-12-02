import { useContext } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { UserContext } from "../../context/userContext";
import { db } from "../../firebase.config";
import { Button, Grid } from "@mui/material";

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
      <Grid container sx={{columnGap: 10}}>
        {list.map((item, index) => (
            <Grid key={index} xs={3}>
              <p>{item.data.title}</p>
              <img className="imgproject" src={item.data.urlimg} alt={item.data.title}/>
              <p>{item.data.url}</p>
              <p>{item.data.urlgit}</p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={deletedata}
                sx={{ mt: 3, mb: 2 }}
            >
                Suprimer
            </Button>
            </Grid>
            ))}
      </Grid>
    )
  }
  
  export default Getproject