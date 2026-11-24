import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  principal: '#a7727d',
  principalEscura: '#7d4f59',
  secundaria: '#f9f5e7',
  fundo: '#fcfaf5',
  texto: '#2e2226',
  suave: '#7a6a6e',
  borda: '#eadfd6',
  branco: '#ffffff'
}

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
    background-color: ${cores.fundo};
    color: ${cores.texto};
    -webkit-font-smoothing: antialiased;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 88%;
  }
`
