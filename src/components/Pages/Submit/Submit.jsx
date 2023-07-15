import { Button } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

function Submit({fetchFeedbacks}) {
  const feedbacks = useSelector((store) => {store.feedbacks})
  // grab data from store
  const feeling = useSelector((store) => {
    store.feeling;
  });
  const understanding = useSelector((store) => {
    store.understanding;
  });
  const support = useSelector((store) => {
    store.support;
  });
  const comments = useSelector((store) => {
    store.comments;
  });

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
  };

  return (
    <>
      <h2>Review Your Feedbacks</h2>
      <h5 className="Feeling">
        Feeling: <span>{feeling}</span>
      </h5>
      <h5 className="Understanding">
        Understanding: <span>{understanding}</span>
      </h5>
      <h5 className="Support">
        Support: <span>{support}</span>
      </h5>
      <h5 className="Comments">
        Comments: <span>{comments}</span>
      </h5>
      <Button
        onClick={handleSubmit}
        sx={{ fontFamily: "Rubik Bubbles" }}
        variant="contained"
        href="#outlined-buttons"
      >
        SUBMIT
      </Button>
    </>
  );
}

export default Submit;
