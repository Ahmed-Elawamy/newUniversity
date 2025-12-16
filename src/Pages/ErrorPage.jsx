import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Home, ArrowBack } from "@mui/icons-material";

function ErrorPage() {
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
            <Container maxWidth="md">
                <Box
                    sx={{
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "120px", md: "200px" },
                            fontWeight: "bold",
                            color: "#FFC107",
                            mb: 2,
                            lineHeight: 1,
                        }}
                    >
                        404
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            mb: 2,
                        }}
                    >
                        Page Not Found
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            mb: 4,
                            fontSize: "1.1rem",
                        }}
                    >
                        The page you are looking for might have been removed, had its name changed,
                        or is temporarily unavailable.
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <Button
                            component={Link}
                            to="/home"
                            variant="contained"
                            startIcon={<Home />}
                            sx={{
                                bgcolor: "#6d6fde",
                                color: "white",
                                padding: "12px 30px",
                                fontSize: "16px",
                                fontWeight: "bold",
                                textTransform: "none",
                                borderRadius: "10px",
                                "&:hover": {
                                    bgcolor: "#5a5ccc",
                                },
                            }}
                        >
                            Go Home
                        </Button>
                        <Button
                            component={Link}
                            to="/"
                            variant="outlined"
                            startIcon={<ArrowBack />}
                            sx={{
                                borderColor: "#FFC107",
                                color: "#FFC107",
                                padding: "12px 30px",
                                fontSize: "16px",
                                fontWeight: "bold",
                                textTransform: "none",
                                borderRadius: "10px",
                                "&:hover": {
                                    borderColor: "#FFC107",
                                    bgcolor: "rgba(255, 193, 7, 0.1)",
                                },
                            }}
                        >
                            Go Back
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default ErrorPage;
