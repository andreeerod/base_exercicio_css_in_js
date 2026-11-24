import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  principal: '#0f766e',
  principalEscura: '#0b4f4a',
  destaque: '#f59e0b',
  secundaria: '#ecfdf8',
  fundo: '#f6f8f7',
  texto: '#0f1f1d',
  suave: '#5b6b68',
  borda: '#dbe5e2',
  branco: '#ffffff'
}

export const fontes = {
  titulo: 'Sora, sans-serif',
  texto: 'Inter, sans-serif'
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
    font-family: ${fontes.texto};
    list-style: none;
  }

  body {
    padding-bottom: 120px;
    background-color: ${cores.fundo};
    color: ${cores.texto};
    -webkit-font-smoothing: antialiased;
  }

  button, input {
    font-family: inherit;
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
