"use client";
import { useState } from "react";
// import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header>
        <a href="#" className="logo-container">
            <div className="logo">YT</div>
            <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
            <ul id="menu" className={menuOpen ? "active":""}>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="mailto:yt2575@nyu.edu" className="button">Contact Me!</a></li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                  </svg>
                  
            </a>
        </nav>
      </header>
      <main>
          <section id="home" className="hero container">
              <div className="hero-blue">
                  <div>
                      <h1><small>Hi I'm</small>
                          Yanni Trimikliniotis
                      </h1>
                      <p>
                          A senior at New York University double majoring in Computer
                          Science and History with Honors. I work as a Supplemental Instructor at NYU where I tutor Computer Science and Calculus to other students.
                          <span> I'm interested in Software Engineering, Game Design, and Data Analysis.
                              At the same time, I love history, philosophy, and writing which explains my choice in a second major.
                          </span>
                      </p>
                      <div className="call-to-action">
                          <a href="./assets/YanniTrimikliniotisResume.pdf" className="button black">View Resume</a>
                          <a href="mailto:yannitrim@gmail.com" className="button white">Contact Me</a>
                      </div>
                      <div className="social-links">
                          <a href="https://github.com/YanniTrim">
                              <img src="assets/github.png" alt="GitHub" width="48"/>
                          </a>
                          <a href="https://www.linkedin.com/in/yanni-trimikliniotis-05343b256/">
                              <img src="assets/linkedin.png" alt="Linkedin" width="48"/>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="hero-yellow">
                  <img src="assets/headshot1.jpg" alt="Yanni Trimikliniotis" width="100%"/>
              </div>
          </section>
          <section className="logos container">
              <div className="marquee">
                  <div className="track">
                      <img src="assets/html.png" alt="HTML" width="128"/>
                      <img src="assets/css.png" alt="CSS" width="128"/>
                      <img src="assets/sass.png" alt="SaSS" width="128" />
                      <img src="assets/javascript.png" alt="JS" width="128"/>
                      <img src="assets/react.png" alt="React" width="128"/>
                      <img src="assets/181_Java_logo_logos-512.webp" alt="Java" width="128"/>
                      <img src="assets/python.png" alt="Python" width="128"/>
                      <img src="assets/nextjs.png" alt="Next.js" width="128" />
                      <img src="assets/azure.png" alt="Azure" width="128" />
                      <img src="assets/vscode.png" alt="VS Code" width="128"/> 
                    <img src="assets/jira.png" alt="Jira" width="128"/> 
                      <img src="assets/html.png" alt="HTML" width="128"/>
                      <img src="assets/css.png" alt="CSS" width="128"/>
                      <img src="assets/sass.png" alt="SaSS" width="128" />
                      <img src="assets/javascript.png" alt="JS" width="128"/>
                      <img src="assets/react.png" alt="React" width="128"/>
                      <img src="assets/181_Java_logo_logos-512.webp" alt="Java" width="128"/>
                      <img src="assets/python.png" alt="Python" width="128"/>
                      <img src="assets/nextjs.png" alt="Next.js" width="128" />
                      <img src="assets/azure.png" alt="Azure" width="128" />
                      <img src="assets/vscode.png" alt="VS Code" width="128"/>
                      <img src="assets/jira.png" alt="Jira" width="128"/>
                      <img src="assets/html.png" alt="HTML" width="128"/>
                      <img src="assets/css.png" alt="CSS" width="128"/>
                      <img src="assets/sass.png" alt="SaSS" width="128" />
                      <img src="assets/javascript.png" alt="JS" width="128"/>
                      <img src="assets/react.png" alt="React" width="128"/>
                      <img src="assets/181_Java_logo_logos-512.webp" alt="Java" width="128"/>
                      <img src="assets/python.png" alt="Python" width="128"/>
                      <img src="assets/nextjs.png" alt="Next.js" width="128" />
                      <img src="assets/azure.png" alt="Azure" width="128" />
                      <img src="assets/vscode.png" alt="VS Code" width="128"/> 
                      <img src="assets/jira.png" alt="Jira" width="128"/>
                  </div>
              </div>
          </section>
          <section id="skills" className="skills container">
              <h2>
                  <small>About Me</small>
                  Skills
              </h2>
              <div className="holder-blue">
                  <div className="left-column">
                      <h3>Frontend</h3>
                      <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SaSS</li>
                            <li>React</li>
                            <li>JavaScript</li>
                      </ul>
                      <h3>Backend</h3>
                      <ul>
                          <li>Node.js</li>
                          <li>Express</li>
                          <li>Python</li>
                          <li>Java</li>
                          <li>SQL</li>
                      </ul>
                      <h3>Tools</h3>
                      <ul>
                        <li>Azure</li>
                        <li>Figma</li>
                        <li>Git</li>
                        <li>MongoDB</li>
                        <li>Jira</li>
                      </ul>
                  </div>
                  <div className="middle-column">
                      <h3>Relevant Coursework</h3>
                      <ul>
                        {/* <li>Computer Grahics (Graduate Level)</li>
                        <li>Algorithmic Problem Solving</li> */}
                          <li>Basic Algorithms</li>
                          <li>Applied Internet Technology</li>
                          <li>Computer Systems Organization</li>
                          <li>Data Structures</li>
                          <li>Discrete Math</li>
                      </ul>
                  </div>
                  <div className="right-column">
                      <h3>A bit about me</h3>
                      <p>Hi I'm Yanni, a senior at New York University double majoring in Computer
                          Science and History with Honors. I work as a Supplemental Instructor for Calculus at NYU. 
                          I'm interested in Software Engineering, Game Design, and Data Analysis.
                          At the same time, I love history, philosophy, and writing which explains my choice in a second major.</p>
                      <p>I have worked on fullstack applications, mainly utilizing the MERN stack as seen in my Workout Tracker which I am continuing to add to overtime.
                        I am also working on a History thesis for my honors program where I am investigating the leveraging of nationalism and nation-building in authoritarian regimes and the subsequent tension that is found in imperial ambitions.
                      </p>
                  </div>
              </div>
          </section>
          <section className="work-experience container">
              <h2>
                  <small>Recent</small>
                  Work Experience
              </h2>
              <div className="jobs">
                    <article>
                        <figure>
                            <div>
                                <img src="assets/barclays.jpg" alt="Barclays" width="100%"/>
                                <figcaption>Barclays</figcaption>
                            </div>
                        </figure>
                        <h3>Software Engineer Intern</h3>
                        <div>June 2025-August 2025</div>
                        <ul>
                            <li>Automated organizational processes in JavaScript for the Data Governance documentation by leveraging content analysis through natural language processing, Confluence API navigation, rate limit handling, and fuzzy-string matching</li>
                            <li>Identified faults in data flows and records storage, which could cause financial and legal risks</li>
                            <li>Designed record retention solutions closing legal risks and, upon implementation, reducing SMS record costs by 50%</li>
                        </ul>
                    </article>
                  <article>
                      <figure>
                          <div>
                              <img src="assets/ulc.jpg" alt="NYU University Learning Center" width="100%"/>
                              <figcaption>NYU University Learning Center</figcaption>
                          </div>
                      </figure>
                      <h3>Supplemental Instructor</h3>
                      <div>Aug 2024-Present</div>
                      <ul>
                          <li>Conduct and lead 3 weekly Supplemental Instruction sessions a week for Calculus 1</li>
                          <li>Prepare weekly Supplemental Instruction session material and handouts</li>
                          <li>Facilitates interactive learning activities that integrate metacognition practices with Calculus course content</li>
                          <li>Maintain 4-8 hours of weekly drop-in tutoringfor over 15 courses in Calculus, Computer Science, Economics, and Writing</li>
                      </ul>
                  </article>
                  <article>
                      <figure>
                          <div>
                              <img src="assets/juni.png" alt="Juni Learning" width="100%"/>
                              <figcaption>Juni Learning</figcaption>
                          </div>
                      </figure>
                      <h3>Computer Science Insturctor</h3>
                      <div>May 2024-October 2024</div>
                      <ul>
                          <li>Taught middle-school and high-school students 5 different computer languages: Python, Java, JavaScript, HTML, and CSS</li>
                          <li>Explained various data strcutures and algorithms such as lists, binary search trees, and sorting algorithms</li>
                          <li>Developed and delivered engaging lessons, reviewed programming projects, and tested for bugs to ensure assignments were 
                          completed correctly and modularly </li>
                      </ul>
                  </article>
                  <article>
                      <figure>
                          <div>
                              <img src="assets/NYU-Tandon.jpg" alt="Tandon" width="100%"/>
                              <figcaption>NYU Tandon School of Engineering</figcaption>
                          </div>
                      </figure>                   
                      <h3>Teaching Assistant</h3>
                      <div>July 2024-Sept 2024</div>
                      <ul>
                          <li>Led recitation sections to teach and review material with over 30 students based on prepared worksheets</li>
                          <li>Graded assignments and exams and provide feedback to students based on their performance with content</li>
                          <li>Maintained class by answering questions while professor lectured and organizing class structure with professor</li>
                      </ul>
                  </article>
                  
              </div>
          </section>
          <section id="projects" className="bento container">
              <h2>
                  <small>Major</small>
                  Projects
              </h2>
              <div className="bento-grid">
                <div className="bento-item">
                    <h3>RPG Workout Tracker</h3>
                    <h4>October 2024 - December 2024</h4>
                    <p className="languages">React, NodeJS, Express.js, MongoDB</p>
                    <p className="desc">A fullstack web application that allows users to track their workouts and progress in a role-playing game style.
                        Users can create an account, log in, and track their workouts, which are then converted into experience points and levels. There are progression systems in place so users can set goals and earn rewards as they level up.
                    </p>
                    <div className="project-buttons">
                         <a href="https://github.com/YanniTrim/WorkoutTracker/tree/main">
                              <img src="assets/github.png" alt="GitHub" width="48"/>
                          </a>
                    </div> 
                </div>
                  <div className="bento-item">
                      <h3>Spotify Enhancer Project</h3>
                      <h4>August 2024 - October 2024</h4>
                      <p className="languages">React, NodeJS</p>
                      <p className="desc">Web app where users can import a Spotify playlist and get a playlist cover image made specifcally for that playlist.
                          The cover is generated by DALLE in the OpenAI API using the genres, tags, and moods associated with each song in
                          the playlist. This allows the generated cover to be custom-made for that specific playlist. 
                      </p>
                      <div className="project-buttons">
                         <a href="#">
                              <img src="assets/github.png" alt="GitHub" width="48"/>
                          </a>
                      </div> 
                  </div>
                  <div className="bento-item">
                      <h3>Matrix Calculator</h3>
                      <h4>November 2023</h4>
                      <p className="languages">Java</p>
                      <p className="desc">Program that can take up to two matrices and performs operations on them.
                          Any single matrix can be transposed, inverted and solved as a system of equations.
                          Two matrices can be added, subtracted, and multiplied.
                      </p>
                      <div className="project-buttons">
                          <a href="https://github.com/YanniTrim/MatrixCalculator">
                              <img src="assets/github.png" alt="GitHub" width="48"/>
                          </a>
                      </div>
                  </div>
                  <div className="bento-item">
                      <h3 className="smaller">Convolutional Quantum Monte Carlo</h3>
                      <h4>April 2024</h4>
                      <p className="languages">Python - Qiskit</p>
                      <p className="desc">A submission for the Yale Quantum Hackathon for The Hartford / Capgemini / Quantinuum challenge. 
                          We were given a basic Quantum Monte Carlo circuit to optimize. We developed two solutions, the first being pruning / quantum knitting and the second solution we designed using convolutions, which scaled the qubits by quantum adders instead of a large PDF encoding circuit.</p>
                      <div className="project-buttons">
                          <a href="https://github.com/VSandwar74/streamlit">
                              <img src="assets/github.png" alt="GitHub" width="48"/>
                          </a>
                      </div>
                  </div>
                  <div className="bento-item">
                      <h3>This Website!</h3>
                      <h4>August 2024</h4>
                      <p className="languages">React, Next.js, HTML/CSS, JS</p>
                      <div className="project-buttons">
                          <a href="https://github.com/YanniTrim/yannitrim.github.io">
                              <img src="assets/github.png" alt="GitHub" width="48"/>
                          </a>
                      </div>
                  </div>
              </div>
          </section>
      </main>
    </>
  );
}
