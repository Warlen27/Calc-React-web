import styled, { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

    html, body, #root {
      min-height: 100%;

  }
  body {
  background-color: #555;
  -webkit-font-smoothing: antialiased !important;
}
  *, button {
    border: 0;
    outline: 0;
  }

  button {
      cursor: pointer;
     
  }

`;


export const Calculator = styled.section`
    margin-top: 30px;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(4, 64px);
    grid-template-rows: 124px repeat(5, 64px);
    position: relative;
    
`;


export const BackgroundImage = styled.img`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  height: 486px;
  width: 378px;
  z-index: -1;
`;










