
import { LockOutlined } from "@mui/icons-material";
import { Alert, Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function Signin() {
    const form = useRef();
    const { signIn } = useContext(UserContext);
    const navigate = useNavigate();
    const [validation, setValidation] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            await signIn(
              form.current[0].value,
              form.current[2].value
            );
            setValidation(false)
            navigate("/admin");
          } catch {
            setValidation(true)
          }
    }

    return (
        <Container component="main" maxWidth="xs" sx={{ height: 'calc(100vh - 245px)' }}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h2" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" ref={form} onSubmit={handleForm} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {validation ? 
                        <Alert severity="error">Erreur dans l’identifiant ou le mot de passe</Alert>
                        : 
                        null
                    }
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    )
  }
  
  export default Signin