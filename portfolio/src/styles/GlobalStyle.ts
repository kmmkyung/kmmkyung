import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    /* outline: 1px dotted turquoise; */
    /* outline: 1px dotted salmon; */
    box-sizing: border-box;
  }

  :root {
    /* color */
    --black: #000000;
    --white: #ffffff;
    --gray_a: #aaaaaa;
    --gray_f5: #f5f5f5;
    --line: #dddddd;

    /* fontSize */
    --font-size-s: clamp(1.2rem, 2vw, 1.4rem);
    --font-size-m: clamp(1.4rem, 2.5vw, 1.6rem);
    --font-size-l: clamp(2rem, 5vw, 3rem);
    
    /* etc */
    --max-width: 1200px;
    --default-padding: 0 min(3.5vw, 50px);
  }
`;

export default GlobalStyle;