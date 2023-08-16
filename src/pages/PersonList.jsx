import personList from  '../data/person.json'
import { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody,Paper } from '@mui/material';

function PersonList() {
  const [persons, setPersons] = useState(personList);


  const renderPersons = () => {
    return persons.map((person) =>
    (<TableRow key={person.id}> 
      <TableCell>{person.id}</TableCell>
      <TableCell>{person.name}</TableCell>
      <TableCell>{person.username}</TableCell>
      <TableCell>{person.email}</TableCell>
    </TableRow> )
    )
  }

  return (
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
  )
}

PersonList.propTypes = {
}

export default PersonList
