import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Button } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

function Support() {
  const [support, setSupport] = useState('')
  const handleChange = (e) => {
    setSupport(e.target.support)
  }
  return (
    <Box component="form" sx={{'& > :not(style)': { m: 1 }}} noValidate autoComplete="off">
    <Input style = {{width: 500}} label="Support" color="secondary" focused="true" placeholder='How Well Are You Feeling Supported?' inputProps={ariaLabel} value={support}/>
    <Button variant="outlined"
  onClick={handleChange}
>Next</Button>
</Box>
  )
}

export default Support;
