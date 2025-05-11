import { useRef, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion, useInView } from "framer-motion";
import './index.css';
import useWindowSize from 'react-use/lib/useWindowSize';
import ThemeSingleton from './ThemeSingleton';
import ServerURL from './ServerURL';

interface MainData {
    Main: {
        Greeting: string;
        Name: string;
        Tags: string[];
        Links: Array<{
            Icon: string;
            Href: string;
        }>;
        Images: string[];
    };
}

interface QuoteData {
    h: string;
}

const Hi: React.FC = () => {
    const { width, height } = useWindowSize();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, threshold: 0.2 });

    const [currentTagIndex, setCurrentTagIndex] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [quote, setQuote] = useState<QuoteData | null>(null);
    const [currentTagIndex2, setCurrentTagIndex2] = useState<number>(0);

    const mainData = ServerURL.Data() as MainData;

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentTagIndex(prev => (prev + 1) % mainData.Main.Tags.length);
                setIsVisible(true);
            }, 1000);
        }, 4000);

        return () => clearInterval(interval);
    }, [mainData.Main.Tags.length]);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch(`${ServerURL.Server()}/quote`);
                const data: QuoteData[] = await response.json();
                setQuote(data[0]);
            } catch (err) {
                console.error('Error fetching quote:', err);
            }
        };

        fetchQuote();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagIndex2(prev =>
                (prev + 1) % mainData.Main.Images.length
            );
        }, 7500);

        return () => clearInterval(interval);
    }, [mainData.Main.Images.length]);

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