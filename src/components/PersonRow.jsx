import PropTypes from "prop-types";
import { Button, TableCell, TableRow } from "@mui/material";

function PersonRow({ person, onDelPerson, onEditPerson }) {
  return (
    <TableRow>
      <TableCell>{person.id}</TableCell>
      <TableCell>{person.name}</TableCell>
      <TableCell>{person.username}</TableCell>
      <TableCell>{person.email}</TableCell>
      <TableCell>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            onEditPerson(person);
          }}
        >
          Edit
        </Button>
        &nbsp;
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            onDelPerson(person.id);
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

PersonRow.propTypes = {
  person: PropTypes.object.isRequired,
  onDelPerson: PropTypes.func.isRequired,
  onEditPerson: PropTypes.func.isRequired,
};

export default PersonRow;
