import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Understanding() {
  v; // useSate
  const [understanding, setUnderstanding] = useState("");
  // useSelector
  const understandingHistory = useSelector(
    (store) => store.feedbacks.understanding
  );
  // useDispatch
  const dispatch = useDispatch();
  // useHistory
  const history = useHistory();
  // handle input change
  const handleChange = (event) => {
    // set support to input value
    setUnderstanding(event.target.value);
  };
  // handle submit next button
  const handleNext = () => {
    // dispatch here to store
    dispatch({ type: "UNDERSTANDING", payload: understanding });
    // go to comments page
    history.push("/support");
  };

  // If understandingHistory = true, set comments to understandingHistory
  useEffect(() => {
    if (understandingHistory) {
      setUnderstanding(understandingHistory);
    }
  }, []);

  // Form Validation
  const isUnderstandingSelected = understanding !== "";

  return (
    <Box sx={{ maxWidth: 500, margin: "auto" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          How Well Are You Understanding The Content?
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={understanding}
          label="How Well Are You Understanding The Content?"
          onChange={handleChange}
          required // Add the required attribute for form validation
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <Button
        sx={{ fontFamily: "Rubik Bubbles", margin: 5 }}
        variant="contained"
        onClick={handleNext}
        disabled={!isUnderstandingSelected} // Disable the button if understanding is not selected
      >
        Next
      </Button>
    </Box>
  );
}
