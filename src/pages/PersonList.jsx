import personList from  '../data/person.json'
import { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody,Paper } from '@mui/material';
import PersonRow from '../components/PersonRow';
import PersonForm from '../components/PersonForm';

function PersonList() {
  const [persons, setPersons] = useState(personList);
  const [personEdit, setPersonEdit] = useState({})

  const renderPersons = () => {
    return persons.map((person) =>
    (<PersonRow key={person.id} person={person} onDelPerson={delPerson} onEditPerson={editPerson}/>)
    )
  }

  const  addPerson = (person) => {
     console.log(person)
     let personsTmp = [...persons]
     if (person.id ==""){
       person.id= Math.floor(Math.random()*100000)
       personsTmp.push(person)
     }else{
       let index = personsTmp.findIndex((p)=>person.id===p.id)
       personsTmp[index] = person
     }
     setPersons(personsTmp)
  }

  const delPerson = (id) => {
    setPersons(persons.filter((person)=> person.id!=id))
  }

  const editPerson = (person) => {
    setPersonEdit(person)
  }

  return (
    <>
    <PersonForm onAddPerson={addPerson} person={personEdit}/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>email</TableCell>
            <TableCell>actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderPersons()}
        </TableBody>
      </Table>
    </TableContainer>
    </>

  )
}

PersonList.propTypes = {
}

export default PersonList
