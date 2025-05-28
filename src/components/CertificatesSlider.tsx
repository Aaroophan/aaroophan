import React, { useRef, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSwipeable } from 'react-swipeable';
import { motion, useInView } from "framer-motion";
import ThemeSingleton from '../utils/ThemeSingleton';
import ServerURL from '../utils/ServerURL';

interface Certificate {
    Image: string;
    Name: string;
    Provider: string;
    Date: string;
    Credential: {
        Link: string;
    };
}

interface CertificatesData {
    Certificates: Certificate[];
}

const CertificatesSlider: React.FC = () => {
    const DivRef = useRef<HTMLDivElement>(null);
    const DivisInView = useInView(DivRef, { once: false, threshold: 0.2 });
    const RefTitle = useRef<HTMLHeadingElement>(null);

    // Refs arrays with proper typing
    const refs = Array(8).fill(null).map(() => useRef<HTMLDivElement>(null));
    const refs2 = Array(8).fill(null).map(() => useRef<HTMLDivElement>(null));

    // Visibility states
    const TitleisInView = useInView(RefTitle, { once: false, threshold: 0.2 });
    const isInView = refs.map(ref => useInView(ref, { once: false, threshold: 0.2 }));
    const isInView2 = refs2.map(ref => useInView(ref, { once: false, threshold: 0.2 }));

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    const data = ServerURL.Data() as CertificatesData;
    const Slides = data.Certificates.map((Certificate, index) => (
        <div ref={refs[index]} key={index} className="row gx-3 text-center justify-content-center">
            <div id="LoginHere" className="col-lg-3 text-white">
                <img
                    src={Certificate.Image}
                    alt={Certificate.Name}
                    height="200px"
                    width="200px"
                    className={`boxshadow floating zoom rounded-1 m-2 border border-${ThemeSingleton.getTheme()} border-2 rounded-5`}
                />
                <br /><br />
            </div>
            <div className="col-lg-8" style={{ backdropFilter: 'blur(5px) brightness(70%)', padding: '1rem', borderRadius: '25px' }}>
                <div className="card text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none', display: 'flex', alignItems: 'center' }} id="Box">
                    <h2 className="zoom textshadow fw-bold mb-4" style={{ cursor: 'default' }}>
                        {Certificate.Name.split("").map((letter, idx) => (
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
                    <h4 className="fw-bold mb-4" style={{ cursor: 'default' }}>{Certificate.Provider}</h4>
                    <h5 className="mb-4" style={{ cursor: 'default' }}>Issued {Certificate.Date}</h5>
                    <h5 className={`list-inline-item text-white border border-${ThemeSingleton.getTheme()} border-2 rounded-5`} style={{ cursor: 'pointer' }}>
                        <a className="m-3 text-white" style={{ textDecoration: 'none' }} href={Certificate.Credential.Link}>
                            {Certificate.Name}
                        </a>
                    </h5>
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

        return () => {
            intervalId && clearInterval(intervalId);
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

    const stopSlideShow = () => intervalId && clearInterval(intervalId);
    const resumeSlideShow = () => {
        const id = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % Slides.length);
        }, 4000);
        setIntervalId(id);
    };

    const Title = "Certifications...";

    return (
        <div ref={DivRef}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={DivisInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div {...swipeHandlers} style={{ overflow: 'hidden' }} className="container text-center pt-5 pb-5">
                    <h2 ref={RefTitle} className="floating textshadow fw-bold text-white mb-4 mt-4" style={{ cursor: 'default' }}>
                        {Title.split("").map((letter, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={TitleisInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.1, delay: idx * 0.1 }}
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
                        {Slides.map((Slide, idx) => (
                            <div style={{ flex: '0 0 100%', maxWidth: '100%' }} key={idx}>
                                {Slide}
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {Slides.map((_, idx) => (
                            <span
                                key={idx}
                                style={{
                                    display: 'inline-block',
                                    height: '10px',
                                    width: '10px',
                                    backgroundColor: currentSlide === idx ? '#fff' : '#bbb',
                                    borderRadius: currentSlide === idx ? '20%' : '50%',
                                    margin: '0 6px'
                                }}
                                onClick={() => setCurrentSlide(idx)}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CertificatesSlider;