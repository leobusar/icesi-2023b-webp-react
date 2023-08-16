import PropTypes from 'prop-types'
import { TableCell, TableRow } from '@mui/material'

function PersonRow({person}) {
  return (
    <TableRow> 
      <TableCell>{person.id}</TableCell>
      <TableCell>{person.name}</TableCell>
      <TableCell>{person.username}</TableCell>
      <TableCell>{person.email}</TableCell>
    </TableRow>
  )
}

PersonRow.propTypes = {
    person: PropTypes.object
}

export default PersonRow
