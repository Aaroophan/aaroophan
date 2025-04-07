import ReactDOM from 'react-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useLocation } from 'react-router-dom';
import Sound from "./Sound";
import Data from './Data';
import BackgroundSingleton from './BackgroundSingleton';
import ServerURL from './ServerURL';

import BG_E1 from "./Images/BG_E1.png"
import BG_E2 from "./Images/BG_E2.png"
import BG_E3 from "./Images/BG_E3.png"
import BG_E4 from "./Images/BG_E4.png"
import BG_E5 from "./Images/BG_E5.png"
import BG_E6 from "./Images/BG_E6.png"
import BG_E7 from "./Images/BG_E7.png"
import BG_E8 from "./Images/BG_E8.png"
import BG_E9 from "./Images/BG_E9.png"

import Footer from './Footer';

export default function Header(){
    const Location = useLocation();
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 50 });
    const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

    let NavLinksDetails = [
        ["/", "bi bi-house-fill me-2", "Home"],
        ["/Technologies", "bi bi-code-slash me-2", "Technologies"],
        ["/Projects", "bi bi-card-list me-2", "Projects"],
        ["/Experiences", "bi bi-buildings-fill me-2", "Experiences"],
        ["/Educations", "bi bi-mortarboard-fill me-2", "Educations"],
        ["/Certificates", "bi bi-patch-check-fill me-2", "Certificates"],
        ["/References", "bi bi-people-fill me-2", "References"],
        ["/Login", "bi bi-person-plus-fill me-2", "Your Own Portfolio !"]
    ];

    let NavLinks = NavLinksDetails.map((LinkDetail, index) => (
        <>
        <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
                scale: [1, 1.2, 0.7, 1.1, 0.9, 1],
                rotate: [0, 10, -8, 3, -12, 0],
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror"
                }
            }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            whileTap={{
                scale: [1, 1.2, 0.7, 1.1, 0.9, 1],
                rotate: [0, 10, -8, 3, -12, 0],
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror"
                }
            }}
        >
        <li className="nav-item nav-link" key={index}>
            <Link to={LinkDetail[0]}>
                <a className={index+1 === NavLinksDetails.length ? `btn btn-outline-info border-0 text-light` : `btn btn-outline-dark border-0 text-light`}>
                    <i className={LinkDetail[1]}></i>
                    {LinkDetail[2].split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1, delay: index * 0.1 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </a>
            </Link>
        </li>
        </motion.span>
        </>
    ));

    
    const [currentTagIndex, setCurrentTagIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagIndex((prevIndex) => 
                (prevIndex + 1) % ServerURL.Data().Main.Backgrounds.length
            );
        }, 8000);

        return () => clearInterval(interval);
    }, []);


    let Header;
    
    if (
        (Location.pathname.split("/")[1] === "Login") || 
        (Location.pathname.split("/")[1] === "Register") || 
        (Location.pathname.split("/")[1] === "Edit")
    )
    {
        Header =    <header>
                        <div class="container-fluids" style={{backdropFilter: 'blur(5px) brightness(90%)'}}>
                            <nav className={`navbar navbar-expand-md navbar-transparent fixed-top bg-transparent`} style={{backdropFilter: 'blur(5px) brightness(90%)', padding: '0.5rem', borderRadius:'25px'}}>
                                <i class="bi bi-code-slash text-secondary fs-6 ms-2 me-2"></i>
                                <Link to="/">
                                    <a class="navbar-brand btn fw-bold font-arial text-light text-decoration-none text-center" id="PageNameA" >Aaroophan's Free Portfolio Maker</a>
                                </Link>
                            </nav>
                        </div>
                    </header>
    }
    else
    {
        Header =    <header>
                        <div class="container-fluids">
                            <nav className={`navbar navbar-expand-md navbar-transparent fixed-top bg-transparent`} style={{backdropFilter: 'blur(10px) brightness(80%)'}}>
                                <a class="bi bi-linkedin text-light fs-2 ms-4 me-2" href="https://www.linkedin.com/in/aaroophan"></a>
                                <Link to="/">
                                    <a class="navbar-brand btn fw-bold fs-3 font-arial text-secondary text-decoration-none" id="PageNameA"  style={{ fontFamily: "Caveat, cursive" }}>
                                        {ServerURL.Data().Main.Name.split(" ")[0].split("").map((letter, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.1, delay: index * 0.1 }}
                                            >
                                            <motion.a
                                            className="list-inline-item text-decoration-none text-light"
                                            animate={{
                                                rotate: [-5, 5],
                                                transition: {
                                                    repeat: Infinity,
                                                    repeatType: 'mirror',
                                                    duration: 0.75,
                                                    ease: "easeInOut",
                                                    delay: index * 0.1
                                                }
                                            }}
                                        >
                                                {letter}
                                                </motion.a>
                                            </motion.span>
                                        ))}
                                    </a>
                                </Link>
                                <button class="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle">
                                    <i class=" bi bi-three-dots text-secondary ms-1 me-1"></i>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        {NavLinks}
                                    </ul>
                                </div>
                                <div class="fixed-top progress bg-transparent rounded-0" style={{height: '5px'}}>
                                    <motion.div class="progress-bar progress-bar-striped progress-bar-animated bg-transparent rounded-5" style={{width: progressWidth}} />
                                </div>
                            </nav>
                        </div>
                    </header>
            };

    // <div className={`bg-${BackgroundSingleton.getBackground()} progress-bar-striped`} style={{fontFamily: 'Comic Sans MS', transition: 'all 1s ease-out', cursor: "default", backgroundImage: `url(${ServerURL.Data().Main.Image})`, backgroundSize: 'cover'}}>
    return(
        <>
    <div className={``} style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            backgroundImage: `url(${ServerURL.Data().Main.Backgrounds[currentTagIndex]})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            filter: 'brightness(90%)',
                            zIndex: 0
                        }}>
    </div>
    <div className={``} style={{
                            fontFamily: 'Comic Sans MS',
                            transition: 'all 1s ease-out',
                            cursor: 'default',
                            zIndex: 1
                        }}>
        {Header}
        <div ref={scrollRef}>
        <br/><br/>
        <Outlet/>
        <br/><br/>
        </div>
        <Footer />
    </div>
    </>
    );
}