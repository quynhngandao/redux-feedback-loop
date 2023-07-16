import * as React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Feeling () {
  // State
  const [feeling, setFeeling] = useState('');
  // Dispatch 
  const dispatch = useDispatch();
  // History
const history = useHistory()

  const handleChange = (event) => {
    // set feeling to user input 
    setFeeling(event.target.value);
  };

  const handleNext = () => {
 // dispatch here to store 
 dispatch({type: "FEELING", payload: feeling})
 history.push('/understanding')
  }

  return (
    <Box sx={{ maxWidth: 500, margin:"auto"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">How Are You Feeling Today?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={feeling}
          label="How Are You Feeling Today?"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
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












