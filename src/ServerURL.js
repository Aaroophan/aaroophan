import React, { Suspense } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";

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
import ts from "./Images/Typescript.png";
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
import sel from "./Images/Sel.png";
import blz from "./Images/blazor.png";
import dnt from "./Images/dnt.png";
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
import SCU from "./Images/SCU.jpg";
import SMC from "./Images/SMC.png";

import Ude from "./Images/Udemy.png";
import BC from "./Images/BritishCouncil.png";
import LI from "./Images/LI.png";
import Cube from "./Cube";
import CurrentUserNameSingleton from './UserSingleton';

import BG_E1 from "./Images/BG_1.jpeg"
import BG_E2 from "./Images/BG_2.JPG"
import BG_E3 from "./Images/BG_3.png"
import BG_E4 from "./Images/BG_4.JPG"
import BG_E5 from "./Images/BG_5.png"
import BG_E6 from "./Images/BG_6.JPG"
import BG_E7 from "./Images/BG_7.png"
import BG_E8 from "./Images/BG_8.JPG"
import BG_E9 from "./Images/BG_9.png"
import BG_E10 from "./Images/BG_10.JPG"

import Profile_1 from "./Images/Profile_1.JPG";
import Profile_2 from "./Images/Profile_2.JPG";
import Profile_3 from "./Images/Profile_3.JPG";
import Profile_4 from "./Images/Profile_4.JPG";
import Profile_5 from "./Images/Profile_5.JPG";
import Profile_6 from "./Images/Profile_6.JPG";

class Server {
    
	Server() {
		return ("http://localhost:3214");
	}

	Data() {
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
				"Image": "/static/media/Aaroophan - Portrait - 2024.3351919793e2eb5fbd8b.jpg",
				"Greeting" : "Hi, I'm",
				"Name": "Aaroophan Varatharajan",
				"Tags": [
					// "Full Stack Developer",
					// "Associate Database Developer",
					"Animation Enthusiast",
					"Full Stack Developer",
					"Associate Database Developer",
					"Agile Team Player",
					"React, Node, C#, .NET, SQL, PostgreSQL",
					"MERN Stack Enthusiast"
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
				],
				"Backgrounds": [
					BG_E1,
					BG_E2,
					BG_E3,
					BG_E4,
					BG_E5,
					BG_E6,
					BG_E7,
					BG_E8,
					BG_E9
				],
				"Images": [
					Profile_1,
					Profile_2
				]
			},
			"About": {
				"ThreeDeeObj": Man3d,
				"Description": "Hello,\n\nI am Aaroophan Varatharajan, a Computer Science and Software Engineering graduate from SLIIT City Uni, affiliated with the University of Bedfordshire, UK, with a Second-Class Upper degree and a Higher Diploma in IT. I was recognized on the Dean’s List. I am working as an Associate Database Developer at M Data Zone (Colombo, Sri Lanka) after being promoted from my previous role as Junior Database Developer since September 2024. I have expertise in software development because, my interest is in it, and I have completed several projects, with a strong command of SQL, React.js, Node.js, JavaScript, TypeScript, C#, .NET, Blazor, Python, Machine Learning, Java, PHP, Flask, Selenium, HTML & CSS and Open AI API, along with a good command of English with IELTS - 7.0. My hands on experience at M Data Zone and Alliance Finance Company has made me proficient in C#, .NET, React, NodeJS and databases, including MySQL, PostgreSQL, T-SQL, and MongoDB. Connect with me to learn more about how my skills can contribute to your team.\n\nConnect with me to learn more about how my skills can contribute to your team.\n\nBest Regards,\nAaroophan"
			},
			"Technologies": [
				[
					"Programming Languages",
					[
						[sql, "SQL"], [js, "JS"], [ts, "TS"], [cs, "C#"], [py, "Python"], [jav, "Java"], [php, "PHP"], [html, "HTML"], [css, "CSS"]
					]
				],
				[
					"Frameworks & Libraries",
					[
						[Exp, "Express.js"], [Rct, "React.js"], [njs, "Node.js"], [tjs, "Three.js"], [btstrp, "Bootstrap"], [fl, "Flask"], [sel, "Selenium"], [blz, "Blazor"], [dnt, ".NET"]
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
					"Title": "Associate Database Developer",
					"Company": "M Data Zone (PVT) LTD",
					"JobType": "Full-time",
					"Location": "Colombo, Western Province, Sri Lanka",
					"LocationType": "On-site",
					"Date": "Mar 2025 - Present",
					"Description": [
						"Wrote efficient SQL queries, stored procedures, triggers, views & functions.",
						"Troubleshot & resolved database-related issues promptly.",
						"Developed & maintained documentation for database design & processes.",
						"Define frontend requirements and implement changes using Blazor.",
						"Enhanced backend operations & implemented functional requirements in .NET.",
						"Managed Zendesk operations to ensure efficient customer support.",
						"Performed manual testing for various projects.",
						"Developed & implemented Selenium test scripts to automate testing scenarios.",
						"Designed, developed & maintained a .NET app for running Selenium automation.",
						"DWorked as integral part of teams & clients based in Canada, US and Sri Lanka."
					]
				},
				{
					"Image": MDZ,
					"Title": "Junior Database Developer",
					"Company": "M Data Zone (PVT) LTD",
					"JobType": "Full-time",
					"Location": "Colombo, Western Province, Sri Lanka",
					"LocationType": "On-site",
					"Date": "Sept 2024 - Mar 2025",
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
					"Name": "Lasintha Ferdinando",
					"Education": "FCMA (UK), FIB (SL), MBA (UOC), CCM (FASEC), CGMA, GSLID MSc - IT & Strategic innovation (UK)",
					"Job": "Managing Director",
					"Company": "JKSE Consultants",
					"Phone": "+94 77 759 0523",
					"Email": "lasintha@jkseconsultants.com",
				},
				{
					"Name": "Aruni Samaraweera",
					"Education": null,
					"Job": "Project Manager",
					"Company": "Alliance Finance Company PLC",
					"Phone": "+94 77 477 3665",
					"Email": "aruni@alliancefinance.lk",
				},
			]
		};

		UserData = {
  "Main": {
    "Image": "/static/media/Aaroophan - Portrait - 2024.3351919793e2eb5fbd8b.jpg",
    "Greeting": "Hi, I'm",
    "Name": "Aaroophan Varatharajan",
    "Tags": [
      "Animation Enthusiast",
      "Full Stack Developer",
      "Associate Database Developer",
      "Agile Team Player",
      "React, Node, C#, .NET, SQL, PostgreSQL",
      "MERN Stack Enthusiast"
    ],
    "Links": [
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
    ],
    "Backgrounds": [
      "/static/media/BG_1.a27fb4fc75bdb8bf3c5d.jpeg",
      "/static/media/BG_2.2ad20e0e27e315b85d6a.JPG",
      "/static/media/BG_3.229cb68f1ca9c0324d25.png",
      "/static/media/BG_4.f0946c77bc87869283ee.JPG",
      "/static/media/BG_5.a30939358566e1c43265.png",
      "/static/media/BG_6.f27ff1ab6b45e49fcfdb.JPG",
      "/static/media/BG_7.f38a5e97bc977d0ac602.png",
      "/static/media/BG_8.7b6c144ccbfa8d33857f.JPG",
      "/static/media/BG_9.508d1c0c78c1b2ac6ac1.png",
      "/static/media/BG_10.5649fadb41987bf542ec.JPG"
    ],
    "Images": [
      "/static/media/Profile_1.e33d328faa5f0dfa96f9.JPG",
      "/static/media/Profile_2.e3ce7ddedd8cec7a8925.JPG",
      "/static/media/Profile_3.905c5369323c5a2bf67c.JPG",
      "/static/media/Profile_4.dc0f33384f30110310dd.JPG",
      "/static/media/Profile_5.353ef644fa0336839e82.JPG",
      "/static/media/Profile_6.86037d7941f48ec8cc70.JPG"
    ]
  },
  "About": {
    "Description": "Hello,\n\nI am Aaroophan Varatharajan, a Computer Science and Software Engineering graduate from SLIIT City Uni, affiliated with the University of Bedfordshire, UK, with a Second-Class Upper degree and a Higher Diploma in IT. I was recognized on the Dean’s List. I am working as an Associate Database Developer at M Data Zone (Colombo, Sri Lanka) after being promoted from my previous role as Junior Database Developer since September 2024. I have expertise in software development because, my interest is in it, and I have completed several projects, with a strong command of SQL, React.js, Node.js, JavaScript, TypeScript, C#, .NET, Blazor, Python, Machine Learning, Java, PHP, Flask, Selenium, HTML & CSS and Open AI API, along with a good command of English with IELTS - 7.0. My hands on experience at M Data Zone and Alliance Finance Company has made me proficient in C#, .NET, React, NodeJS and databases, including MySQL, PostgreSQL, T-SQL, and MongoDB. Connect with me to learn more about how my skills can contribute to your team.\n\nConnect with me to learn more about how my skills can contribute to your team.\n\nBest Regards,\nAaroophan"
  },
  "Technologies": [
    [
      "Programming Languages",
      [
        [
          "data:image/png;base64,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",
          "SQL"
        ],
        [
          "/static/media/JavaScript.062825dbceed44567e91.png",
          "JS"
        ],
        [
          "/static/media/Typescript.4b5fbb860aba7327c965.png",
          "TS"
        ],
        [
          "data:image/png;base64,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",
          "C#"
        ],
        [
          "/static/media/python.df40170139b594025a59.jpg",
          "Python"
        ],
        [
          "data:image/jpeg;base64,UklGRlImAABXRUJQVlA4TEYmAAAv/8F/ECrN6/+/nxtJf/qvPp/y5OncXd9vTZ456p/cUPX7fj/fzy98v59Nfms7t+4GnTZ6PpuTujZNjmcNRjKy5Q0SYoIQphAIOvwHm1eXiW6D+BkMsn4HUUwwk2cEk/QXGJ981uZdsTkXk4Rqg0G/DT4VE4TqtHn3lPMKgaCwQWCQMSvclF2NSmWM5c19KqiLThNPORqdJEyBqZvQcUA9MMehBt/8Jyw+tS6SLSMsT5AEMjoYNe6TwfioOS6Tp+zavJ6kk5ikDWKR7UYgsE6dVBi08k2G9q1zg9cMmlDT8S/YoHPTQpt0MG6BNu8WqE+TR72hk1xGCFs6yFKjDtTBunSBYKKRMUIbdZJMM9GTTJ/kDfrYYNSHCcUG41P5IHBAZgQyE2qS3AhtXjPaUJvU9ByHLMm29rZtvLNMG0MC78OfXmbZRtbsQnwfNAHlSJJk28rTgfmdzD5MK7YIiAwsr00V0ZfxKIFoSKAAgLCat8W7Gem2XDe3bPx5y/X3cf9n27Zt27Zt281mumxOACzo/wX9v6D/v4bLpv1xXkqVWB9ISbPkA8P6JCdQThY93xYT4/NMlOX0TE5avtL+OMf2zncX4lxKrdkeyOkvLru7kk82tic7pZxLbjnbkxNPzrlnjjdMT56HGudcdj+Y9gcly/OcS5xzzj1XSCzvoV9/YPAiO/N+DA8kd5NzzuVUgeXJ7rQXKR1ieZJb6YV3YHhSmuGNnKYxPNmJ8kZ2t86/v7rI7iTXxxsurxLYnZzYeyc5RexOcg292/rh90nL7KQVxDvu4fWU2UmreDOy683spFkNM1LazexkLwMzsrPvuX+lYnWeWRZmuOfKI1YnJQ7mnoLVeSbu5iQ3hNXJToQ5ySlhdXuYW4nVyc6YOSn5x+puZE52T/zY3Dl2AMk9Ncej2Zxnzrtc4Sw2J+dQVfJQ+YTZnOwEKHmo1QdsTk7alUg5uJlcgOSsKXlfJueRzztc6Vwm5zGXuqLz7J8vMznZLVDSD1h8pv1BIacrSqTkG5PznJHhSqV0gMnJbqiiPZic5H5UJDt+LO4C6+DhiqUZMouT0jhlHuvkY3A7yc6qotSdGNy9uOINgcFLaZcyOY1ncLeNUnZ3Bic5RVz5BeYnM3s7WHKPlVUF9i4n2Vy55ESzNw8vDtk9UnFV9rYVVy65aA/m5vFYAqkqtgLWHtCfqzyNuT0FVymly+fZP9OwNs/9HSilP9VIbhiw9nFcrZR1n7V1mKumPzD2TWX3E1fr4eiwtvFcrZQs/A/GNj1VlZzlCGzd4/Ubejn9w9XKzsbD7/MqW/P7Oly15AQBW39VrjrvLLbm6ePJXHWSEw5M/aG82G/EVUvOuufLdzeZ2sPsLy5J7gxXL6XOwNJPkZ1arl5K/m7K1D6IE/R09ICly6kVJ/h5PVjar0klkNoBGPpudThBKUkEhi7PTzHJ3eYEb+Ox1zWG5rkW/3xO0mOFCOz8odYnbxZO8usAOz8jCyc5//zze1Z2dkYWTvTuwMw3/tOcqOTmAzP3mJWaz4lK6e93YmbXltwdTjQ1B7DyvSXngJOV3WBg5VeZy8nKSc9kRhYguV6csJz8P99dCNj4VCnN5YQl53ARYOMPvXP9l3PSkmMCbNzT5fz9nLTs5gEb95yVzMJJy87ETmzMcy1cP0568+OBiUuppeyecNJveAaw8KlyksmJ1/FwXgELn9Wfk78ksPDr3oSTlxx/YOG/ph8nLzvFflbi5G/cqCO76CE5QVzD/zcVrKDn/vGKlPX2c5buf11gl+d7/rwhJW1cQznpe6T9zQWw+DX2ulxePmULP2CX0joey8l3ruFKHcHCJZ9sW0hJax3OU+UkZw1gmHsfxDXccBmw6I/2TJ025F6lpHc/YJg9fjrX0v9hX76lAwt+p72uHMW9ZtnCDxjmGlfmWkrJl7lgsTs1ulx17m2d8T8QWGaJ/FzLoz8aLNTva8tu4UHc7Le/LTDNq+zOtfz9D3Uft8EyZw2Qk6/c/E/YKwBY5sPvk/ZzuKb+s8AS/Ty9nv+c6tx8nfGPAkzTc37HIrkjXFPZGUsGC/zof5mfKz32rYBtXnsK1/TlHgWo7/EEctqUypX+6asEANMMkBKPVK7plT8WaH+ULeTkB1d+uesA2/yBslPNtb3c/wDK48f7cOX5pUQFGOcJ/lzbbzEZ6J4uuQ1RXHkd8bHAOHebz7V97gCg2e+0lbjaDTcGxhkwIJVrKrnH9wOaJ+/lz9VWf+5M+xdqYJyPIjtVXFsfzyw5oHjyXkdz1RteF1jn6x/NtS25MdA7eS85/cxVV3/ufMA69/bh2l7p/A4XUDtZcnSDuPqV3h1Yp98MrvEvXwao3e1xufo6L3MKsM6Pld0KrrGUJOcDWj3uQ/RYTlBy5q4LzPN8dyHJGeXa1hkAtB78c6K4+qjxU4F5ntGZa5tF9noGlHrsde2D6nCCVRcB9nmrg7i2n7cQ0On3jaV0iZNcoSMwz4ABqVxb2a3/gUDndftzkrKz8WuAfU6V0lyubdRz+wGVyXKaIrsnnORKJwP7fHPZHebaHiSt4oFOjyz5/Jxk1Ph8wD5PflyubX7PR4SAyj/6czjRkt2Bgf6iG3Ft+5//7WQEKhv9ek702LnAQLu/Idf21ufYAYDGu96YE4366T2AgXrMpV6dayq5x3JqA1RedXNO9A0bAQuVXaNUrul82XkNNE5+7lROVHZnTwAWKjlmUVzTkrWBxo++Aif7Vx4FWOgAru1h+wONtzqVE42a4Qcs9DW4tt/8rkBhwIBUTjTvXsBEJdeXa/sjHgUo7Cg7VZxsSc/7EAEmKiUeXFvZzZsMFJ58X0726P2Bib4p1/alA4DC6Vk42f7JwER/KddWTlMCgMLdJGePkz1zU2CifzpVm8/xAwolV2suJ/tapwATffy8XFM5TfcDCl8/lZOVksQAYKJvJTurXNN39gMKB3DCIgCYqHTnVn6uqZTm+gGFQznh1wA2+j9W4ppKacdUoHAAJzwUGOnncE3vex+g0HNWM4rQVgGM5JdyTZc+HiiUUqU6nOyZPYCNTq+jyZQL5LwHFF41Lyd7xFRgo8n5uZZ1pgOF+8/nZKuuAYxUdoq5pl8EFO60OCf7hh4rD4GRXoVr+hYBNEhJFicruye7ASPd/w01+f2PAhRekhOeAYzUrz/XUnY2DgYKpUeE8xKSnbF8rETyoc81/TVAYXRVTnbreGCkyY+pyY2Bxr/PCV8SWKmUJHAts7w5DdOjCEnO+Cms5Dfl1WRvoLDH53GyUSWAlX4O11J2y4DG1+SEnw9Y6fnuQtW18HlFGpLnE5Lc4xOYyctwLV8VaBzKCd8AWGmP/Frk/1gaZh1Eaj9mIuWQ5VreA2iU3VBO+J2Amb6WFpI76UdDx/mkpNSSmfiV1GJvoHELTjj1jzKTX8Q1DOpBxX1JLQ7MdAstfinQeDVOWnLC2YnkFGnwp6Op+CBiP4adXEkDyYkEGgPyE3srZnJKdQ3kRwWp2JiTjtqUmUg+2Tj5o4FKKfEglgWYqTwjrcE6dBxBLD878ciS1+BPUtFja2KHsZO7k8sPVF6XE+/MTj6N3A3ouAe5vOzkKch9Eh0zyPFHYSY/hty707GHBpswE0/3JbGDAuiQ3WENvjEzuS2xzwM6q2rw95nJfYjtQcnWGlyKmcCppMpSEqUBL8ZM5HSQlOyY0hHAtXxNZvL3Se1FRw9NFmcm35iURw4sHX5RWvD9WMlbkbo2HXCqJnKSxEoCNieUg5KlNcm7MiOB5yP0nymR3SlN+L9kJXcndG9KztRmfjIjie5H5odRMk4bLjlBjAT2ICMldpS8vkYHvSIjuRWZD6JkEY247OYxkny3IfJ1KImeq1HUZdkISE4QkaqUgL9G/C9OZiMnp5KY+z8okdJUrbiUurIRkJ1SElyaS4ISaRWvWd63YiObEHkDSjz2ujZXK77SKUwEfgSJG1MC76EZl1JLNrIIicf0o8QzsdXOZyEmAj+LAO9AyfGpmvErnMJELrAOnlQCZSmBl9OOy4kbEwHZzSNwKVp+GAV1IpnIK26tjv92SjaVnVXt+GGPwkJASp0J7E8JjKeAr8BEpl5K3Y0mU/LXoyjg0iqehUCJuaq4lKhQAmfSUPqjWQj8MnV/gpbrRlHAjz2FhWz6uKr4fpTA16GBvykLgQ6pqn43LTOoqL4JCwE5jVVV/XhK4C1o4Ed3ZCEfe5gavi4tJ1SngUtpKguBGXXUPOkrUgJSGkMF342FwCOr4c9KS/JjUvH1o1lIwI3V7L4QJXAXKvjlWQjc5zAV/OVpCTiCitTrshDYJK8KvgglEP+kNPCfxUTgK9R8bz9KYAAV3HNWkonAvVTwe9ByystRIaedbOQcO8A3V5HlrpTAQqfSwPdjInC+u9DSyvi3oAU+jYpfxkbguj7KeHda4PlomPLw+6RlI/AEqcqutBMtH+tPAf/PjAR+izL+hbTAwW9IwXhWEvB8yuqcQQv8GgouxUpg6ssp4u/hRwsI7fibsxL4gX9REX9kavwkp0a76cwE5gYpyvv6tEDHz9PM0zVmJ3B+h+s2SvhfzEcLLPTrtRIMBfYrrYS/OjUwY3eNPoelQI4nVZLqOStJDXyFRrJTzFRASpUk91gBPzqaGthKG8mpYytwvygF/OfTE30lTe7FWOCXKon6z9TAIqlayGkKa4EvUsA3T6YG3lmLocwFFlfAfelJzqLBD2MvsI4CfhdqQE5dNLgsg4EvVLD1/tQ8yhRiUWuwGJCcIHP8CqfQApLrS+yXAJMNuLw5/luoOX4uqfFsBgIkJ9xcnY1pgf9H6rUZDcC/NMP9H36ftLT8E0JT8jEbGGCGvzot14kiIyWJwHDfwEwd6RFhSuBoMldjOfBeUd5wyXm/EyW3JnIssN1PSvWG/3RK3pTIaYwH7pfqTeoMOu5NYkM/1gO/po4XvnU+KjxnJUkUAfbrkSXfzwv/h1ScQeBHAAt+fNnZ8NLvZBr+urq8BzMh2OQxOedcShtp2E+dlHgAI373/JxzfhoFM1TJ7tRUVgQLHc057xyt3VOoedLbAju+juy845yX1e5l1FwSWPIasjvMefX9Nbu1CtnNA7b8sT+L83tpJjsTyhY/xw7AmCDfDXjU79LorqmKNj8emLPf5fmP0OgpuNI3rA1W+oHqSWfiyeHV9P3Pm8YcwICoGdpIaa6SJ5XcF2B1TecDQmwFJL2QLEXQj8QPJPexPPO+MZK/MAxgKMHC0R2fP8iPP68ZbnCXMzV5+H3SZlHwpEXAumagrhWCWiT+CbJIfkIiBmmemd79R2msgUeq+O5aeMylzs3vvhtY0a/09P85VIphEYhwTmiKYBVhLiplDDXIp0V/c7vvBtbTVBe1e9e8hqAQiSksdUx/h9YYOUddgKkJu/f9FA80sHTHGIplMsJijA0Iej8cy69JNbAoQl2T3Jah5Rnc7EGvDdazNBYfBaVYLLqDcaSRkakuCvcGJ5bySNhhGYtFDYIJhEtCIYIPCOKQVDL9fF8G6+trJovnrCRYTyRcEBwLrwWQaD0xHIMBFmpuA+3MCNwwZiyM5RopITDMI/HGmCjmLl6Gb4NxurFQ3gxB4XxTyQJW+WpR3h12AlhPJKOEwHhSDkO82xiyO3+wglLT/9/Om2p4kcYCi5YEMkIgKH/g5g2DwXTcQHcNBqMrktUrC7UJWPaFY8nnAmt9IPe2/xpgPe+AEc1/T1Pf9EDygT7/xVCrBhmBxW8ET4yDbFjg+2I5gsWRUI1hC8syzNZ6oHrSgRW/N/f21juB9XzQul3BKOv570YFxIMOGEhEJKa5jIDZEQiDMI4lCvUYfsb1Oc/732nAqi9zGy91BoDNdG20MgkhOkXqPcyLG6M9xjaMe4LgwBKNwOpvxTnnm88AW2o6biDGaCROSYjhE/UcFg/SYgVJ37SZYAPvzTnnctJ+/reTEWxs+3QSAonWeJ2WqS6KPeMw/hckC2HwNDF3wSbufyrndV7mFLC5uyDxjoTAWODSY/5pWH4XJCuFRbjANn7sn+J86+uCLTZdcxXJQRIiTXc1wGCJcVIQjXU82Pm4BLbST3Ir+VzJidwUbHNFhMMkUtrrqhFobFxoiiCJ8DAMaYuADR3Hv/fGYLPnYPmegMDyr6nu1/XTLs6WgiiSm1kbgC2VXN+DBvQAG547OwHRXCdFIgb7gYmCKJY7HceCTZUSu78i+WQD2446KiSEe5/XeshU10UMljcUZFPCaoNt9VwLdxrY/DYkYl26x3Q+IGd2QRiL2QUKYbCx0ZPB9mfDiBIQmK2sc0x9P0QiE8OBIN1pNtj/7dpRBwidSAzTNf7TUwTxvi6w61212yPGAUMWAjfUX0JA/0P82heaERALSEH9skB/M2FISRDkK7cDe31Cedx5ewck8mMRbIvg+18dLDKNRF+9EtRtsNDygmCHH+euLe7G1kUiZDiGzwnCK4LdJWqDhZquYUsh0DJSnxRD2Cm0rW9Xzcb1ejSkWhyGrmZCIcY9LMKzgeVWJiDcQVqX1K0hNO5gH3U3CR4sVbttj2UHkr9ShMox25v6+zZYcjcS3fRIPBbjQvOl4+2Z+Iw98UAPyYBZGIZaCqKJzWeCZSNGggSWFXpkZ0EhhvkVXfbHRNy8h/p+4TbQ7ogg/ZPKjhEaDh8Plj6hEoECegSJehqEKIulr6ne9+2EiabaXOM2wuB81PAPTxfa+y4HVvCFCIixOgTLOjqEEPN2xEhyr81uq9rVNdXwYpQ9u2bWbTD0FHpeQW32UfFgDZFsJJGhQ76YGq8hSLQ63aRm4UCb0GqB4tZ4dw0GMVhHTSTCkMjMU3mdlomC/tx1wTpikUaisA5ph0UTTd63rBzWt5sbqm+wQ0VrElh7dK72eGyiIxyj/9IIs5GoRKL9w1duKCy7yYpgLbOSQH3kdAiYjhu4D3UKG9YoEhq2Y18EPtUcF3yOXLgQMDXhjIwWgYEauAIDj8vI2CUmJjoC4Ss0Nm4Fx6c/s7NvXPMOoTliCz0hhg1hRccMfDvcUUwGq7k0iX56BGDFApZCOjEkBMNykvch5hGuC5uI4aDysvXHglU9ikRpfQJzSjSxJjYawbdZCG3cS8lz1AWA1cWYRyJGpwBMOLuI/VatStoPf6B60oF1rkwit24BgAYYLCun2FsJScPT+mS4wHrflEDCRD0DAO7Xi/lsLHJuaiellF0LYcT8mFZg5ccmEqgAOvjq7gPDHRHOJNgzZYa1SVt/5GywicsLgs31kNfu9bCw7hzb0N5AYmFhn13PHvfWLrChSPiRCNdL3gbtMnjtzpWb2Lxe2+XI/9Tu2qZ9RncHG5yDxO11ldmJo5c6dQkMVQhGC6TYljE3ndS00+qZiy5Z1wW2u24CgdggPWZ+xHvWcxPIqGU7IajFMDSvjLWqhPAPxulPanMUFt617vlio6e5wB7EaCsIYkgEg7BUbVMNb1fEYL8Yo/1TI0zapuknYRyrcVOE65aBYBuJlaQXGhiap/mqznAkjdwE0j5XeffrxVwK7E4EEyRezCggODawS8bImK4RS6Wnr+/w/tPDve3odDqfOTw8vJrD4XBcML19xLiYmIyMbMlgB5v6m18QvOkIw0KfhpHoBiz9ogkEcs5hap0EwZ7A0kePIdCwOFMbJAjWBJZ+T0Fw2wksreJNSbwYsHQfQXAbYOkbCYLzWrC0LrMJNI4Ghj5hYUEQdU3AmHQVLqZLOguCzcGQrB2+yijQozUFwYW7GxAtMmMYEoO7gh4tmkgA43QgGI7+25cRInh50KO3byjU984GBmNQBILaFCGEOAT0qKmGN0So/87vCcaiy00gvYW37+3SI7jvxxhRoX47zIsbjMWIScL7lB1Ah+ZuItQfWhwMxfIfKMyHgg4dXUCo/8CxYCQGHdNYKDxVhxRuLdTnHwFGovv1Yj5cKB6iP3BHsYxQndjRBUZivXShvKTuaBssVDdbHgzF5SsJlQhqdYarY4pQjaHLdD4gMBSPQLAtVEfYCce5azCZt18NjY2zvFIdhOqUrPFgKJqOG1hDqB9c2taNGLnC06/1nYXXBAyWlpZxqFA978XAYOwmSAZjDB1rs7r0qdnGd4xQnH+iRY1rKdSmxI0Fg9GVRESIJmldbE1Ql+VrPWCxOwiSw7pYjqvaGKHWF5ViYDgWF8RT2le75wjbUKxw1TU7HNpYaIgRLWop2U4XaoOdE8B4LE/Oa5n2WRGY1b9opLUaMXP5nXdZb9gdBI0+gRZRH4kFobbKDmBEHpeoiffBK2MYmr79gCsWrTezu1Vo1SDX+scgGYVlRZECKYLmAhhJLuri0xKFylUwyoJBuRoFigcj+aVy7lWfupsDjY2LiHZvcLbIVBcFRROLjy495HbP3HcWkt0VsgtLzfHdKPOfJFTecKMgMCqH0KX2DvM+HEPX8LCwuDgsIp3Lhoef5XAbaKebDXU4wsNLOHvGtRl+OMax3jfFuCesYsL9L0pRZHhjoTwkvBUYmG0syOaOuf9MWkw1vMOE8mYlAsHQnLiY3SREQlPcUWxHQXx4L6H4hqMmgtHZfbj9JITYbgPN7rmKUHyo2xhyJBigLkdDeykpLr0iaJytU4pQmDLoh7vAIPXHMGQHYUTDvrgBaB7UtrVQmD1uNBioriGr2DU518LoumQ7oBDpLYVxWiiMdUwEg7Vd22F2SrPch0RHApWm8wH5pAiz6YvOAEMWlWIFMe7ZG/PyO3ZwAaXJf7Oh8L5hGGKwrcCwLXbWoAR7AcNylQF9TDWMQG+8A4kF4W3j4W3HgsE7reR7B9u6nO0xhl6wC1DtQmPjthVeEyo7KoIhXOqHL3poim1K3Ha9tFEzg4B2dw1moBBCzN4n9Dgwkoe6CSRro8Y2Jfbwvl88pTtY5J5CiHLO0pFgQI8oXMunXC+rl32gD0KP4dEVwXLdrxdz780c5cDIjtwhfUAH30pWqFKhD9z3wLa3f6B60oHF1x4BhrjrrcedvavPYvN6WR5GtEL75n2xsB41ZRqw2myjn+PsEkv4VGnUu1oiNbPLIpg4vAPC1Kevebs+S771BGDKczL8Yzaoj8bGVXV0Cw8/0Ol0OpeIO9HpdDr/Znh4eGbH+qMi3jXm6hnHBcGC/v9av3Wdoy6A6cVHZA3NVBcFuxtR1Cek4YsBs7+oM1aIXs8BjD5oxfdOEUKIs4HNu5Y6VHj74S42FzFQmF0WWHz3OKHwb7K46N5CaYV49la0sVC+bxBr65cg1ObIsCXlMMqufeoEg69LTqE++FIxtqBUYcfSGLpChBCidz9jb7ogeyTCiK4TrFemuiguOiptvSMThdLDjzDwLppCSAgRjHEMyYTQKYFWpsU9Q596vVUaC4KJBcsZdusKrVs38vmbVzygcPFIC0suX3TtTgu3FlqWcRYz6NbUzHxKk74IauM6fvEPn5KRTFP3GcuFdtz3dX1zCiqf1/lA9aQz5GpSo3gMEgu+74ihqtMuazvWT18+onCMqQlnZAuMLxUYGBiYkZGRcfWYrkVv9+nLLtP8dRv1DhG0I9h++mwG3ItZglUfnLWu4Rb/ne0LIRouWttgA4e9IcSYNtHGWtB0u0MI8a+HRBpoMHs1O0SIAs4GxhlM62uPCBG8D673HcMMWhW0RyqFRbiMM3BhtK9kb3z4WRXBYHdvcCJsticqhUWAAe9qu7KdEHx622Qw6Ee0TbJ9iZUxWGYDI3/CzoVsWmKOs6aB4e/aYJ9gG5VzvS82nQ8IGGHdtYfZngo9NxgBTDF3iUNtSOuh63YBFol5cdeq0tAG3HTWuuVdwC5bvRjCiEljrFeC7/1DLwqGd6a6KC5a/4vTOk3PgXE6KSkpyTcHlhVv5yY1v1sQTV671wsfjhG1OmN8C46q1x2M7mnPcYdtyjUWBAscNZIur0GmJozGxi3b9AmtQ2LZtZCMch8YLtkKjO74wqdudlNBePA6A5FoPf2C7WjzvkVXN6n/9FhWvBDGPYtpMnDWgW5IMNXwzgYD3NSED/nAwYJkyL8+0bHnjGSwfFeDd3UbQ/70vvsstnIwHTnLFmm66h1WKL3LBDDGZ9df4khBEOH68LUxyrpfL2awwmMbfLeuRb+42gBn1rjOYdNDza4VVjCu51OHH+K4YNfxpvMBTQB78Lidj9NL2XY+vaFQj3Gvyqkx7UDnLxl7SLwOMh030E0gp48R6lt3Rgy2FBiBuwoEE1fXOe2W65xTqMeIHjWuHRiEc55XDO6jZ3L3vKlQ32vokAlgIOYRImGIXgnqg7A5RajHOH3FFmAsLiuEaJhbl5yjLuCsJKE+cbOuYDh2FEKIPDpkTs2WQn3CpXYAA7K5l4QHqied3ihVM0QQrDIDjMhSCNe9iK76Ih6DZUtBsOxzgDH5zMLb0rpiuQqCZJuKYEyO7OVNQgsdUXc9QXRXMChnFBDeIqgF/bh+a0G0JxiUhWOFt2NG6obuzQXZ7c5RF2BMZKqLosQY4f1JoBczygnCu4IhOW6gMFvQpReiWwvSA4wI/6HCfKd2oBMLZxfEa0wwGoL6fGCKMBsc7gKdeNHsQsN9WhkKXZ75SKFwu8KgF1sNE5r2dddgDIPiWFhjGEoRClMKVgTdeAeh9evmMgDiS6+JcSxRKC5ye9CPY1trJkSFT5+m5yJjRuV5XqHyCTdygY7sI6gM3sxNIBV1WamJB1bNKVTfsJbpuIGgK0+iQwjRq2pJ0/mAdNVsVIpl7uybIAiu0jYedOau1AghEvu+Xb9kPVS8frjPoWME0ZTD+7iAxhb21VI0eR3T6Kn7ZdMtkRd9jlFHfVK6IF5gzV2Azpiz7asRN6TM2+1mzcw1W1e43K8X854l3w5BbaFgoWVC0wMigVJTDeMTumsw9hVs0NgCvCYUCjtpyC5B9t7sqy83/6k7YJwuI7ROxNC17jSgduihwabjBtpZcECwZXg/eKDPSesfMdbuGvGe77rR2idO//DWgsrEypkrAcXfrax4b7C7c9WwILMF2iOR2dFNarprMO8ZaedE1h2//EYzF91ntZsmCnrLVDnrrYHq9QcLMcj+AtNxA98O456lmU2Yl8On5yF3rpfRyo4Yi3lx51rqVQ5cYpv2vhiWBf1ll/nhE4Hu5DghREgpOwxg2poI162C0ta+OTbbF4tgjPbzD6g3I1s7GzOxuH+9fitkPhBhRK/N2n/4ypWExQ5eq5o/UI9Rdp4QQuwKdvrYtlWCrYnKkBqrNe3cbkD4q7RFY+Mich2RMS3ZeiQ/UD3pMsYvGXHABR2jwp1IRsVt87qNCiGxgOFAWMMyh5fIFQ/0Fy8ovMYm22sA0GJQBwzL1onk8zZL+vCFQzuEhW0fF4cwwuncNTy8m8PhcBNIenqfiIiIPunq5zscGO3Dw51OjKFxcZ3CwvKEhi6GceyFkloPFlb5eRF2ppWeAJY4Z/WGwtsLgn0fNH4UhqontAX2au/OO3+3THVRgGV2f+YQ4f2lQA8Wi6h2qRfqpbNaf+DqP7wFWOyc8JbCbJFz1AXoAu9N5wOKcDgR1CYl6qACw51t/V1gwXXTsgvzZaeB7uw+8s4HXmpLDBs6pfGw5t2WKwYWXq/5GKGw9Q6gW+u6azAOZ5sizfRDw0k+z7zUzHZg8XMc5YTislcH3VtqdJ9aiw4tl9OOSygbuuox/TKCwBoGbeCDcU8on2SqYQT9XCw6vdtR0yc1safGHLnWiYf0u/oIsJpLLnpToXb6WNDhI0znA4rp43AWDPV9XvsF415SaFyaIyIjEqzqDqsfKVRXyuwCfT9tZB/HSVmbD1qlZYpd0OsJV8uzasdX+eHlk8H6BsWk+QqCvt8NjMOgaeU3wEgatfq+eRZep0lj2xJSY7WmBRettsJy5YuB1S6FGGxnDMuCZOM1W4FROdt0PqAdcv3wjTKfhDCi02aDJiU1QbhuXRpXS4odNN1n1af+dLeBNu4o5rp6tkx1UYC1d5lqeD8dYXNjQXb4RcFA7V4sY/SSEUu5CcRxTAmn8wFxO4aFIahFojW0SCyCiaSkeSFKZwshEGyHhIQ0S0pKShoWGxu7WGiVsPxxWZ0dwzM73MaQ0+uXPiKj2AiwqQ3mN28pSPduD6y7bvqJhQT5Gm5SMxKYdkbbON8UoWGSIxLY9TnqAnJ1m95aaPuv04OAUUf6t81aubHQGONewe8GTDryu91u1S17Ce371qoI7Ln4i306EplblhE0zntqf2DMx5Ved9UcIYLSZttPDAJ23K7Lcusu+oEFBL1H9nzXdmAozim50ZJz7DNXgz3dB4Y981RoLGges1iJ0WA8zj6mgGiZY99uS/nPtpdajDyg1tthWfFClQTtRy4zpCIYlPErHp4ivLYsEvb0Z/XzL2WnxL/nuBUwusa9rm9DYYk3zO9wb3CCsWlqwiVihdJqk4Zvn/YqfaJN5wNqZwfMzshV9Iq77th00k0ThIUmvtAyGElvDYZog1qDEswoTCzQd3inp//0s/uhUmxmRVsy9j1jXsxNIGcdiGRU83+9DoYNYdlPiGXFM+9ZEYzUFqOOqqBCeXCBFxq0z44II9KwsJ6/YkS0qQlPm21NAhv4L9BHNCJ9PgbLEk+/42Y5VmmC4UBYxXkIalfHHcW6YMgOLdpzscZk1PcKmXdk7GKhWFa0icvqxOiK0d7hcKSnp79YREThmJgvyFBcN7BuRkbGRWNiYmImRkRE/PD0OztKhtd0YgyN2zcsd+ig2N4FnldY24ZbPlfm0oFg7J7n/e80UxwPKIJxTzN7tPU7bn9M/S5BYBRH+l8wLcw32D5qtprPgLa5HqiedGBIx1+9z8wT19o22E5pFpu77yFFRyaDAR7ZZdwKd1i16SoYNuwChOsVMHQ1XzS87YvNOEddABjx3U1NuN6KmVfv1HTSPATbNuYO8zAMTY9LW/eAe75nK2CGrYqPn4gYrPvAsGbPuG1O/9eTkpqVsTIJrbfd8gO3iXOGv8oFl5ty0WKZ6qIAFtou8D3LL9BHNCLdbaDtOCS8hNMZF3epsDxItB4eG1sjyStGNMRsQy/ZQ0JCvnNSUlKh2NjY2NDQ0Cph9497+mXDMVg61kcMNuJdY74gI7AULOj/Bf2/oP+/xrU=",
          "Java"
        ],
        [
          "data:image/png;base64,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",
          "PHP"
        ],
        [
          "data:image/png;base64,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",
          "HTML"
        ],
        [
          "data:image/png;base64,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",
          "CSS"
        ]
      ]
    ],
    [
      "Frameworks & Libraries",
      [
        [
          "/static/media/express.b44f5a4b0ab040328aac.png",
          "Express.js"
        ],
        [
          "/static/media/react.ee618307265038b97d52.png",
          "React.js"
        ],
        [
          "data:image/png;base64,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",
          "Node.js"
        ],
        [
          "/static/media/TJS.7c862b1bad8407d307b0.png",
          "Three.js"
        ],
        [
          "/static/media/Bstrp.a7c8d4ac3f07e031e310.png",
          "Bootstrap"
        ],
        [
          "/static/media/flask.b979c3f17171ee75f69a.png",
          "Flask"
        ],
        [
          "/static/media/Sel.a2d3d9165387486b36c2.png",
          "Selenium"
        ],
        [
          "data:image/png;base64,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",
          "Blazor"
        ],
        [
          "data:image/png;base64,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",
          ".NET"
        ]
      ]
    ],
    [
      "Databases & Tools",
      [
        [
          "data:image/png;base64,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",
          "SQL"
        ],
        [
          "/static/media/mysql.a350bef71ea10b56db96.jpg",
          "MySQL"
        ],
        [
          "/static/media/postgres.13ead9276e25fc0d8c89.png",
          "PostgreSQL"
        ],
        [
          "/static/media/pga4.1b71f6eb95f54a5b3b38.jpg",
          "PgAdmin4"
        ],
        [
          "/static/media/dbvr.52ecb3d8b8ecd1fee499.png",
          "DBeaver"
        ],
        [
          "/static/media/NSQL.b96022b97d85d0f20116.jpg",
          "NoSQL"
        ],
        [
          "/static/media/mdb.d9a5d37e83903126b1b8.png",
          "MongoDB"
        ],
        [
          "data:image/png;base64,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",
          "Firebase"
        ],
        [
          "/static/media/SSMS.5aae029f5a9ae6f69da5.png",
          "SSMS"
        ],
        [
          "data:image/png;base64,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",
          "SSIS"
        ],
        [
          "data:image/jpeg;base64,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",
          "SSRS"
        ],
        [
          "/static/media/orcl.0f1bbf0f01822c2cf80c.png",
          "Oracle"
        ]
      ]
    ],
    [
      "Development Tools",
      [
        [
          "data:image/jpeg;base64,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",
          "Visual Studio"
        ],
        [
          "/static/media/vsc.b8b1e001813039750e6c05c236ab0d46.svg",
          "VS Code"
        ],
        [
          "/static/media/astd.97ecfc5ccc9b447a387d.png",
          "Android Studio"
        ],
        [
          "/static/media/git.52ffcca1c2260d3a141b.png",
          "GIT"
        ],
        [
          "data:image/png;base64,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",
          "GitHub"
        ],
        [
          "data:image/png;base64,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",
          "JIRA"
        ],
        [
          "/static/media/trello.4eaa2d02b5044685d3a4437845d5446b.svg",
          "Trello"
        ]
      ]
    ],
    [
      "Machine Learning",
      [
        [
          "/static/media/openai.f17ac0f9a9fb4eeab241.png",
          "OpenAI"
        ],
        [
          "data:image/jpeg;base64,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",
          "PyTorch"
        ],
        [
          "/static/media/hgfc.8bc35cd20c126fe9decfb06c092d4411.svg",
          "HuggingFace"
        ],
        [
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAeFBMVEX///8TB1QAAEb/ygDnBIgPAFLNzNYTAFnQ0NgMAFcAAETb2eP39/oUBlfV1N7/xwDmAID/9tfLydcjG17/4Yz//vbCwM3ykcL61OfoBIwyKmgAADYAAE0AAErx8PTIxdT/+un/34T85/Lyir/lAHv50eX+9fkpH2Ma8J+4AAACEklEQVR4nO3dzVIaQRSAUYNCEIGoiYmJivnP+79hFrmLVHELZ6pnmG483xqaPruh5lb32ZkkSZIkSZIkvb52z7dZU2+rT4uH2X6rx6m31afF7M1+87dTb6tPCDWEUEMINYRQQ5MS1tu0nqtMSrhKn26e1v1WmZawyn58g4DQL4QIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECOFA6cvM5a4nYb29yjoO4WmVvM58WPQkbF8e+RqPcDlPVp4t+xLS/W0QEBCqI8yTLpsizN8n/WmJ0CEEBAQEBAQEBIT2CF+/fci6a4hw8y7rvC3CeRYCAgICAgICAgICAgICwlCEtJYIdzdp/3+kdkKHToFQ+RjJMCEcCKF7CAdC6B7CgRC6Nylh9zGtJUJ6uNCsnsOFhhkvPAHC9x+fsloi/Pp5nXTREuH++iLpMwICAgICAgICAgICAgKC/87R7/u0lggdQkBAQEBAQEB4dYQON67UTqh9KuwkDlRBQED4R8gOF5o3Rdh8yepLGO0ez6MNPO+WQ9w3NilhvBAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyEKJt+lL0SNeADUR4TG9cGWXHew10AkPP4aRBO9ohEuOFUEMINYRQQwg1dAKEDvd41t5t2u7lL0qSJEmSJEnSyfUXeomSFq0EzbkAAAAASUVORK5CYII=",
          "Pandas"
        ],
        [
          "/static/media/nmpy.a8e574488c66a97cb043.png",
          "NumPy"
        ],
        [
          "/static/media/nlp.3c803cb80ae26ce94cac.png",
          "NLP"
        ],
        [
          "/static/media/ML.fb0e9a78d0766eaf8ec6.jpg",
          "ML"
        ]
      ]
    ],
    [
      "Design and Multimedia",
      [
        [
          "/static/media/ps.3e6972a59e4ecc44e53e.png",
          "PhotoShop"
        ],
        [
          "/static/media/AI.a7dc96e43d6098d7530c.png",
          "Illustrator"
        ],
        [
          "data:image/png;base64,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",
          "After Effects"
        ],
        [
          "/static/media/maya.36a8bda88e54d1870879.jpg",
          "Maya"
        ]
      ]
    ]
  ],
  "Projects": [
    {
      "Image": "/static/media/AFCLOD.dae9d300086b95c0cefc.png",
      "Name": "AFC’s LOD Web Application",
      "Links": [],
      "Date": "Jul 2024 - Jul 2024",
      "Description": "Developed and implemented a new Letter of Demand (LOD) Web Application for Alliance Finance PLC’s LIME banking solution in just one day using the MERN Stack and PostgreSQL. This secondary MERN Stack application integrates with Lime’s MongoDB and Finacle’s PostgreSQL databases to generate LOD issued details. The Audit and Legal teams use it to input parameters and produce a comprehensive LOD posting list in PDF format for their daily tasks.",
      "Technologies": "JavaScript, MongoDB, ExpressJS, ReactJS, NodeJS, PostgreSQL, Bootstrap, Mongoose"
    },
    {
      "Image": "/static/media/MT.68f503fc594504ceac8c.jpeg",
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
      "Image": "/static/media/Dom.b0c147a5633c7d173d53.jpeg",
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
      "Image": "/static/media/LocDev.50e83aa57ba7eed3d2ce.jpeg",
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
      "Image": "/static/media/ML.9e55700177525c1ddc31.png",
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
      "Image": "/static/media/EveryMoveProgress.3866ddf2c08ed68144ab.png",
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
      "Image": "/static/media/BB1.6e3c3385a8c3a4e69ef6.png",
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
      "Image": "/static/media/2D.fbb9aecc90a15ca19c24.png",
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
      "Image": "/static/media/TT.cc032fcdc3d0e81d765a.jpeg",
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
      "Image": "/static/media/MDZ_logo.d4b4c64faf7293475292.jpg",
      "Title": "Associate Database Developer",
      "Company": "M Data Zone (PVT) LTD",
      "JobType": "Full-time",
      "Location": "Colombo, Western Province, Sri Lanka",
      "LocationType": "On-site",
      "Date": "Mar 2025 - Present",
      "Description": [
        "Wrote efficient SQL queries, stored procedures, triggers, views & functions.",
        "Troubleshot & resolved database-related issues promptly.",
        "Developed & maintained documentation for database design & processes.",
        "Define frontend requirements and implement changes using Blazor.",
        "Enhanced backend operations & implemented functional requirements in .NET.",
        "Managed Zendesk operations to ensure efficient customer support.",
        "Performed manual testing for various projects.",
        "Developed & implemented Selenium test scripts to automate testing scenarios.",
        "Designed, developed & maintained a .NET app for running Selenium automation.",
        "DWorked as integral part of teams & clients based in Canada, US and Sri Lanka."
      ]
    },
    {
      "Image": "/static/media/MDZ_logo.d4b4c64faf7293475292.jpg",
      "Title": "Junior Database Developer",
      "Company": "M Data Zone (PVT) LTD",
      "JobType": "Full-time",
      "Location": "Colombo, Western Province, Sri Lanka",
      "LocationType": "On-site",
      "Date": "Sept 2024 - Mar 2025",
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
      "Image": "data:image/jpeg;base64,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",
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
      "Image": "data:image/png;base64,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",
      "Name": "University of Bedfordshire",
      "Title": "B.Sc. Computer Science & Software Engineering",
      "Date": "Sep 2023 - May 2024",
      "Description": [
        "Second Class Upper"
      ]
    },
    {
      "Image": "/static/media/SCU.6afe051a1587efd47877.jpg",
      "Name": "SLIIT City UNI",
      "Title": "Higher Diploma in Information Technology",
      "Date": "May 2021 - Jun 2023",
      "Description": [
        "Dean's List Award"
      ]
    },
    {
      "Image": "/static/media/SMC.39558802339fd1a6018a.png",
      "Name": "St. Michael's College",
      "Title": "High School",
      "Date": "Jan 2006 - Aug 2019",
      "Description": []
    }
  ],
  "Certificates": [
    {
      "Image": "/static/media/LI.72097b5277a499b1902f.png",
      "Name": "React.js Essential Training",
      "Provider": "LinkedIn",
      "Date": "April 2024",
      "Credential": {
        "Name": "Credentials",
        "Link": "https://www.linkedin.com/learning/certificates/3038b37db3e540121618f1491e8e45dd13045f4aceb338edaa7dc3e7eda81209?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BoQk0iw1VRhaF8L3eBhz2Pg%3D%3D"
      }
    },
    {
      "Image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAADwAAAAhwAgMAAADt0CPhAAAACVBMVEVHcEwAAAC+MvX5DIhrAAAAAXRSTlMAQObYZgAAJQlJREFUeNrs3VGS3DYWBMAJfuIoOCWPws8OnHLXuw7bsjSjbjZJvBpmngCBjmJZBVv++AAAAAAAAAAAAAAAAAAAAAAAAAAAAACKaKs7gFhjcweQahnDJUCqPlQwBBfweLgGyNT+G+CxugeI9Ed+VTAEF7AKhkz9/wHe3ATkWcafXAXEFrAKhuQCNmNBnvZXgM1YEOfv/KpgCC5gMxak6f8M8OY+IMkyhgqGb1HAZizI8mN+zViQpP0rwCoYcgtYBUOQ5acAm7EgRv85wJtbgdgCVsEQXMBmLEjxq/yasSBD+2WAVTDkFvAYm5uB+pZPAmzGggB9qGD4dgVsxoL62qcBNmNBeZ/nVwVDcAGrYKiufxXgzf1AZcv4kguC2AJWwZBcwGYsqKz9JsBmLCjsd/lVwRBcwGYsqKv/PsCbW4KaljFUMHzjAlbBUNUz+TVjQU3tqQB7SYLcAlbBUNLyZIDNWFBQfzbAm7uC2AJWwRBcwGYsqOf5/JqxoJr2QoBVMOQW8Bib+4JKlpcCbMaCUvpQwXCTAlbBUEl7NcCrO4MyXs2vlyQILmAVDMEFPMbm1qCGZUeAzVhQRB8qGG5VwGYsqKHtCrAZC0rYl18VDMEFbMaCCvreAG/uDmZbxlDBcLsCVsEw3/78mrFgtvZGgL0kQW4Bq2BILmAzFszV3wvw5gZhnmUMFQw3LWAzFsz0bn7NWDBPezvAKhhyC1gFwzTLAQE2Y8Ek/YgAb+4RYgtYBcMc7ZgAr24SJjgmv2YsCC5gFQzBBTzG5i7hasthATZjweX6UMGggM1YcLl2YIDNWHCxI/OrgiG4gFUwXKsfG+DNjcJ1lnEwVwqxBayCIbmAzVhwnXZ4gM1YcJnj86uCIbiAzVhwlX5GgDf3CldYxlDBoIDNWHC5c/JrxoIrtJMCrIIht4BVMFxgOS3AZiw4XT8vwJvbhdgCVsEQXMBmLDjbmfk1Y8G52qkBVsGQW8BjbG4YzrOcHGAzFpyoDxUMClgFw+Xa+QFe3TKc5Pz8ekmC4AJWwXCWfkWAN/cMZ1jGJVw0xBawCobkAjZjwRnaRQE2Y8EJrsqvCobgAjZjwfH6dQHe3DYcaxlDBYMCVsFwuSvza8aCY7VLA+wlCXILWAXDoZaLA2zGggP1qwO8uXOILWAVDMEFbMaC41yfXzMWHKVNCLAKhtwCHmNz73CEZUqAzVhwiD5UMChgFQyXa7MCvLp7eNus/HpJguACVsEQXMBjbG4f3rNMDLAZC97UhwoGBWzGgsu1qQE2Y8Fb5uZXBUNwAatgeEefHeDNbwB7LWM6PwLEFrAKhv3m59eMBXu1AgE2Y0FuAatgSC5gMxbs02sEePNLwOuWMVQwKGAzFlyuSn7NWPC6VibAKhhyC1gFw8uWQgE2Y8GLeqUAb34PiC1gFQyxE5YZC4InLDMWZBewCobgAjZjQe6EZcaCV/ShgkEBm7HAhGXGguAJSwVDdgGrYIidsMxYEDxheUmC7AJWwZBcwGYsiJ2wzFjwjLr5VcEQXMBmLIidsMxYEDxhqWDILmAVDLETlhkLkicsL0kQXcAqGHInLDMWBE9YZizILmAVDMEFbMaC2AnLjAWfahEBVsGQW8BmLMidsMxYEDxhqWDILmAVDLETlhkLgicsL0mQXcAqGGInLDMWJE9YZiyILmAVDMkFbMaC2AnLjAU/SsuvCobgAjZjQeyEZcaC4AlLBUN2AatgiJ2wzFiQPGF5SYLoAlbBkFzAZiyInbDMWPA/yxgqGBSwGQtMWGYs+P4TlgqG6AJWwZiwogNsxsKElWzzC6KAVTCYsMxYYMIyY8FNClgFo4DNWGDCMmPBpfpQwaCAzVhgwjJjwa0mLBWMAlbBYMIyY4EJy0sS3KmAVTAmLDMWmLDMWKCAVTDcp4DNWJiwzFiQYhlDBYMCNmOBCcuMBXedsFQwClgFgwnLjAUmLC9JcKcCVsGYsMxYYMIyY4ECVsFwmwI2Y2HCMmNBbX2oYFDAKhhMWGYsMGF5SUIBq2AwYZmxwIRlxoJbFbAKRgGbscCEZcaCg33//KpgFLAZC0xYZiwwYalguE0Bq2BMWGYsMGF5SQIFrILhLhOWGQsTlhkLFLAKBgVsxoI75deMxXfTbhVgFYwCNmOBCcuMBSYsFYwCVsFgwjJjgQnLSxIoYBWMCcuMBSYsMxYoYBUMNy9gMxYmLDMWTHbX/KpgFLAKBhOWGQtMWF6SUMAqGExYZiwwYZmxQAGrYBSwGQtMWGYsOMQyhgoGBWzGAhOWGQtMWCoYBayCwYRlxgITlpckUMAqGBOWGQtMWGYs8E/Q/hSMAM+KThdgiA1wjT+ICzACvDM5AgypAV5rbOECjADvnX8FGDIDvP5xji7AEBngKucQYAR4d266AENggP88SBNgyAvwX/8GowBDXoDXjyoVLMAI8P7/hGARYEgL8D9S0wUYwgJc81sCAvxyaAQYsgL8w1maAENSgP/1t2AIMCQFeP0oVMECjAC/U8CTvyYCjAC/F5kuwBAT4OKfExDg1xIjwJAS4PXn4zQBhowA//JvUhdgyAjw+qvzdAGGiABXO48AI8Bv56ULMAQEOOWLAgL8QlwEGOoHeP3sRE2AoXqAv/i/8QowVA/w+vmRugBD8QAXPJIAI8BHhKULMJQO8JdnagIMlQP8+PpQAgyVA7x+FKxgAUaAjyjgSV8VAUaAjyjgSTOWACPA709Y004lwAjwQUnpAgxFA/zEsZoAQ80AP545lwBDzQCvz5yrCTBUDPCj6odFgBHgw3LSBRgKBjj9ywJ3DvDTMRFgqBfg9dmTNQGGagF+PH80AYZqAV6fP1oXYKgV4Efhb4sAI8BHhqQLMJQK8Lf5uMANA/xiRgQYKgV4fe1wTYChToAfr55OgKFOgNdXT9cFGMoEuPbpBBgBPjghXYChSIB3HK8JMNQI8GPP+QQYagR43XO+JsBQIcCPfQcUYKgQ4HXfAbsAQ4EAlz+gACPAx8ejCzBMD/DuEzYBhtkBfuw/ogDD7ACv+4/YBBjmBvgR8I0RYAT4jHB0AYapAf72Hxn4xgF+MxsCDDMDvL53yCbAMC/Aj3dPKcAwL8Dru6dsAgyzAvzI+MwIMAJ8UjK6AMOkAN/nOwPfL8CHBEOAYU6A1/+wZ0e3leNAFAUX+8lQGCXDYZgLD3YCsC3y6XZXRaAW+lAA9cRzDgHDJwLezzyogOETAa9nHnQKGD4QcMyDChgBn8tiChiuB/zYkw4Bw+2AH6xCwHA74PXcow4Bw92A95PPKmC4G/B68lmngOFqwEnPKmAEfLSJKWC4GPDDDzsEDPcC3k8/rYDhXsDr6acdAoZbAe+s40bACPhwEVPAcClg5w3kBnwkiClguBLwkecdAoYbAe8zDyxguBHwOvPAQ8BwPuAdd+IIGAGfz2EKGI4H7MiB3IAP1iBgOB3wOvfIQ8BwNuB98pkFDGcDXiefeQoYjgac+MwCRsBXWpgChoMBO3UgN+DjKQgYzgW8Tj/1EDCcCniff2wBw6mA1/nHngKGQwGHPraAEfCtEKaA4UjAV557CBhOBLzvPLiA4UTA686DDwHD8wHv2JNHwAj4XgZTwPBv5BVW9tEDr83gYgVTwAg49QP8/DWWgGkf8L757AJGwJH/kI58ggVM94B38uEjYLoHfLmBKWAEnHmFFX/6wNsauJ6AgBFw6BXW49dYAqZ3wPv+4wsYAcd+gJ/9BAuY1gHv8PNHwLQO+CMBTAEj4MR/SDUOIHhJAB/afwEj4NArrGevsQRM44D3pyYQMAKO/QA/eI0lYBoHnD+BgOkb8Ae3fwoYAad+gJ+7xhIwbQPen5xBwAg49ArrwU+wgOka8P7sEAJGwLEf4KeusQRM14BLDCFgmgb88dWfAkbAqR/gh66xBEzPgPfnxxAwAg69wnrqEyxgWga8i5xDAqZlwK9Y/ClgBJx5hVXpIILLi/+SvRcwAg69wvoyBIyAM6+wnvkEC5iGAa+3TDIEjIBjP8C/P4oETL+AX7T1U8AIOPEfUrmzCO5s/auWXsAIOPQK68sQMALOvMJ64BMsYLoFvN41zBQwAs68wvr9MAKmWcCvW/kpYASc+gGudhzB0ZXf7xtHwAg49ArryxAwAo79AP/qEyxgWgW83jjPFDACzrzC+uU8AqZTwC/d9ylgBJz6Af7NNZaAaRTwfutEAkbAoVdYv/oEC5g+Ae96R5KA6RPwi7d9ChgBZ15hFT2T4Nltf/WyTwEj4NQP8I+vsQRMl4D3u4cSMAKO/If0m0+wgGkS8C55KgmYJgG/ftWngBFw5hVW3WMJHln1gE0XMAIOvcL6MgSMgDOvsH76CRYwLQJeCXNNASPgzCusH84lYDoEHLLnU8AIOPUDXPhkgt/secyaCxgBh15hfRkCRsCR/5B+9gkWMPUDXjmjTQEj4MwrrJ+MJmDKBxy15FPACDj1A/ztaywBUz3gnTWcgBFw6BXW9z/BAqZ4wDttOgEj4OAVnwJGwJlXWPWPJ/jWigdu+BQwAk79AH/vGkvAlA54J84nYAQc+Q/p259gAVM54F18PgFTesFD93sKGAFnXmG1OKEQcOn1FjACDr3C+jIEjIB37ogCRsArd8QhYNoH3GBEAVN2u6OXewqY5gE7pCB3ucN3W8D0DnhlDzkETOeAd/qUAqZzwCt9yilgGgfcY0oBU3O1C2z2FDBtAy4w5hAwXQPeFeYUMF0DXhXmHAKmZ8C7xqACpmfAq8agU8C0DLjNoAKm4F6XWespYBoGXGbSIWD6BbzrjCpg+gW86ow6BEy3gHefUQVMva0utdRTwDQL2GEFuUtdbKengGkV8Ko17BAwnQLe1aYVMJ0CXtWmHQKmT8C71bQCpthKF9zoKWDaBOy8gtyNLrnQAqZLwKvivEPA9Ah41xxYwPQIeNUceAqYFgG3G1jAFNrnsus8BUyDgB1ZkLvOu+7IAqZ+wKvuyEPAVA94V55ZwFQPeFWeeQqY4gF3nFnAVFnm4rs8BUzpgIsPPQRM5YB39akFTOWAV/Wph4CpG/BuObWAKbLKDTZ5CpiyATu3IHeTWyzyFDBFA14d5h4CpmbAu8fgAqZmwKvH4EPAVAx4dx1cwFTY4zZrPAVMwYAdXZC7xo22WMDUC3j1GX0ImGoB706zC5hqAa9Osw8BUyzgzrMLmPQlbrbDU8CUCtjpBbk73G6FBUylgFe36YeAqRPw7je+gKkT8Oo3/hQwZQJuPr6Aid7glgs8BUyRgFvOPwRMjYB3zxcgYGoEvHq+gCFgKgS8u74BAVMh4LbrOwVMgYC9AQGTu76Nt3d6BcQH3PgVDAGTHvDu/A4ETHrAq/M7GAImO+DtHQiY3OVtvrvTSyA6YC9BwOTubvvVFTDJAa/ub2EImNyAt9cgYHIDXl7DEDCxAXsLf16DgIncXIv7z58/Sd4DkQF7CQ4ychfX3v4hYDIDXl7ClyFgEgP2D+nvJ1jABAbsA/y/KWACA/YK/r4JAQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwH/t0UAIAAAJBEEPYy4/9q1hCEGS2wcGNJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEl6UfRGdTsiP4yQAAZYAAMsAQywBDDAEsAAC2CAJYABlgAGWAADDLAABlgCGGAJYIAFMMASwABLAAMsAQywAAZYAhhgCWCABTDAAAtggCWAAZYABlgAAywBDLAEMMASwAALYIAlgAGWAAZYAAMsAQywBDDAEsAAC2CAJYABlgAGWAIYYAEMsAQwwBLAAAtggCWAAZYABlgCGGABDLAEMMASwAALYIABFsAASwADLAEMsAAGWAIYYAlggCWAARbAAEsAAywBDLAABtgbBDDAEsAASwADLIABlgAGWAIYYAlggAUwwBLAAEsAAyyAAZYABlgCGGAJYIAFMMASwABLAAMsAQywAAZYAhhgCWCABTDAEsAASwADLAEMsAAGWAIYYAlggAUwwAALYIAlgAGWAAZYAAMsAQywBDDAEsAAC2CAJYABlgAGWAADLAEMsAQwwBLAAAtggCWAAZYABlgCGGABDLAEMMASwAALYIAlgAGWAAZYAhhgAQywBDDAEsAASwADLIABlgAGWAIYYAEMsAQwwBLAAEsAAyyAAZYABlgCGGABDDDAAhhgCWCAJYABFsAASwADLAEMsAQwwAIYYAlggCWAARbAAEsAAywBDLAEMMACGGAJYIAlgAGWAAZYAAMsAQywBDDAAhhgCWCAJYABlgAGWAADLAEMsAQwwAIYYIAFMMASwABLAAMsgAGWAAZYAhhgCWCABTDAEsAASwADLIABBlgAAywBDLAEMMACGGAJYIAlgAGWAAZYAAMsAQywBDDAAhhgCWCAJYABlgAGWAADLAEMsAQwwBLAAAtggCWAAZYABlgAAywBDLAEMMASwAALYIAlgAGWAAZYAAMMsAAGWAIYYAlggAUwwBLAAEsAAywBDLAABlgCGGAJYIAFMMASwABLAAMsAQywAAZYAhhgCWCAJYABFsAASwADLAEMsAAGWAIYYAlggCWAARbAAEsAAywBDLAEMMACGGAJYIAlgAEWwABLAAMsAQywBDDAAhhgCWCAJYABFsAAAyyAAZYABlgCGGABDLAEMMASwABLAAMsgAGWAAZYAhhgAQywBDDAEsAASwADLIABlgAGWAIYYAlggAUwwBLAAEsAAyyAAZYABlgCGGAJYIAFMMASwABLAAMsgAEGWAADLAEMsAQwwAIYYAlggCWAAZYABlgAAywBDLAEMMACGGCABTDAEsAASwADLIABlgAGWAIYYAlggAUwwBLAAEsAAyyA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",
      "Name": "The Complete Web Developer Course 3.0",
      "Provider": "Udemy",
      "Date": "June 2024",
      "Credential": {
        "Name": "Credential ID UC-eabc6eeb-8218-44ee-b2c2-8681596c8e21",
        "Link": "https://www.udemy.com/certificate/UC-eabc6eeb-8218-44ee-b2c2-8681596c8e21/"
      }
    },
    {
      "Image": "/static/media/BritishCouncil.aa4bc345bea4dadd8c33.png",
      "Name": "IELTS Academic - 7.0",
      "Provider": "British Council",
      "Date": "Mar 2023",
      "Credential": {
        "Name": "Credential ID 22LK028258VARA001A",
        "Link": "#"
      }
    }
  ],
  "References": [
    {
      "Name": "Lasintha Ferdinando",
      "Education": "FCMA (UK), FIB (SL), MBA (UOC), CCM (FASEC), CGMA, GSLID MSc - IT & Strategic innovation (UK)",
      "Job": "Managing Director",
      "Company": "JKSE Consultants",
      "Phone": "+94 77 759 0523",
      "Email": "lasintha@jkseconsultants.com"
    },
    {
      "Name": "Aruni Samaraweera",
      "Education": null,
      "Job": "Project Manager",
      "Company": "Alliance Finance Company PLC",
      "Phone": "+94 77 477 3665",
      "Email": "aruni@alliancefinance.lk"
    }
  ]
}


		//UserData = CurrentUserNameSingleton.getUserName();

		return UserData;
	}

	Dummy(){
		let UserData = {
			"Main": {
				"Image": Photo,
				"Greeting" : "Hi, I'm",
				"Name": "Dummy",
				"Tags": [
					// "Full Stack Developer",
					// "Associate Database Developer",
					"Dummy"
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
				"Description": "Dummy"
			},
			"Technologies": [
				[
					"Dummy",
					[
						[ps, "Dummy"]
					]
				]
			],
			"Projects": [
				{
					"Image": TT,
					"Name": "Dummy",
					"Links": [
						{
							"Name": "GitHub",
							"Icon": "github",
							"Href": "https://github.com/R-U-Fun/PaperClips"
						}
					],
					"Date": "Dummy",
					"Description": "Dummy",
					"Technologies": "Dummy"
				}
			],
			"Experiences": [
				{
					"Image": MDZ,
					"Title": "Dummy",
					"Company": "Dummy",
					"JobType": "FDummy",
					"Location": "Dummy",
					"LocationType": "Dummy",
					"Date": "Dummy",
					"Description": [
						"Dummy"
					]
				}
			],
			"Educations": [
				{
					"Image": UoB,
					"Name": "Dummy",
					"Title": "Dummy",
					"Date": "Dummy",
					"Description": [
						"Dummy"
					]
				}
			],
			"Certificates": [
				{
					"Image": LI,
					"Name": "Dummy",
					"Provider": "Dummy",
					"Date": "Dummy",
					"Credential": {
						"Name": "Credentials",
						"Link": "https://www.linkedin.com/learning/certificates/3038b37db3e540121618f1491e8e45dd13045f4aceb338edaa7dc3e7eda81209?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BoQk0iw1VRhaF8L3eBhz2Pg%3D%3D"
					}
				}
			],
			"References": [
				{
					"Name": "Dummy",
					"Education": "Dummy",
					"Job": "Dummy",
					"Company": "Dummy",
					"Phone": "Dummy",
					"Email": "Dummy",
				}
			]
		};
		
		return UserData;
	}
}

const ServerURL = new Server();
export default ServerURL;