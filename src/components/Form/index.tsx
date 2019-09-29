import * as React from 'react';
import {
  reduxForm, InjectedFormProps, Field, FieldArray,
} from 'redux-form';

import './styles.sass';
import InputField from '../InputField';
import validate from '../../validate';
import InputFieldsArray from '../InputFieldsArray';

class Form extends React.PureComponent<InjectedFormProps> {
  render() {
    const {
      submitting, reset, handleSubmit, valid,
    } = this.props;

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
      handleSubmit(event);
      if (valid) reset();
    };

    return (
      <div className="form-block">
        <form onSubmit={submit}>
          <Field
            name="firstLastName"
            component={InputField}
            type="text"
            placeholder="Фамилия и Имя"
          />
          <Field
            name="email"
            component={InputField}
            type="text"
            placeholder="email"
          />
          <FieldArray name="phones" component={InputFieldsArray} />
          <button className="button__submit" type="submit" disabled={submitting}>
            <span className="button__submit_helper" />
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'registrationForm',
  validate,
})(Form);
