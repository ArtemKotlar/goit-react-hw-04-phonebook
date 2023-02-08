import styled from 'styled-components';

export const Wrap = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 20px auto 0 auto;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 57%);
  border-radius: 5px;
  padding: 20px;
  border: 1px solid black;
  background-color: #92e0e0;
`;

export const Input = styled.input`
  border: none;
  outline: transparent;
  padding: 10px;
  margin: 0;
  border-radius: 3px;
`;

export const Title = styled.p`
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  width: 150px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: #5ceb39b2;
  color: black;
  padding: 7px 14px;
  margin: auto;
  margin-top: 15px;
  font-size: 14px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #ffa3a3;
  }
`;
