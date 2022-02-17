import styled from "styled-components";

export const ModalOverly = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const TodoModal = styled.div`
  width: 40%;
  height: 40%;
  background-color: var(--white);
  padding: 1.6rem;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  align-items: center;

  .TodoModal-Title {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    margin-bottom: 12px;

    & > div {
      font-size: 1.5rem;
      margin-right: 6px;
    }
  }

  .TodoModal-Contents {
    display: flex;
    display: -webkit-flex;
    flex-grow: 1;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;

    & > input {
      outline: none;
      border: none;
      border-bottom: 2px solid var(--main);
      margin-bottom: 10px;
      padding: 5px 0;
      font-size: 1.3rem;
    }

    & > button {
      width: 100%;
      height: 50px;
      outline: none;
      border: none;
      color: var(--white);
      background-color: var(--main);
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
`;
