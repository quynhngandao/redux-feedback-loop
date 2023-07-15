import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Submit() {
  // send feedback to store on submit
  const dispatch = useDispatch();
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
  const comment = useSelector((store) => {
    store.comment;
  });
  // POST feedback to database

  const feedbackToSend = () => {
    axios
      .post("/feedback", [])
      .then((res) => {})
      .catch((err) => {
        console.log("error in POST", err);
      });
  };

  const handleSubmit = () => {
    dispatch({
      type: "SAVE_FEEDBACK",
      payload: { feeling, understanding, support, comment },
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
      <h5 className="Comment">
        Comment: <span>{comment}</span>
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
