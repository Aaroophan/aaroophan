// import React, { useEffect, useState, Suspense } from 'react';

import Photo from "./Images/Aaroophan - Portrait - 2024.jpg";

import Man3d from "./Man3D";

import MDB from "./Images/mdb.png";
import Exp from "./Images/express.png";
import Rct from "./Images/react.png";
import njs from "./Images/nodejs.png";
import tjs from "./Images/TJS.png";
import btstrp from "./Images/Bstrp.png";
import html from "./Images/html.png";
import css from "./Images/css.png";
import js from "./Images/JavaScript.png";
import sql from "./Images/SQL.png";
import cs from "./Images/CSharp.png";
import jav from "./Images/java.jpg";
import py from "./Images/python.jpg";
import php from "./Images/PHP.png";
import fl from "./Images/flask.png";
import oai from "./Images/openai.png";
import msql from "./Images/mysql.jpg";
import psql from "./Images/postgres.png";
import ssms from "./Images/SSMS.png";
import ssis from "./Images/SSIS.png";
import ssrs from "./Images/SSRS.jpg";
import nsql from "./Images/NSQL.jpg";
import fbs from "./Images/fbs.png";
import orcl from "./Images/orcl.png";
import pga4 from "./Images/pga4.jpg";
import dbvr from "./Images/dbvr.png";
import vs from "./Images/vs.jpeg";
import vsc from "./Images/vsc.svg";
import astd from "./Images/astd.png";
import git from "./Images/git.png";
import gith from "./Images/gith.png";
import JIRA from "./Images/JIRA.png";
import trlo from "./Images/trello.svg";
import pyt from "./Images/pyt.jpeg";
import hgfc from "./Images/hgfc.svg";
import pnds from "./Images/pnds.png";
import nmpy from "./Images/nmpy.png";
import nlp from "./Images/nlp.png";
import MacLear from "./Images/ML.jpg";

import ps from "./Images/ps.png";
import ai from "./Images/AI.png";
import ae from "./Images/ae.png";
import may from "./Images/maya.jpg";

import AFCLOD from "./Images/AFCLOD.png";
import MT from "./Images/MT.jpeg";
import LD from "./Images/LocDev.jpeg";
import Dom from "./Images/Dom.jpeg";
import ML from "./Images/ML.png";
import TT from "./Images/TT.jpeg";
import BB from "./Images/BB1.png";
import EM from "./Images/EveryMoveProgress.png";
import TD from "./Images/2D.png";

import MDZ from "./Images/MDZ_logo.jpg";
import AFC from "./Images/afcplc_logo.jpeg";

import UoB from "./Images/UoB.png";
import SCU from "./Images/SLIITA.png";
import SMC from "./Images/SMC.png";

import Ude from "./Images/Udemy.png";
import BC from "./Images/BritishCouncil.png";
import LI from "./Images/LI.png";
// import Cube from "./Cube";
// import CurrentUserNameSingleton from './UserSingleton';

export default async function GetData(Username) {
    
//         const [UserData, setUserData] = useState(null);
// 		const [loading, setLoading] = useState(true);
// 		const [error, setError] = useState(null);

// 		useEffect(() => {
// 			const fetchUserData = async () => {
// 			try {
// 				const response = await fetch('http://localhost:3214/Server/READ/User', {
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json',
// 					},
// 					body: JSON.stringify({
// 						Username: Username
// 					}),
// 				});

// 				if (!response.ok) {
// 					throw new Error('Failed to fetch data');
// 				}

// 				const data = await response.json();
// 				setUserData(data);
// 			} catch (err) {
// 				setError(err.message);
// 			} finally {
// 				setLoading(false);
// 			}
// 			};

// 			fetchUserData();
// 		}, []);

//         console.log(UserData);
//         CurrentUserNameSingleton.setUserName(UserData);
// }
	// const Photo = React.lazy(() => import("./Images/Aaroophan - Portrait - 2024.jpg"));
	// // const Man3d= React.lazy(() => import("./Man3D.js"));

	// const MDB= React.lazy(() => import("./Images/mdb.png"));
	// const Exp= React.lazy(() => import("./Images/express.png"));
	// const Rct= React.lazy(() => import("./Images/react.png"));
	// const njs= React.lazy(() => import("./Images/nodejs.png"));
	// const tjs= React.lazy(() => import("./Images/TJS.png"));
	// const btstrp= React.lazy(() => import("./Images/Bstrp.png"));
	// const html= React.lazy(() => import("./Images/html.png"));
	// const css= React.lazy(() => import("./Images/css.png"));
	// const js= React.lazy(() => import("./Images/JavaScript.png"));
	// const sql= React.lazy(() => import("./Images/SQL.png"));
	// const cs= React.lazy(() => import("./Images/CSharp.png"));
	// const jav= React.lazy(() => import("./Images/java.jpg"));
	// const py= React.lazy(() => import("./Images/python.jpg"));
	// const php= React.lazy(() => import("./Images/PHP.png"));
	// const fl= React.lazy(() => import("./Images/flask.png"));
	// const oai= React.lazy(() => import("./Images/openai.png"));
	// const msql= React.lazy(() => import("./Images/mysql.jpg"));
	// const psql= React.lazy(() => import("./Images/postgres.png"));
	// const ssms= React.lazy(() => import("./Images/SSMS.png"));
	// const ssis= React.lazy(() => import("./Images/SSIS.png"));
	// const ssrs= React.lazy(() => import("./Images/SSRS.jpg"));
	// const nsql= React.lazy(() => import("./Images/NSQL.jpg"));
	// const fbs= React.lazy(() => import("./Images/fbs.png"));
	// const orcl= React.lazy(() => import("./Images/orcl.png"));
	// const pga4= React.lazy(() => import("./Images/pga4.jpg"));
	// const dbvr= React.lazy(() => import("./Images/dbvr.png"));
	// const vs= React.lazy(() => import("./Images/vs.jpeg"));
	// const vsc= React.lazy(() => import("./Images/vsc.svg"));
	// const astd= React.lazy(() => import("./Images/astd.png"));
	// const git= React.lazy(() => import("./Images/git.png"));
	// const gith= React.lazy(() => import("./Images/gith.png"));
	// const JIRA= React.lazy(() => import("./Images/JIRA.png"));
	// const trlo= React.lazy(() => import("./Images/trello.svg"));
	// const pyt= React.lazy(() => import("./Images/pyt.jpeg"));
	// const hgfc= React.lazy(() => import("./Images/hgfc.svg"));
	// const pnds= React.lazy(() => import("./Images/pnds.png"));
	// const nmpy= React.lazy(() => import("./Images/nmpy.png"));
	// const nlp= React.lazy(() => import("./Images/nlp.png"));
	// const MacLear= React.lazy(() => import("./Images/ML.jpg"));

	// const ps= React.lazy(() => import("./Images/ps.png"));
	// const ai= React.lazy(() => import("./Images/AI.png"));
	// const ae= React.lazy(() => import("./Images/ae.png"));
	// const may= React.lazy(() => import("./Images/maya.jpg"));

	// const AFCLOD= React.lazy(() => import("./Images/AFCLOD.png"));
	// const MT= React.lazy(() => import("./Images/MT.jpeg"));
	// const LD= React.lazy(() => import("./Images/LocDev.jpeg"));
	// const Dom= React.lazy(() => import("./Images/Dom.jpeg"));
	// const ML= React.lazy(() => import("./Images/ML.png"));
	// const TT= React.lazy(() => import("./Images/TT.jpeg"));
	// const BB= React.lazy(() => import("./Images/BB1.png"));
	// const EM= React.lazy(() => import("./Images/EveryMoveProgress.png"));
	// const TD= React.lazy(() => import("./Images/2D.png"));

	// const MDZ= React.lazy(() => import("./Images/MDZ_logo.jpg"));
	// const AFC= React.lazy(() => import("./Images/afcplc_logo.jpeg"));

	// const UoB= React.lazy(() => import("./Images/UoB.png"));
	// const SCU= React.lazy(() => import("./Images/SLIITA.png"));
	// const SMC= React.lazy(() => import("./Images/SMC.png"));

	// const Ude= React.lazy(() => import("./Images/Udemy.png"));
	// const BC= React.lazy(() => import("./Images/BritishCouncil.png"));
	// const LI= React.lazy(() => import("./Images/LI.png"));
	// const Cube= React.lazy(() => import("./Cube"));


	let UserData = {
		"Main": {
			"Image": Photo,
			"Greeting" : "Hi, I'm",
			"Name": "Aaroophan Varatharajan",
			"Tags": [
				"Full Stack Developer",
				"Junior Database Developer",
				"Animation Enthusiast"
			],
			"Links" : [
				{
					"Name": "Instagram",
					"Icon": "instagram",
					"Href": "https://www.instagram.com/aaroophan/?theme=dark"
				},
				{
					"Name": "LinkedIn",
					"Icon": "linkedin",
					"Href": "https://www.linkedin.com/in/aaroophan/"
				},
				{
					"Name": "GitHub",
					"Icon": "github",
					"Href": "https://github.com/R-U-Fun"
				},
				{
					"Name": "Email",
					"Icon": "envelope-fill",
					"Href": "mailto:arophn@gmail.com"
				},
				{
					"Name": "Phone",
					"Icon": "telephone-fill",
					"Href": "tel:+94768505131"
				},
				{
					"Name": "Resume",
					"Icon": "file-person-fill",
					"Href": "https://drive.google.com/file/d/1LC6yuv_kAXU-yx5zh3ZwdYpWxBaQyYmP/view?usp=sharing"
				}
			]
		},
		"About": {
			"ThreeDeeObj": Man3d,
			"Description": "Hello,\n\nI am Aaroophan Varatharajan, a recent Computer Science and Software Engineering graduate from SLIIT City Uni, affiliated with the University of Bedfordshire, UK, with a Second-Class Upper degree and a Higher Diploma in IT. I was recognized on the Dean’s List. I am working as a Junior Database Developer at M Data Zone (Colombo, Sri Lanka) since September 2024. I have expertise in web development because, my interest is in the MERN Stack, and I have completed some projects using this technology stack, with a strong command of HTML, CSS, JavaScript, SQL, React.js, Node.js, Three.js, Bootstrap, PHP, Java, C#, Python, Flask, Open AI API and Machine Learning, along with a good command of English with IELTS - 7.0. My hands-on experience at M Data Zone and Alliance Finance Company has made me proficient in React, NodeJS and databases, including MySQL, PostgreSQL, and MongoDB.\n\nConnect with me to learn more about how my skills can contribute to your team.\n\nBest Regards,\nAaroophan"
		},
		"Technologies": [
			[
				"Programming Languages",
				[
					[html, "HTML"], [css, "CSS"], [js, "JS"], [cs, "C#"], [py, "Python"], [jav, "Java"], [php, "PHP"],
				]
			],
			[
				"Frameworks & Libraries",
				[
					[Exp, "Express.js"], [Rct, "React.js"], [njs, "Node.js"], [tjs, "Three.js"], [btstrp, "Bootstrap"], [fl, "Flask"]
				]
			],
			[
				"Databases & Tools",
				[
					[sql, "SQL"], [msql, "MySQL"], [psql, "PostgreSQL"], [pga4, "PgAdmin4"], [dbvr, "DBeaver"], [nsql, "NoSQL"], [MDB, "MongoDB"], [fbs, "Firebase"], [ssms, "SSMS"], [ssis, "SSIS"], [ssrs, "SSRS"], [orcl, "Oracle"]
				]
			],
			[
				"Development Tools",
				[
					[vs, "Visual Studio"], [vsc, "VS Code"], [astd, "Android Studio"], [git, "GIT"], [gith, "GitHub"], [JIRA, "JIRA"], [trlo, "Trello"]
				]
			],
			[
				"Machine Learning",
				[
					[oai, "OpenAI"], [pyt, "PyTorch"], [hgfc, "HuggingFace"], [pnds, "Pandas"], [nmpy, "NumPy"], [nlp, "NLP"], [MacLear, "ML"]
				]
			],
			[
				"Design and Multimedia",
				[
					[ps, "PhotoShop"], [ai, "Illustrator"], [ae, "After Effects"], [may, "Maya"]
				]
			]
		],
		"Projects": [
			{
				"Image": AFCLOD,
				"Name": "AFC’s LOD Web Application",
				"Links": [],
				"Date": "Jul 2024 - Jul 2024",
				"Description": "Developed and implemented a new Letter of Demand (LOD) Web Application for Alliance Finance PLC’s LIME banking solution in just one day using the MERN Stack and PostgreSQL. This secondary MERN Stack application integrates with Lime’s MongoDB and Finacle’s PostgreSQL databases to generate LOD issued details. The Audit and Legal teams use it to input parameters and produce a comprehensive LOD posting list in PDF format for their daily tasks.",
				"Technologies": "JavaScript, MongoDB, ExpressJS, ReactJS, NodeJS, PostgreSQL, Bootstrap, Mongoose"
			},
			{
				"Image": MT,
				"Name": "Mend-Tale-Game",
				"Links": [
					{
						"Name": "Link",
						"Icon": "link",
						"Href": "https://mend-tale-game.onrender.com/"
					},
					{
						"Name": "GitHub",
						"Icon": "github",
						"Href": "https://github.com/R-U-Fun/Mend-Tale-Game"
					},
					{
						"Name": "Demo",
						"Icon": "play-circle",
						"Href": "https://mend-tale-game.onrender.com/"
					}
				],
				"Date": "Dec 2023 - Apr 2024",
				"Description": "The idea of MendTale is to develop a text-based adventure game website that analyses user's mood by utilizing machine learning and provide feedback through storytelling using Natural Language Processing to promote a sense of emotional-awareness among its users. By combining gaming, personal journaling, machine learning, and storytelling, users will be encouraged to interact with the platform regularly, turning this emotional-awareness promotion into an enjoyable and informative experience.",
				"Technologies": "JavaScript, Python, MongoDB, ExpressJS, ReactJS, NodeJS, Flask, PyTorch, OpenAI, Bootstrap, Mongoose, GitHub"
			},
			{
				"Image": Dom,
				"Name": "CIS-Domeytoe-Game",
				"Links": [
					{
						"Name": "Link",
						"Icon": "link",
						"Href": "https://cis-domeytoe-game.onrender.com/"
					},
					{
						"Name": "GitHub",
						"Icon": "github",
						"Href": "https://github.com/R-U-Fun/CIS-Domeytoe-Game"
					},
					{
						"Name": "Demo",
						"Icon": "play-circle",
						"Href": "https://www.youtube.com/watch?v=Q0trwCC5dgE"
					}
				],
				"Date": "Oct 2023 - Dec 2023",
				"Description": "Developed the game 'Domeytoe' in MERN Stack to use the ‘Tomato’ API. This Computer Integrated Systems module assignment asks to reflect on various concepts, paradigms and architectures related to Software Development. Software design principles, event-driven programming, interoperability, and virtual identity.",
				"Technologies": "JavaScript, MongoDB, ExpressJS, ReactJS, NodeJS, Bootstrap, Mongoose, GitHub"
			},
			{
				"Image": LD,
				"Name": "LocDev",
				"Links": [
					{
						"Name": "Link",
						"Icon": "link",
						"Href": "https://loc-dev-assessment.onrender.com/"
					},
					{
						"Name": "GitHub",
						"Icon": "github",
						"Href": "https://github.com/R-U-Fun/loc-dev-assessment"
					}
				],
				"Date": "Apr 2024 - Apr 2024",
				"Description": "This one day project manages locations that control multiple devices, with a REST service and user interfaces for storing and displaying information about these locations and their associated devices. All data is securely stored in a MongoDB database.",
				"Technologies": "JavaScript, MongoDB, ExpressJS, ReactJS, NodeJS, Bootstrap, Mongoose, GitHub"
			},
			{
				"Image": ML,
				"Name": "MovieList",
				"Links": [
					{
						"Name": "Link",
						"Icon": "link",
						"Href": "https://3d2y-genin-com.stackstaging.com/"
					}
				],
				"Date": "Jun 2023 - Jun 2023",
				"Description": "Developed a movie database website as a project to enhance my ReactJS skills. The website includes various functions such as the Home Page, Movie Page, Series Page, Search, Theme, Sign in, Sign up, Watchlist, Watch History, Dashboard, Profile, Edit Profile.",
				"Technologies": "HTML, JavaScript, CSS, SQL, PHP, VS Code, ReactJS, MySQL, phpMyAdmin, Bootstrap, GitHub"
			},
			{
				"Image": EM,
				"Name": "EveryMove",
				"Links": [
					{
						"Name": "GitHub",
						"Icon": "github",
						"Href": "https://github.com/NeroBrutal/EveryMoveApp"
					}
				],
				"Date": "May 2023 - May 2023",
				"Description": "Developed 'Progress' function of a fitness nutrition tracking android app for a gym's members as a group project for Higer Diploma in Information Technology. The Progress function combines progress tracking, chart visualization, data saving, and post management.",
				"Technologies": "Java, XML, Studio, Firebase, GitHub"
			},
			{
				"Image": BB,
				"Name": "BaratieBakery",
				"Links": [
					{
						"Name": "Link",
						"Icon": "link",
						"Href": "https://baratiebakery-asv.stackstaging.com/"
					},
					{
						"Name": "GitHub",
						"Icon": "github",
						"Href": "https://github.com/R-U-Fun/BaratieBakery"
					}
				],
				"Date": "Nov 2022 - Dec 2022",
				"Description": "Developed an e-commerce website for a model bakery as a project for Higher Diploma in Information Technology. The website includes various pages such as the Home Page, Product Page, Search, Sign in, Sign up, Cart, Checkout Bill, Order History, Dashboard, Profile, Edit Profile, Admin Product Page (with options to Edit, Delete, and set Availability, exclusive to administrators), and Admin Add Product.",
				"Technologies": "HTML, CSS, JavaScript, jQuery, SQL, PHP, DreamWeaver, MySQL, phpMyAdmin, GitHub"
			},
			{
				"Image": TD,
				"Name": "2D Animation Short",
				"Links": [
					{
						"Name": "Demo",
						"Icon": "play-circle",
						"Href": "https://www.youtube.com/watch?v=Q0trwCC5dgE"
					}
				],
				"Date": "Nov 2022 - Nov 2022",
				"Description": "This is a 2D animation short video I animated as a part for a group project for Interactive Design Concepts & Practices module for Higer Diploma in Information Technology.",
				"Technologies": "Adobe Illustrator, After Effects"
			},
			{
				"Image": TT,
				"Name": "TimeTicker",
				"Links": [
					{
						"Name": "GitHub",
						"Icon": "github",
						"Href": "https://github.com/R-U-Fun/PaperClips"
					}
				],
				"Date": "May 2022 - Jun 2022",
				"Description": "Developed a Java Swing application for a watch sales and repair shop. Implemented features for managing watch sales invoices, watch repair jobs, spare parts, and part suppliers. Developed functionality for allocating employees to repair jobs and generating monthly income and expense reports. Integrated ability to send notifications to suppliers when parts are out of stock and to customers when repair job is completed via email.",
				"Technologies": "Java, NetBeans IDE, MySQL, phpMyAdmin, GitHub"
			}
		],
		"Experiences": [
			{
				"Image": MDZ,
				"Title": "Junior Database Developer",
				"Company": "M Data Zone (PVT) LTD",
				"JobType": "Full-time",
				"Location": "Colombo, Western Province, Sri Lanka",
				"LocationType": "On-site",
				"Date": "Sept 2024 - Present",
				"Description": [
					"Designed, developed, & maintained SQL databases for various applications.",
					"Wrote efficient SQL queries, stored procedures, triggers, & functions.",
					"Performed database tuning & optimization to maximize performance.",
					"Collaborated with teams to gather requirements & design database architecture.",
					"Troubleshot & resolved database-related issues promptly.",
					"Ensured data integrity, security, & compliance with industry best practices.",
					"Developed & maintained documentation for database design & processes."
				]
			},
			{
				"Image": AFC,
				"Title": "Intern Software Engineer",
				"Company": "Alliance Finance Company PLC",
				"JobType": "Internship",
				"Location": "Colombo, Western Province, Sri Lanka",
				"LocationType": "On-site",
				"Date": "Nov 2023 - Sep 2024",
				"Description": [
					"Created a MERN Stack application for Audit and Legal teams' Report Generation tasks using Lime’s MongoDB and Finacle's PostgreSQL databases.",
					"Ensured data integrity by writing PostgreSQL scripts to validate backend data from Finacle against inbank databases.",
					"Used MongoDB queries to check frontend data from Lime against logical workflows.",
					"Manually tested Lime workflows related to Customers, Savings, and FDs, maintaining test environment records.",
					"Analyzed requirements and wrote test cases for Lime workflows, both new and predefined to detect usability and performance issues.",
					"Identified, documented, and reported bugs in Lime and Finacle via Jira. Regression tests ensured workflows still functioned correctly after system changes.",
					"Created a sanction list for better security and prepared a user manual with screenshots for maintaining it. Collaborated with the Legal and Compliance Team on Lime Risk Score setups for security.",
					"Conducted UAT training sessions and provided ongoing support afterward for AFC Branches, validating system functionalities from a user perspective."
				]
			}
		],
		"Educations": [
			{
				"Image": UoB,
				"Name": "University of Bedfordshire",
				"Title": "B.Sc. Computer Science & Software Engineering",
				"Date": "Sep 2023 - May 2024",
				"Description": [
					"Second Class Upper"
				]
			},
			{
				"Image": SCU,
				"Name": "SLIIT City UNI",
				"Title": "Higher Diploma in Information Technology",
				"Date": "May 2021 - Jun 2023",
				"Description": [
					"Dean's List Award"
				]
			},
			{
				"Image": SMC,
				"Name": "St. Michael's College",
				"Title": "High School",
				"Date": "Jan 2006 - Aug 2019",
				"Description": []
			}
		],
		"Certificates": [
			{
				"Image": LI,
				"Name": "React.js Essential Training",
				"Provider": "LinkedIn",
				"Date": "April 2024",
				"Credential": {
					"Name": "Credentials",
					"Link": "https://www.linkedin.com/learning/certificates/3038b37db3e540121618f1491e8e45dd13045f4aceb338edaa7dc3e7eda81209?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BoQk0iw1VRhaF8L3eBhz2Pg%3D%3D"
				}
			},
			{
				"Image": Ude,
				"Name": "The Complete Web Developer Course 3.0",
				"Provider": "Udemy",
				"Date": "June 2024",
				"Credential": {
					"Name": "Credential ID UC-eabc6eeb-8218-44ee-b2c2-8681596c8e21",
					"Link": "https://www.udemy.com/certificate/UC-eabc6eeb-8218-44ee-b2c2-8681596c8e21/"
				}
			},
			{
				"Image": BC,
				"Name": "IELTS Academic - 7.0",
				"Provider": "British Council",
				"Date": "Mar 2023",
				"Credential": {
					"Name": "Credential ID 22LK028258VARA001A",
					"Link": "#"
				}
			},
		],
		"References": [
			{
				"Image": null,
				"Name": "Lasintha Ferdinando",
				"Education": "FCMA (UK), FIB (SL), MBA (UOC), CCM (FASEC), CGMA, GSLID MSc - IT & Strategic innovation (UK)",
				"Job": "Managing Director",
				"Company": "JKSE Consultants",
				"Phone": "+94 77 759 0523",
				"Email": "lasintha@jkseconsultants.com",
			},
			{
				"Image": null,
				"Name": "Aruni Samaraweera",
				"Education": null,
				"Job": "Project Manager",
				"Company": "Alliance Finance Company PLC",
				"Phone": "+94 77 477 3665",
				"Email": "aruni@alliancefinance.lk",
			},
		]
	};

    return(UserData);
}
