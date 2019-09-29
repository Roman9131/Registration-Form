import React from 'react';
import { Field } from 'redux-form';

import './styles.sass';
import InputField from '../InputField';

const InputFieldsArray = ({ fields }: any) => {
  return (
    <ul className="list">
      <li className="list-item">
        <button className="button button__add" type="button" onClick={() => fields.push({})}>
          <p />
        </button>
        <Field
          name="phone"
          type="phone"
          component={InputField}
          placeholder="Телефон"
        />
      </li>
      {fields.map((member: string, index: number) => (
        <li key={index} className="list-item">
          <button
            className="button button__remove"
            type="button"
            title="Remove Member"
            onClick={() => fields.remove(index)}>
            <p />
          </button>
          <Field
            name={`${member}.phone`}
            type="phone"
            component={InputField}
            placeholder={`Доп телефон №${index + 1}`}
          />
        </li>
      ))}
    </ul>
  );
};


export default InputFieldsArray;
