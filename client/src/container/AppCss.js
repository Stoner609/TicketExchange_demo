import styled, { keyframes } from "styled-components";

const AppDiv = styled.div`
  height: 100%
  width: 100%;
  text-align: center;
`;

const AppP = styled.p``;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const AppLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
`;

const AppLink = styled.a`
  color: #61dafb;
`;

export { AppDiv, AppP, AppLogo, AppHeader, AppLink };
