import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import React, {  useRef } from 'react';
import Register from './Register';
import HomePage from './HomePage';
import Header from './Header.js';
import Footer from './Footer.js';
import ThemeSingleton from './ThemeSingleton.js';

import ServerURL from './ServerURL';

import useWindowSize from 'react-use/lib/useWindowSize';

import {Helmet} from "react-helmet";
import ParticlesComponent from './Particle.js';

async function LoginHandle(CurrentUserName, CurrentPassword, NavigateTo){
    if(CurrentUserName && CurrentPassword){

        let CurrentReferences = {
            Username: CurrentUserName,
            Password: CurrentPassword
        };

        createRoot(document.getElementById('LoginLoading')).render(<>
            <br/><br/>
            <div className="spinner-border text-secondary fs-3" role="status"></div>
            <br/><br/>
        </>);

        
        await fetch(ServerURL.Server()+`/Server/Login/${CurrentUserName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(CurrentReferences),
        })
        .then(response => response.json())
        .then(Data => {
            alert("LOGIN");
            NavigateTo("/Edit");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Server Error");
            window.location.reload(false);
        });
    }
    else{
        alert("Please fill Username & Password");
        window.location.reload(false);
    }
}

export default function Login(){
    let { width, height } = useWindowSize();
    const NavigateTo = useNavigate();
    
    const usernameRef = useRef();
    const passwordRef = useRef();
    return(
        <>
        {/* <Helmet>
            <title>My Page Title</title>
            <meta name="description" content="This is the page description." />
            <meta name="keywords" content="react, meta tags, SEO" />
        </Helmet> */}
        {/* <ParticlesComponent/> */}
        <div className="row gx-3 text-center justify-content-center text-center pt-5 pb-5 container">
            <div className="col-lg-2"></div>
            <div id="LoginHere" className="col-lg-6 text-white pt-5 pb-5">
                <div className="text-center pt-5 pb-5">
                    <h2 class="floating fw-bold btn btn-secondary text-light fs-1 mb-4 mt-4" style={{ cursor:'default'}}>UNDER CONSTRUCTION</h2><br/>
                    <div style={{height:`${height-175}px`}}>
                        <div className="input-group m-2">
                            <span className={`input-group-text btn btn-${ThemeSingleton.getTheme()}`} id="basic-addon1"><i className="bi bi-at"></i></span>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" ref={usernameRef} disabled/>
                        </div>
                        <div className="input-group m-2">
                            <span className={`input-group-text btn btn-${ThemeSingleton.getTheme()}`} id="basic-addon1"><i className="bi bi-asterisk"></i></span>
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" ref={passwordRef} disabled/>
                        </div>
                        <div id="LoginLoading">
                            <button type="button" className={`btn btn-${ThemeSingleton.getTheme()} btn-lg m-2 fw-bold w-100`} onClick={() => LoginHandle(usernameRef.current.value, passwordRef.current.value, NavigateTo)} style={{width:"200px"}} disabled><i className="bi bi-door-closed me-2"></i>Login</button>
                            <br/>
                            <Link to="/Register"><a className={`btn btn-${ThemeSingleton.getTheme()} btn-lg m-2 fw-bold w-100`} ><i className="bi bi-pen me-2"></i>Register</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="col-lg-2"></div>
            </div>
        </div>
        </>
    );
}