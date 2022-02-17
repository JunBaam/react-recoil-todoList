import React, { ChangeEvent, useCallback, KeyboardEvent } from "react";
import { FaPen } from "react-icons/fa";
import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { inputState, todosState } from "../../recoil/todo";
import { ITodoItems } from "../../interface/todo";
import { TodoInputContainer } from "./styles";

const Input = () => {
  const [contents, setContents] = useRecoilState<string>(inputState);
  const todos = useRecoilValue<ITodoItems[]>(todosState);
  const setTodos = useSetRecoilState<ITodoItems[]>(todosState);

  const addTodo = useCallback((): void => {
    if (!contents.trim()) {
      return;
    }

    const nextId: number =
      todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

    const todo: ITodoItems = {
      id: nextId,
      contents,
      isCompleted: false,
    };

    setTodos([...todos, todo]);
    setContents("");
  }, [contents, setContents, setTodos, todos]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setContents(value);
    },
    [setContents]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter") {
        addTodo();
      }
    },
    [addTodo]
  );

  return (
    <TodoInputContainer>
      <input
        type="text"
        className="TodoInput-Input"
        value={contents}
        onChange={onChange}
        placeholder="Todo를 입력해보세요!"
        onKeyDown={onKeyDown}
      />
      <FaPen className="TodoInput-Button" onClick={addTodo} />
    </TodoInputContainer>
  );
};

export default Input;
