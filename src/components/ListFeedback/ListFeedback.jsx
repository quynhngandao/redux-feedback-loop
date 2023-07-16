import TableBody from "@mui/material/TableBody";
import { useSelector } from "react-redux";
import ItemFeedback from "../FeedbackItem/ItemFeedback";

function ListFeedback({handleDelete}) {
  const feedbacks = useSelector((store) => store.feedbacks);

  return (
    <TableBody>
      {feedbacks.map((feedback) => (
        <ItemFeedback key={feedback.id} feedback={feedback}  handleDelete={handleDelete}/>
      ))}
    </TableBody>
  );
}

export default ListFeedback;
