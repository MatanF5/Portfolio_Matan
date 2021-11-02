import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import "./project.css";
import Olympics from "../images/project1.png"
import ReactProj from "../images/project2.png"
import Library from "../images/project3.png"
const Project = () => {

    return (

        <section id="project" className="project">
            <Container>
                <Fade duration={1000} delay={500} distance="30px">
                    <div className="head">
                        <u><h1>Projects</h1></u>
                    </div>
                    <div className="project-wrapper">
                        <h2>Olympics Simulator</h2>
                        <div>
                            <p>
                                A project I made for an OOP course, using OOP principles and JavaFx
                                <div className="proj_img">
                                    <div className="oly">
                                        <img src={Olympics} alt="Oly" />
                                    </div>

                                </div>
                                <br />
                                <br />
                                <span className="cta-btn cta-btn--proj">
                                    <a href="https://github.com/MatanF5/Personal-Projects/tree/main/Final_Project" target="popup">Source Code</a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="project-wrapper">
                        <h2>Python Library</h2>
                        <div>
                            <p>
                                A python project I made using PyQt5 and OOP principles
                                <br/>
                                <br/>
                                <span className="cta-btn cta-btn--proj">
                                    <a href="https://github.com/MatanF5/Personal-Projects/tree/main/Library_Python" target="popup">Source Code</a>
                                </span>
                                <div className="proj_img">
                                    <div className="lib">
                                        <img src={Library} alt="Lib" />
                                    </div>
                                </div>

                            </p>
                        </div>
                    </div>
                    <div className="project-wrapper">
                        <h2>Small React Project</h2>
                        <div>
                            <p>
                                An entry project I did with React and TypeScript, showcasing a working login and a few pages
                                <br/>
                                <br/>
                                <span className="cta-btn cta-btn--proj">
                                    <a href="https://github.com/MatanF5/Personal-Projects/tree/main/React-App" target="popup">Source Code</a>
                                </span>
                                <div className="proj_img">
                                    <div className="lib">
                                        <img src={ReactProj} alt="ReaProj" />
                                    </div>
                                </div>

                            </p>
                        </div>
                    </div>
                </Fade>
            </Container>
        </section>
    )

}
export default Project;