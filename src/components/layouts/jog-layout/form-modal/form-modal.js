import React from "react";
import { format, parse} from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./form-modal.scss";

import cancel from "../../../../img/cancel.png";

export const FormModal = ({ show, onHide, onSubmit, jogData, handleChange }) => {
  const token = localStorage.getItem("token");

  return (
    <div
      className="modal"
      style={show ? { display: "block" } : { display: "none" }}
    >
      <div className="cancel" onClick={() => onHide()}>
        <img src={cancel} />
      </div>
      <form className="form" onSubmit={e => {
          e.preventDefault();
          onSubmit(jogData, token);
        }}>
        <div className="form-group">
          <label>Distance</label>
          <input
            type="text"
            className="form-control"
            id="distance"
            value={jogData.distance || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="text"
            className="form-control"
            id="time"
            value={jogData.time || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <DatePicker
            selected={parse(jogData.date, 'dd.MM.yyyy', new Date())}
            onChange={date =>
              handleChange({
                target: {
                  id: "date",
                  value: format(date, 'dd.MM.yyyy'),
                },
              })
            }
            dateFormat="dd.MM.yyyy"
            className='form-control'
          />
        </div>
        <button type="submit" className="submit-button" >
          Save
        </button>
      </form>
    </div>
  );
};
