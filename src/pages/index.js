import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/hero"
import About from "../components/about"
import Project from "../components/project"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <header className="header">
      <Header />
    </header>
      <About />
      <Project/>
  </Layout>
)

export default IndexPage
