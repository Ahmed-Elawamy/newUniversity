import { ReactTyped as Typed } from "react-typed";
import "../App.css";
import { Link } from "react-router-dom";
import UniverseButton from "../Component/UniverseButton";

import logo from "../imgs/logo.png";
import illustration from "../imgs/university.jpg";

// MUI Components
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    Stack,
} from "@mui/material";

function Home() {
    return (
        <>
            <Box
                sx={{
                    background:
                        "linear-gradient(-158deg, #af40ff, #5b42f3 50%, #00ddeb) !important",
                    minHeight: "100vh",
                    padding: { xs: 2, sm: 3, md: 5 },
                }}
            >
                <AppBar
                    position="static"
                    sx={{
                        bgcolor: "transparent",
                        boxShadow: "none",
                        padding: 0,
                    }}
                >
                    <Toolbar
                        disableGutters
                        sx={{ justifyContent: "space-between" }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                                src={logo}
                                alt="NATU Logo"
                                style={{
                                    height: "50px",
                                    marginRight: "8px",
                                }}
                            />
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{ color: "white", fontWeight: "bold" }}
                            >
                                NATU
                            </Typography>
                        </Box>
                        <Stack direction="row" spacing={1}>
                            <Button
                                component={Link}
                                to="/login"
                                variant="contained"
                                sx={{
                                    bgcolor: "transparent",
                                    color: "white",
                                    border: "1px solid white",
                                    transition: "0.5s",
                                    "&:hover": {
                                        bgcolor: "white",
                                        color: "black",
                                    },
                                    padding: "6px 16px",
                                    textTransform: "none",
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                component={Link}
                                to="/signup"
                                variant="contained"
                                sx={{
                                    background:
                                        "linear-gradient(45deg, #FF5722, transparent 100px) !important",
                                    color: "white",
                                    "&:hover": {
                                        // bgcolor: "#5a5ccc",
                                    },
                                    padding: "6px 16px",
                                    textTransform: "none",
                                }}
                            >
                                Signup
                            </Button>
                        </Stack>
                    </Toolbar>
                </AppBar>

                <Grid
                    container
                    spacing={4}
                    sx={{
                        mt: 8,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                textAlign: {
                                    xs: "center",
                                    md: "left",
                                    width: "450px",
                                },
                            }}
                        >
                            <Typed
                                strings={[
                                    "New Assuit Technology University",
                                    "Join Our Online Courses!",
                                    "Achieve Your Goals with Us!",
                                ]}
                                typeSpeed={60}
                                backSpeed={30}
                                loop
                                style={{
                                    fontWeight: "bold",
                                    color: "#ffff",
                                    fontSize: "clamp(1.5rem, 4vw, 3rem)",
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={illustration}
                            alt="Illustration"
                            sx={{
                                width: { xs: "80%", md: "100%" },
                                maxWidth: "500px", // تمنع الصورة تكبر قوي على الشاشات الكبيرة
                                display: "block",
                                margin: { xs: "0 auto", md: "0" },
                                borderRadius: "15px",
                                // filter: "drop-shadow(0 0 2em #ffffff)",
                                filter: "drop-shadow(0 0 8em #ccc)",
                            }}
                        />
                    </Grid>
                    <Grid
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "50px 0",
                        }}
                        item
                        xs={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xsm={12}
                    >
                        <Link to="/about" style={{ textDecoration: "none" }}>
                            <UniverseButton className="zbtn" />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Home;
