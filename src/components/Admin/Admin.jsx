import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

function Admin({ feedbacks}) {
  return (
    <>
      <div>FEEDBACKS</div>
      <div className="table">
        <TableContainer align="center">
          <Table sx={{ maxWidth: "800", border: 1 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Feeling</TableCell>
                <TableCell align="center">Understanding</TableCell>
                <TableCell align="center">support</TableCell>
                <TableCell align="center">comment</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feedbacks.map((feedback) => {
                return (
                  <TableRow
                    key={feedback.id}
                    sx={{ maxWidth: "800", border: 1 }}
                  >
                    <TableCell align="center">{feedback.feeling}</TableCell>
                    <TableCell align="center">{feedback.understanding}</TableCell>
                    <TableCell align="center">{feedback.support}</TableCell>
                    <TableCell align="center">{feedback.comments}</TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => {
                          handleDelete(feedback);
                        }}
                        variant="contained"
                      >
                        DELETE
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Admin;
