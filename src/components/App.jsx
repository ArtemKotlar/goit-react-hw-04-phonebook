import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Forms from './Forms/Forms';
import { Box } from './Box';

const CONTACTS_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = user => {
    const data = { name: user.name, number: user.number, id: nanoid() };

    this.checkDuplicate(user)
      ? alert(`This ${user.name} exist`)
      : this.setState(prev => ({
          contacts: [data, ...prev.contacts],
        }));
  };

  deleteContact = idContact => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => idContact !== contact.id),
    }));
  };

  checkDuplicate = value =>
    this.state.contacts.some(
      ({ name }) => name.toLowerCase() === value.name.toLowerCase()
    );

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value.toLowerCase() });
  };

  filterContacts = () =>
    this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter)
    );

  componentDidMount = () => {
    const parsedContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate = (_, prev) => {
    if (prev.contacts !== this.state.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    }
  };

  render() {
    const filterContacts = this.filterContacts();
    return (
      <Box bg="box" pt={2} pb={8}>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <Forms onSubmit={this.addContact} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter onHandleFilter={this.handleFilter} />
        <ContactsList contacts={filterContacts} onDelete={this.deleteContact} />
      </Box>
    );
  }
}

export default App;
