import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
} from "@mui/material";
import { School, People, Book, TrendingUp } from "@mui/icons-material";

function About() {
    const features = [
        {
            icon: <School sx={{ fontSize: 50 }} />,
            title: "Quality Education",
            description:
                "We provide high-quality education with experienced instructors and modern teaching methods.",
        },
        {
            icon: <People sx={{ fontSize: 50 }} />,
            title: "Expert Faculty",
            description:
                "Our faculty members are experts in their fields with years of experience.",
        },
        {
            icon: <Book sx={{ fontSize: 50 }} />,
            title: "Comprehensive Courses",
            description:
                "A wide range of courses covering various subjects and disciplines.",
        },
        {
            icon: <TrendingUp sx={{ fontSize: 50 }} />,
            title: "Career Growth",
            description:
                "Our programs help students achieve their career goals and grow professionally.",
        },
    ];

    return (
        <Box
            sx={{
                background:
                    "linear-gradient(-158deg, #af40ff, #5b42f3 50%, #00ddeb) !important",
                minHeight: "100vh",
                padding: { xs: 2, sm: 3, md: 5 },
                paddingTop: { xs: "100px", md: "120px" },
                paddingBottom: { xs: "100px", md: "50px" },
            }}
        >
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: { xs: 4, md: 8 },
                        px: { xs: 2, md: 0 },
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            mb: 2,
                            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                        }}
                    >
                        About NATU
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#FFC107",
                            mb: 4,
                            fontSize: { xs: "1.2rem", md: "1.5rem" },
                        }}
                    >
                        New Assuit Technology University
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "white",
                            fontSize: { xs: "1rem", md: "1.2rem" },
                            lineHeight: 1.8,
                            maxWidth: "800px",
                            mx: "auto",
                            mb: { xs: 4, md: 6 },
                        }}
                    >
                        Welcome to NATU, where innovation meets education. We
                        are committed to providing world-class technology
                        education and preparing our students for successful
                        careers in the digital age. Our university combines
                        academic excellence with practical experience to ensure
                        our graduates are ready to make an impact.
                    </Typography>
                </Box>

                {/* Features Grid */}
                <Grid
                    container
                    spacing={{ xs: 3, sm: 4, md: 4 }}
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    {features.map((feature, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={index}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Card
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    maxWidth: "280px",
                                    bgcolor: "rgba(255, 255, 255, 0.1)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    borderRadius: "15px",
                                    transition: "all 0.3s ease",
                                    display: "flex",
                                    flexDirection: "column",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        boxShadow:
                                            "0 10px 30px rgba(255, 193, 7, 0.3)",
                                        borderColor: "rgba(255, 193, 7, 0.5)",
                                    },
                                }}
                            >
                                <CardContent
                                    sx={{
                                        textAlign: "center",
                                        padding: { xs: 2, md: 3 },
                                        flexGrow: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Box>
                                        <Box
                                            sx={{
                                                color: "#FFC107",
                                                mb: 2,
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "white",
                                                fontWeight: "bold",
                                                mb: 2,
                                                fontSize: {
                                                    xs: "1.1rem",
                                                    md: "1.25rem",
                                                },
                                            }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "rgba(255, 255, 255, 0.8)",
                                                lineHeight: 1.6,
                                                fontSize: {
                                                    xs: "0.875rem",
                                                    md: "0.9rem",
                                                },
                                            }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default About;
