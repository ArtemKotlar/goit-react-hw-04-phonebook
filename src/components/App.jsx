import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Forms from './Forms/Forms';
import { Box } from './Box';

const CONTACTS_KEY = 'contacts';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(CONTACTS_KEY)) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts)),
    [contacts]
  );

  const checkDuplicate = value =>
    contacts.some(
      ({ name }) => name.toLowerCase() === value.name.toLowerCase()
    );

  const addContact = user => {
    const data = {
      name: user.name,
      number: user.number,
      id: nanoid(),
    };

    checkDuplicate(user)
      ? alert(`This ${user.name} exist`)
      : setContacts([data, ...contacts]);
  };

  const deleteContact = idContact => {
    setContacts(prev => prev.filter(contact => idContact !== contact.id));
  };

  const handleFilter = event => {
    setFilter(event.currentTarget.value.toLowerCase());
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Box bg="box" pt={2} pb={8}>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <Forms onSubmit={addContact} />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter onHandleFilter={handleFilter} />
      <ContactsList contacts={filterContacts} onDelete={deleteContact} />
    </Box>
  );
}

export default App;
