import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function ThankYou() {
  // History
  const history = useHistory();

  // clear data
  const clear = useSelector((store) => {
    store.feedbacks.clear;
  });

  const handleNext = () => {
    history.push("/");
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
