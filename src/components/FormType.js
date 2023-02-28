import React, { useState, useContext } from 'react';
import DropdownArrow from './DropdownArrow.js';
import { FormContext } from '../Contexts'

const optionsList = [
  "Product",
  "Restaurant",
  "Shop",
  "Game",
  "Experience",
  "Hotel"
];

const FormType = () => {
  const { typeInput, setTypeInput } = useContext(FormContext);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <>
      <div className="form--type--container">
        <h1>What would you like to review?</h1>
        <button
          type="button"
          className="form--type--selector"
          onClick={toggleOptions}
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
        >
          {typeInput && typeInput !== undefined ? typeInput : "Choose a review type"}
          <DropdownArrow isOptionsOpen={isOptionsOpen} />
        </button>
      </div>
      <div className="form--type--options">
        <ul
          className={`options ${isOptionsOpen ? "show" : ""}`}
          tabIndex={-1}
        // onAnimationEnd={() => { if (!isMounted) setIsOptionsOpen(false) }}
        >
          {optionsList.map((option, index) => (
            <li
              key={option}
              id={option}
              role="option"
              tabIndex={0}
              aria-selected={typeInput === index}
              onClick={() => {
                // setSelectedOption(index);
                setIsOptionsOpen(false);
                setTypeInput(optionsList[index])
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FormType;