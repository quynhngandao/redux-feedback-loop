import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Button } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

function Understanding() {
  return (
    <Box component="form" sx={{'& > :not(style)': { m: 1 }}} noValidate autoComplete="off">
    <Input style = {{width: 500}} label="Understanding" color="secondary" focused="true" placeholder='How Well Are You Understanding The Content?' inputProps={ariaLabel} />
    <Button variant="outlined"
  onClick={() => {
    alert('clicked');
  }}
>Next</Button>
</Box>
  )
}

export default Understanding;
