import React, { useState } from 'react';

const FormContext = React.createContext();

const FormProvider = ({ children }) => {
  const [typeInput, setTypeInput] = useState(null);
  const [nameInput, setNameInput] = useState(null);
  const [detailsInput, setDetailsInput] = useState([]);

  const value = { typeInput, setTypeInput, nameInput, setNameInput, detailsInput, setDetailsInput }

  return (
    <FormContext.Provider value={value}>{children}</FormContext.Provider>
  );
};

export { FormContext, FormProvider };