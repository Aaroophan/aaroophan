import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';
import ServerURL from '../utils/ServerURL';

interface MainData {
    Main: {
        Name: string;
        Backgrounds: string[];
        Image: string;
    };
}

type NavLink = [string, string, string];

const Header: React.FC = () => {
    const location = useLocation();
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 50 });
    const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
    const [currentTagIndex, setCurrentTagIndex] = useState<number>(0);

    const NavLinksDetails: NavLink[] = [
        ["/", "bi bi-house-fill me-2", "Home"],
        ["/Technologies", "bi bi-code-slash me-2", "Technologies"],
        ["/Projects", "bi bi-card-list me-2", "Projects"],
        ["/Experiences", "bi bi-buildings-fill me-2", "Experiences"],
        ["/Educations", "bi bi-mortarboard-fill me-2", "Educations"],
        ["/Certificates", "bi bi-patch-check-fill me-2", "Certificates"],
        ["/References", "bi bi-people-fill me-2", "References"],
        ["/Login", "bi bi-person-plus-fill me-2", "Your Own Portfolio !"]
    ];

    const NavLinks = NavLinksDetails.map((LinkDetail, index) => (
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
            <li className="nav-item nav-link">
                <Link to={LinkDetail[0]} className={index + 1 === NavLinksDetails.length ?
                    `btn btn-outline-info border-0 text-light` :
                    `btn btn-outline-dark border-0 text-light`}>
                    <i className={LinkDetail[1]}></i>
                    {LinkDetail[2].split("").map((letter, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1, delay: idx * 0.1 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </Link>
            </li>
        </motion.span>
    ));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagIndex((prevIndex) =>
                (prevIndex + 1) % (ServerURL.Data() as MainData).Main.Backgrounds.length
            );
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    const isAuthPage = ["Login", "Register", "Edit"].includes(location.pathname.split("/")[1]);

    return (
        <>
            <div style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `url(${(ServerURL.Data() as MainData).Main.Backgrounds[currentTagIndex]})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                filter: window.innerWidth < 1000 ? 'blur(5px) brightness(80%)' : 'brightness(90%)',
                zIndex: 0
            }} />

            <div style={{
                fontFamily: 'Comic Sans MS',
                transition: 'all 1s ease-out',
                cursor: 'default',
                zIndex: 1
            }}>
                <header>
                    <div className="container-fluid">
                        <nav className={`navbar navbar-expand-md navbar-transparent fixed-top bg-transparent`}
                            style={{ backdropFilter: 'blur(10px) brightness(80%)' }}>
                            {isAuthPage ? (
                                <>
                                    <i className="bi bi-code-slash text-secondary fs-6 ms-2 me-2"></i>
                                    <Link to="/" className="navbar-brand btn fw-bold font-arial text-light text-decoration-none text-center">
                                        Aaroophan's Free Portfolio Maker
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <a className="bi bi-linkedin text-light fs-2 ms-4 me-2"
                                        href="https://www.linkedin.com/in/aaroophan"
                                        target="_blank"
                                        rel="noopener noreferrer" />
                                    <Link to="/" className="navbar-brand btn fw-bold fs-3 font-arial text-secondary text-decoration-none"
                                        style={{ fontFamily: "Caveat, cursive" }}>
                                        {(ServerURL.Data() as MainData).Main.Name.split(" ")[0].split("").map((letter, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.1, delay: index * 0.1 }}
                                            >
                                                <motion.span
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
                                                </motion.span>
                                            </motion.span>
                                        ))}
                                    </Link>
                                    <button className="navbar-toggler border border-0"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav"
                                        aria-controls="navbarNav"
                                        aria-expanded="true"
                                        aria-label="Toggle">
                                        <i className="bi bi-three-dots text-secondary ms-1 me-1"></i>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            {NavLinks}
                                        </ul>
                                    </div>
                                    <div className="fixed-top progress bg-transparent rounded-0" style={{ height: '5px' }}>
                                        <motion.div className="progress-bar progress-bar-striped progress-bar-animated bg-transparent rounded-5"
                                            style={{ width: progressWidth }} />
                                    </div>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <div ref={scrollRef}>
                    <br /><br />
                    <Outlet />
                    <br /><br />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Header;