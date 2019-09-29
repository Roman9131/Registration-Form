import * as React from 'react';
import cn from 'classnames';
import { WrappedFieldInputProps as InputProps, WrappedFieldMetaProps as MetaProps } from 'redux-form';

import './styles.sass';
import Input from '../Input';

interface IInputFieldProps {
  input: InputProps;
  meta: MetaProps;
  placeholder: string;
  type: string;
}

const InputField = ({ input, type, placeholder, meta }: IInputFieldProps) => {
  const { value } = input;

  const inputContainer = cn({
    'input-container': true,
    'active': meta.active,
  });

  const inputLabel = cn({
    'input-label': true,
    'input-label__top': meta.active || value,
  });

  return (
    <div className="input-wrapper">
      <div className={inputContainer}>
        <p className={inputLabel}>{placeholder}</p>
        <Input type={type} input={input} />
      </div>
      {meta.touched && meta.error
      && <div className="error-text">{meta.error}</div>}
    </div>
  );
};

export default InputField;
