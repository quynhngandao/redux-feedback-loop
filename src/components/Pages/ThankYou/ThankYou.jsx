import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

export default function ThankYou() {
  // useHistory
  const history = useHistory();
  // useDispatch
  const dispatch = useDispatch();

  const handleNext = () => {
    // go back to feeling page
    history.push("/");
    // dispatch data and clear feedbacks
    dispatch({ type: "CLEAR" });
  };

  return (
    <>
      <div>ThankYou</div>
      <Button
        sx={{ fontFamily: "Rubik Bubbles" }}
        variant="contained"
        onClick={handleNext}
      >
        Leave New Feedback
      </Button>
    </>
  );
}
