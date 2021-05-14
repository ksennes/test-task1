import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import "./home-layout.scss";
import bear from "../../../img/bear-face.png";
import bearMobile from "../../../img/bearFace.png";

import { NavigationLayout } from "../navigation-layout/navigation-layout";
import { useSelector, useDispatch } from "react-redux";
import { getTokenSelector } from "../../../redux/modules/auth/auth.selectors";
import { getTokenAction } from "../../../redux/modules/auth/auth.actions";

export const HomeLayout = () => {
  const isLogged = false;
  const token = useSelector(getTokenSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    const getToken = () => dispatch(getTokenAction());
    getToken();
  };

  return (
    <>
      <NavigationLayout isLogged={isLogged} />
      <div className="home-layout">
        <div className="home-layout__block">
          <div className="home-layout__img">
            <Link to="/jog">
              <img src={bear} className="bear" />
              <img src={bearMobile} className="bear-mobile" />
            </Link>
          </div>
          <button className="home-layout__button" onClick={() => handleClick()}>
            Let me in
          </button>
        </div>
      </div>
      {token ? <Redirect to="/jog" /> : ""}
    </>
  );
};
