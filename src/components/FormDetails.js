import { useState, useContext } from 'react';
import { FormContext } from '../Contexts'

const FormDetails = () => {

  const [currentDetailInput, setCurrentDetailInput] = useState('')
  const { detailsInput, setDetailsInput, nameInput } = useContext(FormContext)

  function addDetail() {
    if (currentDetailInput.length > 0) {
      const updatedDetailsArray = [...detailsInput, currentDetailInput]
      setDetailsInput(updatedDetailsArray)
      setCurrentDetailInput('')
    }
  }

  return (
    <>
      <h1>Tell us some details about {nameInput}</h1>
      <div className='input'>
        <input
          type="text"
          name="details"
          id="details"
          placeholder="ex. Cozy outdoor space"
          value={currentDetailInput}
          onChange={(e) => setCurrentDetailInput(e.target.value)}
        />
        <button className="add--details" onClick={addDetail}><div></div></button>
      </div>
    </>
  );
};

export default FormDetails;