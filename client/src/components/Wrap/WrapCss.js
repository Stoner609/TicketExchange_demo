import styled from "styled-components";

const WrapDiv = styled.div`  
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export { WrapDiv };
