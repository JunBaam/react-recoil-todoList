import { atom, useRecoilCallback } from "recoil";
import { ITodoItems } from "../interface/todo";

// NOTE: 아톰이 갱신될때 그 상태를 구독하고있는 컴포넌트는 새로운 값으로 리렌더
export const inputState = atom<string>({
  key: "inputState",
  default: "",
});

export const todosState = atom<ITodoItems[]>({
  key: "todos",
  default: [
    {
      id: 1,
      contents: "투두리스트 추가",
      isCompleted: false,
    },
  ],
});
