import TableBody from "@mui/material/TableBody";
import { useSelector } from "react-redux";
import ItemFeedback from "../FeedbackItem/ItemFeedback";

function ListFeedback({ fetchFeedbacks }) {
 // useSelector 
 const feedbacksReview = useSelector((store) => store.feedbacksReview);

  return (
    <TableBody>
      {feedbacksReview.map((feedback) => (
        <ItemFeedback
          key={feedback.id}
          feedback={feedback}
          fetchFeedbacks={fetchFeedbacks}
        />
      ))}
    </TableBody>
  );
}

export default ListFeedback;
