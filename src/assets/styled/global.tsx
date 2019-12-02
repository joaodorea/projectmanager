import { createGlobalStyle } from "./styled-components";
import ResetCss from "./reset";

export default createGlobalStyle`
    ${ResetCss};
    body {
        margin: 0;
        font-size: 14px;
        font-family: 'Lato', sans-serif;

        * {
            box-sizing: border-box;
            /* overflow: auto; */
        }
        p {
            margin: 0;
        }
        *, *:before, *:after {
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
    }
`;
