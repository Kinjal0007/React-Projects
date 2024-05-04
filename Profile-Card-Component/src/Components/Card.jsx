import React,{useState} from "react";
import "./Card.css"
import bg from '../assets/logo.jpg'

function Card ({ Name, job, about }){
    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={bg} alt="Internal Error" height ="100px" width="100px"/>
                </div>
            </div>
            <div className="lower-container">
                <h3>{Name}</h3>
                <h4>{job}</h4>
                <p> {about} </p>
                <button>Visit Profile</button>
            </div>
        </div>
    )
}

export default Card