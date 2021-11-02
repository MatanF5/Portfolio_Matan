import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaEnvelope, FaLinkedin, FaArrowUp } from "react-icons/fa"
import "./layout.css"
import { Link } from 'react-scroll';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main style={{
        flexGrow: 1,
      }}>
        {children}
      </main>
      <footer className="footer">
        <div className="footer_social">
          <div className="footer_linked">
            <a href="https://www.linkedin.com/in/matan-fridlis-b184a2208/" target="popup" ><FaLinkedin size ="30px" /></a>
          </div>
          <div className="footer_mail">
            <a href="mailto:matanfridlis5@gmail.com" target="popup"><FaEnvelope size ="30px" /></a>
          </div>
          <div className="footer_git">
            <a href="https://github.com/MatanF5/" target="popup" ><FaGithub size ="30px" /></a>
          </div>
          <div className="arrowup">
            <Link to ="hero" smooth duration={1000}><FaArrowUp size ="30px" /></Link>
          </div>
        </div>
        <div className="footer_attributions">
          © {new Date().getFullYear()}, Built By
          {` `}
          <a href="https://www.linkedin.com/in/matan-fridlis-b184a2208/" target="popup">Matan Fridlis</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
