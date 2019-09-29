export interface IFields {
  [key: string]: string;
}

const validate = (values: any) => {
  const errors: IFields = {};
  if (!values.firstLastName) {
    errors.firstLastName = 'Поле является обязательным';
  } else if (!/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i.test(values.firstLastName)) {
    errors.firstLastName = 'Должно быть минимум два слова';
  }
  if (!values.email) {
    errors.email = 'Поле является обязательным';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email адрес не валиден';
  }

  if (!values.phone) {
    errors.phone = 'Поле является обязательным';
  } else if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,9}$/i.test(values.phone.replace('', ''))) {
    errors.phone = 'Номер телефона не валиден';
  }

  return errors;
};

export default validate;
