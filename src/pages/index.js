import React from "react"
import { Link } from "gatsby"
//
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
<div style={{display:'grid', width:'100vw', height:'100vh', textAlign:'center'}}>
  <div style={{margin:'auto'}}>
    <h1 style={{margin:'0'}}>Adam Holtzman</h1>
    <p style={{margin:'0'}} ><Link to="/about">Photography & Artworks</Link> - <Link to="/curation">Curation</Link> - <Link to="/design">Design</Link></p>
  </div>
</div>
)

export default IndexPage
