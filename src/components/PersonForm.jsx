import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField } from '@mui/material'

function PersonForm({onAddPerson, person}) {
    const [id, setId] = useState("")
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(()=>{
        setId(person.id)
        setUsername(person.username)
        setName(person.name)
        setEmail(person.email) 
    }
    ,[person])
    
    const handleClick = () => {
        
        let person = {id, name, username, email}

        onAddPerson(person)
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

PersonForm.propTypes = {
    onAddPerson: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired,
}

export default PersonForm