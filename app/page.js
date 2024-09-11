"use client";
import { useState } from "react";
// import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [messageInput, setMessageInput] = useState("");

  const [messages, setMessages] = useState([
    {
      "role": "system",
      "content": "Hello, how can I help you today?"
    }
  ]);

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      let newMessages = [...messages, {role: "user", content: messageInput}];
      setMessages(newMessages);
      setMessageInput("");
      const res = await fetch(
        ("https://yannitrim-github-7h25owr2i-yannitrims-projects.vercel.app/api/"), 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({messages: newMessages}),
        }
      )
      const data = await res.json();
      console.log(data)
      setMessages([...newMessages, {role: "system", content: data.message}]);
    } catch (error) {
        console.error("page.js error:", error);
        console.error("Error fetching chat completions:", error);
        setMessages([...messages, {role: "system", content: "Failed to fetch response from OpenAI."}]);
    }
  };

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
                          A junior at New York University double majoring in Computer
                          Science and History with Honors. I work as both a Computer Science Instructor teaching students 
                          about HTML, CSS, JavaScript, Java, and Python and as a Supplemental Instructor for Calculus at NYU.
                          <span>I'm interested in Software Engineering, Game Design, and Data Analysis.
                              At the same time, I love history, economics, and writing which explains my choice in a second major.
                          </span>
                      </p>
                      <div className="call-to-action">
                          <a href="./assets/YanniTrimikliniotisResume.pdf" className="button black">View Resume</a>
                          <a href="mailto:yt2575@nyu.edu" className="button white">Contact Me</a>
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
                  <img src="assets/headshot.jpg" alt="Yanni Trimikliniotis" width="100%"/>
              </div>
          </section>
          <section className="logos container">
              <div className="marquee">
                  <div className="track">
                      <img src="assets/html.png" alt="HTML" width="128"/>
                      <img src="assets/css.png" alt="CSS" width="128"/>
                      <img src="assets/javascript.png" alt="JS" width="128"/>
                      <img src="assets/react.png" alt="React" width="128"/>
                      <img src="assets/181_Java_logo_logos-512.webp" alt="Java" width="128"/>
                      <img src="assets/python.png" alt="Python" width="128"/>
                      <img src="assets/vscode.png" alt="VS Code" width="128"/>  
                      <img src="assets/html.png" alt="HTML" width="128"/>
                      <img src="assets/css.png" alt="CSS" width="128"/>
                      <img src="assets/javascript.png" alt="JS" width="128"/>
                      <img src="assets/react.png" alt="React" width="128"/>
                      <img src="assets/181_Java_logo_logos-512.webp" alt="Java" width="128"/>
                      <img src="assets/python.png" alt="Python" width="128"/>
                      <img src="assets/vscode.png" alt="VS Code" width="128"/>
                      <img src="assets/html.png" alt="HTML" width="128"/>
                      <img src="assets/css.png" alt="CSS" width="128"/>
                      <img src="assets/javascript.png" alt="JS" width="128"/>
                      <img src="assets/react.png" alt="React" width="128"/>
                      <img src="assets/181_Java_logo_logos-512.webp" alt="Java" width="128"/>
                      <img src="assets/python.png" alt="Python" width="128"/>
                      <img src="assets/vscode.png" alt="VS Code" width="128"/>                 
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
                          <li>JavaScript</li>
                      </ul>
                      <h3>Backend</h3>
                      <ul>
                          <li>Node.js</li>
                          <li>Python</li>
                          <li>Java</li>
                      </ul>
                  </div>
                  <div className="middle-column">
                      <h3>Relevant Coursework</h3>
                      <ul>
                          <li>Basic Algorithms</li>
                          <li>Applied Internet Technology</li>
                          <li>Computer Systems Organization</li>
                          <li>Data Structures</li>
                      </ul>
                  </div>
                  <div className="right-column">
                      <h3>A bit about me</h3>
                      <p>Hi I'm Yanni, a junior at New York University double majoring in Computer
                          Science and History with Honors. I work as both a Computer Science Instructor teaching students 
                          about HTML, CSS, JavaScript, Java, and Python and as a Supplemental Instructor for Calculus at NYU.
                          I'm interested in Software Engineering, Game Design, and Data Analysis.
                          At the same time, I love history, economics, and writing which explains my choice in a second major.</p>
                      <p>I'm currently working on a project that uses the Spotify and OpenAI APIs to create custom images to act as playlist covers, based on the songs 
                          in the playlist.</p>
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
                          <li>Mantain 4-8 hours of drop-in tutoring per week for Calculus, Computer Science, Economics, and Writing</li>
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
                      <div>May 2024-Present</div>
                      <ul>
                          <li>Teach grade-school students various computer languages: Python, Java, JavaScript, HTML, and CSS</li>
                          <li>Explain various data strcutures and algorithms such as lists, binary search trees, and sorting algorithms</li>
                          <li>Review programmming projects and test bugs to ensutre that the student assignments are corrected modularly</li>
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
                          <li>Lead recitation sections to teach and review material with students based on prepared worksheets</li>
                          <li>Grade assignments and exams and provide feedback to students based on their performance with content</li>
                          <li>Mantain className by answering questions while professor lectured and organizing className structure with professor</li>
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
                      <h3>Spotify Enhancer Project</h3>
                      <h4>Currently Working On</h4>
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
                      <p className="languages">HTML, CSS, JS</p>
                      <div className="project-buttons">
                          <a href="https://github.com/YanniTrim/yannitrim.github.io">
                              <img src="assets/github.png" alt="GitHub" width="48"/>
                          </a>
                      </div>
                  </div>
              </div>
          </section>
          <section className="chatbot container">
              <h2>
                  <small>Talk to me</small>
                  Chatbot
              </h2>
              <div className="chatbot-blue">
                  <div className="chat-info">
                      <h3>Azure AI Chatbot</h3>
                      <p>I've put together a chatbot which knows all my skills,
                          work experience and has a copy of my Resume! You can use it to ask
                          questions about me to get a better idea of who I am and what I've done.
                      </p>
                      <p>You can also download the resume here if you want to take a look at it.
                          I'm currently looking for internships and new opportunites so please reach out
                          if there's anything you think I'd be a good fit for!
                      </p>
                      <a href="./assets/YanniTrimikliniotisResume.pdf" className="black button">Download Resume</a>
                  </div>
                  <div className="chat-box">
                      <div className="scroll-area">
                          <ul id="chat-log">
                            {messages.map((message, index) => (
                              <li key={index} className={`${message.role}`}>
                                <span className={`avatar ${message.role}`}>{message.role === "user" ? "User" : "AI"}</span>
                                <div className="message">{message.content}</div>
                              </li>
                            ))}
                          </ul>
                      </div>
                      <form onSubmit={submitForm} className="chat-message">
                          <input type="text" placeholder="Hey Yanni, what skills are you best at?" value={messageInput} onChange={e=> setMessageInput(e.target.value)}/>
                          <button className="button black">Send</button>
                      </form>
                  </div>
              </div>
          </section>
      </main>
    </>
  );
}
