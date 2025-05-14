import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSwipeable } from 'react-swipeable';
import { motion } from "framer-motion";
import ThemeSingleton from './ThemeSingleton';
import ServerURL from './ServerURL';

const ProjectsSlider: React.FC = () => {
    const DivRef = useRef<HTMLDivElement>(null);
    const DivisInView = useInView(DivRef, { once: false, threshold: 0.2 });
    const RefTitle = useRef<HTMLHeadingElement>(null);

    // Refs arrays with proper typing
    const refs = Array.from({ length: 8 }, () => useRef<HTMLDivElement>(null));
    const refs2 = Array.from({ length: 8 }, () => useRef<HTMLDivElement>(null));

    // View states with proper typing
    const isInView = refs.map(r => useInView(r, { once: false, threshold: 0.2 }));
    const isInView2 = refs2.map(r => useInView(r, { once: false, threshold: 0.2 }));
    const TitleisInView = useInView(RefTitle, { once: false, threshold: 0.2 });

    // State with proper typing
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<number | null>(null);

    // Get data using the static Data method
    const data = ServerURL.Data();

    // Links with proper typing
    const Links = data.Projects.map((project) =>
        project.Links.map((link, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView[0] ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
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
                <motion.div
                    className="list-inline-item"
                    animate={{
                        y: [-10, 10],
                        transition: {
                            repeat: Infinity,
                            repeatType: 'mirror',
                            duration: 1.5,
                            ease: "easeInOut",
                            delay: index * 0.1
                        }
                    }}
                >
                    <h2 className={`textshadow spin list-inline-item text-white`} style={{ cursor: 'pointer' }}>
                        <a className="m-3 text-white" style={{ textDecoration: 'none' }} href={link.Href}>
                            <i className={`bi bi-${link.Icon}`}></i>
                        </a>
                    </h2>
                </motion.div>
            </motion.span>
        ))
    );

    // Slides with proper typing
    const Slides = data.Projects.map((project, index) => (
        <div ref={refs[index]} style={{ flex: '0 0 100%', maxWidth: '100%' }} key={index}>
            <div className="row gx-3 text-center justify-content-center m-2"
                style={{ backdropFilter: 'blur(5px) brightness(70%)', padding: '1rem', borderRadius: '25px' }}>
                <div id="LoginHere" className="col-lg-4 text-white">
                    <img
                        src={project.Image}
                        alt={project.Name}
                        width="350px"
                        className={`boxshadow floating zoom rounded-1 m-2 border border-${ThemeSingleton.getTheme()} border-2 rounded-2`}
                    />
                    <br /><br />
                </div>
                <div className="col-lg-8">
                    <div className="card text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none', display: 'flex', alignItems: 'center' }}>
                        <h2 className="zoom textshadow fw-bold mb-4" style={{ cursor: 'default' }}>
                            {project.Name.split("").map((letter, idx) => (
                                <motion.span
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    animate={isInView[index] ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.1, delay: idx * 0.1 }}
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
                                                    delay: idx * 0.1
                                                }
                                            }}
                                        >
                                            {letter}
                                        </motion.a>
                                    )}
                                </motion.span>
                            ))}
                        </h2>
                        <ul className="list-inline">
                            {Links[index]}
                        </ul>
                        <p style={{ cursor: 'default', textAlign: 'justify' }}>{project.Description}</p>
                        <p style={{ cursor: 'default', textAlign: 'justify' }}><i>{project.Technologies}</i></p>
                    </div>
                </div>
            </div>
        </div>
    ));

    useEffect(() => {
        const startSlideShow = () => {
            const id = window.setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % Slides.length);
            }, 2000);
            setIntervalId(id);
        };

        startSlideShow();
        return () => {
            intervalId && window.clearInterval(intervalId);
        };
    }, [Slides.length]);

    const nextSlide = () => setCurrentSlide(prev => (prev + 1) % Slides.length);
    const prevSlide = () => setCurrentSlide(prev => (prev - 1 + Slides.length) % Slides.length);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const stopSlideShow = () => intervalId && window.clearInterval(intervalId);
    const resumeSlideShow = () => {
        const id = window.setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % Slides.length);
        }, 4000);
        setIntervalId(id);
    };

    const Title = "My Projects...";

    return (
        <div ref={DivRef}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={DivisInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div {...swipeHandlers} style={{ overflow: 'hidden' }} className="container text-center pt-5 pb-5">
                    <h2 ref={RefTitle} className="floating textshadow fw-bold text-white mb-4 mt-4" style={{ cursor: 'default' }}>
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
                    </h2>
                    <br />
                    <div
                        style={{
                            display: 'flex',
                            transition: 'transform 0.5s ease-in-out',
                            transform: `translateX(-${currentSlide * 100}%)`
                        }}
                        onMouseEnter={stopSlideShow}
                        onMouseLeave={resumeSlideShow}
                    >
                        {Slides}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {Slides.map((_, index) => (
                            <button
                                key={index}
                                style={{
                                    display: 'inline-block',
                                    height: '10px',
                                    width: '10px',
                                    backgroundColor: currentSlide === index ? '#fff' : '#bbb',
                                    borderRadius: currentSlide === index ? '20%' : '50%',
                                    margin: '0 6px',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectsSlider;