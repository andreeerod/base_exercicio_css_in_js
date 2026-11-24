import styled from 'styled-components'

import { cores, fontes } from '../../styles'

export const Header = styled.header`
  background-color: ${cores.secundaria};
  border-bottom: 1px solid ${cores.borda};
  padding: 20px 0;

  h1 {
    font-family: ${fontes.titulo};
    font-weight: 700;
    font-size: 28px;
    color: ${cores.principalEscura};
    text-align: center;
    letter-spacing: 0.5px;
  }

  span {
    color: ${cores.principal};
  }
`
