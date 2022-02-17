import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import { FaPen } from "react-icons/fa";
import { ModalOverly, TodoModal } from "./styles";

interface Props {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  modifyContents: string;
  setModifyContents: Dispatch<SetStateAction<string>>;
  onModifyTodo: () => void;
}

const Modal = ({
  setIsModal,
  modifyContents,
  setModifyContents,
  onModifyTodo,
}: Props) => {
  const onCloseModal = useCallback((): void => {
    setIsModal(false);
  }, [setIsModal]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setModifyContents(value);
    },
    [setModifyContents]
  );

  return (
    <>
      <ModalOverly className="TodoModal-Overlay" onClick={onCloseModal} />
      <TodoModal className="TodoModal">
        <div className="TodoModal-Title">
          <div>Todo 수정하기</div>
          <FaPen />
        </div>

        <div className="TodoModal-Contents">
          <input
            type="text"
            value={modifyContents}
            onChange={onChange}
            placeholder="Todo 입력"
          />

          <button className="TodoModal-Contents-Button" onClick={onModifyTodo}>
            수정하기
          </button>
        </div>
      </TodoModal>
    </>
  );
};

export default Modal;
