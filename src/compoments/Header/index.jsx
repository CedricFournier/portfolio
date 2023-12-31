import { Box, Link, Typography } from '@mui/material';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { auth } from '../../firebase.config';

function Header() {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const logOut = async () => {
        try {
          await signOut(auth)
          navigate("/")
        } catch {
          alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
        }
    }

    return (
      <Box component={'header'}  sx={{ margin: 'auto', padding: '20px 30px', background: 'white' }}>
        <Box component={'nav'} 
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >             
            <Link component={RouterLink} underline="none" color="inherit" to="/">
              <Typography fontSize={{ xs: "20px", md: "35px" }} component="h1">
                Fournier Cédric
              </Typography> 
            </Link>
            <Box display={'flex'}>
              <Link component={RouterLink} 
                underline="none" 
                color="inherit" 
                to="/" 
                fontSize={{ xs: "15px", md: "20px" }} 
                marginRight={{ xs: "10px", md: "20px" }} 
              >
                Accueil 
              </Link>
            {user ?
                <div>
                    <Link component={RouterLink} 
                      underline="none" 
                      fontSize={{ xs: "15px", md: "20px" }} 
                      color="inherit" 
                      marginRight={{ xs: "10px", md: "20px" }} 
                      to="/admin"
                      >
                        Admin
                    </Link>
                    <Link component={RouterLink} 
                      underline="none" 
                      fontSize={{ xs: "15px", md: "20px" }} 
                      color="inherit" 
                      onClick={logOut} 
                      to="/"
                      >
                        Sign Out                    
                    </Link>
                </div> 
                :
                null
            }
            </Box>
        </Box>
      </Box>
    )
  }
  
  export default Header