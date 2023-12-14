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
               paddingBottom: '50px',
               background: 'white' }}>
        <Typography variant="h3" component="h2" margin={'50px'}>
         Mes projets
        </Typography>
        <Grid container sx={{columnGap: 10, rowGap: 10, mt: 4, justifyContent: 'center' }}>
         {list.map((item, index) => (
            <ItemProject
               key={index}
               id={item.id} 
               title={item.info.title} 
               src={item.info.urlimg} 
               alt={item.info.title}
               url={item.info.url}
               urlgit={item.info.urlgit}
               md={5}
            />
         ))}
         </Grid>
      </Box>
    )
}
  
export default Project