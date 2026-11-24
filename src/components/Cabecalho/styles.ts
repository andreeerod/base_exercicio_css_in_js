import styled from 'styled-components'

import { cores } from '../../styles'

export const Header = styled.header`
  background-color: ${cores.secundaria};
  border-bottom: 1px solid ${cores.borda};
  padding: 20px 0;

  h1 {
    font-family: Gloock, serif;
    font-weight: 400;
    font-size: 28px;
    color: ${cores.principalEscura};
    text-align: center;
    letter-spacing: 0.5px;
  }

  span {
    color: ${cores.principal};
  }
`
