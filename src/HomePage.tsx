import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useScroll, useMotionValueEvent } from "framer-motion";
import ThemeSet from './ThemeSet';
import EducationSlider from './EducationSlider';
import CertificatesSlider from './CertificatesSlider';
import ExperienceSlider from './ExperienceSlider';
import ProjectsSlider from './ProjectsSlider';
import Techs from './Techs';
import Hi from './Hi';
import AboutMe from './AboutMe';
import References from './References';
import ServerURL from './ServerURL';
import Confetti from './Confetti';
import ThemeSingleton from './ThemeSingleton';

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
                <ThemeSet />

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