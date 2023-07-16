import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {useSelector } from "react-redux";
import axios from "axios";
import ListFeedback from "../ListFeedback/ListFeedback";

function Admin ({fetchFeedbacks}) {
 // delete feedback from DB
 const handleDelete = (feedbackId) => {
  axios
    .delete(`/feedbacks/${feedbackId}`)
    .then((res) => {
      fetchFeedbacks();
      console.log("success in DELETE to DB");
    })
    .catch((err) => {
      console.log("error in DELETE to DB", err);
    });
};

  return (
    <>
      <div>FEEDBACKS</div>
      <div className="table">
        <TableContainer align="center">
          <Table
            sx={{
              maxWidth: 900,
              align: "center",
              "&:last-child td, &:last-child th": { border: 0.5 },
            }}
            aria-label="simple table"
          >
            <TableHead className="table-head">
              <TableRow>
                <TableCell
                  sx={{ minWidth: 100, maxWidth: 100, textAlign: "center" }}
                >
                  Feeling
                </TableCell>
                <TableCell
                  sx={{ minWidth: 100, maxWidth: 100, textAlign: "center" }}
                >
                  Understanding
                </TableCell>
                <TableCell
                  sx={{ minWidth: 100, maxWidth: 100, textAlign: "center" }}
                >
                  Support
                </TableCell>
                <TableCell sx={{ minWidth: 300, textAlign: "center" }}>Comments</TableCell>
                <TableCell sx={{ minWidth: 100, maxWidth: 100}}></TableCell>
              </TableRow>
            </TableHead>
           <ListFeedback handleDelete={handleDelete}/>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Admin;
