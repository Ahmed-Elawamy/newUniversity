/* eslint-disable react/prop-types */
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));


export default function InfoTable({ std }) {
    console.log(std);

    return (
        <TableContainer component={Paper} style={{ position: "relative" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Year</StyledTableCell>
                        <StyledTableCell align="right">
                            subjects
                        </StyledTableCell>
                        <StyledTableCell align="right">GPA</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">
                            Attendance
                        </StyledTableCell>
                        <StyledTableCell align="right">Skills</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">Phone</StyledTableCell>
                        <StyledTableCell align="right">image</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                            {std.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            {std.year}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            {std.subjects.map((e, i) => (
                                <span key={i}> {e} </span>
                            ))}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            {std.gpa}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            {std.status}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            {std.attendance}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            {std.skills.map((e, i) => (
                                <span key={i}> {e} </span>
                            ))}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            {std.email}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            {std.phone}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <img
                                src={std.image}
                                alt=""
                                style={{
                                    borderRadius: "50%",
                                    width: "51px",
                                    // position: "absolute",
                                    // right: "8px",
                                }}
                            />
                        </StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
/*



*/