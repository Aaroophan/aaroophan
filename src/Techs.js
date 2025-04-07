import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from 'react-router-dom';
import { motion, useInView } from "framer-motion";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSwipeable } from 'react-swipeable';

import Data from './Data';
import ServerURL from './ServerURL';

export default function Techs() {
    const ref = [];
    ref[0] = useRef(null);
    ref[1] = useRef(null);
    ref[2] = useRef(null);
    ref[3] = useRef(null);
    ref[4] = useRef(null);
    ref[5] = useRef(null);
    ref[6] = useRef(null);
    ref[7] = useRef(null);
    const isInView = [];
    isInView[0] = useInView(ref[0], { once: false, threshold: 0.2 });
    isInView[1] = useInView(ref[1], { once: false, threshold: 0.2 });
    isInView[2] = useInView(ref[2], { once: false, threshold: 0.2 });
    isInView[3] = useInView(ref[3], { once: false, threshold: 0.2 });
    isInView[4] = useInView(ref[4], { once: false, threshold: 0.2 });
    isInView[5] = useInView(ref[5], { once: false, threshold: 0.2 });
    isInView[6] = useInView(ref[6], { once: false, threshold: 0.2 });
    isInView[7] = useInView(ref[7], { once: false, threshold: 0.2 });
    const ref2 = [];
    ref2[0] = useRef(null);
    ref2[1] = useRef(null);
    ref2[2] = useRef(null);
    ref2[3] = useRef(null);
    ref2[4] = useRef(null);
    ref2[5] = useRef(null);
    ref2[6] = useRef(null);
    ref2[7] = useRef(null);
    const isInView2 = [];
    isInView2[0] = useInView(ref2[0], { once: false, threshold: 0.2 });
    isInView2[1] = useInView(ref2[1], { once: false, threshold: 0.2 });
    isInView2[2] = useInView(ref2[2], { once: false, threshold: 0.2 });
    isInView2[3] = useInView(ref2[3], { once: false, threshold: 0.2 });
    isInView2[4] = useInView(ref2[4], { once: false, threshold: 0.2 });
    isInView2[5] = useInView(ref2[5], { once: false, threshold: 0.2 });
    isInView2[6] = useInView(ref2[6], { once: false, threshold: 0.2 });
    isInView2[7] = useInView(ref2[7], { once: false, threshold: 0.2 });

    const [slidesToShow, setSlidesToShow] = useState(window.innerWidth < 1000 ? 5 : 10);

    useEffect(() => {
        const handleResize = () => {
            setSlidesToShow(window.innerWidth < 1000 ? 5 : 10);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    };

    const TechnologyComponents = ServerURL.Data().Technologies.map((TechnologyComponent, index1) => {
        return TechnologyComponent[1].map((TechnologyComponentDetail, index) => (
            <motion.div
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
            <div className="p-4 mt-4 mb-3">
                <div className="zoom card text-white bg-transparent border border-0">
                    <img ref={ref2[index]} src={TechnologyComponentDetail[0]} class="boxshadow bg-secondary rounded-4 w-100"/>
                    <div className="card-body rounded-4" >
                        <p className="card-text w-100" style={{fontSize:"10px"}} >{TechnologyComponentDetail[1]}</p>
                    </div>
                </div>
            </div>
            </motion.div>
        ));
    });

    const TechnologyTypes = ServerURL.Data().Technologies.map((TechnologyType, index) => (
        <><motion.div
                    initial={{ opacity: 0}}
                    animate={isInView[index] ? { opacity: 1} : { opacity: 0}}
                    transition={{ duration: 0.5 }}
                >
        <div ref={ref[index]} className="row gx-3 text-center justify-content-center">
            <div className="col-lg-0 d-flex align-items-center">
                {/* <h4 class="fw-bold text-white">{TechnologyType[0].split("").map((letter, letterindex) => (
                            <motion.span
                                key={letterindex}
                                initial={{ opacity: 0 }}
                                animate={isInView[index] ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.01, delay: letterindex * 0.05 }}
                            >
                                {letter}
                            </motion.span>
                        ))}</h4><br/> */}
            </div>
            <div className="col-lg-12 col-sm-6" style={{ overflow: 'visible' }} >
                <Slider {...settings}>
                    {TechnologyComponents[index]}
                </Slider>
            </div>
        </div>
        </motion.div></>
    ));
    let Title = "What I Know...";
    
    return (
        <div className="container text-center pt-5 pb-5">
            <h2 class="floating textshadow fw-bold text-white mb-4 mt-4" style={{ cursor:'default'}}>
                {Title.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={isInView[0] ? { opacity: 1 } : { opacity: 0 }}
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
                        ))}</h2><br/>
            {TechnologyTypes}
        </div>
    );
}
