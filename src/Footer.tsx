import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer text-secondary py-1 bottom bg-dark">
            <br /><br />
            <div className="container">
                <hr className="text-light" />
                <div className="text-center">
                    <a
                        href="http://aaroophan.onrender.com/"
                        className="text-secondary text-decoration-none"
                    >
                        &copy; 2025 | <img
                            src="https://lh3.googleusercontent.com/a/ACg8ocKNRvtI3cvci9DHfzBfC3d0PgPneG86fZv7w5se1U5mfBgcNqXj4g=s83-c-mo"
                            height="20px"
                            className="rounded-5"
                            alt="Aaroophan's logo"
                        /> Aaroophan
                    </a>
                    <br />
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a
                                className="text-secondary text-decoration-none"
                                href="https://www.instagram.com/aaroophan/?theme=dark"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                className="text-secondary text-decoration-none"
                                href="https://www.linkedin.com/in/aaroophan"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                className="text-secondary text-decoration-none"
                                href="https://github.com/R-U-Fun"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-github"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                className="text-secondary text-decoration-none"
                                href="https://twitter.com/Aaroophan"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-twitter-x"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;