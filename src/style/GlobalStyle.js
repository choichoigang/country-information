import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const font = css``;

export const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }
  html {
  font-size: 10px;
 }

  @media (max-width: 900px) {
   html { font-size: 8px; }
  }
  
  @media (max-width: 400px) {
    html { font-size: 7px; }
  }
  
  body {
    height: 100%;    
  }
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    outline : none;
  }
  input {
    border : none;
    :focus  {
     outline : none;
    }
  }
 
  a {
    text-decoration: none;
    outline: none
    }
  .interval {
    margin-bottom : 1.2rem;
  }
`;
