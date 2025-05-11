import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useRef } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import ThemeSingleton from './ThemeSingleton';
import ServerURL from './ServerURL';

interface LoginHandleParams {
    username: string;
    password: string;
    navigate: ReturnType<typeof useNavigate>;
}

async function LoginHandle({ username, password, navigate }: LoginHandleParams) {
    if (!username || !password) {
        alert("Please fill Username & Password");
        window.location.reload();
        return;
    }

    const loadingElement = document.getElementById('LoginLoading');
    if (loadingElement) {
        createRoot(loadingElement).render(<>
            <br /><br />
            <div className="spinner-border text-secondary fs-3" role="status"></div>
            <br /><br />
        </>);
    }

    try {
        const response = await fetch(`${ServerURL.Server()}/Server/Login/${username}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Username: username, Password: password }),
        });

        if (!response.ok) throw new Error('Login failed');

        const data = await response.json();
        alert("LOGIN");
        navigate("/Edit");
    } catch (error) {
        console.error('Error:', error);
        alert("Server Error");
        window.location.reload();
    }
}

const Login: React.FC = () => {
    const { height } = useWindowSize();
    const navigate = useNavigate();

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <div className="row gx-3 text-center justify-content-center text-center pt-5 pb-5 container">
            <div className="col-lg-2"></div>
            <div id="LoginHere" className="col-lg-6 text-white pt-5 pb-5">
                <div className="text-center pt-5 pb-5">
                    <h2 className="floating fw-bold btn btn-secondary text-light fs-1 mb-4 mt-4"
                        style={{ cursor: 'default' }}>
                        UNDER CONSTRUCTION
                    </h2>
                    <br />
                    <div style={{ height: `${height - 175}px` }}>
                        <div className="input-group m-2">
                            <span className={`input-group-text btn btn-${ThemeSingleton.getTheme()}`}
                                id="basic-addon1">
                                <i className="bi bi-at"></i>
                            </span>
                            <input type="text"
                                className="form-control"
                                placeholder="Username"
                                aria-label="Username"
                                ref={usernameRef}
                                disabled />
                        </div>
                        <div className="input-group m-2">
                            <span className={`input-group-text btn btn-${ThemeSingleton.getTheme()}`}
                                id="basic-addon1">
                                <i className="bi bi-asterisk"></i>
                            </span>
                            <input type="password"
                                className="form-control"
                                placeholder="Password"
                                aria-label="Password"
                                ref={passwordRef}
                                disabled />
                        </div>
                        <div id="LoginLoading">
                            <button type="button"
                                className={`btn btn-${ThemeSingleton.getTheme()} btn-lg m-2 fw-bold w-100`}
                                onClick={() => LoginHandle({
                                    username: usernameRef.current?.value || '',
                                    password: passwordRef.current?.value || '',
                                    navigate
                                })}
                                style={{ width: "200px" }}
                                disabled>
                                <i className="bi bi-door-closed me-2"></i>Login
                            </button>
                            <br />
                            <Link to="/Register"
                                className={`btn btn-${ThemeSingleton.getTheme()} btn-lg m-2 fw-bold w-100`}>
                                <i className="bi bi-pen me-2"></i>Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2"></div>
        </div>
    );
};

export default Login;