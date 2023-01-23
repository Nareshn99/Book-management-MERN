import "./HeroImage.css";
import React from "react";
import { Link } from 'react-router-dom';
import introImg from "../assets/into-1.jpg";

const HeroImage = () => {
    return <div className="hero">
        <div className="mask">
            <img className="into-img" src={introImg} alt="introImg"></img>
            <div className="contect">
            <h1>Book Management System</h1>
                <div>
                    <Link to="/registor" className="btn btn-light">Registor</Link>
                    <Link to="/login" className="btn btn-light">Login</Link>
                </div>
            </div>
        </div>
    </div>;
};

export default HeroImage;