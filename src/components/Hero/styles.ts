import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'

export const Imagem = styled.div`
  min-height: 420px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  padding: 64px 0 96px;

  &::before {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      100deg,
      ${cores.principalEscura} 0%,
      rgba(167, 114, 125, 0.85) 55%,
      rgba(167, 114, 125, 0.35) 100%
    );
    content: '';
  }

  > div {
    position: relative;
    color: ${cores.secundaria};
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: auto;
    padding: 48px 0 88px;
  }
`

export const Titulo = styled.h2`
  font-family: Gloock, serif;
  font-weight: 400;
  font-size: 52px;
  line-height: 1.1;
  max-width: 640px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 34px;
  }
`

export const Subtitulo = styled.p`
  margin-top: 16px;
  font-size: 18px;
  max-width: 520px;
  opacity: 0.9;
`
