import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import ThemeSet from './ThemeSet';
import BackgroundSingleton from './BackgroundSingleton';
import EducationSlider from './EducationSlider';
import CertificatesSlider from './CertificatesSlider';
import ExperienceSlider from './ExperienceSlider';
import ProjectsSlider from './ProjectsSlider';
import Techs from './Techs';
import Hi from './Hi';
import AboutMe from './AboutMe';
import Contact from './ContactModal';
import References from './References';
import Cube from './Cube';
import Text3D from './Text3D';
import Man3d from './Man3D';
import Header from './Header.js';
import Footer from './Footer.js';
import ServerURL from './ServerURL';
import Confetti from './Confetti.js';
import ThemeSingleton from './ThemeSingleton.js';

export default function HomePage() {
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", Math.round(latest/58))
    })
    return (
        <>
            <br/><br/><br/><br/>
            
            <div className="text-center">
                <div className="position-fixed top-0 start-0 w-100 bg-transparent">{(ServerURL.Data().Main.Name.split(" ")[0] === "Aaroophan") ? <><Confetti Colors={['#6c757d']} /><Confetti/></> : ""}</div>
                <Hi/>
                <hr className={`border border-${ThemeSingleton.getTheme()} border-2 ms-5 me-5 text-${ThemeSingleton.getTheme()}`}/>
                <AboutMe/>
                <hr className={`border border-${ThemeSingleton.getTheme()} border-2 ms-5 me-5 text-${ThemeSingleton.getTheme()} mt-5`}/>
                <Techs/>
                <hr className={`border border-${ThemeSingleton.getTheme()} border-2 ms-5 me-5 text-${ThemeSingleton.getTheme()}`}/>
                <ProjectsSlider/>
                <hr className={`border border-${ThemeSingleton.getTheme()} border-2 ms-5 me-5 text-${ThemeSingleton.getTheme()}`}/>
                <ExperienceSlider/>
                <hr className={`border border-${ThemeSingleton.getTheme()} border-2 ms-5 me-5 text-${ThemeSingleton.getTheme()}`}/>
                <EducationSlider/>
                <hr className={`border border-${ThemeSingleton.getTheme()} border-2 ms-5 me-5 text-${ThemeSingleton.getTheme()}`}/>
                <CertificatesSlider/>
                <hr className={`border border-${ThemeSingleton.getTheme()} border-2 ms-5 me-5 text-${ThemeSingleton.getTheme()}`}/>
                <References/>
                <hr className={`border border-${ThemeSingleton.getTheme()} border-2 ms-5 me-5 text-${ThemeSingleton.getTheme()}`}/>
                <ThemeSet/>
                <hr className={`border border-${ThemeSingleton.getTheme()} border-2 ms-5 me-5 text-${ThemeSingleton.getTheme()}`}/>
                {/* <div className="row gx-6 text-center justify-content-center container">
                    <div className="col-lg-4 text-white" style={{textAlign: 'justify'}}>
                        <Cube/>
                    </div>
                </div> */}
            </div>
        </>
    );
}