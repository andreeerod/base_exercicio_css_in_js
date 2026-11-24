import styled from 'styled-components'

import { breakpoints, cores, fontes } from '../../styles'

export const Resumo = styled.p`
  margin-top: 32px;
  font-size: 14px;
  font-weight: 500;
  color: ${cores.suave};
`

export const Vagas = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Vazio = styled.div`
  margin-top: 16px;
  padding: 48px 24px;
  text-align: center;
  background-color: ${cores.branco};
  border: 1px dashed ${cores.borda};
  border-radius: 14px;

  h3 {
    font-family: ${fontes.titulo};
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    color: ${cores.suave};
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    font-weight: 600;
    color: ${cores.principal};
    background: none;
    border: 1px solid ${cores.principal};
    border-radius: 10px;
    cursor: pointer;
  }
`
