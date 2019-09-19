import React from "react"
import { Link } from "gatsby"
import HeroVideo from "../components/Home/HeroVideo"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import DemosGrid from "../components/Home/DemosGrid"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroVideo />
    <DemosGrid />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
