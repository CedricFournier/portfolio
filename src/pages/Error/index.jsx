import { Box, Link, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';

function Error() {
    return  (
        <Box component={'main'} display={'flex'} flexDirection={'column'} alignItems={'center'} margin={'3vh 0'}>
            <Typography component="h2" fontSize={{ xs: "96px", md: "250px" }} fontWeight={'700'}>
                404
            </Typography>
            <Typography component="h3" fontSize={{ xs: "18px", md: "30px" }} margin={'0 0 10vh'}>
                Oups! La page que vous demandez n'existe pas.
            </Typography>
            <Link component={RouterLink} to="/" fontSize={{ xs: "14px", md: "18px" }}>
                Retourner sur la page d’accueil                   
            </Link>
        </Box>
    )
  }
  
export default Error