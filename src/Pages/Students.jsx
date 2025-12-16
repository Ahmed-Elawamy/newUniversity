import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { inputBaseClasses } from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { students } from "../../students-data";
import InfoTable from "../Component/InfoTable";
let std;
function Students() {
    const [id, setId] = useState("Enter Number  1 : 30");
    function handleId(e) {
        setId(e.target.value);
    }
    std = students.find((s) => s.code == id);

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
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                        minHeight: "60vh",
                    }}
                >
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center",
                            mb: 4,
                        }}
                    >
                        Enter ID For Search
                    </Typography>

                    <TextField
                        onChange={(e) => handleId(e)}
                        value={id}
                        sx={{
                            background: "white !important",
                            borderRadius: "9px",
                            width: { xs: "100%", sm: "500px" },
                            maxWidth: "500px",
                        }}
                        id="outlined-suffix-shrink"
                        label="Student ID"
                        variant="filled"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                        sx={{
                                            opacity: 0,
                                            pointerEvents: "none",
                                            [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]:
                                                {
                                                    opacity: 1,
                                                },
                                        }}
                                    ></InputAdornment>
                                ),
                            },
                        }}
                    />
                </Box>
                <Box>
                    {std ? (
                        <>
                            <InfoTable std={std} />
                        </>
                    ) : (
                        ""
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default Students;
