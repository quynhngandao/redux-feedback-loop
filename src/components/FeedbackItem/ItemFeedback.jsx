import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

function ItemFeedback({feedback, handleDelete}) {

  const dispatch = useDispatch()

  // delete feedback from DB
  const deleteFeedback = () => {
    handleDelete(feedback.id)
        dispatch({ type: "DELETE", payload: feedback.id });
        console.log("success in DELETE to DB");
  };

  return (
    <TableRow>
      <TableCell  sx={{ minWidth: 100, textAlign: "center" }}>{feedback.feeling}</TableCell>
      <TableCell  sx={{ minWidth: 100, textAlign: "center" }}>{feedback.understanding}</TableCell>
      <TableCell  sx={{ minWidth: 100, textAlign: "center" }}>{feedback.support}</TableCell>
      <TableCell  sx={{ minWidth: 100, textAlign: "center" }}>{feedback.comments}</TableCell>
      <TableCell sx={{ minWidth: 100, textAlign: "center" }}>
        <Button
          onClick={deleteFeedback}
          variant="contained"
        >
          DELETE
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ItemFeedback;
