import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <Typography variant='h3'> WELCOME TO REACT </Typography> <br></br>
      <TextField id="outlined-basic" label="Email" variant="outlined" /><br></br>
      <TextField id="filled-basic" label="Password" variant="filled" type='password' /><br></br> <br></br>
      <Button variant="contained">Login</Button>

       
    </div>
  )
}

export default Login
