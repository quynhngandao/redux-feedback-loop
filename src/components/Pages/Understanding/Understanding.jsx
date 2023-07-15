import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useState } from "react";

const ariaLabel = { "aria-label": "description" };

function Understanding() {
  const [understanding, setUnderstanding] = useState("");

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
        label="Understanding"
        color="secondary"
        focused="true"
        placeholder="How Well Are You Understanding The Content?"
        inputProps={ariaLabel}
        value={understanding}
        onChange={(e) => setUnderstanding(e.target.value)}
      />
      <Button
        sx={{ fontFamily: "Rubik Bubbles" }}
        variant="contained"
        onClick={() => setUnderstanding(understanding)}
      >
        Next
      </Button>
    </Box>
  );
}

export default Understanding;
