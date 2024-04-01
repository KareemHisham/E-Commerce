import styled, { keyframes } from "styled-components";
const ldsRipple = keyframes`
0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
`;
export const Loader = styled.div`
  &.lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    div {
      position: absolute;
      border: 4px solid rgb(252 90 50);
      opacity: 1;
      border-radius: 50%;
      animation: ${ldsRipple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      &:nth-child(2) {
        animation-delay: -0.5s;
      }
    }
  }
`;

const Spinner = () => {
  return (
    <Loader className="lds-ripple">
      <div></div>
      <div></div>
    </Loader>
  );
};

export default Spinner;
