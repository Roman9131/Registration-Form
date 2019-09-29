import * as React from 'react';
import { WrappedFieldInputProps as InputProps } from 'redux-form';

import './styles.sass';

interface IInputProps {
  input: InputProps;
  type: string;
}

const Input = ({ type, input }: IInputProps) => (
  <input className="input" type={type} {...input} />
);

export default Input;
