import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import ThemeSingleton from './ThemeSingleton';
import BackgroundSingleton from './BackgroundSingleton';
import ProjectSlider from './ProjectsSlider';
import EducationSlider from './EducationSlider';
import CertificatesSlider from './CertificatesSlider';
import ExperienceSlider from './ExperienceSlider';
import Techs from './Techs';
import References from './References';
import Login from './Login';
import Register from './Register';
import Edit from './Edit';
import CurrentUserNameSingleton from './UserSingleton';
import ServerURL from './ServerURL';

// Define interface for UserData based on your data structure
interface UserData {
    Main: {
        Name: string;
        // Add other properties based on your data structure
    };
    // Add other sections as needed
}

export default function App() {
    const [UserData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        ThemeSingleton.setTheme('secondary');
        BackgroundSingleton.setBackground('dark');

        const fetchUserData = async () => {
            try {
                const data = await ServerURL.Data();
                setUserData(data);
                CurrentUserNameSingleton.setUserName(data);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                Error loading data: {error}
            </div>
        );
    }

    return (
        <BrowserRouter>
            {UserData && <Router UserData={UserData} />}
        </BrowserRouter>
    );
}

interface RouterProps {
    UserData: UserData;
}

function Router({ UserData }: RouterProps) {
    const location = useLocation();
    const [Username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const pathSegment = location.pathname.split("/")[1];
        const validPaths = [
            "",
            "Aaroophan",
            "Technologies",
            "Projects",
            "Experiences",
            "Educations",
            "Certificates",
            "References"
        ];

        if (validPaths.includes(pathSegment)) {
            document.title = "Aaroophan SV";
            setUsername("Aaroophan Varatharajan");
        } else {
            document.title = pathSegment || "Aaroophan Varatharajan";
            setUsername(pathSegment || "Aaroophan Varatharajan");
        }

        ThemeSingleton.setTheme('secondary');
        BackgroundSingleton.setBackground('dark');
    }, [location.pathname, UserData]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Technologies" element={<Techs />} />
                <Route path="/Projects" element={<ProjectSlider />} />
                <Route path="/Experiences" element={<ExperienceSlider />} />
                <Route path="/Educations" element={<EducationSlider />} />
                <Route path="/Certificates" element={<CertificatesSlider />} />
                <Route path="/References" element={<References />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Edit" element={<Edit />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer />
        </>
    );
}