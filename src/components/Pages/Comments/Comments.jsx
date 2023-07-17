import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ariaLabel = { "aria-label": "description" };

export default function Comments() {
  const [comments, setComments] = useState("");
  const commentsHistory = useSelector((store)=> store.feedbacks.comments)
  // dispatch input data to store
  const dispatch = useDispatch();
  // History
  const history = useHistory();

  function handleChange(e) {
    setComments(e.target.value);
  }

  const handleNext = () => {
    // dispatch here to store
    dispatch({ type: "COMMENTS", payload: comments });
    history.push("/review");
  };

   // load feedbacks once
   useEffect(() => {
    if (commentsHistory){
      setComments(commentsHistory)
    }
  }, []);


  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <Input
        type="text"
        style={{ minWidth: 300 }}
        label="Comments"
        color="secondary"
        focused="true"
        placeholder="Do You Have Any Comments?"
        inputProps={ariaLabel}
        value={comments}
        onChange={handleChange}
      />
      <Button
        sx={{ fontFamily: "Rubik Bubbles" }}
        variant="contained"
        onClick={handleNext}
      >
        Next
      </Button>
    </Box>
  );
}
