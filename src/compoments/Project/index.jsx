import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import ItemProject from "../../composants/ItemProject";
import { UserContext } from "../../context/userContext";

function Project() {
   const {list} = useContext(UserContext);

    return (
      <Box 
         component={'section'} 
         sx={{ display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center', 
               marginBottom: '50px',
               background: 'white' }}>
        <Typography variant="h3" component="h2" margin={'50px'}>
         Mes projets
        </Typography>
        <Grid container sx={{columnGap: 10, mt: 4, justifyContent: 'center' }}>
         {list.map((item, index) => (
            <Grid key={index} item xs={12} md={5}>
               <ItemProject 
                  title={item.data.title} 
                  src={item.data.urlimg} 
                  alt={item.data.title}
                  url={item.data.url}
                  urlgit={item.data.urlgit}
                  />
            </Grid>
            ))}
         </Grid>
      </Box>
    )
}
  
export default Project