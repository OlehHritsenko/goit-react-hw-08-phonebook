import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 320px;
  background-color: transparent;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Label = styled.span`
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: #000;
`;

const Input = styled.input`
  width: 250px;
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  box-shadow: 3px 5px 10px -2px rgba(75, 92, 165, 0.5);
  &:hover,
  &:focus,
  &:active {
    outline: 0;
    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.5) inset;
  }
`;

const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  background-color: rgba(9, 9, 121);
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.263);
  box-shadow: 3px 5px 10px -2px rgba(75, 92, 165, 0.5);
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background-color: rgba(9, 9, 121, 0.9);
    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.5) inset;
  }
`;

export { Form, Field, Label, Input, Submit };
