import React from 'react';

import Form from './components/Form';

export interface IValues {
  firstLastName: string;
  email: string;
  phone: string;
  phones?: Phones[]
}

export interface Phones {
  phone: string;
}

const App: React.FC = () => {
  const showUserInfo = (user: IValues) => {
    const phones: string[] = [user.phone];
    if (user && user.phones && user.phones.length) {
      user.phones.forEach((item) => phones.push(item.phone));
    }

    alert(`Вы зарегистрированы,
    Фамилия и Имя: ${user.firstLastName},
    email: ${user.email},
    Телефон(ы): ${phones.toString()}`);
  };

  return (
    <div className="form-container">
      <Form onSubmit={showUserInfo} />
    </div>
  );
};

export default App;
