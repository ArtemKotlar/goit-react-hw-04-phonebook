import { Component } from 'react';
import { nanoid } from 'nanoid';
import FormsList from './Forms/FormsList';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';

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

  render() {
    const filterContacts = this.filterContacts();
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <FormsList onSubmit={this.addContact} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter onHandleFilter={this.handleFilter} />
        <ContactsList contacts={filterContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
