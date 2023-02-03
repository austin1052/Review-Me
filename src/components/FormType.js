import React, { useState, useContext, useEffect } from 'react';
import DropdownArrow from './DropdownArrow.js';
import { FormContext } from '../Contexts'

const optionsList = [
  "Product",
  "Restaurant",
  "Shop",
  "Austin",
  "Game",
  "Experience",
  "Hotel"
];

const FormType = () => {
  // const [isMounted, setIsMounted] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();


  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const { setTypeInput } = useContext(FormContext);

  useEffect(() => {
    setTypeInput(optionsList[selectedOption])
  }, [selectedOption, setTypeInput])

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
          {selectedOption !== undefined ? optionsList[selectedOption] : "Choose a review type"}
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
              id={option}
              role="option"
              tabIndex={0}
              aria-selected={selectedOption === index}
              onClick={() => {
                setSelectedOption(index);
                setIsOptionsOpen(false);
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