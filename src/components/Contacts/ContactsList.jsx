import PT from 'prop-types';
import { Wraper, Btn } from './Contacts.styled';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <Wraper>
        {contacts.map(({ id, name, number }) => (
          <li key={id} id={id}>
            {name}:{number}
            <Btn onClick={() => onDelete(id)}>Delete</Btn>
          </li>
        ))}
      </Wraper>
    </>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PT.arrayOf(
    PT.exact({
      id: PT.string,
      name: PT.string,
      number: PT.string,
    })
  ),
  onDelete: PT.func,
};
