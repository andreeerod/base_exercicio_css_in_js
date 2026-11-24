import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  background-color: ${cores.branco};
  padding: 24px;
  border-radius: 16px;
  margin-top: -56px;
  position: relative;
  box-shadow: 0 12px 32px rgba(46, 34, 38, 0.12);

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Campo = styled.input`
  height: 52px;
  padding: 0 18px;
  font-size: 16px;
  border: 1px solid ${cores.borda};
  border-radius: 10px;
  background-color: ${cores.fundo};
  color: ${cores.texto};
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${cores.principal};
    box-shadow: 0 0 0 3px rgba(167, 114, 125, 0.2);
  }
`

export const BotaoPesquisar = styled.button`
  height: 52px;
  padding: 0 28px;
  font-size: 16px;
  font-weight: 700;
  color: ${cores.secundaria};
  background-color: ${cores.principal};
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${cores.principalEscura};
  }

  &:focus-visible {
    outline: 3px solid rgba(167, 114, 125, 0.4);
    outline-offset: 2px;
  }
`
