import styled from "styled-components";

export const MyNavbar = styled.div`
  &.nav_bar {
    .upper_nav {
      ul {
        li {
          a,
          div {
            font-size: 14px;
          }
        }
      }
    }
    .middle_nav {
      .form {
        form {
          flex: 1;
          button {
            &:hover {
              background-color: var(--main_color);
            }
          }
        }
        .cart {
          .count {
            width: 20px;
            height: 20px;
            top: -10px;
            right: -10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
    /* .bottom_nav {
      .drop_menu {
        ul {
          box-shadow: 0px 0px 15px -1px #001219;
          z-index: 10 !important;
          top: 70px;
          width: 70%;
          visibility: hidden;
          opacity: 0;
          transition: 0.2s linear;
          &.show {
            top: 55px;
            visibility: visible;
            opacity: 1;
          }
          li {
            &:not(:last-child) {
              margin-bottom: 10px;
            }
            a {
              color: var(--dark_color);
              padding: 5px;
              border-radius: 5px;
              &:hover {
                background-color: var(--main_color);
                color: #fff;
              }
            }
          }
        }
      }
    } */
  }
`;
