import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout>
  <SEO title="Art & Photography" />
    <div css={`display:flex;flex-direction:column;max-width:1200px;margin:auto;justify-content:center;background-color:white;text-align:center;min-height:calc(100vh - 197px);`}>
      <Link to={`/absence/`}>Absence</Link>
      <Link to={`/deconstuction/`}>Deconstruction</Link>
      <Link to={`/in-blue/`}>In Blue</Link>
      <Link to={`/ink/`}>Ink</Link>
      <Link to={`/landscapes/`}>Landscapes</Link>
      <Link to={`/layers/`}>Layers</Link>
      <Link to={`/mirror-darkly/`}>Mirror Darkly</Link>
      <Link to={`/pages/`}>Pages</Link>
      <Link to={`/poles/`}>Poles</Link>
      <Link to={`/ripb/`}>Rhode Island Picture Book</Link>
      <Link to={`/self/`}>Self Portraits</Link>
      <Link to={`/shadow/`}>Shadows</Link>
      <Link to={`/still-life/`}>Still Life</Link>
      <Link to={`/surfaces/`}>Surfaces</Link>
      <Link to={`/undone/`}>Undone</Link>
      <Link to={`/wash/`}>Wash</Link>
    </div>
  </Layout>
)
