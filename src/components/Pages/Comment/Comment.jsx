import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const ariaLabel = { "aria-label": "description" };

function Comment() {
  const [comments, setComment] = useState("");

  // dispatch input data to store 
  const dispatch = useDispatch()

  // POST data to database 


  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <Input
      type="text"
        style={{ width: 500 }}
        label="Comment"
        color="secondary"
        focused="true"
        placeholder="Do You Have Any Comment?"
        inputProps={ariaLabel}
        value={comments}
        onChange={e => setComment(e.target.value)}
      />
      <Button
       sx={{fontFamily: 'Rubik Bubbles'}} variant="contained" 
       onClick={() => setComment(comments)}
      >
        Next
      </Button>
    </Box>
  );
}

export default Comment;
