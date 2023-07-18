import { Button } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Submit({ fetchFeedbacks }) {
   // useSelector
   const feedbacks = useSelector((store) => store.feedbacks);
  // useHistory
  const history = useHistory()
  // handle submit feedback button
  const handleSubmit = (e) => {
    // prevent form auto-submit 
    e.preventDefault();
// // POST data to server
    axios
      .post("/feedbacks", feedbacks)
      .then((res) => {
        fetchFeedbacks();
        console.log("Success POST to server");
      })
      .catch((err) => {
        console.log("Error POST to server", err);
      });

    // go to thank you page 
    history.push("/thankyou");
  };

  return (
    <>
      <h2>Review Your Feedbacks</h2>
      <div className="data">
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
      </div>
      <Button
        onClick={handleSubmit}
        sx={{ fontFamily: "Rubik Bubbles", margin: 5 }}
        variant="contained"
      >
        SUBMIT
      </Button>
    </>
  );
}

export default Submit;
