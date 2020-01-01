import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { md } from '../common'

export default () => (
  <Layout>
  <form name="contact" method="POST" action="/artworks" data-netlify="true" data-netlify-honeypot="bot-field">
    <div css={`max-width:960px;background:#fff;display:flex;flex-direction:column;margin:auto;min-height:calc(100vh - 197px);;padding:4rem;${md}{padding:.5rem;}`} >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor='name'>Name</label>
      <Input type="text" name="name" />
      <label htmlFor='email'>Email</label>
      <Input type="email" name="email" />
      <label htmlFor='message'>Message</label>
      <textarea rows="5" name="message" css={`font-size:16px;`}/>
      <button css={`padding:1rem;background-color:dimgrey;color:white;border:0;font-size:16px;margin-top:.5rem;`} type="submit">Send</button>
      </div>
    </form>
  </Layout>
)

const Input = styled.input`
  padding:.5rem;
  font-size:16px;
`
