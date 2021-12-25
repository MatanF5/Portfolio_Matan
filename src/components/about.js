import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import "./about.css"
import Profilepic from "../images/prof.jpg"
import { FaArrowDown, FaRegStar } from "react-icons/fa"


const About = () => {
    return (
        <section id="about" className="about">
            <Container>
                <div className="about-wrapper">
                    <Fade duration={1000} delay={600} distance="30px">
                        <div className="about-wrapper_info">
                            <Fade duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper_image">
                                    <img src={Profilepic} alt="profilepic" />
                                </div>
                            </Fade>
                            <div className="about-wrapper_info-text">
                                I Am 24 Years Old<br />
                                Highly Motivated, Team Player, Leader, Fast Learner, Problem Solver, Passionate about programming and learning, Reliable, Independent, Self learner, Creative,
                                Bringing forth a motivated attitude and variety of IT competences.

                                <div><b>Phone Number:</b> +972526894140<br /> <b>Email:</b> matanfridlis5@gmail.com</div>
                                <div className="about-abt">
                                    <h3>To Download My Resume</h3>
                                    <span className="abt-btn abt-btn--about">
                                        <a href="https://drive.google.com/uc?export=download&id=1dwOzcQ5PE5YKG3PBorZ3iczlCLB7D0-d" download ><FaArrowDown size="30px" /></a>
                                    </span>
                                </div>
                                <br />
                                <h3><u>Skills</u><FaRegStar /></h3>
                                <div className="skills">
                                    <u><div>React <progress value="55" max="100" /> </div></u>
                                    <u><div>HTML <progress value="80" max="100" /> </div></u>
                                    <u><div>JavaScript <progress value="60" max="100" /> </div></u>
                                    <u><div>CSS <progress value="65" max="100" /> </div></u>
                                </div>
                                <br/>
                                <br/>
                                <div className="skills">
                                <u><div>TypeScript <progress value="40" max="100" /> </div></u>
                                <u><div>Java <progress value="75" max="100" /> </div></u>
                                <u><div>Python <progress value="80" max="100" /> </div></u>
                                <u><div>C <progress value="75" max="100" /> </div></u>
                                </div>
                                <br/>
                                <br/>
                                <div className="skills">
                                <u><div>C# <progress value="25" max="100" /> </div></u>
                                <u><div>Git <progress value="45" max="100" /> </div></u>
                                <u><div>Bootstrap <progress value="30" max="100" /> </div></u>
                                <u><div>MySQL <progress value="75" max="100" /> </div></u>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </Container>
        </section >
    );
};

export default About;