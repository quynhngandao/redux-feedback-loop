import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import ListFeedback from "../ListFeedback/ListFeedback";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useSelector } from "react-redux";


function Admin () {
const feedbacks = useSelector((store) => store.feedbacks)


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
              <TableRow >
                <TableCell sx={{ minWidth: 100, maxWidth: 100 , textAlign:"center"}}>
                  Feeling
                </TableCell>
                <TableCell sx={{minWidth: 100, maxWidth: 100,textAlign:"center"}}>
                  Understanding
                </TableCell>
                <TableCell sx={{minWidth: 100, maxWidth: 100,textAlign:"center"}}>
                  Support
                </TableCell>
                <TableCell sx={{ minWidth: 300 }}>
                  Comments
                </TableCell>
                {/* <TableCell sx={{ minWidth: 100, maxWidth: 100}}>Delete</TableCell> */}
              </TableRow>
            </TableHead>
            <ListFeedback/>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Admin;
