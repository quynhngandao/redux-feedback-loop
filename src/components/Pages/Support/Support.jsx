import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Support() {
  // useSate
  const [support, setSupport] = useState("");
  // useSelector
  const supportHistory = useSelector((store) => store.feedbacks.support);
  // useDispatch
  const dispatch = useDispatch();
  // useHistory
  const history = useHistory();
  // handle input change
  const handleChange = (event) => {
    // set support to input value
    setSupport(event.target.value);
  };
  // handle submit next button
  const handleNext = () => {
    // dispatch data to store
    dispatch({ type: "SUPPORT", payload: support });
    // go to comments page
    history.push("/comments");
  };

  // If supportHistory = true, set comments to supportHistory
  useEffect(() => {
    if (supportHistory) {
      setSupport(supportHistory);
    }
  }, []);

  // Form Validation
  const isSupportSelected = support !== "";

  return (
    <Box sx={{ maxWidth: 500, margin: "auto" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          How Well Are You Feeling Supported Today?
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={support}
          label="How Well Are You Feeling Supported Today?"
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
        disabled={!isSupportSelected} // Disable the button if support is not selected
      >
        Next
      </Button>
    </Box>
  );
}
