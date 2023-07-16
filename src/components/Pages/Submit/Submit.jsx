import { Button } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Submit({fetchFeedbacks}) {
  // History
  const history = useHistory()

  // grab feedbacks from store
  const feedbacks = useSelector(store => store.feedbacks)
  console.log('feedbacks', feedbacks)

  // POST feedback to database
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/feedbacks", feedbacks)
      .then((res) => {
         fetchFeedbacks()
        console.log("success in POST to DB");
      })
      .catch((err) => {
        console.log("error in POST to DB", err);
      });

      // go to /thankyou page
      history.push('/thankyou')
  };

  return (
    <>
      <h2>Review Your Feedbacks</h2>
      <h5 className="Feeling">
        Feeling: <span>{feedbacks.feeling}</span>
      </h5>
      <h5 className="Understanding">
        Understanding: <span>{feedbacks.understanding}</span>
      </h5>
      <h5 className="Support">
        Support: <span>{feedbacks.support}</span>
      </h5>
      <h5 className="Comments">
        Comments: <span>{feedbacks.comments}</span>
      </h5>
      <Button
        onClick={handleSubmit}
        sx={{ fontFamily: "Rubik Bubbles" }}
        variant="contained"
      >
        SUBMIT
      </Button>
    </>
  );
}

export default Submit;
