import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

const ThisLink = styled(Link)`
  text-decoration: none;
`

const Div = styled.div`
  line-height: 10%;
`

const FirstName = styled.h2`
  color: grey;
`

const LastName = styled.h2`
  padding-left: 12px;
  color: silver;
`

const Name = () => {
  return(
    <Div>
      <ThisLink to='/'>
        <FirstName>adam</FirstName>
        <LastName>holtzman</LastName>
      </ThisLink>
    </Div>
  );
}

export default Name
