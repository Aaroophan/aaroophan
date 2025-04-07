import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Resume from "./Images/Aaroophan_Varatharajan_4918.pdf";
import { motion, useInView } from "framer-motion"
import Man3D from './Man3D';
import Cube from './Cube';
import Data from './Data';

import Text3D from './Text3D';

import ServerURL from './ServerURL';
import Man3d from './Man3D';

export default function AboutMe(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.2 });
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, threshold: 0.2 });

    const DescriptionSplit = ServerURL.Data().About.Description.split('\n').map((Part, index) => (
        <span key={index}>
            {Part.split(" ").map((letter, Partindex) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.01, delay: Partindex * 0.01 }}
                    >
                        {letter}{" "}
                    </motion.span>
                ))}
            <br/>
        </span>
    ));

    return(
        <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
        <div ref={ref} className={window.innerWidth < 1000 ? `container row gx-2 text-center justify-content-center p-3` : `row gx-2 mx-5 text-center justify-content-center p-3`}>
            <div ref={ref2} id="AboutMe" className="boxshadow col-lg-12 text-white bg-transparent pt-4 pb-4 ps-3 pe-3 rounded-4  " style={{textAlign: 'justify', backdropFilter: 'blur(5px) brightness(70%)'}}>
                <div className="row gx-6 text-center justify-content-center">
                    <div className="col-lg-4 text-white" style={{textAlign: 'justify'}}>
                        <div className="bg-transparent rounded-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView2 ? { scale: 1 } : { scale: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                {
                                    // ServerURL.Data().About.ThreeDeeObj()
                                    Man3d()
                                }
                            </motion.div>
                        </div>
                    </div>
                    <div className={window.innerWidth < 1000 ? `col-lg-8 text-white mt-5 mb-5` : `col-lg-8 text-white`} style={{textAlign: 'justify'}}>
                        <a className={window.innerWidth < 1000 ? `fw-bold text-light text-decoration-none` : `text-light text-decoration-none`}>
                            {isInView2 ? DescriptionSplit : ""}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
        </>
    );
}