import { Box, Button, Typography } from "@mui/material"
import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom"
import { UserContext } from "../../context/userContext";
import logohtml from '../../assets/img/logo_html.svg';
import logocss from '../../assets/img/logo_css.svg';
import logojavascript from '../../assets/img/logo_javascript.svg';
import logoreact from '../../assets/img/logo_react.svg';
import logofirebase from '../../assets/img/logo_firebase.svg';
import logomongodb from '../../assets/img/logo_mangodb.svg';

function Projet() {
    const { id } = useParams()
    const {list} = useContext(UserContext);
    const listitem = list.find((item) => item.id === id);   

    if (!listitem) {
        return <Navigate to="/Error" />;
      } 
    return  (
        <Box component={'main'} 
            display={'flex'} 
            flexDirection={{ xs:'column', lg: 'row' }}
            justifyContent={'space-evenly'} 
            alignItems={'center'} 
            minHeight={'calc(100vh - 200px)'}
            padding={'20px 0'}
            sx={{ background: '#F9F1F0' }}
            >
            <Box width={{ xs: '300px', sm: '500px', md: '600px' }} sx={{ background: 'white', borderRadius: '20px', boxShadow: 3, p: '20px' }} >
                <Typography component={'h2'} 
                    fontSize={{ xs: '35px', md: '50px'}} 
                    textAlign={'center'} 
                    margin={'40px 0'}
                >
                   {listitem.info.title}
                </Typography>
                <Typography component={'h3'} 
                    fontSize={{ xs: '25px', md: '30px'}} 
                    textAlign={'center'} 
                    margin={'40px 0 30px'}
                >
                    Description
                </Typography>
                <Typography component={'p'} 
                    margin={'30px 0 50px'} 
                    textAlign={'center'}
                >
                    {listitem.info.description}
                </Typography>
                <Typography component={'h3'} 
                    fontSize={{ xs: '25px', md: '30px'}} 
                    textAlign={'center'} 
                    margin={'50px 0 30px'}
                >
                    Technologie utilisée
                </Typography>
                <Box 
                    display={'flex'} 
                    justifyContent={'space-evenly'} 
                    margin={'30px 0'}
                >
                    { listitem.info.lhtml === true ? 
                        <Box component={'img'} width={{ xs: '25px', sm: '50px' }} src={logohtml} alt="logo de html"/>
                    :
                    null
                    } 
                    { listitem.info.lcss === true ?
                        <Box component={'img'} width={{ xs: '25px', sm: '50px' }}  src={logocss} alt="logo de html"/>
                    :
                    null
                    } 
                    { listitem.info.ljavascript === true ? 
                        <Box component={'img'} width={{ xs: '25px', sm: '50px' }} src={logojavascript} alt="logo de html"/>
                    :
                    null
                    } 
                    { listitem.info.lreact === true ? 
                        <Box component={'img'} width={{ xs: '25px', sm: '50px' }} src={logoreact} alt="logo de html"/>
                    :
                    null
                    } 
                    { listitem.info.lfirebase === true ? 
                        <Box component={'img'} width={{ xs: '25px', sm: '50px' }} src={logofirebase} alt="logo de html"/>
                    :
                    null
                    } 
                    { listitem.info.lmongodb === true ? 
                        <Box component={'img'} width={{ xs: '25px', sm: '50px' }} src={logomongodb} alt="logo de html"/>
                    :
                    null
                    } 
                </Box>
            </Box>
            <Box margin={'60px 0 0'}>
                <Box component={'img'} 
                    width={{ xs: '300px', sm: '500px', md: '600px' }} 
                    border={'3px solid'} 
                    src={listitem.info.urlimg} 
                    alt={listitem.info.title} 
                />
                <Box
                    display={'flex'}  
                    gap={'0.5rem'}
                    flexDirection={{ xs:'column', lg: 'row' }}
                    alignItems={'center'} 
                    fontSize={'1.5rem'}
                    margin={'30px 0'}
                >
                    <Button variant="contained" 
                        sx={{ width: 300, borderRadius: '16px', background: '#AE7460', color: 'white' }} 
                        href={listitem.info.url} target="_blank"
                    >
                        Live Demo
                    </Button>
                    <Button variant="contained" 
                        sx={{ width: 300, borderRadius: '16px', background: '#AE7460', color: 'white' }} 
                        href={listitem.info.urlgit} target="_blank"
                        >
                        Repo Github
                    </Button>
                </Box>
            </Box>         
        </Box>
    )
  }
  
export default Projet