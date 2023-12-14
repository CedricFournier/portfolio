import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

function ItemProject(props) {
    return (
        <Grid component={'article'} item xs={12} md={props.md} 
            sx={{ p: 5, boxShadow: 3, background: '#F9F1F0' }} >
            <Link component={RouterLink} to={`/projet/${props.id}`} underline="none" color="inherit"
                sx={{ display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}
            >
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
                    {props.title}
                </Typography>
                <Box component={'img'} sx={{ width: '100%', border: '3px solid' }} src={props.src} alt={props.alt}/>
            </Link>
            <Box
                display={'flex'} 
                flexDirection={'column'} 
                gap={'0.5rem'}
                alignItems={'center'} 
                fontSize={'1.5rem'}
                marginTop={'20px'} 
            >
                <Button variant="contained" sx={{ width: 300, borderRadius: '16px', background: '#AE7460', color: 'white' }} href={props.url} target="_blank">
                    Live Demo
                </Button>
                <Button variant="contained" sx={{ width: 300, borderRadius: '16px', background: '#AE7460', color: 'white' }} href={props.urlgit} target="_blank">
                    Repo Github
                </Button>
            </Box>
        </Grid>   
    )
  }
  
  export default ItemProject