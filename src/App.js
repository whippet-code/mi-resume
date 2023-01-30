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
const summary = {
  title: "Summary",
  text: "A dedicated web developer with experience building for front-end and full stack. Passionate about creative design solutions and skilled in React.js, Javascript, CSS, HTML, Node.js & Express. Determined breaker down of problems with a love for collaboration and a passion for continual learning.",
};

const tech = {
  title: "Tech Stack",
  text: "Javascript - React - Redux - CSS/HTML - Node.js - Express",
};

const experience = {
  title: "Experience",
  text: "Hyperiondev, Web Development — Developer Bootcamp\nDec 2022 - Mar 2023\nCurrently enrolled, intensive three month jobs based skills bootcamp. Covering all aspects of MERN stack for commercial web development environments and deployment.\n\nHarvard — CS50x Intro to Computer Science\nApr 2022 - Nov 2023 - Online\nWide spectrum intro to C.S. giving a solid grounding into algorithms, data structures, correct coding practices and software solutions. Technologies covered; C, Javascript, Python, SQLite3, Flask.\n\nSKILLS\nHighly motivated self-starter.Managing teams under pressure.Coaching & training.Problem solving.Creative design.\nTools - Adobe suite, Google, github",
};

const projects = {
  title: "Projects",
  text: "Photonotes Field log app.\nBuilt a complete web based messaging board app with multi-user log-in and database referencing for Harvard CS50x final project.\nHyperiondev capstone projects.\nJoint founder of PhotoMooch, art therapy / wellbeing collective.",
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
  //   <Card ingo={item} />)
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
