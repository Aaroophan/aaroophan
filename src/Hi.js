import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion, useInView } from "framer-motion"
import { useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './index.css';

import Photo from "./Images/Aaroophan - Portrait - 2024.jpg";

import ThemeSingleton from './ThemeSingleton';
import Data from './Data';
import ServerURL from './ServerURL';
import FramerMotion from './FramerMotion';
import Particles from './Particle';
import { findAllByDisplayValue } from '@testing-library/react';

export default function Hi(){
    
    // let { scrollY } = useScroll()

    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log("Page scroll: ", latest);
    // })

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.2 });

    let Tags = ServerURL.Data().Main.Tags.map((Tag, index) => (
        <div className="col-lg-4 w-100">
            <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{delay: index * 0.1 }}
                whileHover={{
                        scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                        rotate: [0, 3, -2, 1.5, -1, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                        }
                    }}
                whileTap={{
                        scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                        rotate: [0, 3, -2, 1.5, -1, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                        }
                    }}
            >
            <h6 class="textshadow zoom fw-bold mb-4 text-white text-decoration-none w-100">
                {Tag.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.1, delay: index * 0.1 }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </h6>
            </motion.div>
        </div>
    ));

    const Tagz = [];
    ServerURL.Data().Main.Tags.forEach((Tag, index) => {
        Tagz.push(
            <div className="col-lg-4 w-100" key={index}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                        scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                        rotate: [0, 3, -2, 1.5, -1, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                        }
                    }}
                    whileTap={{
                        scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                        rotate: [0, 3, -2, 1.5, -1, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                        }
                    }}
                >
                    <h6 className="textshadow zoom fw-bold mb-4 text-white text-decoration-none w-100">
                        {Tag.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={letterIndex}
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.1, delay: letterIndex * 0.1 }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h6>
                </motion.div>
            </div>
        );
    });


    const Links = ServerURL.Data().Main.Links.map((Link, index) => (
        <>
        <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
                        scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                        rotate: [0, 3, -2, 1.5, -1, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                        }
                    }}
            whileTap={{
                        scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                        rotate: [0, 3, -2, 1.5, -1, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                        }
                    }}
        >

        <motion.h1
            className="list-inline-item"
            animate={{
                y: [-25, 25],
                transition: {
                    repeat: Infinity,
                    repeatType: 'mirror',
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: index * 0.1
                }
            }}
        >
            <h1 class="textshadow spin list-inline-item ms-2 me-2" style={{ cursor:'default', fontsize: '60px', color:'rgba(210, 226, 250, 0.9)' }}>
                <a href={Link.Href}>
                    <i class={`bi bi-${Link.Icon} text-light ms-2 me-2`}></i>
                </a>
            </h1>
        </motion.h1>
        </motion.span>
        </>
    ));


    const [currentTagIndex, setCurrentTagIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentTagIndex((prevIndex) => (prevIndex + 1) % ServerURL.Data().Main.Tags.length);
                setIsVisible(true);
            }, 1000); // 1s delay before switching tags
        }, 4000); // Change tag every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const [Quote, setQuote] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(ServerURL.Server()+"/quote");

                let data = await response.json();

                if(data){
                    setQuote(data[0]);
                }

            } 
            catch (err) {
            }
        };

        fetchUserData();

    }, []);

    const [currentTagIndex2, setCurrentTagIndex2] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagIndex2((prevIndex) => 
                (prevIndex + 1) % ServerURL.Data().Main.Images.length
            );
        }, 7500);

        return () => clearInterval(interval);
    }, []);


    return(
        <>
        {window.innerWidth < 1000 ? null : <><br/><br/></>}
        {/* <Particles/> */}
        <div ref={ref} className={window.innerWidth < 1000 ? `container row gx-2 text-center justify-content-center` : `row gx-2 mx-5 text-center justify-content-center p-3`}>
            <div id="LoginHere" className="col-lg-4 text-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: [0, 1.2, 1] } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    whileHover={{
                        scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                        rotate: [0, 3, -2, 1.5, -1, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                        }
                    }} 
                    whileTap={{
                        scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                        rotate: [0, 3, -2, 1.5, -1, 0],
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                        }
                    }}
                >
                    {/* <img alt="Aaroophan" effect="blur" src={ServerURL.Data().Main.Images[currentTagIndex2]} height="300px" width="300px" class={`img-fluid floating boxshadow zoom rounded-1 border border-${ThemeSingleton.getTheme()} border-2 rounded-5`} /> */}
                </motion.div>
                <br/><br/>
                <p class="zoom textshadow"  style={{ fontFamily: "Caveat, cursive" }} dangerouslySetInnerHTML={{ __html: (Quote) && window.innerWidth > 1000 ? Quote.h : "" }} />
                <br/>
            </div>
            <div className=" col-lg-7">
                <div className="card  text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none', display: 'flex', alignItems: 'center' }} id="Box">
                    <h5 id="HomeName" class="zoom fw-bold mb-4">
                        {ServerURL.Data().Main.Greeting.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.1, delay: index * 0.1 }}
                                whileHover={{
                                    scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                                    rotate: [0, 3, -2, 1.5, -1, 0],
                                    transition: {
                                        duration: 1,
                                        ease: "easeInOut",
                                    }
                                }}
                                whileTap={{
                                    scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                                    rotate: [0, 3, -2, 1.5, -1, 0],
                                    transition: {
                                        duration: 1,
                                        ease: "easeInOut",
                                    }
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h5>
                    <div>
                        <motion.h2 id="HomeName" class="textshadow zoom display-3 fw-bold mb-4 container text-wrap"  style={{ fontFamily: "Caveat, cursive" }} >
                            {ServerURL.Data().Main.Name.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.1, delay: index * 0.1 }}
                                    whileHover={{
                                        scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                                        rotate: [0, 3, -2, 1.5, -1, 0],
                                        transition: {
                                            duration: 1,
                                            ease: "easeInOut",
                                        }
                                    }}
                                    whileTap={{
                                        scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                                        rotate: [0, 3, -2, 1.5, -1, 0],
                                        transition: {
                                            duration: 1,
                                            ease: "easeInOut",
                                        }
                                    }}
                                >
                                    {letter === " " ? (
                                        <span>&nbsp;</span>
                                    ) : (
                                        <motion.a
                                            className="list-inline-item text-decoration-none text-light"
                                            animate={{
                                                x: [-1, 1],
                                                y: [-1, 1],
                                                scale: [1, 1.1],
                                                transition: {
                                                    repeat: Infinity,
                                                    repeatType: 'mirror',
                                                    duration: 1,
                                                    ease: "easeInOut",
                                                    delay: index * 0.1
                                                }
                                            }}
                                        >
                                            {letter}
                                        </motion.a>
                                    )}
                                </motion.span>
                            ))}
                        </motion.h2>
                    </div>
                    <div>
                        {/* <div className="row gx-3 text-center justify-content-center">
                            {Tags}
                        </div> */}
                        <div className="row gx-3 mb-4 text-center justify-content-center">
                            <h5 className="textshadow zoom fw-bold m-4 text-white text-decoration-none w-100" style={{ fontFamily: 'Consolas, Courier New, monospace' }}>
                                {ServerURL.Data().Main.Tags[currentTagIndex].split("").map((letter, index) => (
                                    <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{
                                        duration: 0.25,
                                        delay: index * 0.01,
                                    }}
                                    >
                                    {letter}
                                    </motion.span>
                                ))}
                            </h5>
                        </div>






                    </div>
                    <br/><br/>
                    <ul class="list-inline">
                            {Links}
                    </ul>
                    <br/><br/>
                </div>
            </div>
        </div>
        {window.innerWidth < 1000 ? null : <><br/><br/><br/><br/></>}
        </>
    );
}