import styled from "styled-components";

export const MyFooter = styled.footer`
  background-color: var(--petroleum);
  .newsletter {
    form {
      flex-basis: 35%;
      .form-group {
        button {
          letter-spacing: 1px;
          &:hover {
            background-color: var(--petroleum) !important;
          }
        }
      }
    }
  }
  .middle_footer {
    ul {
      li {
        &:not(:last-child) {
          margin-bottom: 5px;
        }
        a {
          transition: color 0.3s linear;
          &:hover {
            color: var(--main_color) !important;
          }
        }
      }
      &.social_media {
        li {
          a {
            background-color: #414449;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
  .copyright_section {
    .copyRights_div {
      font-size: 13px;
    }
    img {
      max-width: 10%;
    }
  }
`;
