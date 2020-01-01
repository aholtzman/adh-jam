import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const ThisLink = styled(Link)`
  text-decoration: none;
  color: dimgrey;

  ${props => props.primary && css`
    color: white;
    `}
`

export default ThisLink
