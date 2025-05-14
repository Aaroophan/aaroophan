import { UserData } from '../types/user-data';

const portfolioData: UserData = {
  Main: {
    Image: "https://example.com/profile.jpg",
    Greeting: "Hello, I'm",
    Name: "Aaroophan Varatharajan",
    Tags: ["Full Stack Developer", "Database Developer", "Software Engineer"],
    Links: [
      {
        Name: "GitHub",
        Icon: "github",
        Href: "https://github.com/yourusername"
      },
      {
        Name: "LinkedIn",
        Icon: "linkedin",
        Href: "https://linkedin.com/in/yourusername"
      }
    ],
    Backgrounds: [
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
    ],
    Images: [
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    ]
  },
  About: {
    Description: "Full Stack Developer with experience in React, Node.js, and TypeScript"
  },
  Technologies: [
    ["Frontend", [["https://reactjs.org/logo.svg", "React"]]],
    ["Backend", [["https://nodejs.org/logo.svg", "Node.js"]]]
  ],
  Projects: [],
  Experiences: [],
  Educations: [],
  Certificates: [],
  References: []
};

export const getAllData = (): UserData => portfolioData;

export default {
  getAllData
};