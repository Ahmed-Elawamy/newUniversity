import { useState } from "react";
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Link as MuiLink,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "../imgs/logo.png";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login:", { email, password });
        // navigate("/home");
    };

    return (
        <Box
            sx={{
                bgcolor: "#1A3453",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: 2, sm: 3 },
                paddingTop: { xs: "100px", md: "50px" },
                paddingBottom: { xs: "100px", md: "50px" },
            }}
        >
            <Container maxWidth="sm">
                <Card
                    sx={{
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "20px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <CardContent sx={{ padding: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                mb: 4,
                            }}
                        >
                            <img
                                src={logo}
                                alt="NATU Logo"
                                style={{
                                    height: "60px",
                                    marginBottom: "16px",
                                }}
                            />
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                    mb: 1,
                                }}
                            >
                                Welcome Back
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "rgba(255, 255, 255, 0.7)",
                                }}
                            >
                                Sign in to your account
                            </Typography>
                        </Box>

                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                    mb: 3,
                                    "& .MuiOutlinedInput-root": {
                                        bgcolor: "rgba(255, 255, 255, 0.9)",
                                        "&:hover": {
                                            bgcolor: "white",
                                        },
                                    },
                                }}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{
                                    mb: 3,
                                    "& .MuiOutlinedInput-root": {
                                        bgcolor: "rgba(255, 255, 255, 0.9)",
                                        "&:hover": {
                                            bgcolor: "white",
                                        },
                                    },
                                }}
                                required
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: "#6d6fde",
                                    color: "white",
                                    padding: "12px",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    borderRadius: "10px",
                                    mb: 2,
                                    "&:hover": {
                                        bgcolor: "#5a5ccc",
                                    },
                                }}
                            >
                                Sign In
                            </Button>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.7)",
                                    }}
                                >
                                    Don't have an account?
                                </Typography>
                                <MuiLink
                                    component={Link}
                                    to="/signup"
                                    sx={{
                                        color: "#FFC107",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    Sign Up
                                </MuiLink>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}

export default Login;
