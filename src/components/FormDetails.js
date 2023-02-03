import React, { useContext } from 'react';
import { FormContext } from '../Contexts'

const FormDetails = () => {

  const { detailsInput, setDetailsInput } = useContext(FormContext);
  return (
    <>
      <input
        type="text"
        name="details"
        id="details"
        placeholder="ex. Cozy outdoor space"
        value={detailsInput}
        onChange={(e) => setDetailsInput(e.target.value)}
      />
      <button type="submit">Get my review</button>
    </>
  );
};

export default FormDetails;