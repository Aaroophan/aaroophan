import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useRef } from 'react';
import { Outlet, Link, useNavigate, NavigateFunction } from "react-router-dom";
import ServerURL from './ServerURL';
import ThemeSingleton from './ThemeSingleton';
import useWindowSize from 'react-use/lib/useWindowSize';

interface RegisterResponse {
    // Define the structure of your response data here
    // Example:
    // success: boolean;
    // message?: string;
}

async function RegisterHandle(
    NewUserName: string,
    NewEmail: string,
    NewPassword: string,
    NewConfirmPassword: string,
    NavigateTo: NavigateFunction
) {
    if (NewUserName && NewPassword && NewConfirmPassword) {
        if (NewPassword === NewConfirmPassword) {
            const registerLoading = document.getElementById('RegisterLoading');
            if (registerLoading) {
                createRoot(registerLoading).render(<>
                    <br /><br />
                    <div className="spinner-border text-secondary fs-3" role="status"></div>
                    <br /><br />
                </>);
            }

            const CurrentReferences = {
                Username: NewUserName,
                Password: NewPassword,
                Email: NewEmail
            };

            try {
                const response = await fetch(ServerURL.Server() + `/Server/Register/${NewUserName}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(CurrentReferences),
                });

                const data: RegisterResponse = await response.json();
                alert("REGISTER");
                NavigateTo('/Login');
            } catch (error) {
                console.error('Error:', error);
                alert("Server Error");
                NavigateTo('/Login');
            }
        } else {
            alert("Password & Confirm Password doesn't match");
        }
    } else {
        alert("Please fill Username, Password & Confirm Password");
    }
}

export default function Register() {
    const { width, height } = useWindowSize();
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const ConfirmpasswordRef = useRef<HTMLInputElement>(null);
    const NavigateTo = useNavigate();

    return (
        <>
            <div className="row gx-3 text-center justify-content-center text-center pt-5 pb-5 container">
                <div className="col-lg-2"></div>
                <div id="LoginHere" className="col-lg-6 text-white">
                    <div className="text-center">
                        <h2 className="floating fw-bold btn btn-secondary text-light fs-1 mb-4 mt-4" style={{ cursor: 'default' }}>REGISTER</h2><br />
                        <div style={{ height: `${height - 175}px` }}>
                            <div className="input-group mb-3">
                                <span className={`input-group-text btn btn-${ThemeSingleton.getTheme()}`} id="Username">
                                    <i className="bi bi-at"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="Username"
                                    ref={usernameRef}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className={`input-group-text btn btn-${ThemeSingleton.getTheme()}`} id="Email">
                                    <i className="bi bi-at"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="Email"
                                    ref={emailRef}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className={`input-group-text btn btn-${ThemeSingleton.getTheme()}`} id="Password">
                                    <i className="bi bi-asterisk"></i>
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    aria-label="Password"
                                    aria-describedby="Password"
                                    ref={passwordRef}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className={`input-group-text btn btn-${ThemeSingleton.getTheme()}`} id="ConfirmPassword">
                                    <i className="bi bi-asterisk"></i>
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    aria-label="ConfirmPassword"
                                    aria-describedby="ConfirmPassword"
                                    ref={ConfirmpasswordRef}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <details className={`input-group-text btn btn-outline-${ThemeSingleton.getTheme()} w-100`}>
                                    <summary className="w-100">Terms & Conditions of Aaroophan</summary>
                                    <div className="w-100 text-start">
                                        By clicking 'Register' you are agreeing to Terms & Conditions of Aaroophan
                                    </div>
                                </details>
                            </div>
                            <div id="RegisterLoading">
                                <button
                                    type="button"
                                    className={`btn btn-${ThemeSingleton.getTheme()} btn-lg m-2 fw-bold`}
                                    onClick={() => RegisterHandle(
                                        usernameRef.current?.value || '',
                                        emailRef.current?.value || '',
                                        passwordRef.current?.value || '',
                                        ConfirmpasswordRef.current?.value || '',
                                        NavigateTo
                                    )}
                                    disabled
                                >
                                    <i className="bi bi-pen"></i> Register
                                </button>
                                <br />
                            </div>
                            <br /><br /><br /><br />
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