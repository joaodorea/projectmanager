import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        margin: 0;
        font-family: sans-serif;

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
