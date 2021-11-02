import React from 'react';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import "./hero.css"
const Header = () => {

    return (
        <section id="hero" className="hero">
            <Container>
                <Fade duration={1000} delay={500} distance="30px">
                    <h2>Hello, My Name is Matan Fridlis 3rd Year Computer Science Student</h2>
                    <h2>Looking for my first job as a junior developer</h2>
                </Fade>
                <Fade duration={1000} delay={500} distance="30px">
                    <p className="hero-cta">
                        <span className="cta-btn cta-btn--hero">
                            <Link to="about" smooth duration={1000}>
                                {'About Me'}
                            </Link>
                        </span>
                    </p>
                </Fade>
            </Container>
        </section>
    );
};

export default Header;