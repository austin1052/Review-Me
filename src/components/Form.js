import { useState, useContext } from 'react';
import { fetchResponse } from '../api';
import { FormType, FormName, FormDetails } from '../components';
import { FormContext } from "../Contexts";
import '../css/Form.css';
import * as BiIcons from "react-icons/bi";

const Form = () => {

  const [result, setResult] = useState("");
  const [page, setPage] = useState(1);
  const { typeInput, nameInput, detailsInput } = useContext(FormContext)

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

  const submitForm = async () => {
    const response = await fetchResponse(typeInput, nameInput, detailsInput);
    setResult(response.data.choices[0].text)
    // resetInputs();
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  // const resetInputs = () => {
  //   setTypeInput("");
  //   setNameInput("");
  //   setDetailsInput("");
  // }

  return (
    <>
      <div className="form--container">
        <form onSubmit={onSubmit}>
          {getPage()}
        </form>
        <div className="details">
          {
            detailsInput.length > 0 && detailsInput.map((detail) => {
              return (
                <div>
                  <div className="detail">{detail}</div>
                  <div className="delete--detail"></div>
                </div>
              )
            })
          }
        </div>
        <div className="navigation--buttons">
          {page > 1 &&
            <button id="back--button" onClick={prevPage}><BiIcons.BiChevronLeft /> back</button>
          }
          <div></div>
          {((page === 1 && typeInput) || (page === 2 && nameInput)) &&
            <button id="next--button" onClick={nextPage}>next <BiIcons.BiChevronRight /></button>
          }
          {
            page === 3 && detailsInput.length > 0 &&
            <button type="submit" id="submit--button" onClick={submitForm}>get my review</button>
          }
        </div>
      </div>
    </>
  );
};

export default Form;
