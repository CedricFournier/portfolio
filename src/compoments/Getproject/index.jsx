import { useContext } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { UserContext } from "../../context/userContext";
import { db } from "../../firebase.config";
import { Button, Grid, Link, Stack, Typography } from "@mui/material";

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
          <Grid key={index}item xs={5}>
            <Typography variant="h5" component="h3" my={2}>
              {item.data.title}
            </Typography>
            <img className="imgproject" src={item.data.urlimg} alt={item.data.title}/>
            <Stack spacing={2}>
              <Link 
                href={item.data.url} 
                underline="none"
                color="inherit"
              >
                {item.data.url}
              </Link>
              <Link 
                href={item.data.urlgit} 
                underline="none" 
                color="inherit"
              >
                  {item.data.urlgit}
              </Link>
            </Stack>  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              id={item.id}
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