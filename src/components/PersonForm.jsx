import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField } from '@mui/material'
//import { PersonContext } from '../context/PersonContext'
import { useSelector, useDispatch } from 'react-redux';
import { setPersonEdit } from '../redux/reducers/personSlice';

function PersonForm({onAddPerson}) {
    const [id, setId] = useState("")
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const  dispatch = useDispatch()

    //const {personEdit, setPersonEdit} = useContext(PersonContext)
    
    const personEdit = useSelector(state=>state.person.personEdit)

    useEffect(()=>{
        setId(personEdit.id)
        setUsername(personEdit.username)
        setName(personEdit.name)
        setEmail(personEdit.email) 
    }
    ,[personEdit])
    
    const handleClick = () => {
        
        let person = {id, name, username, email}

        onAddPerson(person)
        dispatch(setPersonEdit({id: "", name: "", username:"", email:""}))

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
    onAddPerson: PropTypes.func.isRequired
}

export default PersonForm
