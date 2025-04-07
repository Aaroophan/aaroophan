import ReactDOM from 'react-dom';
import React, { useEffect, useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DefaultBG from './Images/MT-BG-02.jpeg';
import GreenBG from './Images/Fantasy.jpg';
import RedBG from './Images/Scifi.jpg';
import GreyBG from './Images/Horror.jpg';

import ThemeSingleton from './ThemeSingleton';
import BackgroundSingleton from './BackgroundSingleton';
import App from './App';
import ServerURL from './ServerURL';

export default function Theme(){
    const [opacity, setOpacity] = useState(0);
    const [top, setTop] = useState('-100%');

    useEffect(() => {
        setOpacity(1);
        setTop('0%');
    }, []);

    return (
        <div className="row gx-3 text-center justify-content-center container text-center pt-5 pb-5" style={{ opacity: opacity, transform: `translateY(${top})`, transition: 'all 1s ease-out' }}>
            <div className=" col-lg-4 ">
                <a class="zoom btn btn-primary bi bi-paint-bucket" onClick={() => {ThemeSingleton.setTheme('primary'); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-secondary bi bi-paint-bucket" onClick={() => {ThemeSingleton.setTheme('secondary'); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-success bi bi-paint-bucket" onClick={() => {ThemeSingleton.setTheme('success'); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-info bi bi-paint-bucket" onClick={() => {ThemeSingleton.setTheme('info');  ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-warning bi bi-paint-bucket" onClick={() => {ThemeSingleton.setTheme('warning'); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-danger bi bi-paint-bucket" onClick={() => {ThemeSingleton.setTheme('danger'); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-light bi bi-paint-bucket" onClick={() => {ThemeSingleton.setTheme('light'); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-dark bi bi-paint-bucket" onClick={() => {ThemeSingleton.setTheme('dark'); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
            </div>
            <div className=" col-lg-4 ">
                <a class="zoom btn btn-primary bi bi-paint-bucket" onClick={() => {BackgroundSingleton.setBackground("primary"); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-secondary bi bi-paint-bucket" onClick={() => {BackgroundSingleton.setBackground("secondary"); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-success bi bi-paint-bucket" onClick={() => {BackgroundSingleton.setBackground("success"); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-info bi bi-paint-bucket" onClick={() => {BackgroundSingleton.setBackground("info"); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-warning bi bi-paint-bucket" onClick={() => {BackgroundSingleton.setBackground("warning"); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-danger bi bi-paint-bucket" onClick={() => {BackgroundSingleton.setBackground("danger"); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-light bi bi-paint-bucket" onClick={() => {BackgroundSingleton.setBackground("light"); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
                <a class="zoom btn btn-dark bi bi-paint-bucket" onClick={() => {BackgroundSingleton.setBackground("dark"); ReactDOM.render(<App />, document.getElementById('root'));}} ></a>
            </div>
        </div>
    );
}