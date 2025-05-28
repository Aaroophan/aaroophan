// import React, { useEffect, useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import ReactDOM from 'react-dom';
// import ThemeSingleton from './ThemeSingleton';
// import BackgroundSingleton from './BackgroundSingleton';
// import App from './App';

// export default function Theme() {
//     const [opacity, setOpacity] = useState<number>(0);
//     const [top, setTop] = useState<string>('-100%');

//     useEffect(() => {
//         setOpacity(1);
//         setTop('0%');
//     }, []);

//     const handleThemeChange = (theme: string) => {
//         ThemeSingleton.setTheme(theme);
//         ReactDOM.render(<App />, document.getElementById('root'));
//     };

//     const handleBackgroundChange = (background: string) => {
//         BackgroundSingleton.setBackground(background);
//         ReactDOM.render(<App />, document.getElementById('root'));
//     };

//     return (
//         <div
//             className="row gx-3 text-center justify-content-center container text-center pt-5 pb-5"
//             style={{
//                 opacity: opacity,
//                 transform: `translateY(${top})`,
//                 transition: 'all 1s ease-out'
//             }}
//         >
//             <div className="col-lg-4">
//                 {['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'].map((theme) => (
//                     <button
//                         key={`theme-${theme}`}
//                         className={`zoom btn btn-${theme} bi bi-paint-bucket`}
//                         onClick={() => handleThemeChange(theme)}
//                     />
//                 ))}
//             </div>
//             <div className="col-lg-4">
//                 {['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'].map((background) => (
//                     <button
//                         key={`bg-${background}`}
//                         className={`zoom btn btn-${background} bi bi-paint-bucket`}
//                         onClick={() => handleBackgroundChange(background)}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }