import React, { useCallback, useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { SetterOrUpdater, useRecoilCallback } from "recoil";
import { ITodoItems } from "../../interface/todo";
import Modal from "../Modal";
import { Container } from "./styles";

interface Props {
  id: number;
  contents: string;
  isCompleted: boolean;

  onComplete: (id: number) => void;
  onDelete: (id: number) => void;

  todos: ITodoItems[];
  setTodos: SetterOrUpdater<ITodoItems[]>;
}

const TodoItem: React.FC<Props> = ({
  id,
  contents,
  isCompleted,
  onComplete,
  onDelete,
  todos,
  setTodos,
}) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modifyContents, setModifyContents] = useState<string>("");

  const onModify = useCallback((): void => {
    setIsModal(true);
    setModifyContents(contents);
  }, [contents]);

  const onModifyTodo = useCallback((): void => {
    if (!modifyContents.trim()) {
      return;
    }
    setTodos(
      todos.map((todo: ITodoItems) => {
        return todo.id === id ? { ...todo, contents: modifyContents } : todo;
      })
    );

    setIsModal(false);
  }, [id, modifyContents, setTodos, todos]);

  return (
    <>
      <Container>
        <div
          title={contents}
          className={isCompleted ? "TodoItem-Completed" : ""}
          onClick={() => onComplete(id)}
        >
          {contents}
        </div>

        <div className="TodoItem-Icons">
          <FaPen className="TodoItem-Icons-Pen" onClick={onModify} />
          <MdClose
            className="TodoItem-Icons-Close"
            onClick={() => onDelete(id)}
          />
        </div>
      </Container>

      {isModal && (
        <Modal
          setIsModal={setIsModal}
          modifyContents={modifyContents}
          setModifyContents={setModifyContents}
          onModifyTodo={onModifyTodo}
        />
      )}
    </>
  );
};

export default TodoItem;
