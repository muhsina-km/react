import { TextField,Button } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <TextField id="standard-basic" label="First name" variant="standard" /> <br></br>
      <TextField id="standard-basic" label="Last name" variant="standard" /> <br></br>
      <TextField id="standard-basic" label="Email" type='email' variant="standard" /> <br></br>
      <TextField id="standard-basic" label="Password" type='password' variant="standard" /> <br></br> <br></br>
      <Button variant="contained" color='primary'>Signup</Button>


    </div>
  )
}

export default Signup
