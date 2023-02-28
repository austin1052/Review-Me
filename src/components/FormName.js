import React, { useContext } from 'react';
import { FormContext } from '../Contexts';

const FormName = () => {
  const { nameInput, setNameInput, typeInput } = useContext(FormContext)
  return (
    <>
      <h1>What is the name of the {typeInput}?</h1>
      <div className='input'>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </div>
    </>

  )
};

export default FormName;