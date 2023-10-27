import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import axios from '../config/axios';

function Login() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const handleClick = () => {
        
        let user = { username, password}
        axios.post("/login", user)
        .then(res => {
            if(res.status === 200){
                localStorage.setItem("token", res.data.token)
            }
        }).catch(err => {  
            console.log(err)
        });
        

        console.log(user)

    }  
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
    >
        <div>
            Login
        </div>
        <div>
            <TextField id="outlined-basic" label="username" variant="outlined" fullWidth value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div>
            <TextField id="outlined-basic" label="password" type="password" variant="outlined" fullWidth value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div>
            <Button variant="contained" onClick={handleClick}>Submit</Button>

        </div>

    </Box>

  )
}


export default Login
