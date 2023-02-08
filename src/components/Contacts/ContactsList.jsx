import PT from 'prop-types';
import { Wraper, Btn } from './Contacts.styled';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <div>
      <Wraper>
        {contacts.map(({ id, name, numder }) => (
          <li key={id} id={id}>
            <span>{name}</span>:<span>{numder}</span>
            <Btn onClick={() => onDelete(id)}>Delete</Btn>
          </li>
        ))}
      </Wraper>
    </div>
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
