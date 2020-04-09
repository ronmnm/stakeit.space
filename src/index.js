import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.whiteColor ? "white" : "#131313")};
  }
`;


const root = document.getElementById("root");

ReactDOM.render(
   <React.Fragment>
      <GlobalStyle />
      <App />
   </React.Fragment>,
   root
);
