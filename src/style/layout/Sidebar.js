import styled from "styled-components";

export const MySidebar = styled.section`
  z-index: 10;
  width: 300px;
  overflow-y: scroll;
  left: -300px;
  transition: left 0.3s linear;
  &.show {
    left: 0;
  }
  ul {
    li {
      a {
        color: var(--dark_color);
        border-bottom: 1px solid #0012194d;
        transition: 0.3s linear;
        &:hover {
          letter-spacing: 1.5px;
        }
      }
    }
  }
`;
