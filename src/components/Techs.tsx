import React, { useRef, useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ServerURL from '../utils/ServerURL';

const Techs: React.FC = () => {
    const refs = Array.from({ length: 8 }, () => useRef<HTMLDivElement>(null));
    const isInView = refs.map(r => useInView(r, { once: false, amount: 0.2 }));

    const refs2 = Array.from({ length: 8 }, () => useRef<HTMLImageElement>(null));
    const isInView2 = refs2.map(r => useInView(r, { once: false, amount: 0.2 }));

    const [slidesToShow, setSlidesToShow] = useState<number>(window.innerWidth < 1000 ? 3 : 10);

    useEffect(() => {
        const handleResize = () => {
            setSlidesToShow(window.innerWidth < 1000 ? 3 : 10);
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

    const data = ServerURL.Data();
    const technologies = data.Technologies;

    const TechnologyComponents = technologies.map((TechnologyComponent, index1) => {
        return TechnologyComponent[1].map((TechnologyComponentDetail, index) => (
            <motion.div
                key={`tech-${index1}-${index}`}
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
                <div className="p-4 mt-4 mb-3">
                    <div className="zoom card text-white bg-transparent border border-0">
                        <img
                            ref={refs2[index]}
                            src={TechnologyComponentDetail[0]}
                            className="boxshadow bg-secondary rounded-4 w-100"
                            alt={TechnologyComponentDetail[1]}
                        />
                        <div className="card-body rounded-4">
                            <p className="card-text w-100" style={{ fontSize: "10px" }}>
                                {TechnologyComponentDetail[1]}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        ));
    });

    const TechnologyTypes = technologies.map((TechnologyType, index) => (
        <motion.div
            key={`type-${index}`}
            initial={{ opacity: 0 }}
            animate={isInView[index] ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div ref={refs[index]} className="row gx-3 text-center justify-content-center">
                <div className="col-lg-12 col-sm-6" style={{ overflow: 'visible' }}>
                    <Slider {...settings}>
                        {TechnologyComponents[index]}
                    </Slider>
                </div>
            </div>
        </motion.div>
    ));

    const Title = "What I Know...";

    return (
        <div className="container text-center pt-5 pb-5">
            <h2 className="floating textshadow fw-bold text-white mb-4 mt-4" style={{ cursor: 'default' }}>
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
                ))}
            </h2>
            <br />
            {TechnologyTypes}
        </div>
    );
};

export default Techs;