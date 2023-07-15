import React from 'react'
import { Button } from '@mui/material'

function Submit() {
  return (
    <>
    <h1>Review Your Feedbacks</h1>
    <h5 className='feeling'>Feeling: <span></span></h5>
    <h5 className='feeling'>Understanding: <span></span></h5>
    <h5 className='feeling'>Support: <span></span></h5>
    <h5 className='feeling'>Comment: <span></span></h5>
    <Button variant="outlined" href="#outlined-buttons">
                  Submit
                </Button>
    </>
  )
}

export default Submit