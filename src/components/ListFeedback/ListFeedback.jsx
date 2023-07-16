import TableBody from "@mui/material/TableBody";
import { useSelector } from "react-redux";
import ItemFeedback from "../FeedbackItem/ItemFeedback";

function ListFeedback() {
  const feedbacks = useSelector((store) => store.feedbacks);

  return (
    <TableBody>
      {feedbacks.map((feedback) => (
        <ItemFeedback key={feedback.id} feedback={feedback} />
      ))}
    </TableBody>
  );
}

export default ListFeedback;
