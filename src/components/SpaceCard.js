import React from "react";
import "./space.css";

import DateForm from './DateForm';

export const SpaceCard = props => {
    console.log(props.spaceData);
    console.log(props.date)
    

  return (
    <div className="main-container">
      <div className="title-box">
          
        <h1 className="main-title">{props.spaceData.title}</h1>
        
      </div>
      <div className="image-box">
        <img
          className="img"
          alt={props.spaceData.title}
          src={props.spaceData.url}
        />
      </div>
      <div className="info-box">
        <h2>{props.spaceData.copyright ? `Picture Taken by ${props.spaceData.copyright}` : null }</h2>

        <p>{props.spaceData.explanation}</p>

        <p>Picture of the day for: {props.spaceData.date}</p>
      </div>
    </div>
  );
};
