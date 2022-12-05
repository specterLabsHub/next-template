/* eslint-disable max-len */
import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;

    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    ::-webkit-scrollbar-track {
      /* background: var(--light-1); */
      background: transparent;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--dark-3);
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--dark-2);
    }
  }

  ;

  html, border-style, #root {
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  #root {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;

    > div {
      width: 100%;
    }
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  button {
    outline: none;
  }

  :root {
    --primary-1: #FD4111; //COR LARANJA
    --primary-2: #CD244A; // COR ROSA/VERMELHO
    --secondary: #A02882; //COR ROSA FORTE
    --tertiary: #10056B; //COR AZUL
    --quartenary: #00134D; //COR AZUL ESCURO

    --error:  #FF3B3B;
    --warning: #FFCC00;
    --info:  #0063F7;
    --success: #06C270;

    --dark-1: #3A3A3C;
    --dark-2: #6B7588;
    --dark-3: #8F90A6;
    --dark-4: #C7C9D9;

    --light-1: #DDE5E9;
    --light-2: #EBEBF0;
    --light-3: #F2F2F5;
    --light-4: #FAFAFC;

    --white: #ffffff;

    --primary-degrade: linear-gradient(121.65deg, #A02882 -0.96%, #10056B 61.98%, #A02882 118.91%);
    --primary-degrade-hover: linear-gradient(121.65deg,#b34899 -0.96%,#1b1360 61.98%,#b34899 118.91%);
    --secondary-degrade: linear-gradient(108.89deg, #A02882 0%, #CD244A 47.02%, #FD4111 96.04%);
    --secondary-degrade-hover: linear-gradient(108.89deg, #891e6d 0%, #93213b 47.02%, #c73c19 96.04%);

    --white-degrade: linear-gradient(0deg, white 0%, white 100%);

    --shadow: 0px 5px 15px 0px rgba(138,149,158, 0.15);
  }
`
