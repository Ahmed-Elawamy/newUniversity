import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Students from "./Pages/Students.jsx";
import About from "./Pages/About.jsx";
import Login from "./Component/Login.jsx";
import Signup from "./Component/Signup.jsx";
import UniverseNav from "./Component/UniverseNav";

import { Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

function App() {
    const navLinkStyle = {
        color: "white",
        textDecoration: "none",
        padding: "8px 20px",
        fontWeight: "500",
        fontSize: "16px",
        borderRadius: "15px",
        transition: "all 0.3s ease",
    };

    return (
        <Box sx={{ background: "#1A3453", minHeight: "100vh" }}>
            <Container maxWidth="xl" disableGutters>
                {/* Mobile Navigation */}
                <Box
                    sx={{
                        display: {
                            xs: "block",
                            sm: "block",
                            md: "none",
                        },
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1000,
                    }}
                >
                    <UniverseNav />
                </Box>

                {/* Desktop Navigation */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        position: "fixed",
                        top: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1000,
                        gap: 2,
                        backgroundColor: "rgba(26, 52, 83, 0.9)",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <Link to="/home" style={navLinkStyle} className="addHover">
                        Home
                    </Link>
                    <Link to="/students" style={navLinkStyle} className="addHover">
                        Students
                    </Link>
                    <Link to="/about" style={navLinkStyle} className="addHover">
                        About
                    </Link>
                </Box>
            </Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Box>
    );
}

export default App;
