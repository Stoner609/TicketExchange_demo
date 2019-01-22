import styled from "styled-components";

const LoginContainer = styled.div`
  position: relative;
  padding: 20px 0 30px 0;
  background-color: #f2f2f2;
  height: 100%;
`;

const LoginRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const LoginCol = styled.div`
  width: 50%;
`;

const LoginV1 = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border: 2px solid #ddd;
  height: 100%;
`;

export { LoginContainer, LoginRow, LoginCol, LoginV1 };
