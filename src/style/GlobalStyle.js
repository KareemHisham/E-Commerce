import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
img {
    max-width: 100%;
    height: auto;
}
ul {
    list-style: none;
    margin-bottom: 0;
}
a {
    display: block;
    text-decoration: none;
}
body {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    background-color: #eeede7;
}
.form-control {
    box-shadow: none !important;
    outline: none !important;
}

:root {
    --main_color : rgb(249,78,48);
    --bg_main: rgb(249,78,48);
    --dark_color: #001219;
    --petroleum: #232f3e;
}
.main_color {
    color: var(--main_color);
}
.bg_color {
    background-color: var(--main_color);
}
.bg_petroleum {
    background: #232f3e;
}
.grad_color {
    background: linear-gradient(180deg,rgba(249,78,48,1) 0%, rgba(255,100,51,1) 100%);
}
.dark_color {
    color: #001219;
}
hr {
    border-color: #ffffffcc;
}
::-webkit-scrollbar {
  width: 10px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg,rgba(249,78,48,1) 0%, rgba(255,100,51,1) 100%);
  border-radius: 10px;
}
a.product_card {
    margin-bottom: 15px;
    .category {
      background-color: var(--bg_main);
      left: -10px;
      top: 10px;
      padding: 5px;
      &::before {
        content: " ";
        position: absolute;
        width: 0;
        height: 0;
        right: -2px;
        top: 0px;
        border-color: transparent black transparent transparent;
      }
      &::after {
        content: " ";
        position: absolute;
        width: 0;
        height: 0;
        left: 0px;
        top: 100%;
        border-width: 3px 5px;
        border-style: solid;
        border-color: var(--bg_main) var(--bg_main) transparent transparent;
      }
    }
    img {
      height: 150px;
      width: 100%;
      margin-bottom: 10px;
    }
    ul {
      li {
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        span.title {
          color: #adb5bd;
        }
        &.cost {
          justify-content: center;
          span {
            &.price {
              color: #adb5bd;
            }
            &.discount {
              color: #343a40;
            }
          }
        }
      }
    }
  }
`;
