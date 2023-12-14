import { useContext } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { UserContext } from "../../context/userContext";
import { db } from "../../firebase.config";
import { Button, Grid } from "@mui/material";
import ItemProject from "../../composants/ItemProject";

function Getproject() {
    const {list} = useContext(UserContext);
    const {data} = useContext(UserContext);
    
    const deletedata = async (e) => {
      e.preventDefault();
      try {
        await deleteDoc(doc(db, "projets", e.target.id));
        data();
      } catch (e) {
        console.error("Error delete document: ", e);
      }
    };

    return (
      <Grid container sx={{columnGap: 10, mt: 4, justifyContent: 'center' }}>
        {list.map((item, index) => (
            <Grid key={index} item xs={12} md={5}>
               <ItemProject 
                  title={item.info.title} 
                  src={item.info.urlimg} 
                  alt={item.info.title}
                  url={item.info.url}
                  urlgit={item.info.urlgit}
                  md={12}
              />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              id={item.id}
              onClick={deletedata}
              sx={{ mb: 5 }}
              >
                Suprimer
              </Button>
            </Grid>
         ))}
      </Grid>
    )
  }
  
  export default Getproject