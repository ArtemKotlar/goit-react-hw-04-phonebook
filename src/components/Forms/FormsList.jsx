import { Formik } from 'formik';
import PT from 'prop-types';
import { Component } from 'react';
import { Wrap, Input, Title, Btn } from './Forms.styled';

class FormsList extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSudmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <Formik>
        <Wrap action="" onSubmit={this.handleSudmit}>
          <label htmlFor="">
            <Title>Name</Title>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>

          <label htmlFor="">
            <Title>Number</Title>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>
          <Btn type="submit">Add contact</Btn>
        </Wrap>
      </Formik>
    );
  }
}
export default FormsList;

FormsList.propTypes = {
  onSubmit: PT.func,
};
