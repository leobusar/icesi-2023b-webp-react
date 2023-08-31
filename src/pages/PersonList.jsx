//import personList from  '../data/person.json'
import { useEffect, useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody,Paper } from '@mui/material';
import PersonRow from '../components/PersonRow';
import PersonForm from '../components/PersonForm';
import axios from "../config/axios";


function PersonList() {
  const [persons, setPersons] = useState([]);
  const [personEdit, setPersonEdit] = useState({id: ""})

  const getPersons = async () => {
    try {
      const response = await axios.get("/person")
      setPersons(response.data)
    }catch (e) {
      console.log(e)
    }
  };

  useEffect(()=> {getPersons()},[])
  
  const renderPersons = () => {
    return persons.map((person) =>
    (<PersonRow key={person.id} person={person} onDelPerson={delPerson} onEditPerson={editPerson}/>)
    )
  }

  const  addPerson = async (person) => {
     console.log(person)
    // let personsTmp = [...persons]
     if (person.id ==""){
       person.id= Math.floor(Math.random()*100000);
      //  axios.post("/person", person).then( () =>
      //     {getPersons()}
      //  );
      const res = await axios.post("/person", person)
      if(res.status === 201)
          getPersons()
       //personsTmp.push(person)
     }else{
      //  let index = personsTmp.findIndex((p)=>person.id===p.id)
      //  personsTmp[index] = person
      const res = await axios.put("/person/"+person.id, person)
      if(res.status === 200)
          getPersons()      
     }
     //setPersons(personsTmp)
  }

  const delPerson = async (id) => {
    //setPersons(persons.filter((person)=> person.id!=id))
    const res = await axios.delete("/person/"+id)
    if(res.status === 200)
        getPersons()   
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
