import PT from 'prop-types';
import { Wraper, Title, Input } from './Filter.styled';

const Filter = ({ onHandleFilter }) => {
  return (
    <Wraper>
      <label htmlFor="">
        <Title>Find contacts by name</Title>
        <Input type="text" onChange={onHandleFilter} />
      </label>
    </Wraper>
  );
};

export default Filter;

Filter.propTypes = {
  onHandleFilter: PT.func.isRequired,
};
