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
      <Box component={'header'} maxWidth='xl'  sx={{ margin: 'auto', padding: '20px' }}>
        <Box component={'nav'} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>             
            <Link component={RouterLink} underline="none" color="inherit" to="/">
              <Typography variant="h4" component="h1">
                Fournier Cédric
              </Typography> 
            </Link>
            <div>
            {user ?
                <div>
                    <Link component={RouterLink} underline="none" fontSize='20px' color="inherit" marginRight="20px" to="/admin">
                        Admin
                    </Link>
                    <Link component={RouterLink} underline="none" fontSize='20px' color="inherit" onClick={logOut} to="/">
                        Sign Out                    
                    </Link>
                </div> 
                :
                <Link component={RouterLink} underline="none" fontSize='20px' color="inherit" to="/Signin">
                  Sign in
                </Link> 
            }
            </div>
        </Box>
      </Box>
    )
  }
  
  export default Header