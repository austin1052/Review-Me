import React, { useContext } from 'react';
import { FormContext } from '../Contexts';

const FormName = () => {
  const { nameInput, setNameInput } = useContext(FormContext)
  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
    </>

  )
};

export default FormName;