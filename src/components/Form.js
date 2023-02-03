import { useState, useContext } from 'react';
import { fetchResponse } from '../api';
import { FormType, FormName, FormDetails } from '../components';
import { FormContext } from "../Contexts";
import '../css/Form.css';
import * as BiIcons from "react-icons/bi";

const Form = () => {

  const [result, setResult] = useState("");
  const [page, setPage] = useState(1);
  const { typeInput, setTypeInput, nameInput, setNameInput, detailsInput, setDetailsInput } = useContext(FormContext)

  console.log(result);
  const getPage = () => {
    switch (page) {
      case 1:
        return <FormType />
      case 2:
        return <FormName />;
      case 3:
        return <FormDetails />;
      default:
        return <FormType />;
    }
  }

  const nextPage = () => {
    if (page < 3) {
      setPage(page + 1);
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchResponse(typeInput, nameInput, detailsInput);
    setResult(response.data.choices[0].text)
    resetInputs();
  }

  const resetInputs = () => {
    setTypeInput("");
    setNameInput("");
    setDetailsInput("");
  }

  return (
    // <div className="center">
    <>
      <div className="form--container">
        <form onSubmit={onSubmit}>
          {getPage()}
        </form>
        <div className="navigation--buttons">
          {page > 1 &&
            <button id="back--button" onClick={prevPage}><BiIcons.BiChevronLeft /> back</button>
          }
          <div></div>
          {page < 3 &&
            <button id="next--button" onClick={nextPage}>next <BiIcons.BiChevronRight /></button>
          }
        </div>

      </div>
    </>
    // </div>
  );
};

export default Form;
