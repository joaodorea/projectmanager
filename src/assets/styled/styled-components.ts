import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import StyleClosetTheme from "./interface";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<StyleClosetTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
