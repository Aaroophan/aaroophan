import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import DefaultBG from './Images/MT-BG-02.jpeg';
import HomePage from './HomePage.js';
import Header from './Header.js';
import Footer from './Footer.js';
import ThemeSingleton from './ThemeSingleton';
import BackgroundSingleton from './BackgroundSingleton';
import ThemeSet from './ThemeSet';
import ProjectSlider from './ProjectsSlider.js';
import EducationSlider from './EducationSlider';
import CertificatesSlider from './CertificatesSlider';
import ExperienceSlider from './ExperienceSlider';
import ProjectsSlider from './ProjectsSlider';
import Techs from './Techs';
import Hi from './Hi';
import AboutMe from './AboutMe';
import Contact from './ContactModal';
import References from './References';
import Login from './Login.js';
import Register from './Register.js';
import Text3D from './Text3D';
import Man3d from './Man3D';
import Confetti from './Confetti.js';
import Edit from './Edit.js';
import CurrentUserNameSingleton from './UserSingleton';
import GetData from "./Data.js";
import ServerURL from './ServerURL.js';

export default function App() {

    const [UserData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
            ThemeSingleton.setTheme('secondary');
            BackgroundSingleton.setBackground('dark');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // const response = await fetch("http://localhost:3214/Server/READ/Aaroophan", {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify({
                //         Username: "Aaroophan Varatharajan",
                //     }),
                // });

                // let data;
                // if (!response.ok) {
                //     data = await ServerURL.Dummy();
                // } else {
                //     data = await response.json();
                // }
                let data = await ServerURL.Data();

                setUserData(data);
                CurrentUserNameSingleton.setUserName(data);
            } catch (err) {
                const data = await ServerURL.Dummy();
                setUserData(data);
                CurrentUserNameSingleton.setUserName(data);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();

    }, []);

    // Show a loading screen until data is fetched
    if (loading) {
        return(
            <>
            <h1 class="spinner-border" style={{textAlign: "center" }}></h1>
            </>
        );
    }


    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    );
}

function Router({ UserData }){

    // const Location = useLocation();
    // const [Username, setUsername] = useState(null);
    // const [UserData, setUserData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    
    // //BackgroundSingleton.setBackground('dark');
    // if (!ThemeSingleton.getTheme()) {
    //     ThemeSingleton.setTheme('secondary');
    //     BackgroundSingleton.setBackground('dark');
    // }

    // useEffect(() => {
    //     if (
    //             (Location.pathname.split("/")[1] === "") || 
    //             (Location.pathname.split("/")[1] === "Aaroophan") ||
    //             (Location.pathname.split("/")[1] === "Technologies") || 
    //             (Location.pathname.split("/")[1] === "Projects") || 
    //             (Location.pathname.split("/")[1] === "Experiences") || 
    //             (Location.pathname.split("/")[1] === "Educations") || 
    //             (Location.pathname.split("/")[1] === "Certificates") || 
    //             (Location.pathname.split("/")[1] === "References") ||
    //             (Location.pathname.split("/")[1] === null)
    //         ) {
    //         document.title = "Aaroophan SV";
    //         setUsername("Aaroophan Varatharajan");
    //         ThemeSingleton.setTheme('secondary');
    //         BackgroundSingleton.setBackground('dark');

    //     }
    //     else{
    //         if(Location.pathname.split("/")[1] === null){
    //             document.title = "Aaroophan Varatharajan";
    //             setUsername("Aaroophan Varatharajan");
    //         }
    //         else {
    //             document.title = Location.pathname.split("/")[1];
    //             setUsername(Location.pathname.split("/")[1]);
    //         }
            
    //     }
    // }, [Location.pathname]);
        
    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3214/Server/READ/User', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     Username: Username
    //                 }),
    //             });

    //             if (!response.ok) {
    //                 const data = await ServerURL.Dummy();
    //                 setUserData(data);
    //                 CurrentUserNameSingleton.setUserName(data);
    //                 return;
    //             }

    //             // const data = await ServerURL.Data(); //response.json();
    //             const data = await response.json();
    //             setUserData(data);
    //             CurrentUserNameSingleton.setUserName(data);

    //         } catch (err) {
    //             const data = await ServerURL.Dummy();
    //             setUserData(data);
    //             CurrentUserNameSingleton.setUserName(data);
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchUserData();

    // }, [Username]);

    // CurrentUserNameSingleton.setUserName(UserData);

    // console.log(JSON.stringify(ServerURL.Data(), 2, null));


    const location = useLocation();
    const [Username, setUsername] = useState(null);

    useEffect(() => {
        if (!UserData) return; // Prevent errors
        if (
            ["", "Aaroophan", "Technologies", "Projects", "Experiences", "Educations", "Certificates", "References"].includes(
                location.pathname.split("/")[1]
            )
        ) {
            document.title = "Aaroophan SV";
            setUsername("Aaroophan Varatharajan");
            ThemeSingleton.setTheme('secondary');
            BackgroundSingleton.setBackground('dark');
        } else {
            document.title = location.pathname.split("/")[1];
            setUsername(location.pathname.split("/")[1]);
            ThemeSingleton.setTheme('secondary');
            BackgroundSingleton.setBackground('dark');
        }
    }, [location.pathname, UserData]);

    console.log(JSON.stringify(ServerURL.Data(), null, 2));
    return (
        <>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<HomePage />} />
                <Route path="Technologies" element={<Techs />} />
                <Route path="Projects" element={<ProjectSlider />} />
                <Route path="Experiences" element={<ExperienceSlider />} />
                <Route path="Educations" element={<EducationSlider />} />
                <Route path="Certificates" element={<CertificatesSlider />} />
                <Route path="References" element={<References />} />
                
                <Route path="Login" element={<Login />} />
                <Route path="Register" element={<Register />} />
                <Route path="Edit" element={<Edit />} />
                <Route path="*" element={<HomePage />} />
            </Route>
        </Routes>
        </>
    );
}
