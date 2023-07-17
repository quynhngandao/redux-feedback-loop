import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ListFeedback from "../ListFeedback/ListFeedback";

function Admin({ fetchFeedbacks }) {

  return (
    <>
      <h2>Review Feedbacks</h2>
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
                  sx={{
                    minWidth: 100,
                    maxWidth: 100,
                    textAlign: "center",
                    fontWeight: 700,
                  }}
                >
                  FEELING
                </TableCell>
                <TableCell
                  sx={{
                    minWidth: 100,
                    maxWidth: 100,
                    textAlign: "center",
                    fontWeight: 700,
                  }}
                >
                  UNDERSTAND
                </TableCell>
                <TableCell
                  sx={{
                    minWidth: 100,
                    maxWidth: 100,
                    textAlign: "center",
                    fontWeight: 700,
                  }}
                >
                  SUPPORT
                </TableCell>
                <TableCell
                  sx={{ minWidth: 300, textAlign: "center", fontWeight: 700 }}
                >
                  COMMENTS
                </TableCell>
                <TableCell
                  sx={{ minWidth: 100, maxWidth: 100, fontWeight: 700 }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <ListFeedback fetchFeedbacks={fetchFeedbacks} />
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Admin;
