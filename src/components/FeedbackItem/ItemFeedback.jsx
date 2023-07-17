import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function ItemFeedback({feedback, fetchFeedbacks}) {
// delete feedback from DB
const handleDelete = () => {
  axios
    .delete(`/feedbacks/${feedback.id}`)
    .then((res) => {
      fetchFeedbacks();
      console.log("success in DELETE to DB");
    })
    .catch((err) => {
      console.log("error in DELETE to DB", err);
    });
};

  return (
    <TableRow className="result">
      <TableCell  sx={{ minWidth: 100, textAlign: "center" }}>{feedback.feeling}</TableCell>
      <TableCell  sx={{ minWidth: 100, textAlign: "center" }}>{feedback.understanding}</TableCell>
      <TableCell  sx={{ minWidth: 100, textAlign: "center" }}>{feedback.support}</TableCell>
      <TableCell  sx={{ minWidth: 100, textAlign: "center" }}>{feedback.comments}</TableCell>
      <TableCell sx={{ minWidth: 100, textAlign: "center" }}>
        <Button
          onClick={handleDelete}
          variant="outlined"
        >
           <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ItemFeedback;
