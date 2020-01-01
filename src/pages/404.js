import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { md } from '../common'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div css={`max-width:960px;background:#fff;display:flex;flex-direction:column;margin:auto;min-height:calc(100vh - 300px);;padding:4rem;${md}{padding:.5rem;}`} >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
