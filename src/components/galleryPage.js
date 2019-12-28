import React from 'react'
import Layout from './layout'
import SEO from './seo'

export default ({ data, title }) => {
  return(
  <Layout>
  <SEO title={title} />
  <h1 css={`text-align:center;background-color:white;margin:0 auto;max-width:1200px;padding:1rem 0;`}>{title}</h1>
  <div css={`display:flex;flex-wrap:wrap;max-width:1200px;margin:auto;justify-content:center;background-color:white;`}>
    {data.map((photo, index) => {
      return <div css={`margin:.5rem;`} key={index} ><img css={`width:100%`} src={photo.image} alt={photo.name} /><p>{photo.name}</p></div>
    })}
  </div>
  </Layout>
)}
