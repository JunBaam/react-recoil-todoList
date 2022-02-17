import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: var(--main);
  display: flex;
  display: -webkit-flex;
  justify-content: center;

  .Contents {
    margin: auto;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -ms-flex-direction: column;
    align-items: center;
  }
`;
