import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer(){
    return(
        <footer className="footer text-secondary py-1 bottom bg-dark">
            <br/><br/>
            <div className="container">
                <hr className="text-light"/>
                <div className="text-center">
                    <a href="http://aaroophan-com.stackstaging.com/" className="text-secondary text-decoration-none">&copy; 2024 | <img src="https://lh3.googleusercontent.com/a/ACg8ocKNRvtI3cvci9DHfzBfC3d0PgPneG86fZv7w5se1U5mfBgcNqXj4g=s83-c-mo" height="20px" className="rounded-5"/> Aaroophan</a>
                    <br/>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a className="text-secondary text-decoration-none" href="https://www.instagram.com/aaroophan/?theme=dark"><i className="bi bi-instagram"></i></a></li>
                        <li className="list-inline-item"><a className="text-secondary text-decoration-none" href="https://www.linkedin.com/in/aaroophan"><i className="bi bi-linkedin"></i></a></li>
                        <li className="list-inline-item"><a className="text-secondary text-decoration-none" href="https://github.com/R-U-Fun"><i className="bi bi-github"></i></a></li>
                        <li className="list-inline-item"><a className="text-secondary text-decoration-none" href="https://twitter.com/Aaroophan"><i className="bi bi-twitter-x"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}