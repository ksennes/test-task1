import React from "react";
import {fromUnixTime, format} from 'date-fns';

import "./single-jog.scss";
import icon from "../../../../img/icon.png";

export const SingleJog = ({ date, distance, time }) => {
  return (
    <div className="single-jog">
      <div className="single-jog__icon">
        <img src={icon} />
      </div>
      <div className="single-jog__details">
        <p className="date">{date}</p>
        <h4>Distance: <span>{distance}</span></h4>
        <h4>Time: <span>{time}</span></h4>
      </div>
    </div>
  );
};
