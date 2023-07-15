import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useState } from "react";

const ariaLabel = { "aria-label": "description" };

function Feeling() {
  const [feeling, setFeeling] = useState("");

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <Input
      type="number"
        style={{ width: 500 }}
        label="Feeling"
        color="secondary"
        placeholder="How Are You Feeling Today?"
        inputProps={ariaLabel}
        value={feeling}
        onChange={(e) => setFeeling(e.target.value)}
      />
      <Button
        sx={{ fontFamily: "Rubik Bubbles" }}
        variant="contained"
        onClick={() => setFeeling(feeling)}
      >
        Next
      </Button>
    </Box>
  );
}

export default Feeling;
