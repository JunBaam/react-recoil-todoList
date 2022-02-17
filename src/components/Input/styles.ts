import styled from "styled-components";

export const TodoInputContainer = styled.div`
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid white;
  padding: 0 4px;

  & > input {
    flex: 1;
    outline: none;
    border: none;
    color: white;
    background-color: whitesmoke;
    padding: 5px 2px;
    font-size: 1.2rem;
    color: black;

    &::placeholder {
      color: black;
    }
  }

  & > button {
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
    border: 1px solid blue;
  }
`;
