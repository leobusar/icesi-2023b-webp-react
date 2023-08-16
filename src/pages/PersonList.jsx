import personList from  '../data/person.json'
import { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody,Paper } from '@mui/material';
import PersonRow from '../components/PersonRow';
import PersonForm from '../components/PersonForm';

function PersonList() {
  const [persons, setPersons] = useState(personList);


  const renderPersons = () => {
    return persons.map((person) =>
    (<PersonRow key={person.id} person={person} />)
    )
  }

  const  addPerson = (person) => {
     persons.add(person)
     setPersons(persons)
  }
  return (
    <>
    <PersonForm />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>email</TableCell>
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
