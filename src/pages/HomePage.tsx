import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useScroll, useMotionValueEvent } from "framer-motion";
import EducationSlider from '../components/EducationSlider';
import CertificatesSlider from '../components/CertificatesSlider';
import ExperienceSlider from '../components/ExperienceSlider';
import ProjectsSlider from '../components/ProjectsSlider';
import Techs from '../components/Techs';
import Hi from '../components/Hi';
import AboutMe from '../components/AboutMe';
import References from './References';
import ServerURL from '../utils/ServerURL';
import Confetti from '../components/Confetti';
import ThemeSingleton from '../utils/ThemeSingleton';

interface MainData {
    Main: {
        Name: string;
    };
}

const HomePage: React.FC = () => {
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", Math.round(latest / 58));
    });

    const mainData = ServerURL.Data() as MainData;

    return (
        <>
            <br /><br /><br /><br />

            <div className="text-center">
                <div className="position-fixed top-0 start-0 w-100 bg-transparent">
                    {mainData.Main.Name.split(" ")[0] === "Aaroophan" && (
                        <>
                            <Confetti Colors={['#6c757d']} />
                            <Confetti />
                        </>
                    )}
                </div>

                <Hi />

                <ThemeHr />
                <AboutMe />

                <ThemeHr className="mt-5" />
                <Techs />

                <ThemeHr />
                <ProjectsSlider />

                <ThemeHr />
                <ExperienceSlider />

                <ThemeHr />
                <EducationSlider />

                <ThemeHr />
                <CertificatesSlider />

                <ThemeHr />
                <References />

                <ThemeHr />

                <ThemeHr />
            </div>
        </>
    );
};

// Helper component for themed horizontal rules
const ThemeHr: React.FC<{ className?: string }> = ({ className = '' }) => (
    <hr className={`
    border border-${ThemeSingleton.getTheme()} 
    border-2 ms-5 me-5 text-${ThemeSingleton.getTheme()}
    ${className}
  `} />
);

export default HomePage;