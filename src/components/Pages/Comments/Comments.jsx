import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ariaLabel = { "aria-label": "description" };

export default function Comments() {
  // useSate
  const [comments, setComments] = useState("");
  // useSelector
  const commentsHistory = useSelector((store) => store.feedbacks.comments);
  // useDispatch
  const dispatch = useDispatch();
  // useHistory
  const history = useHistory();
  // handle input change
  function handleChange(e) {
    // set comments to input value
    setComments(e.target.value);
  }
  // handle submit next button
  const handleNext = () => {
    // dispatch data to store
    dispatch({ type: "COMMENTS", payload: comments });
    // go to review page
    history.push("/review");
  };

  // If commentsHistory = true, set comments to commentsHistory
  useEffect(() => {
    if (commentsHistory) {
      setComments(commentsHistory);
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
