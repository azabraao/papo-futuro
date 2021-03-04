import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1.2;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1;
    font-size: 100%;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  .color-white {color:var(--white)}
  .color-black {color:var(--black)}
  .color-black-transparent {color:var(--black-transparent)}
  .color-dark {color:var(--dark)}
  .color-primary {color:var(--primary)}
  .color-primary-lighter {color:var(--primary-lighter)}
  .color-primary-opaque {color:var(--primary-opaque)}
  .color-primary-dark {color:var(--primary-dark)}
  .color-primary-darker {color:var(--primary-darker)}
  .color-primary-gradient {color:var(--primary-gradient)}
  .color-warning {color:var(--warning)}
  .color-warning-dark {color:var(--warning-dark)}
  .color-warning-light {color:var(--warning-light)}
  .color-warning-gradient {color:var(--warning-gradient)}
  .color-danger {color:var(--danger)}
  .color-danger-dark {color:var(--danger-dark)}

  :root {
    --white: #fff;
    --black: #222;
    --black-transparent: rgb(34 34 34 / 79%);
    --dark: #818181;
    --primary: #33a0ff;
    --primary-lighter: #26fff1;
    --primary-opaque: #23c0e8;
    --primary-dark: #2358e8;
    --primary-darker: #2628ff;
    --primary-gradient: linear-gradient(181deg, #33A0FF, #2628FF);
    --warning: #ffb133;
    --warning-dark: #e8b124;
    --warning-light: #ffd825;
    --warning-gradient: linear-gradient(131deg, #FFB113, #FFD825);
    --danger: #ff6f26;
    --danger-dark: #e88323;
    --success: #0AD561
  }
`
export default GlobalStyles
