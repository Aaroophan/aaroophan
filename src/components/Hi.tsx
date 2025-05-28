import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import useWindowSize from 'react-use/lib/useWindowSize';
import ServerURL from '../utils/ServerURL';
import ThemeSingleton from '../utils/ThemeSingleton';
import { UserData } from '../types/user-data';

const Hi: React.FC = () => {
    const { width, height } = useWindowSize();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, threshold: 0.2 });

    const [currentTagIndex, setCurrentTagIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [quote, setQuote] = useState<string | null>(null);
    const [currentTagIndex2, setCurrentTagIndex2] = useState(0);
    const [mainData, setMainData] = useState<UserData['Main'] | null>(null);

    useEffect(() => {
        try {
            const data = ServerURL.getMainData();
            setMainData(data);
        } catch (error) {
            console.error("Error loading main data:", error);
        }
    }, []);

    useEffect(() => {
        if (!mainData?.Tags) return;

        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentTagIndex(prev => (prev + 1) % mainData.Tags.length);
                setIsVisible(true);
            }, 1000);
        }, 4000);

        return () => clearInterval(interval);
    }, [mainData?.Tags.length]);

    // Add error boundaries and loading states
    if (!mainData) {
        return <div>Loading...</div>;
    }

    const Links = mainData.Main.Links.map((link, index) => (
        <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
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
                <h1 className="textshadow spin list-inline-item ms-2 me-2"
                    style={{ cursor: 'default', fontSize: '60px', color: 'rgba(210, 226, 250, 0.9)' }}>
                    <a href={link.Href} target="_blank" rel="noopener noreferrer">
                        <i className={`bi bi-${link.Icon} text-light ms-2 me-2`}></i>
                    </a>
                </h1>
            </motion.h1>
        </motion.span>
    ));

    return (
        <div
            ref={ref}
            className={width < 1000 ?
                "container row gx-2 text-center justify-content-center" :
                "row gx-2 mx-5 text-center justify-content-center p-3"}
            style={{ height: `${height - 150}px` }}
        >
            <div id="LoginHere" className="col-lg-4 text-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: [0, 1.2, 1] } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 1, delay: 0.1 }}
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
                    {width < 1000 && (
                        <img
                            alt="Profile"
                            src={mainData.Main.Images[currentTagIndex2]}
                            height="300px"
                            width="300px"
                            className={`img-fluid floating boxshadow zoom rounded-1 border border-${ThemeSingleton.getTheme()} border-2 rounded-5`}
                        />
                    )}
                </motion.div>
                <br /><br />
                {quote && width > 1000 && (
                    <p
                        className="zoom textshadow"
                        style={{ fontFamily: "Caveat, cursive" }}
                        dangerouslySetInnerHTML={{ __html: quote.h }}
                    />
                )}
                <br />
            </div>

            <div className="col-lg-7">
                <div className="card text-white" style={{
                    background: 'rgba(0, 0, 0, 0)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <h5 id="HomeName" className="zoom fw-bold mb-4">
                        {mainData.Main.Greeting.split("").map((letter, index) => (
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
                                {letter}
                            </motion.span>
                        ))}
                    </h5>

                    <div>
                        <motion.h2
                            id="HomeName"
                            className="textshadow zoom display-3 fw-bold mb-4 container text-wrap"
                            style={{ fontFamily: "Caveat, cursive" }}
                        >
                            {mainData.Main.Name.split("").map((letter, index) => (
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
                        </motion.h2>
                    </div>

                    <div className="row gx-3 mb-4 text-center justify-content-center">
                        <h5
                            className="textshadow zoom fw-bold m-4 text-white text-decoration-none w-100"
                            style={{ fontFamily: 'Consolas, Courier New, monospace' }}
                        >
                            {mainData.Main.Tags[currentTagIndex].split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.25, delay: index * 0.01 }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </h5>
                    </div>

                    <ul className="list-inline">
                        {Links}
                    </ul>
                    <br /><br />
                </div>
            </div>
        </div>
    );
};

export default Hi;