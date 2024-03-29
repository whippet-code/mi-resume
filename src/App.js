// import styles
import "./App.css";

// import components
import Card from "./components/Card";
import Link from "./components/Link";

// image import
import profilepic from "./images/profilepic.jpg";
import linkedin from "./images/icons8-linkedin-circled-50.png";
import github from "./images/icons8-github-50.png";
import portfolio from "./images/icons8-developer-50.png";

// Text info for blurb
// Update these to an object, add more exp and store in its own file.
// Then map the object for each section.
const summary = {
  title: "Summary",
  text: "A dedicated web developer with experience building for front-end and full stack. Passionate about creative design solutions and skilled in React.js, Javascript, CSS, HTML, Node.js & Express. Determined breaker down of problems with a love for collaboration and a passion for continual learning. Also rather partial to Cyberpunk, pedaling bikes and breathwork. Has many cameras.",
};

const tech = {
  title: "Tech Stack",
  text: "Javascript - React - Redux - CSS/HTML - Node.js - Express - MongoDB",
};

const experience = {
  title: "Experience",
  text: "Hyperiondev, Web Development — Developer Bootcamp\nDec 2022 - Apr 2023\nGraduated, intensive Full Stack developer skills bootcamp. Covering all aspects of MERN stack for commercial web development environments and deployment.\n\nHarvard — CS50x Intro to Computer Science\nApr 2022 - Nov 2023 - Online\nWide spectrum intro to C.S. giving a solid grounding into algorithms, data structures, correct coding practices and software solutions. Technologies covered; C, Javascript, Python, SQLite3, Flask.\n\nSKILLS\nHighly motivated self-starter. Managing teams and self under pressure. Leading coaching & training workshops. Problem dissection. Creative design.\nTools - Adobe suite, github, Open-ai, VS Code",
};

const projects = {
  title: "Projects",
  text: "PhotoMooch fullstack multi-user & admin web app, providing creative prompts for users. Built with React, express, node.js & MongoDB. Utilising JWT for auth and backend access for admin accounts only.\nPhotonotes Field log app.\nBuilt a complete web based messaging board app with multi-user log-in and database referencing for Harvard CS50x final project.\nHyperiondev capstone projects.\nJoint founder of PhotoMooch, art therapy / wellbeing collective.",
};

const cards = [summary, tech, experience, projects];

// Links for link section componenets
const links = [
  {
    logo: linkedin,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/mark-ivkovic-68822474/",
  },
  { logo: portfolio, text: "Portfolio", link: "#top" },
  { logo: github, text: "GitHub", link: "https://github.com/whippet-code" },
];

function App() {
  // const cardComponenets = card.map(item =>
  //   <Card info={item} />)
  return (
    <div className="App">
      <div className="left-side">
        <h1>Mark Ivkovic</h1>
        {cards.map((item) => (
          <Card info={item} />
        ))}
      </div>

      <div className="right-side">
        <img
          src={profilepic}
          alt="White male wearing yellow sweater with dog"
        ></img>
        <h3>Mark Ivkovic</h3>
        <h4>Web Developer</h4>
        <h5>Sheffield - UK</h5>
        <div className="links">
          {links.map((link) => (
            <Link links={link} />
          ))}
        </div>
        <div className="contact">
          <a href="mailto:m.ivkovic.dev@gmail.com">m.ivkovic.dev@gmail.com</a>
          <p>07944 068 248</p>
          <p>Sheffield</p>
        </div>
      </div>
    </div>
  );
}

export default App;
