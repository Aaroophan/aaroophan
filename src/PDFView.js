import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Photo from "./Images/Aaroophan - Portrait - 2023.jpeg";
import AFC from "./Images/afcplc_logo.jpeg";
import UoB from "./Images/UoB.png";
import SCU from "./Images/SLIITA.png";
import SMC from "./Images/SMC.png";
import Ude from "./Images/Udemy.png";
import LI from "./Images/LI.png";
import MT from "./Images/MT.jpeg";
import LD from "./Images/LocDev.jpeg";
import Dom from "./Images/Dom.jpeg";
import ML from "./Images/ML.png";
import TT from "./Images/TT.jpeg";
import BB from "./Images/BB1.png";
import EM from "./Images/EveryMoveProgress.png";
import TD from "./Images/2D.png";

import MDB from "./Images/mdb.png";
import Exp from "./Images/express.png";
import Rct from "./Images/react.png";
import njs from "./Images/nodejs.png";
import html from "./Images/html.png";
import css from "./Images/css.png";
import js from "./Images/JavaScript.png";
import jav from "./Images/java.jpg";
import py from "./Images/python.jpg";
import php from "./Images/PHP.png";
import fl from "./Images/flask.png";
import oai from "./Images/openai.png";
import msql from "./Images/mysql.jpg";
import psql from "./Images/postgres.png";

import ai from "./Images/AI.png";
import ae from "./Images/ae.png";
import may from "./Images/maya.jpg";

import Cube from './Cube';
import Text3D from './Text3D';
import TextVar from './TextVar';
import ThemeSet from './ThemeSet';
import ThemeSingleton from './ThemeSingleton';
import EducationSlider from './EducationSlider';
import CertificatesSlider from './CertificatesSlider';
import ExperienceSlider from './ExperienceSlider';
import ProjectsSlider from './ProjectsSlider';

export default function PDVView(){
    const [opacity, setOpacity] = useState(0);
    const [top, setTop] = useState('-100%');

    useEffect(() => {
        setOpacity(1);
        setTop('0%');
    }, []);

    return(
        <div className="row gx-3 text-center justify-content-center" style={{ opacity: opacity, transform: `translateY(${top})`, transition: 'all 1s ease-out' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div id="LoginHere" className="col-lg-3 text-white">
                <ul class="list-inline">
                    <h5 class={`list-inline-item fw-bold text-white btn btn-${ThemeSingleton.getTheme()} border-5 rounded-5`} style={{ cursor:'pointer'}}><a class="m-3 text-white" style={{textDecoration:'none'}} href="https://drive.google.com/file/d/1CWpgw9KkJ9OXBvsHQiXlu2l8uY1mJumy/view?usp=drivesdk" >View CV</a></h5>
                    <h5 class={`list-inline-item fw-bold text-white btn btn-outline-${ThemeSingleton.getTheme()} border-5 rounded-5`} style={{ cursor:'pointer'}}><a class="text-white" style={{textDecoration:'none'}} href="https://drive.google.com/file/d/1KwHQWKoG-Yna4aTJcLhq4MRJbA884SFF/view?usp=sharing" download>Download CV</a></h5>
                </ul>
            </div>
            <div className=" col-lg-8 ">
                <ul class="list-inline">
                    <h5 class={`list-inline-item text-white border border-${ThemeSingleton.getTheme()} border-5 rounded-5`} style={{ cursor:'pointer'}}><h5 class="m-3" >+94768505131</h5></h5>
                    <h5 class={`list-inline-item text-white border border-${ThemeSingleton.getTheme()} border-5 rounded-5`} style={{ cursor:'pointer'}}><h5 class="m-3" >arophn@gmail.com</h5></h5>
                </ul>
            </div>
            <br/>
            <div className="row gx-3 text-center justify-content-center">
                <div id="CVSpace" className="col-lg-7 text-white"></div>
            </div>
            <br/>
        </div>
    );
}