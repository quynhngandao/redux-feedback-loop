import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { useState } from "react";

const ariaLabel = { "aria-label": "description" };

function Support() {
  const [support, setSupport] = useState("");

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
        label="Support"
        color="secondary"
        focused="true"
        placeholder="How Well Are You Feeling Supported?"
        inputProps={ariaLabel}
        value={support}
        onChange={e => setSupport(e.target.value)}
      />
      <Button
        sx={{ fontFamily: "Rubik Bubbles" }}
        variant="contained"
        onClick={() => setSupport(support)}
      >
        Next
      </Button>
    </Box>
  );
}

export default Support;
