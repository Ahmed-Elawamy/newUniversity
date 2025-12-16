import React, { useState } from "react";
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

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log("Signup:", formData);
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
                                Create Account
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "rgba(255, 255, 255, 0.7)",
                                }}
                            >
                                Join NATU today
                            </Typography>
                        </Box>

                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
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
                                label="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
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
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
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
                                Sign Up
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
                                    Already have an account?
                                </Typography>
                                <MuiLink
                                    component={Link}
                                    to="/login"
                                    sx={{
                                        color: "#FFC107",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    Sign In
                                </MuiLink>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}

export default Signup;
