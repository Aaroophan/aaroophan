import { useRef, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSwipeable } from 'react-swipeable';
import { motion, useInView } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServerURL from '../utils/ServerURL';

interface ReferenceType {
    Name: string;
    Education: string;
    Job: string;
    Company: string;
    Phone: string;
    Email: string;
}

const ReferencesSlider = () => {
    const DivRef = useRef<HTMLDivElement>(null);
    const DivisInView = useInView(DivRef, { once: false, threshold: 0.2 });
    const RefTitle = useRef<HTMLHeadingElement>(null);

    const ref = Array.from({ length: 8 }, () => useRef<HTMLDivElement>(null));
    const isInView = ref.map(r => useInView(r, { once: false, threshold: 0.2 }));

    const ref2 = Array.from({ length: 8 }, () => useRef<HTMLDivElement>(null));
    const isInView2 = ref2.map(r => useInView(r, { once: false, threshold: 0.2 }));

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<number | null>(null);

    const Slides = ServerURL.Data().References.map((Reference: ReferenceType, index: number) => (
        <div key={index} ref={ref[index]} className="row gx-3 text-center justify-content-center">
            <div className=" col-lg-8 ">
                <div className="card  text-white " style={{ background: 'rgba(0, 0, 0, 0)', border: 'none', display: 'flex', alignItems: 'center' }} id="Box">
                    <h2 className="zoom textshadow fw-bold mb-4" style={{ cursor: 'default' }}>
                        {Reference.Name.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={letterIndex}
                                initial={{ opacity: 0 }}
                                animate={isInView[index] ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.1, delay: letterIndex * 0.1 }}
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
                                                delay: letterIndex * 0.1
                                            }
                                        }}
                                    >
                                        {letter}
                                    </motion.a>
                                )}
                            </motion.span>
                        ))}
                    </h2>
                    <h5 className="fw-bold mb-4" style={{ cursor: 'default' }}>{Reference.Education}</h5>
                    <h5 className=" mb-4" style={{ cursor: 'default' }}>{Reference.Job}</h5>
                    <h5 className=" mb-4" style={{ cursor: 'default' }}>{Reference.Company}</h5>
                    <h5 className=" mb-4" style={{ cursor: 'default' }}>{Reference.Phone}</h5>
                    <h5 className=" mb-4" style={{ cursor: 'default' }}>{Reference.Email}</h5>
                </div>
            </div>
        </div>
    ));

    useEffect(() => {
        const startSlideShow = () => {
            const id = window.setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % Slides.length);
            }, 2000);
            setIntervalId(id);
        };

        startSlideShow();

        return () => {
            if (intervalId) window.clearInterval(intervalId);
        };
    }, [Slides.length]);

    const nextSlide = () => setCurrentSlide((currentSlide + 1) % Slides.length);
    const prevSlide = () => setCurrentSlide((currentSlide - 1 + Slides.length) % Slides.length);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const stopSlideShow = () => {
        if (intervalId) window.clearInterval(intervalId);
    };

    const resumeSlideShow = () => {
        const id = window.setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % Slides.length);
        }, 4000);
        setIntervalId(id);
    };

    const Title = "References...";
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
                                animate={useInView(RefTitle, { once: false, threshold: 0.2 }) ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.1, delay: index * 0.1 }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h2><br />
                    <div style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease-in-out',
                        transform: `translateX(-${currentSlide * 100}%)`
                    }} onMouseEnter={stopSlideShow} onMouseLeave={resumeSlideShow}>
                        {Slides.map((Slide, index) => (
                            <div style={{ flex: '0 0 100%', maxWidth: '100%' }} key={index}>
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

export default ReferencesSlider;