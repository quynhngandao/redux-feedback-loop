import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useState } from "react";

const ariaLabel = { "aria-label": "description" };

function Comment() {
  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.comment);
  };
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <Input
        style={{ width: 500 }}
        label="Support"
        color="secondary"
        focused="true"
        placeholder="Do You Have Any Comment?"
        inputProps={ariaLabel}
        value={comment}
      />
      <Button
        variant="outlined"
        onClick={handleChange}
      >
        Next
      </Button>
    </Box>
  );
}

export default Comment;
