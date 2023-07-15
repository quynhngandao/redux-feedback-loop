import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
// import Button from "@mui/material/Button";
// import { useDispatch } from "react-redux";

function ItemFeedback({ feedback }) {
  return (
    <TableRow>
      <TableCell>{feedback.feeling}</TableCell>
      <TableCell>{feedback.understanding}</TableCell>
      <TableCell>{feedback.support}</TableCell>
      <TableCell>{feedback.comments}</TableCell>
      {/* <TableCell>
        <Button onClick={handleDelete} variant="contained">DELETE</Button>
      </TableCell> */}
    </TableRow>
  );
}

export default ItemFeedback;
