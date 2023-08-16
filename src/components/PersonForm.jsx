import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField } from '@mui/material'

function PersonForm(props) {
    const [id, setId] = useState("")
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    const handleClick = () => {
        console.log("name:", name)
        console.log("username:", username)
        console.log("email:", email)
        setUsername("")
        setName("")
        setEmail("")
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
            User
        </div>
        <div>
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div>
            <TextField id="outlined-basic" label="username" variant="outlined" fullWidth value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div>
            <TextField id="outlined-basic" label="email" variant="outlined" fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div>
            <Button variant="contained" onClick={handleClick}>Submit</Button>

        </div>

    </Box>
  )
}

PersonForm.propTypes = {}

export default PersonForm
