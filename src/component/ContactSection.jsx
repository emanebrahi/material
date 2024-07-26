
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';


function ContactSection(props) {
  let rowStyle = {};
  if (props.text == "Sunday") {
    rowStyle = {
      border: "none",
      color: "yellow",
      fontFamily: "Anton"
    }

  } else {
    rowStyle = {
      borderBottom: " 1px solid #a3897b",
      color: "white",
      fontFamily: "Anton"
    }
  }
  return (
    <TableContainer >
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell sx={rowStyle}  >{props.text}</TableCell>
            <TableCell sx={rowStyle} align="right">{props.description}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ContactSection;

