import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useState } from "react";

const ariaLabel = { "aria-label": "description" };

function Feeling() {
  const [feeling, setFeeling] = useState("");

  const handleChange = (e) => {
    setFeeling(e.target.feeling);
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
        placeholder="How Are You Feeling Today?"
        inputProps={ariaLabel}
        value={feeling}
      />
      <Button variant="outlined" onClick={handleChange}>
        Next
      </Button>
    </Box>
  );
}

export default Feeling;
