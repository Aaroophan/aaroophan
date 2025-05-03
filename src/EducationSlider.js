import React, { useRef, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSwipeable } from 'react-swipeable';
import { motion, useInView } from "framer-motion";
import ThemeSingleton from './ThemeSingleton';
import ServerURL from './ServerURL';

const EducationSlider = () => {
    const DivRef = useRef(null);
    const DivisInView = useInView(DivRef, { once: false, threshold: 0.2 });
    
    // Initialize refs and view states directly (no callbacks)
    const RefTitle = useRef(null);
    const ref = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];
    
    const ref2 = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const isInView = [
        useInView(ref[0], { once: false, threshold: 0.2 }),
        useInView(ref[1], { once: false, threshold: 0.2 }),
        useInView(ref[2], { once: false, threshold: 0.2 }),
        useInView(ref[3], { once: false, threshold: 0.2 }),
        useInView(ref[4], { once: false, threshold: 0.2 }),
        useInView(ref[5], { once: false, threshold: 0.2 }),
        useInView(ref[6], { once: false, threshold: 0.2 }),
        useInView(ref[7], { once: false, threshold: 0.2 })
    ];

    const isInView2 = [
        useInView(ref2[0], { once: false, threshold: 0.2 }),
        useInView(ref2[1], { once: false, threshold: 0.2 }),
        useInView(ref2[2], { once: false, threshold: 0.2 }),
        useInView(ref2[3], { once: false, threshold: 0.2 }),
        useInView(ref2[4], { once: false, threshold: 0.2 }),
        useInView(ref2[5], { once: false, threshold: 0.2 }),
        useInView(ref2[6], { once: false, threshold: 0.2 }),
        useInView(ref2[7], { once: false, threshold: 0.2 })
    ];

    const TitleisInView = useInView(RefTitle, { once: false, threshold: 0.2 });
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const Description = ServerURL.Data().Educations.map((Education) => 
        Education.Description.map((Line, index) => <li>{Line}</li>)
    );

    const Slides = ServerURL.Data().Educations.map((Education, index) => (
        <div ref={ref[index]} className="row gx-3 text-center justify-content-center m-2">
            <div id="LoginHere" className="col-lg-3 text-white">
                <img 
                    src={Education.Image} 
                    height="200px" 
                    width="200px" 
                    class={`boxshadow floating zoom rounded-1 m-2 border border-${ThemeSingleton.getTheme()} border-2 rounded-5`}
                /><br/><br/>
            </div>
            
            <div 
                className="col-lg-8" 
                style={{ 
                    backdropFilter: 'blur(5px) brightness(70%)', 
                    padding: '1rem', 
                    borderRadius: '25px' 
                }}
            >
                <div 
                    className="card text-white" 
                    style={{ 
                        background: 'rgba(0, 0, 0, 0)', 
                        border: 'none', 
                        display: 'flex', 
                        alignItems: 'center' 
                    }} 
                    id="Box"
                >
                    <h2 class="zoom textshadow fw-bold mb-4" style={{ cursor: 'default' }}>
                        {Education.Name.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.1, delay: index * 0.1 }}
                                whileHover={{
                                    scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                                    rotate: [0, 3, -2, 1.5, -1, 0],
                                    transition: { duration: 1, ease: "easeInOut" }
                                }}
                                whileTap={{
                                    scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                                    rotate: [0, 3, -2, 1.5, -1, 0],
                                    transition: { duration: 1, ease: "easeInOut" }
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
                    </h2>
                    
                    <h4 class="fw-bold mb-4" style={{ cursor: 'default' }}>
                        {Education.Title}
                    </h4>
                    
                    <h5 class="mb-4" style={{ cursor: 'default' }}>
                        {Education.Date}
                    </h5>
                    
                    <ul className='text-start text-white'>
                        {Description[index]}
                    </ul>
                </div>
            </div>
        </div>
    ));

    useEffect(() => {
        const startSlideShow = () => {
            const id = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % Slides.length);
            }, 2000);
            setIntervalId(id);
        };

        startSlideShow();
        return () => clearInterval(intervalId);
    }, [Slides.length]);

    const nextSlide = () => setCurrentSlide((currentSlide + 1) % Slides.length);
    const prevSlide = () => setCurrentSlide((currentSlide - 1 + Slides.length) % Slides.length);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const stopSlideShow = () => clearInterval(intervalId);
    const resumeSlideShow = () => {
        const id = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % Slides.length);
        }, 4000);
        setIntervalId(id);
    };

    const Title = "Education...";
    
    return (
        <div ref={DivRef}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={DivisInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div 
                    {...swipeHandlers} 
                    style={{ overflow: 'hidden' }} 
                    className="container text-center pt-5 pb-5"
                >
                    <h2 ref={RefTitle} class="floating textshadow fw-bold text-white mb-4 mt-4" style={{ cursor: 'default' }}>
                        {Title.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={TitleisInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.1, delay: index * 0.1 }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h2><br/>
                    
                    <div 
                        style={{ 
                            display: 'flex', 
                            transition: 'transform 0.5s ease-in-out', 
                            transform: `translateX(-${currentSlide * 100}%)`
                        }} 
                        onMouseEnter={stopSlideShow} 
                        onMouseLeave={resumeSlideShow}
                    >
                        {Slides.map((Slide, index) => (
                            <div 
                                style={{ 
                                    flex: '0 0 100%', 
                                    maxWidth: '100%' 
                                }} 
                                key={index}
                            >
                                {Slide}
                            </div>
                        ))}
                    </div>
                    
                    <div style={{ textAlign: 'center' }}>
                        {Slides.map((_, index) => (
                            <span
                                key={index}
                                style={{
                                    display: 'inline-block',
                                    height: '10px',
                                    width: '10px',
                                    backgroundColor: currentSlide === index ? '#fff' : '#bbb',
                                    borderRadius: currentSlide === index ? '20%' : '50%',
                                    margin: '0 6px'
                                }}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default EducationSlider;