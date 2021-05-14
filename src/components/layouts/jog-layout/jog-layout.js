import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./jog-layout.scss";
import sad from "../../../img/sad-rounded-square-emoticon.png";
import editPen from "../../../img/pen.png";
import { NavigationLayout } from "../navigation-layout/navigation-layout";
import { SingleJog } from "./single-jog/single-jog";
import { AddButton } from "./add-button/add-button";
import { FormModal } from "./form-modal/form-modal";

import {
  getJogsSelector,
  getPending,
} from "../../../redux/modules/jogs/jogs.selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  getJogsAction,
  addJogAction,
  editJogAction,
} from "../../../redux/modules/jogs/jogs.actions";
import { format, parse } from "date-fns";

export const JogLayout = () => {
  const isLogged = true;
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const jogs = useSelector(getJogsSelector);
  const pending = useSelector(getPending);

  const addJog = (token, jog) => dispatch(addJogAction(token, jog));
  const editJog = (token, jog) => dispatch(editJogAction(token, jog));

  const [showAddModal, setShowAddMOdal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingJog, setEditingJog] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  let filteredJogs = [];

  const [jogData, setJogData] = useState({
    distance: " ",
    time: " ",
    date: format(new Date(), "dd.MM.yyyy"),
    jog_id: "",
    user_id: "",
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const getJogs = () => dispatch(getJogsAction(token));
    getJogs();
  }, [dispatch]);

  const handleOpenEditModal = (jog) => {
    setJogData(jog);
    setEditingJog(true);
    setShowEditModal(true);
  };

  const handleOpenModal = () => {
    setJogData({
      distance: "",
      time: "",
      date: format(new Date(), "dd.MM.yyyy"),
    });
    setShowAddMOdal(true);
  };

  const handleFilter = () => {
    if (showFilter) {
      setStartDate(null);
      setEndDate(null);
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
  };

  const filter = () => {
    const start = startDate ? new Date(startDate) : new Date(null);
    const end = endDate ? new Date(endDate) : new Date();
    
    return jogs.filter((jog) => {
      const date = parse(jog.date, "dd.MM.yyyy", new Date());
      return date >= start && date <= end;
    });
  };

  if (startDate || endDate) filteredJogs = filter();

  const handleChange = (e) => {
    setJogData({
      ...jogData,
      [e.target.id]: e.target.value,
    });
  };

  const handleAddJog = (jog, token) => {
    addJog(token, jog);
    setShowAddMOdal(false);
  };

  const handleEditJog = (jog, token) => {
    editJog(token, jog);
    setShowEditModal(false);
    setEditingJog(false);
  };

  return (
    <>
      <NavigationLayout
        isLogged={isLogged}
        activeLink="JOGS"
        isFilterOpen={showFilter}
        handleFilter={handleFilter}
      />
      {pending ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="jog-layout">
          <div
            className="filter"
            style={showFilter ? { display: "flex" } : { display: "none" }}
          >
            <div className="date-picker">
              <h5>Date from</h5>
              <DatePicker
                dateFormat="dd.MM.yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
            </div>
            <div className="date-picker">
              <h5>Date to</h5>
              <DatePicker
                dateFormat="dd.MM.yyyy"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
          </div>
          {jogs ? (
            <>
              <div className="jog-layout__list">
                {startDate || endDate
                  ? filteredJogs.map((jog, index) => (
                      <>
                        <div className="container">
                          <SingleJog {...jog} key={index} />
                          <div
                            className="edit-pen"
                            onClick={() => handleOpenEditModal(jog)}
                          >
                            <img src={editPen} />
                          </div>
                        </div>
                      </>
                    ))
                  : jogs.map((jog, index) => (
                      <>
                        <div className="container">
                          <SingleJog {...jog} key={index} />
                          <div
                            className="edit-pen"
                            onClick={() => handleOpenEditModal(jog)}
                          >
                            <img src={editPen} />
                          </div>
                        </div>
                      </>
                    ))}
              </div>
              <AddButton onClick={() => handleOpenModal()} />
            </>
          ) : (
            <div className="nothing-found">
              <div className="nothing-found__img">
                <img src={sad} />
              </div>
              <p>Nothing is there</p>
              <button
                className="nothing-found__add-button"
                onClick={() => handleOpenModal()}
              >
                Create your jog first
              </button>
            </div>
          )}
          <FormModal
            show={showAddModal}
            onHide={() => setShowAddMOdal(false)}
            jogData={jogData}
            handleChange={(e) => handleChange(e)}
            onSubmit={(jogData, token) => handleAddJog(jogData, token)}
          />
          {editingJog && (
            <FormModal
              show={showEditModal}
              onHide={() => setShowEditModal(false)}
              jogData={jogData}
              handleChange={(e) => handleChange(e)}
              onSubmit={(jogData, token) => handleEditJog(jogData, token)}
            />
          )}
        </div>
      )}
    </>
  );
};
