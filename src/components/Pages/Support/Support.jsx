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

export default function Support () {
  // State
  const [support, setSupport] = useState('');
  // Dispatch 
  const dispatch = useDispatch();
  // History
  const history = useHistory()

  const handleChange = (event) => {
    // set support to user input 
    setSupport(event.target.value);
  };

  const handleNext = () => {
 // dispatch here to store 
 dispatch({type: "SUPPORT", payload: support})
 history.push('/comments')
  }

  return (
    <Box sx={{ minWidth: 500, margin:"auto"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">How Well Are You Feeling Supported Today?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={support}
          label="How Well Are You Feeling Supported Today?"
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












