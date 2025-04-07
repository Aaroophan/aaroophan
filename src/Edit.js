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

async function EditHandle(CurrentUserName, CurrentPassword, NavigateTo){
    
    let CurrentReferences = {
        Username: CurrentUserName,
        Password: CurrentPassword
    };

    createRoot(document.getElementById('EditLoading')).render(<>
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
        alert("EDIT");
        NavigateTo("/");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Server Error");
        window.location.reload(false);
    });
}

export default function Edit(){
    let { width, height } = useWindowSize();
    const NavigateTo = useNavigate();
    
    const usernameRef = useRef();
    const passwordRef = useRef();
    return(
        <>
        <div className="row gx-3 text-center justify-content-center bg-dark text-center pt-5 pb-5 container">
            <div className="col-lg-2"></div>
            <div id="LoginHere" className="col-lg-8 text-white pt-5 pb-5">
                <div className="bg-dark text-center pt-5 pb-5">
                    <h2 class="floating fw-bold btn btn-secondary text-light fs-1 mb-4 mt-4" style={{ cursor:'default'}}>EDIT</h2><br/>
                    <div style={{height:`${height-175}px`}}>
                        <div className="input-group m-2">
                            <span className={`input-group-text btn btn-${ThemeSingleton.getTheme()} w-25`}>Username</span>
                            <input type="text" className="form-control w-75" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" ref={usernameRef}/>
                        </div>
                        <div className="input-group m-2">
                            <span className={`input-group-text btn btn-${ThemeSingleton.getTheme()} w-25`}>Password</span>
                            <input type="password" className="form-control w-75" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" ref={passwordRef}/>
                        </div>

                        <table className="w-100">
                            <tr className="w-100">
                                <td className={`w-50 btn btn-${ThemeSingleton.getTheme()} mx-3`}>
                                    AAA
                                </td>
                                <td className={`w-50 btn btn-${ThemeSingleton.getTheme()} mx-3`}>
                                    BBB
                                </td>
                            </tr>
                        </table>

                        <div className="input-group row gx-2 text-center justify-content-center py-3">
                                    <span className={`input-group-text col-lg-4 text-white btn btn-${ThemeSingleton.getTheme()} rounded-3 fw-bold m-2 w-100`} >
                                        AAA
                                    </span>
                                    <input className={`form-control col-lg-8 rounded-3 px-4 m-2 border border-${ThemeSingleton.getTheme()} border-3`} placeholder="Username"/>
                        </div>



                        <div id="LoginLoading" className="py-5">
                            <button type="button" className={`btn btn-success btn-lg m-2 fw-bold w-100`} onClick={() => EditHandle(usernameRef.current.value, passwordRef.current.value, NavigateTo)} style={{width:"200px"}}><i className="bi bi-door-closed me-2"></i>Save</button>
                            <br/>
                            <Link to="/"><a className={`btn btn-danger btn-lg m-2 fw-bold w-100`}><i className="bi bi-pen me-2"></i>Cancel</a></Link>
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