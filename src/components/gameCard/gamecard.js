import React from "react";
import "./gameCard.css"
import app from ".. /app";

const Card = props => (
    <div className="card"> 
        onClick={() => app.cardClicked()}>
        <div className="imgContainer">
            <img className="img"/>
        </div>
     </div>
);