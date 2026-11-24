import styled from 'styled-components'

import { cores } from '../../styles'

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${cores.branco};
  border: 1px solid ${cores.borda};
  border-radius: 14px;
  padding: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;

  &:hover {
    transform: translateY(-4px);
    border-color: ${cores.principal};
    box-shadow: 0 16px 32px rgba(46, 34, 38, 0.1);
  }
`

export const Nivel = styled.span`
  align-self: flex-start;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${cores.principalEscura};
  background-color: ${cores.secundaria};
  padding: 4px 10px;
  border-radius: 999px;
  margin-bottom: 12px;
`

export const Titulo = styled.h3`
  font-size: 20px;
  line-height: 1.3;
  color: ${cores.texto};
  margin-bottom: 16px;
`

export const Detalhes = styled.ul`
  display: grid;
  gap: 6px;
  font-size: 15px;
  color: ${cores.suave};
  margin-bottom: 16px;

  b {
    color: ${cores.texto};
    font-weight: 700;
  }
`

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;

  li {
    font-size: 13px;
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid ${cores.borda};
    color: ${cores.principalEscura};
  }
`

export const Link = styled.a`
  margin-top: auto;
  display: block;
  text-align: center;
  padding: 12px 16px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  color: ${cores.secundaria};
  background-color: ${cores.principal};
  border-radius: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${cores.principalEscura};
  }
`
