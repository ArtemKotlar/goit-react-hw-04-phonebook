import { Box } from 'components/Box';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Input, Btn, Title } from './Forms.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const Forms = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    // console.log('values: ', values);
    const newContact = {
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Box
        p={4}
        m="auto"
        bg="primary"
        width=" 300px"
        display="flex"
        flexDirection="column"
        textAlign="center"
        borderRadius="normal"
        border="normal"
        boxShadow="shadow"
      >
        <Form autoComplete="off">
          <label htmlFor="name">
            <Title>Name</Title>
            <Input type="text" name="name" placeholder="Full name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor="number">
            <Title>Number</Title>
            <Input type="tel" name="number" placeholder="Phone number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <Btn type="submit">Add contact</Btn>
        </Form>
      </Box>
    </Formik>
  );
};

export default Forms;
